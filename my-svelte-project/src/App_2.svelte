<script>
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
        const validation = validateAllData();
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

    function validateAllData() {
        // Check all charts for validity
        for (const chart of charts) {
            if (!chart.name || chart.name.trim() === '') {
                return { valid: false, error: 'チャート名を空にすることはできません' };
            }
            if (chart.labels.some(label => !label || label.trim() === '')) {
                return { valid: false, error: 'ラベルを空にすることはできません' };
            }
            if (chart.datasets.length === 0) {
                return { valid: false, error: 'データセットが必要です' };
            }
            for (const dataset of chart.datasets) {
                if (!dataset.label || dataset.label.trim() === '') {
                    return { valid: false, error: 'データセットラベルを空にすることはできません' };
                }
                if (dataset.data.some(value => typeof value !== 'number' || isNaN(value))) {
                    return { valid: false, error: 'データセットのデータは数値でなければなりません' };
                }
                if (dataset.data.length !== chart.labels.length) {
                    return { valid: false, error: 'データセットのデータの長さがラベルの長さと一致しません' };
                }
            }
        }
        return { valid: true };
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
