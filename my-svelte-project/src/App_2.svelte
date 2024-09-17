<script>
    // dbスキーマ作成、validのコードとdbスキーマからendpoint作成


    import { onMount } from 'svelte';

    let users = [
        { id: 1, name: 'ユーザー 1' },
        { id: 2, name: 'ユーザー 2' }
    ];

    let chartsByUser = {
        1: [
            {
                name: 'チャート 1',
                labels: ['項目1', '項目2', '項目3', '項目4', '項目5'],
                datasets: [
                    {
                        label: 'データセット 1',
                        data: [65, 59, 90, 81, 56],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)'
                    }
                ]
            }
        ],
        2: [
            {
                name: 'チャート A',
                labels: ['項目1', '項目2', '項目3', '項目4', '項目5'],
                datasets: [
                    {
                        label: 'データセット A',
                        data: [70, 65, 80, 85, 90],
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)'
                    }
                ]
            }
        ]
    };

    let selectedUserId = 1;
    let charts = chartsByUser[selectedUserId] || [];
    let selectedChartIndex = 0;
    let form = {
        label: '',
        data: [0, 0, 0, 0, 0]
    };
    let editMode = false;
    let editIndex = null;
    let radarChart = null;
    let errorMessage = '';
    let isEditOpen = false;
    let currentChart = charts[selectedChartIndex];

    onMount(() => {
        renderRadarChart();
    });

    function renderRadarChart() {
        const ctx = document.getElementById('radarChart').getContext('2d');
        if (radarChart) {
            radarChart.destroy();
        }
        radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: currentChart.labels,
                datasets: currentChart.datasets
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: { display: true },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    function createNewChart() {
        const newChart = {
            name: `新しいチャート ${charts.length + 1}`,
            labels: ['項目1', '項目2', '項目3', '項目4', '項目5'],
            datasets: []
        };
        charts.push(newChart);
        selectedChartIndex = charts.length - 1;
        currentChart = charts[selectedChartIndex];
        renderRadarChart();
    }

    function selectChart(index) {
        selectedChartIndex = index;
        currentChart = charts[selectedChartIndex];
        renderRadarChart();
    }

    function saveChart() {
        const validation = validateAllData(users, chartsByUser);
        if (!validation.valid) {
            errorMessage = validation.error;
            return;
        }
        errorMessage = '';
        renderRadarChart();
    }

    function addOrUpdateDataset() {
        if (editMode) {
            Object.assign(currentChart.datasets[editIndex], form);
        } else {
            currentChart.datasets.push({ ...form });
        }
        resetForm();
        renderRadarChart();
    }

    function editDataset(index) {
        editMode = true;
        editIndex = index;
        form = { ...currentChart.datasets[index] };
    }

    function deleteDataset(index) {
        currentChart.datasets.splice(index, 1);
        renderRadarChart();
    }

    function updateLabels() {
        renderRadarChart();
    }

    function resetForm() {
        form = {
            label: '',
            data: [0, 0, 0, 0, 0]
        };
        editMode = false;
        editIndex = null;
    }

    function toggleEdit() {
        isEditOpen = !isEditOpen;
    }

    function outputSampleData() {
        console.log(JSON.stringify(charts, null, 2));
        alert("サンプルデータをコンソールに出力しました。");
    }

    function addSampleChart() {
        const sampleChart = {
            name: 'サンプルチャート',
            labels: ['項目1', '項目2', '項目3', '項目4', '項目5'],
            datasets: [
                {
                    label: 'サンプルデータセット',
                    data: [70, 65, 80, 85, 90],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)'
                }
            ]
        };
        charts.push(sampleChart);
        selectedChartIndex = charts.length - 1;
        currentChart = charts[selectedChartIndex];
        renderRadarChart();
    }

    function handleUserChange(event) {
        selectedUserId = parseInt(event.target.value, 10);
        charts = chartsByUser[selectedUserId] || [];
        selectedChartIndex = 0;
        currentChart = charts[selectedChartIndex];
        renderRadarChart();
    }

    function validateAllData(users, chartsByUser) {
        // usersのvaliddation
        //     id 必須
        //     uid 必須
        //     name 必須。10文字以内
        // chartsByUserのvaliddation
        //     keyはusersのid
        //     valueは配列
        //     name 必須。10文字以内
        //     labels 必須。5つの文字列の配列、それぞれ10文字以内
        //     datasets 必須。1つのオブジェクトの配列、それぞれ以下のプロパティを持つ
        //     label 必須。10文字以内
        //     data 必須。5つの数値の配列、それぞれ0以上100以下
        //     backgroundColor 必須。文字列、rgba(0以上255以下, 0以上255以下, 0以上255以下, 0以上1以下)
        //     borderColor 必須。文字列、rgba(0以上255以下, 0以上255以下, 0以上255以下)
        //     pointBackgroundColor 必須。文字列、rgba(0以上255以下, 0以上255以下, 0以上255以下)

        // Validate users
        for (const user of users) {
            if (!user.id) {
                return { valid: false, error: 'ユーザーIDが必要です' };
            }
            if (!user.uid) {
                return { valid: false, error: 'ユーザーUIDが必要です' };
            }
            if (!user.name || user.name.length > 10) {
                return { valid: false, error: 'ユーザー名は必須で、10文字以内である必要があります' };
            }
        }

        // Validate chartsByUser
        for (const [userId, charts] of Object.entries(chartsByUser)) {
            // Check if userId exists in users
            const validUser = users.some(user => user.id === parseInt(userId));
            if (!validUser) {
                return { valid: false, error: `ユーザーID ${userId} が見つかりません` };
            }

            // Validate each chart
            for (const chart of charts) {
                if (!chart.name || chart.name.length > 10) {
                    return { valid: false, error: 'チャート名は必須で、10文字以内である必要があります' };
                }
                
                // Validate labels
                if (!chart.labels || chart.labels.length !== 5 || chart.labels.some(label => label.length > 10)) {
                    return { valid: false, error: 'ラベルは必須で、5つの項目があり、それぞれ10文字以内である必要があります' };
                }

                // Validate datasets
                if (!chart.datasets || chart.datasets.length === 0) {
                    return { valid: false, error: 'データセットは必須です' };
                }

                for (const dataset of chart.datasets) {
                    if (!dataset.label || dataset.label.length > 10) {
                        return { valid: false, error: 'データセットラベルは必須で、10文字以内である必要があります' };
                    }

                    // Validate data
                    if (!dataset.data || dataset.data.length !== 5 || dataset.data.some(value => typeof value !== 'number' || value < 0 || value > 100)) {
                        return { valid: false, error: 'データセットのデータは必須で、5つの数値で、各値は0以上100以下でなければなりません' };
                    }

                    // Validate backgroundColor in rgba format
                    if (!validateRgbaColor(dataset.backgroundColor)) {
                        return { valid: false, error: 'backgroundColor は必須で、rgba(0-255, 0-255, 0-255, 0-1)の形式である必要があります' };
                    }

                    // Validate borderColor in rgba format
                    if (!validateRgbaColor(dataset.borderColor)) {
                        return { valid: false, error: 'borderColor は必須で、rgba(0-255, 0-255, 0-255)の形式である必要があります' };
                    }

                    // Validate pointBackgroundColor in rgba format
                    if (!validateRgbaColor(dataset.pointBackgroundColor)) {
                        return { valid: false, error: 'pointBackgroundColor は必須で、rgba(0-255, 0-255, 0-255)の形式である必要があります' };
                    }
                }
            }
        }

        return { valid: true };
    }

    // Helper function to validate rgba color format
    function validateRgbaColor(color) {
        const rgbaPattern = /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0?\.\d+)\)$/;
        const match = rgbaPattern.exec(color);
        if (!match) return false;

        const [, r, g, b, a] = match.map(Number);
        return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255 && a >= 0 && a <= 1;
    }

