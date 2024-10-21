<script>
    import { onMount } from "svelte";

    let web_data = [];
    // http://localhost:8000/をgetで取得してweb_dataに格納する関数
    const get_web_data = async () => {
        const response = await fetch('http://localhost:8000/');
        web_data = await response.json();
        // web_dataのprojectsをprojects_and_packsの格納、web_dataのpacksをpacksに格納
        projects = web_data.projects;
        packs = web_data.packs;
        projects_and_packs = web_data.projects_and_packs;
    };


    let activeTab = 'projects';
    let languageData = {};
    let newProject = {
        name: '',
        description: '',
        kpi: 0,
        due_date: 96, // Default due date
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
    let projects_and_packs = [];
    let sortDirection = { projects: 'asc', packs: 'asc' };

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

    // 初期データをロードする

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
// projects_and_packsのpacksのdoneプロパティを全てtrueなら1 falseなら0に変更する関数
    // const change_projects_and_packs_done = () => {
    //     const change_true_false_to_1_0 = (param) => {
    //         return param ? 1 : 0;
    //     };

    //     const new_data = projects_and_packs.map(project => {
    //         return {
    //             ...project,
    //             packs: project.packs.map(pack => {
    //                 return {
    //                     ...pack,
    //                     plan: {
    //                         ...pack.plan,
    //                         done: change_true_false_to_1_0(pack.plan.done)
    //                     },
    //                     do: {
    //                         ...pack.do,
    //                         done: change_true_false_to_1_0(pack.do.done)
    //                     },
    //                     check: {
    //                         ...pack.check,
    //                         done: change_true_false_to_1_0(pack.check.done)
    //                     },
    //                     act: {
    //                         ...pack.act,
    //                         done: change_true_false_to_1_0(pack.act.done)
    //                     }
    //                 };
    //             })
    //         };
    //     });
    //     projects_and_packs = [...new_data];

    // };


    // web_dataとprojects_and_packsを比較して、相違点がある箇所をconsole.logで表示する関数
    // const compare_web_data_and_projects_and_packs = async () => {
    //     console.log("web_data", web_data);
    //     // web_dataとprojects_and_packsを比較して、相違点がある箇所をconsole.logで表示する
    //     const compare = (web_data, projects_and_packs) => {
    //         const web_data_projects = web_data.map(project => {
    //             return {
    //                 ...project,
    //                 packs: project.packs.map(pack => {
    //                     return {
    //                         ...pack,
    //                         plan: {
    //                             ...pack.plan,
    //                             done: pack.plan.done ? 1 : 0
    //                         },
    //                         do: {
    //                             ...pack.do,
    //                             done: pack.do.done ? 1 : 0
    //                         },
    //                         check: {
    //                             ...pack.check,
    //                             done: pack.check.done ? 1 : 0
    //                         },
    //                         act: {
    //                             ...pack.act,
    //                             done: pack.act.done ? 1 : 0
    //                         }
    //                     };
    //                 })
    //             };
    //         });

    //         const projects_and_packs_projects = projects_and_packs.map(project => {
    //             return {
    //                 ...project,
    //                 packs: project.packs.map(pack => {
    //                     return {
    //                         ...pack,
    //                         plan: {
    //                             ...pack.plan,
    //                             done: pack.plan.done ? 1 : 0
    //                         },
    //                         do: {
    //                             ...pack.do,
    //                             done: pack.do.done ? 1 : 0
    //                         },
    //                         check: {
    //                             ...pack.check,
    //                             done: pack.check.done ? 1 : 0
    //                         },
    //                         act: {
    //                             ...pack.act,
    //                             done: pack.act.done ? 1 : 0
    //                         }
    //                     };
    //                 })
    //             };
    //         });

    //         const diff = (web_data_projects, projects_and_packs_projects) => {
    //             const diff_projects = web_data_projects.filter(web_data_project => {
    //                 const projects_and_packs_project = projects_and_packs_projects.find(projects_and_packs_project => projects_and_packs_project.id === web_data_project.id);
    //                 if (!projects_and_packs_project) {
    //                     return true;
    //                 }
    //                 const diff_packs = web_data_project.packs.filter(web_data_pack => {
    //                     const projects_and_packs_pack = projects_and_packs_project.packs.find(projects_and_packs_pack => projects_and_packs_pack.id === web_data_pack.id);
    //                     if (!projects_and_packs_pack) {
    //                         return true;
    //                     }
    //                     if (web_data_pack.plan.done !== projects_and_packs_pack.plan.done) {
    //                         return true;
    //                     }
    //                     if (web_data_pack.do.done !== projects_and_packs_pack.do.done) {
    //                         return true;
    //                     }
    //                     if (web_data_pack.check.done !== projects_and_packs_pack.check.done) {
    //                         return true;
    //                     }
    //                     if (web_data_pack.act.done !== projects_and_packs_pack.act.done) {
    //                         return true;
    //                     }
    //                     return false;
    //                 });
    //                 return diff_packs.length > 0;
    //             });
    //             return diff_projects;
    //         };

    //         const differences = diff(web_data_projects, projects_and_packs_projects);
    //         console.log("Differences:", differences);
    //     };

    //     compare(web_data, projects_and_packs);
    // };


    $: (async () => {
        // console.log("projects", projects);
        // console.log("packs", packs);
        await get_web_data();

        // projects_and_packs = projects.map(project => {
        //     return {
        //         ...project,
        //         packs: packs.filter(pack => pack.projectId === project.id)
        //     };
        // });
        // change_projects_and_packs_done();
        // sortedPacks();
        // await compare_web_data_and_projects_and_packs();
    })();

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

    // const getPacksByProject = (projectId) => packs.filter(pack => pack.projectId === projectId);

    const getProjectName = (projectId) => {
        const project = projects.find(p => p.id === projectId);
        return project ? project.name : '';
    };

    // プロジェクトを追加する
    const addProject = () => {
        const newProjectEntry = { ...newProject, id: Date.now() };
        projects = [...projects, newProjectEntry];
        // プロジェクト追加後、入力をリセット
        newProject = { name: '', description: '', kpi: 0, due_date: 96, difficulty: 3 };
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
    <button on:click={get_web_data}>sampleProjectAndThePacks</button>
    <h2>{languageData.createProject}</h2>
    <input bind:value={newProject.name} type="text" placeholder={languageData.projectName}>
    <textarea bind:value={newProject.description} placeholder={languageData.projectDescription}></textarea>
    <input bind:value={newProject.kpi} type="number" placeholder={languageData.projectKPI}>
    <input bind:value={newProject.due_date} type="number" placeholder={languageData.projectDueDate} min="1">
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
                            <button on:click={() => viewPacks(pack.project_id)}>{languageData.viewPacks}</button>
                        </div>
                    {/each}
                    <!-- {#if project.packs.length > 0} -->
                    <!-- {JSON.parse(JSON.stringify(project.packs))} -->
                    <!-- {/if} -->
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
                <input bind:value={link.description} type="text" placeholder={languageData.linkName}>
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

    <input bind:value={newPack.due_date} type="datetime-local" placeholder={languageData.due_date}>
    <button on:click={addPack}>{languageData.addPack}</button>

    <h2>{languageData.existingPacks}</h2>
    <div class="pack-list">
        {#each packs as pack}
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
