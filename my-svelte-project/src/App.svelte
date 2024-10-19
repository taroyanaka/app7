<script>
    import { onMount } from "svelte";

    let activeTab = 'projects';
    let languageData = {};
    let newProject = {
        name: '',
        description: '',
        kpi: 0,
        dueDate: 96, // Default due date
        difficulty: 3
    };
    let newPack = {
        projectId: null,
        plan: { description: '', done: false, links: [] },
        do: { description: '', done: false, links: [] },
        check: { description: '', done: false, links: [] },
        act: { description: '', done: false, links: [] }
    };
    let projects = [];
    let packs = [];
    let sortDirection = { projects: 'asc', packs: 'asc' };

    function sampleProjectAndThePacks() {
        projects = [
            { id: 1, name: 'Project 1', description: 'Description 1', kpi: 80, dueDate: 96, difficulty: 3 },
            { id: 2, name: 'Project 2', description: 'Description 2', kpi: 60, dueDate: 72, difficulty: 2 },
            { id: 3, name: 'Project 3', description: 'Description 3', kpi: 40, dueDate: 48, difficulty: 1 }
        ];
        packs = [
            { id: 1, projectId: 1, plan: { description: 'Plan 1', done: true, links: [{ name: 'Link 1', href: 'https://example.com', stars: 3 }] }, do: { description: 'Do 1', done: false, links: [] }, check: { description: 'Check 1', done: false, links: [] }, act: { description: 'Act 1', done: false, links: [] }, dueDate: '2023-12-01T00:00:00Z' },
            { id: 2, projectId: 1, plan: { description: 'Plan 2', done: true, links: [] }, do: { description: 'Do 2', done: true, links: [] }, check: { description: 'Check 2', done: false, links: [] }, act: { description: 'Act 2', done: false, links: [] }, dueDate: '2023-12-05T00:00:00Z' },
            { id: 3, projectId: 2, plan: { description: 'Plan 3', done: true, links: [] }, do: { description: 'Do 3', done: true, links: [] }, check: { description: 'Check 3', done: true, links: [] }, act: { description: 'Act 3', done: true, links: [] }, dueDate: '2023-12-10T00:00:00Z' },
            { id: 4, projectId: 2, plan: { description: 'Plan 4', done: true, links: [] }, do: { description: 'Do 4', done: true, links: [] }, check: { description: 'Check 4', done: true, links: [] }, act: { description: 'Act 4', done: false, links: [] }, dueDate: '2023-12-15T00:00:00Z' },
            { id: 5, projectId: 3, plan: { description: 'Plan 5', done: true, links: [] }, do: { description: 'Do 5', done: true, links: [] }, check: { description: 'Check 5', done: false, links: [] }, act: { description: 'Act 5', done: false, links: [] }, dueDate: '2023-12-20T00:00:00Z' },
            { id: 6, projectId: 3, plan: { description: 'Plan 6', done: true, links: [] }, do: { description: 'Do 6', done: true, links: [] }, check: { description: 'Check 6', done: true, links: [] }, act: { description: 'Act 6', done: false, links: [] }, dueDate: '2023-12-25T00:00:00Z' }
        ];
    }
    let foo;
    // const doneOrUndone = (pack, stage) => {
    // const doneOrUndone = (pack, stage) => {
    // const doneOrUndone = (pack_projectId, stage, index) => {
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
        


        // console.log("now", now);


        // true/falseを反転
        
        
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

    // 初期データをロードする
    sampleProjectAndThePacks();

    // projectProgress
    const projectProgress = (project) => {
        const totalPacks = packs.filter(pack => pack.projectId === project.id).length;
        const donePacks = packs.filter(pack => pack.projectId === project.id && pack.plan.done && pack.do.done && pack.check.done && pack.act.done).length;
        return totalPacks === 0 ? 0 : Math.round(donePacks / totalPacks * 100);
    };

    const loadTranslations = async () => {
        const response = await fetch('pdca_lang.json');
        return await response.json();
    };

    $: {
        console.log("projects", projects);
        console.log("packs", packs);
        sortedPacks();
    }

    onMount(async () => {
        languageData = await loadTranslations();
        // 初回ロード時に空の状態で開始
        // projects = [];
        // packs = [];
    });

    const setActiveTab = (tab) => activeTab = tab;

    const viewPacks = (projectId) => {
        setActiveTab('packs');
        newPack.projectId = projectId;
    };

    const formatDate = (hours) => {
        const date = new Date();
        date.setHours(date.getHours() + hours);
        return date.toLocaleString();
    };

    const formatProgress = (pack) => {
        return `${pack.plan.description} | ${pack.do.description} | ${pack.check.description} | ${pack.act.description}`;
    };

    const getPacksByProject = (projectId) => packs.filter(pack => pack.projectId === projectId);

    const getProjectName = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        return project ? project.name : '';
    };

    // プロジェクトを追加する
    const addProject = () => {
        const newProjectEntry = { ...newProject, id: Date.now() };
        projects = [...projects, newProjectEntry];
        // プロジェクト追加後、入力をリセット
        newProject = { name: '', description: '', kpi: 0, dueDate: 96, difficulty: 3 };
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


    // パックを追加する
    const addPack = () => {
        const newPackEntry = { ...newPack, id: Date.now() };
        packs = [...packs, newPackEntry];
        // パック追加後、入力をリセット
        newPack = {
            projectId: null,
            plan: { description: '', done: false, links: [] },
            do: { description: '', done: false, links: [] },
            check: { description: '', done: false, links: [] },
            act: { description: '', done: false, links: [] }
        };
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
    <button on:click={projectProgress}>sampleProjectAndThePacks</button>
    <h2>{languageData.createProject}</h2>
    <input bind:value={newProject.name} type="text" placeholder={languageData.projectName}>
    <textarea bind:value={newProject.description} placeholder={languageData.projectDescription}></textarea>
    <input bind:value={newProject.kpi} type="number" placeholder={languageData.projectKPI}>
    <input bind:value={newProject.dueDate} type="number" placeholder={languageData.projectDueDate} min="1">
    <button on:click={addProject}>{languageData.addProject}</button>

    <h2>{languageData.existingProjects}</h2>
    <div class="project-list">
        {#each sortedProjects() as project}
            <div class="project">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>KPI: {project.kpi}</p>
                <p>Difficulty: <span class="stars">{"★".repeat(project.difficulty)}</span></p>
                <p>Due Date: {formatDate(project.dueDate)}</p>
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
                    {#each getPacksByProject(project.id) as pack}
                        <div class="pack-summary">
                            {#each ['plan', 'do', 'check', 'act'] as stage, index}
                                <span class:done={pack[stage].done}>
                                    {languageData[stage]}: {pack[stage].description}
                                </span>
                            {/each}
                            <button on:click={() => viewPacks(project.id)}>{languageData.viewPacks}</button>
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
        {#each projects as project}
            <option value={project.id}>{project.name}</option>
        {/each}
    </select>

    {#each ['plan', 'do', 'check', 'act'] as stage, index}
        <input bind:value={newPack[stage].description} type="text" placeholder={languageData[stage]} maxlength="100">
        <label>
            <input type="checkbox" bind:checked={newPack[stage].done}> {languageData.done}
        </label>
        <div class="links">
            {#each newPack[stage].links as link, linkIndex}
                <input bind:value={link.name} type="text" placeholder={languageData.linkName}>
                <input bind:value={link.href} type="url" placeholder={languageData.linkHref}>
                <select bind:value={link.stars}>
                    {#each Array(5) as _, i}
                        <option value={i + 1}>{i + 1}</option>
                    {/each}
                </select>
                <span class="stars">{"★".repeat(link.stars)}</span>
            {/each}
            <button on:click={() => addLink(stage)}>{languageData.addLink}</button>
        </div>
    {/each}

    <input bind:value={newPack.dueDate} type="datetime-local" placeholder={languageData.dueDate}>
    <button on:click={addPack}>{languageData.addPack}</button>

    <h2>{languageData.existingPacks}</h2>
    <div class="pack-list">
        {#each packs as pack}
            <div class="pack">
                <h3>{getProjectName(pack.projectId)}</h3>
                {#each ['plan', 'do', 'check', 'act'] as stage, index}
                <!-- pack.projectId: {pack.projectId} -->
                <!-- stage: {stage} -->
                <!-- index: {index} -->
                <!-- pack[stage].done: {pack[stage].done} -->
                    <div class:done={pack[stage].done}>
                        <!-- <button on:click={() => doneOrUndone(pack.projectId, stage, index)}>{languageData.done}</button> -->
                        <button on:click={() => doneOrUndone(pack.id, stage)}>{languageData.done}</button>
                        <p>{languageData[stage]}: {pack[stage].description}</p>
                        {#each pack[stage].links as link}
                            <a href={link.href} target="_blank">{link.name}</a>
                            <span class="stars">{"★".repeat(link.stars)}</span>
                        {/each}
                    </div>
                {/each}
                <button on:click={() => deletePack(pack.id)}>{languageData.delete}</button>
            </div>
        {/each}
    </div>
{/if}

{#if activeTab === 'progress'}
    <h2>{languageData.progress}</h2>
    <div class="progress">
        {#each projects as project}
            <div class="progress-item">
                <h3>{project.name}</h3>
                <div>{languageData.progressSummary}</div>
                <progress max="100" value={projectProgress(project)}></progress>
                <div>{projectProgress(project)}%</div>
            </div>
        {/each}
    </div>
{/if}
