<script>
    import { onMount } from "svelte";

    let activeTab = 'projects';
    let languageData = {};
    let newProject = {
        user_id: 1, // デフォルトのユーザーID
        name: '',
        description: '',
        kpi: 0,
        // due_dateをiso8601形式
        due_date: new Date().toISOString().slice(0, 16), // ISO形式の一部を使用
        difficulty: 3
    };
        // プロジェクトを追加する
    const addProject = () => {
        const newProjectEntry = { ...newProject, id: Date.now() };
        projects = [...projects, newProjectEntry];
        // プロジェクト追加後、入力をリセット
        // newProject = { user_id: 1, name: '', description: '', kpi: 0, due_date: new Date().toISOString(), difficulty: 3 };
        newProject = { user_id: 1, name: '', description: '', kpi: 0, due_date: new Date().toISOString().slice(0, 16), difficulty: 3 };
    };

    let newPack = {
        project_id: null,
        plan_description: '',
        plan_done: 0,
        do_description: '',
        do_done: 0,
        check_description: '',
        check_done: 0,
        act_description: '',
        act_done: 0,
        due_date: new Date().toISOString().slice(0, 16) // ISO形式の一部を使用
    };

    const handleDueDateChange = (event) => {
        const date = new Date(event.target.value);
        newPack.due_date = date.toISOString();
    };

    // パックを追加する
    const addPack = () => {
        const newPackEntry = { ...newPack, id: Date.now() };
        packs = [...packs, newPackEntry];
        // パック追加後、入力をリセット
        newPack = {
            project_id: null,
            plan_description: '',
            plan_done: 0,
            do_description: '',
            do_done: 0,
            check_description: '',
            check_done: 0,
            act_description: '',
            act_done: 0,
            due_date: new Date().toISOString(),
        };
    };

    // let projects = [];
    let packs = [];
    let projects_and_packs = [];
    let sortDirection = { projects: 'asc', packs: 'asc' };


    let web_data = [];
    // http://localhost:8000/をgetで取得してweb_dataに格納する関数
    const get_web_data = async () => {
        const response = await fetch('http://localhost:8000/');
        web_data = await response.json();
        packs = web_data.packs;
        projects_and_packs = web_data.projects_and_packs;
    };

function doneOrUndone(packId, stage) {
    packs = packs.map(pack => {
      if (pack.id === packId) {
        return {
          ...pack,
          [stage]: {
            ...pack[stage],
            done: !pack[stage].done
          }
        };
      }
      return pack;
    });

    // パックの完了度を計算
    const progress = packProgress(packId);
    const pack = packs.find(p => p.id === packId);
    // パックの完了度が100%になったら、プロジェクトの進捗を更新
    if (progress === 100) {
        const project = projects.find(p => p.id === pack.projectId);
        project.difficulty = Math.max(1, project.difficulty - 1);
    }
    // パックの完了度が0%になったら、プロジェクトの進捗を更新
    if (progress === 0) {
        const project = projects.find(p => p.id === pack.projectId);
        project.difficulty = Math.min(5, project.difficulty + 1);
    }
};

    // projectProgress
    const projectProgress = (project) => {
        const packs = project.packs;
        const totalPacks = packs.filter(pack => pack.project_id === project.id).length;
        // const donePacks = packs.filter(pack => pack.project_id === project.id && pack.plan.done && pack.do.done && pack.check.done && pack.act.done).length;
        const donePacks = packs.filter(pack => pack.project_id === project.id && pack.plan_done && pack.do_done && pack.check_done && pack.act_done).length;
        console.log("totalPacks", totalPacks);
        console.log("donePacks", donePacks);
        const res = totalPacks === 0 ? 0 : Math.round(donePacks / totalPacks * 100);
        console.log("res", res);
        return res;
    };

    const loadTranslations = async () => {
        const response = await fetch('pdca_lang.json');
        return await response.json();
    };


    $: (async () => {
        // console.log("projects", projects);
        // console.log("packs", packs);
        await get_web_data();
        // sortedPacks();
    })();

    onMount(async () => {
        languageData = await loadTranslations();

        // 初回ロード時に空の状態で開始
        // projects = [];
        // packs = [];
    });

    const setActiveTab = (tab) => activeTab = tab;

    const formatDate = (hours) => {
        const date = new Date();
        date.setHours(date.getHours() + hours);
        return date.toLocaleString();
    };

    // const getPacksByProject = (projectId) => packs.filter(pack => pack.projectId === projectId);

    const getProjectName = (projectId) => {
        // const project = projects.find(p => p.id === projectId);
        const project = projects_and_packs.find(p => p.id === projectId);
        return project ? project.name : '';
    };

    // プロジェクトを削除する
    const deleteProject = (projectId) => {
        projects = projects.filter(project => project.id !== projectId);
    };
const packProgress = (pack_id) => {
                    const stages = ['plan', 'do', 'check', 'act'];
                    const pack = packs.find(pack => pack.id === pack_id);
                    const completedStages = stages.filter(stage => pack[stage].done).length;
                    return (completedStages / stages.length) * 100;
                };


    // パックを削除する
    const deletePack = (packId) => {
        packs = packs.filter(pack => pack.id !== packId);
    };

    // プロジェクトリストを並べ替える
    const sortedProjects = () => projects.sort((a, b) => {
        const direction = sortDirection.projects === 'asc' ? 1 : -1;
        return a.name.localeCompare(b.name) * direction;
    });

    // パックリストを並べ替える
    const sortedPacks = () => {
        packs = packs.sort((a, b) => {
            const direction = sortDirection.packs === 'asc' ? 1 : -1;
            return (a.id - b.id) * direction;
        })
    };