</script>

<style>
    #chart-container {
        width: 400px;
        height: 400px;
        margin-bottom: 20px;
    }
    .tabs {
        display: flex;
        list-style-type: none;
        padding: 0;
        margin-bottom: 20px;
    }
    .tabs li {
        margin-right: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
    .tabs li.active {
        background-color: #f0f0f0;
        font-weight: bold;
    }
    .error {
        color: red;
        font-weight: bold;
    }
    .slide-menu {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100%;
        background-color: #f4f4f4;
        box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
        padding: 20px;
        transition: right 0.3s ease;
    }
    .slide-menu.open {
        right: 0;
    }
    .slide-menu h2 {
        margin-top: 0;
    }
    .edit-button {
        position: fixed;
        top: 10px;
        left: 10px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
</style>

<div class="user-select">
    <label for="userSelect">ユーザー選択:</label>
    <select id="userSelect" on:change={handleUserChange}>
        {#each users as user}
            <option value={user.id} selected={user.id === selectedUserId}>{user.name}</option>
        {/each}
    </select>
</div>

<button class="edit-button" on:click={toggleEdit}>編集</button>

<ul class="tabs">
    {#each charts as chart, index}
        <li class:selected={selectedChartIndex === index} class:active={selectedChartIndex === index}>
            <button 
                on:click={() => selectChart(index)}
                on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && selectChart(index)}
            >
                {chart.name}
            </button>
        </li>
    {/each}
    <li>
        <button 
            on:click={createNewChart}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && createNewChart()}
        >
            ＋ 新規チャート
        </button>
    </li>
</ul>

{#if errorMessage}
    <div class="error">{errorMessage}</div>
{/if}

<div id="chart-container">
    <canvas id="radarChart"></canvas>
</div>

<div class:open={isEditOpen} class="slide-menu">
    <h2>チャート名の変更</h2>
    <label>チャート名: <input bind:value={currentChart.name} type="text"></label>
    <button on:click={saveChart}>保存</button>

    <h2>項目（ラベル）の編集</h2>
    <form on:submit|preventDefault={updateLabels}>
        {#each currentChart.labels as label, index}
            <label>項目 {index + 1}: <input bind:value={currentChart.labels[index]} type="text" required></label><br>
        {/each}
        <button type="submit">項目を更新</button>
    </form>

    <h2>データセットの追加/編集</h2>
    <form on:submit|preventDefault={addOrUpdateDataset}>
        <label>ラベル: <input bind:value={form.label} type="text" required></label><br>
        {#each currentChart.labels as label, index}
            <label>{label}: <input bind:value={form.data[index]} type="number" required></label><br>
        {/each}
        <button type="submit">{editMode ? '更新' : '追加'}</button>
        {#if editMode}
            <button type="button" on:click={resetForm}>キャンセル</button>
        {/if}
    </form>

    <h2>データセット一覧</h2>
    <ul>
        {#each currentChart.datasets as dataset, index}
            <li>
                {dataset.label} - {dataset.data.join(', ')}
                <button on:click={() => editDataset(index)}>編集</button>
                <button on:click={() => deleteDataset(index)}>削除</button>
            </li>
        {/each}
    </ul>
</div>

<button on:click={outputSampleData}>サンプルデータを出力</button>
<button on:click={addSampleChart}>サンプルチャートを追加</button>