</script>

<style>
    .done {
        background-color: #f0f0f0;
    }
    .stars {
        color: gold;
    }
    /* .filledのspanをinlineにする */
    .progress-bar {
        display: flex;
    }


</style>

<header>
</header>

<nav>
    <button on:click={() => setActiveTab('projects')}>{languageData.projectManagement}</button>
    <button on:click={() => setActiveTab('packs')}>{languageData.packManagement}</button>
    <button on:click={() => setActiveTab('progress')}>{languageData.progressManagement}</button>
</nav>

{#if activeTab === 'projects'}
    <button on:click={get_web_data}>sampleProjectAndThePacks</button>
    <h2>{languageData.createProject}</h2>
    <!-- inputを生成 -->
     <!--     let newProject = {
        user_id: 1, // デフォルトのユーザーID
        name: '',
        description: '',
        kpi: 0,
        // due_dateをiso8601形式
        due_date: new Date().toISOString(),
        difficulty: 3
    }; -->
    <input bind:value={newProject.name} type="text" placeholder={languageData.projectName} maxlength="100">
    <input bind:value={newProject.description} type="text" placeholder={languageData.projectDescription} maxlength="200">
    <input bind:value={newProject.kpi} type="number" placeholder={languageData.projectKPI} min="0">
    <input bind:value={newProject.due_date} type="datetime-local" placeholder={languageData.projectDueDate}>
    <input bind:value={newProject.difficulty} type="number" placeholder={languageData.projectDifficulty} min="1" max="5">
    <button on:click={addProject}>{languageData.addProject}</button>

    <h2>{languageData.existingProjects}</h2>
    <div class="project-list">
        <!-- {#each sortedProjects() as project} -->
        {#each projects_and_packs as project}
            <div class="project">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>KPI: {project.kpi}</p>
                <p>Difficulty: <span class="stars">{"★".repeat(project.difficulty)}</span></p>
                <p>Due Date: {formatDate(project.due_date)}</p>
                <div class="progress-bar" style="width: {projectProgress(project)}%">
                    {projectProgress(project)}%
                    {#each Array(10) as _, i}
                        <span class={projectProgress(project) >= i * 10 ? 'filled' : ''}>
                            {projectProgress(project) >= i * 10 ? '●' : '○'}
                        </span>
                    {/each}
                </div>
                <div class="project-summary">
                    <h4>{languageData.packsSummary}</h4>
                    {#each project.packs as pack}
                        <div class="pack-summary">
                            {#each ['plan', 'do', 'check', 'act'] as stage}
                                <span class:done={pack[`${stage}_done`]}>
                                    {languageData[stage]}: {pack[`${stage}_description`]}
                                </span>
                            {/each}
                        </div>
                    {/each}
                </div>
                <button on:click={() => deleteProject(project.id)} class="delete">
                    {languageData.delete}
                </button>
            </div>
        {/each}
    </div>
{/if}

{#if activeTab === 'packs'}
    <h2>{languageData.createPack}</h2>
    <select bind:value={newPack.projectId}>
        {#each projects_and_packs as project}
            <option value={project.id}>{project.name}</option>
        {/each}
    </select>

 <input bind:value={newPack.plan_description} type="text" placeholder={languageData.planDescription} maxlength="300">
 <input bind:value={newPack.do_description} type="text" placeholder={languageData.doDescription} maxlength="300">
 <input bind:value={newPack.check_description} type="text" placeholder={languageData.checkDescription} maxlength="300">
 <input bind:value={newPack.act_description} type="text" placeholder={languageData.actDescription} maxlength="300">
 <!-- <input bind:value={newPack.due_date} type="datetime-local" placeholder={languageData.packDueDate}> -->
 <input bind:value={newPack.due_date} type="datetime-local" placeholder={languageData.packDueDate} on:change={handleDueDateChange}>

    <button on:click={addPack}>{languageData.addPack}</button>

    <h2>{languageData.existingPacks}</h2>
    <div class="pack-list">
        {#each packs as pack, index}
        <div class="pack">
                <h3>{getProjectName(pack.project_id)}</h3>
                {#each ['plan', 'do', 'check', 'act'] as stage}
                    <div class:done={pack[`${stage}_done`]}>
                        <button on:click={() => doneOrUndone(pack.id, stage)}>{languageData.done}</button>
                        <p>{languageData[stage]}: {pack[`${stage}_description`]}</p>
                    </div>
                    {#if pack[stage].links.length > 0}
                    {#each pack[stage].links as link}
                    <a href={link.url} target="_blank">{link.description}</a>
                    <span class="stars">{"★".repeat(link.stars)}</span>
                    {/each}
                    {/if}
                {/each}
                <button on:click={() => deletePack(pack.id)}>{languageData.delete}</button>
            </div>
        {/each}
    </div>
{/if}

{#if activeTab === 'progress'}
    <h2>{languageData.progress}</h2>
    <div class="progress">
        {#each projects_and_packs as project}
            <div class="progress-item">
                <h3>{project.name}</h3>
                <progress max="100" value={projectProgress(project)}></progress>
                <div>{projectProgress(project)}%</div>
            </div>
        {/each}
    </div>
{/if}
