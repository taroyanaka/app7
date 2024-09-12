<script>
    import { onMount } from 'svelte';


    // Helper function
    function to_ary(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    // Data Initialization
    let uid = '';
    let new_improvement_idea = 'sample idea';
    let idea_link_desc = '';
    let idea_link = '';
    let improvement_idea = {
        id: null,
        packId: null,
        type: 'immediate', // immediate or non-immediate
        description: '',
        links: []
    };
    let selectedMemberId = '';
    let activeTab = 'projects';
    let languageData = {
        projectManagement: 'Project Management',
        packManagement: 'Pack Management',
        progressManagement: 'Progress Management',
        languageIcon: '🌐',
        memberManage: 'Member Management',
        name: 'Name',
        position: 'Position',
        link: 'Link',
        addMember: 'Add Member',
        existingMembers: 'Existing Members',
        delete: 'Delete',
        createProject: 'Create Project',
        projectName: 'Project Name',
        projectDescription: 'Project Description',
        projectKPI: 'Project KPI',
        projectDueDate: 'Project Due Date',
        addProject: 'Add Project',
        existingProjects: 'Existing Projects',
        current_price: 'Current Price',
        target_price: 'Target Price',
        objective_price: 'Objective Price',
        priceDescription: 'Price Description',
        add: 'Add',
        delete: 'Delete',
        viewPacks: 'View Packs',
        packsSummary: 'Packs Summary',
        done: 'Done',
        addLink: 'Add Link',
        linkName: 'Link Name',
        linkHref: 'Link URL',
        dueDate: 'Due Date',
        createPack: 'Create Pack',
        existingPacks: 'Existing Packs',
        progressReport: 'Progress Report'
    };
    let newProject = {
        name: '',
        description: '',
        kpi: 0,
        dueDate: 96,  // Default due date
        difficulty: 3,
        members_ids: [],
        target_price: 0,
        current_price: 0,
        objective_prices: [{ objective_price: 0, price_description: '' }]
    };
    let newPack = {
        projectId: null,
        plan: { description: '', done: false, links: [] },
        do: { description: '', done: false, links: [] },
        check: { description: '', done: false, links: [] },
        act: { description: '', done: false, links: [] },
        dueDate: '2023-12-01T00:00:00Z',
        members_ids: [],
        improvement_ideas: []
    };
    let projects = [];
    let packs = [];
    let sortDirection = {
        projects: 'asc',
        packs: 'asc'
    };
    let editPackId = null;
    let editPackData = null;
    let newMember = {
        name: '',
        position: '',
        link: ''
    };
    let members = [];

	

    // Lifecycle: similar to `mounted` and `created` in Vue
    onMount(() => {
        // This can replace the "mounted" or "created" lifecycle hooks
        languageData = lang;
        sampleProjectAndThePacks();
    });

    // Computed-like reactive functions
    $: sortedProjects = [...projects].sort((a, b) => {
        const direction = sortDirection.projects === 'asc' ? 1 : -1;
        return a.name.localeCompare(b.name) * direction;
    });

    $: sortedPacks = [...packs].sort((a, b) => {
        const direction = sortDirection.packs === 'asc' ? 1 : -1;
        return (a.id - b.id) * direction;
    });

    // Methods
    function getSelectedMember() {
        return members.find(member => member.id === selectedMemberId);
    }

    function addMember() {
        if (newMember.position.length > 10) {
            alert('役職は10文字以下にしてください。');
            return;
        }
        members = [...members, { ...newMember }];
        newMember = { name: '', position: '', link: '' };
    }

    function removeMember(index) {
        members = members.filter((_, i) => i !== index);
    }

    function addMemberToProjectOrPack(projectId, packId, member) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            if (packId) {
                const pack = packs.find(p => p.id === packId);
                if (pack) {
                    pack.members = pack.members || [];
                    pack.members = [...pack.members, member];
                }
            } else {
                project.members = project.members || [];
                project.members = [...project.members, member];
            }
        }
    }

    function removeMemberFromProjectOrPack(projectId, packId, memberId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            if (packId) {
                const pack = packs.find(p => p.id === packId);
                if (pack) {
                    pack.members = pack.members.filter(m => m.id !== memberId);
                }
            } else {
                project.members = project.members.filter(m => m.id !== memberId);
            }
        }
    }

    function setActiveTab(tab) {
        activeTab = tab;
    }

    function formatDate(hours) {
        const date = new Date();
        date.setHours(date.getHours() + hours);
        return date.toLocaleString();
    }

    function formatProgress(pack) {
        return `${pack.plan.description} | ${pack.do.description} | ${pack.check.description} | ${pack.act.description}`;
    }

    function getPacksByProject(projectId) {
        return packs.filter(pack => pack.projectId === projectId);
    }

    function getProjectName(projectId) {
        const project = projects.find(p => p.id === projectId);
        return project ? project.name : '';
    }

    function addProject() {
        const newProj = { ...newProject, id: Date.now() };
        projects = [...projects, newProj];
        newProject = { name: '', description: '', kpi: 0, dueDate: 96, difficulty: 3 };
    }

    function deleteProject(id) {
        projects = projects.filter(project => project.id !== id);
    }

    function addPack() {
        const newP = { ...newPack, id: Date.now() };
        packs = [...packs, newP];
        newPack = {
            projectId: null,
            plan: { description: '', done: false, links: [] },
            do: { description: '', done: false, links: [] },
            check: { description: '', done: false, links: [] },
            act: { description: '', done: false, links: [] }
        };
    }

    function deletePack(id) {
        packs = packs.filter(pack => pack.id !== id);
    }

    function addLink(stage) {
        newPack[stage].links = [...newPack[stage].links, { name: '', href: '', stars: 3 }];
    }

    function postToTwitter(type) {
        alert(`${type} posted to Twitter!`);
    }

    function changeLanguage(language) {
        languageData = lang;
    }

    function projectProgress(project) {
        const projectPacks = getPacksByProject(project.id);
        const totalPacks = projectPacks.length;
        const completedPacks = projectPacks.filter(pack => pack.plan.done && pack.do.done && pack.check.done && pack.act.done).length;
        return totalPacks === 0 ? 0 : Math.round((completedPacks / totalPacks) * 100);
    }

    function sortProjects(criteria, direction) {
        sortDirection.projects = direction;
        if (criteria === 'kpi') {
            projects = [...projects].sort((a, b) => (projectProgress(b) - projectProgress(a)) * (direction === 'asc' ? 1 : -1));
        }
        // Add other sorting criteria
    }

    function sortPacks(criteria, direction) {
        sortDirection.packs = direction;
        if (criteria === 'pdca') {
            packs = [...packs].sort((a, b) => packProgress(a) - packProgress(b) * (direction === 'asc' ? 1 : -1));
        }
        // Add other sorting criteria
    }

    function packProgress(pack) {
        const stages = ['plan', 'do', 'check', 'act'];
        const completedStages = stages.filter(stage => pack[stage].done).length;
        return (completedStages / stages.length) * 100;
    }

    function totalStars(pack) {
        const stages = ['plan', 'do', 'check', 'act'];
        return stages.reduce((total, stage) => {
            return total + pack[stage].links.reduce((sum, link) => sum + link.stars, 0);
        }, 0);
    }

    function viewPacks(projectId) {
        setActiveTab('packs');
        newPack.projectId = projectId;
    }

	function addObjectivePrice(projectId, objectivePrice) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            project.objective_prices.push(objectivePrice);
        }
    }

    function removeObjectivePrice(projectId, objectivePriceId) {
        const project = projects.find(p => p.id === projectId);
        if (project) {
            project.objective_prices = project.objective_prices.filter(op => op.objective_price !== objectivePriceId);
        }
    }


    function sampleProjectAndThePacks() {
        uid = 'sample_uid';

        projects = [
            { id: 1, name: 'Project 1', description: 'Description 1', kpi: 80, dueDate: 96, difficulty: 3, members: [], objective_prices: [{ objective_price: 0, price_description: 'any reason 1' }] },
            { id: 2, name: 'Project 2', description: 'Description 2', kpi: 60, dueDate: 72, difficulty: 2, members: [], objective_prices: [{ objective_price: 0, price_description: 'any reason 2' }] },
            { id: 3, name: 'Project 3', description: 'Description 3', kpi: 40, dueDate: 48, difficulty: 1, members: [], objective_prices: [{ objective_price: 0, price_description: 'any reason 3' }] }
        ];

        packs = [
            { id: 1, projectId: 1, plan: { description: 'Plan 1', done: true, links: [{ name: 'Link 1', href: 'https://example.com', stars: 3 }] }, do: { description: 'Do 1', done: false, links: [] }, check: { description: 'Check 1', done: false, links: [] }, act: { description: 'Act 1', done: false, links: [] }, dueDate: '2023-12-01T00:00:00Z', improvement_ideas: [] },
            { id: 2, projectId: 1, plan: { description: 'Plan 2', done: true, links: [] }, do: { description: 'Do 2', done: true, links: [] }, check: { description: 'Check 2', done: false, links: [] }, act: { description: 'Act 2', done: false, links: [] }, dueDate: '2023-12-05T00:00:00Z', improvement_ideas: [] },
            { id: 3, projectId: 2, plan: { description: 'Plan 3', done: true, links: [] }, do: { description: 'Do 3', done: true, links: [] }, check: { description: 'Check 3', done: true, links: [] }, act: { description: 'Act 3', done: true, links: [] }, dueDate: '2023-12-10T00:00:00Z', improvement_ideas: [] },
            { id: 4, projectId: 2, plan: { description: 'Plan 4', done: true, links: [] }, do: { description: 'Do 4', done: true, links: [] }, check: { description: 'Check 4', done: true, links: [] }, act: { description: 'Act 4', done: false, links: [] }, dueDate: '2023-12-15T00:00:00Z', improvement_ideas: [] },
            { id: 5, projectId: 3, plan: { description: 'Plan 5', done: true, links: [] }, do: { description: 'Do 5', done: true, links: [] }, check: { description: 'Check 5', done: false, links: [] }, act: { description: 'Act 5', done: false, links: [] }, dueDate: '2023-12-20T00:00:00Z', improvement_ideas: [] },
            { id: 6, projectId: 3, plan: { description: 'Plan 6', done: true, links: [] }, do: { description: 'Do 6', done: true, links: [] }, check: { description: 'Check 6', done: true, links: [] }, act: { description: 'Act 6', done: false, links: [] }, dueDate: '2023-12-25T00:00:00Z', improvement_ideas: [] }
        ];

        packs[0].improvement_ideas = [
            { id: 1, packId: 1, type: 'immediate', description: 'Immediate Improvement Idea 1', links: [{ url: 'https://example.com', description: 'Link 1' }] },
            { id: 2, packId: 1, type: 'non-immediate', description: 'Non-Immediate Improvement Idea 1', links: [{ url: 'https://example.com', description: 'Link 1' }] }
        ];
        packs[1].improvement_ideas = [
            { id: 3, packId: 2, type: 'immediate', description: 'Immediate Improvement Idea 2', links: [{ url: 'https://example.com', description: 'Link 1' }] },
            { id: 4, packId: 2, type: 'non-immediate', description: 'Non-Immediate Improvement Idea 2', links: [{ url: 'https://example.com', description: 'Link 1' }] }
        ];
        packs[3].improvement_ideas = [
            { id: 5, packId: 3, type: 'immediate', description: 'Immediate Improvement Idea 3', links: [{ url: 'https://example.com', description: 'Link 1' }] },
            { id: 6, packId: 3, type: 'non-immediate', description: 'Non-Immediate Improvement Idea 3', links: [{ url: 'https://example.com', description: 'Link 1' }] }
        ];
        packs[5].improvement_ideas = [
            { id: 7, packId: 6, type: 'immediate', description: 'Immediate Improvement Idea 4', links: [{ url: 'https://example.com', description: 'Link 1' }] },
            { id: 8, packId: 6, type: 'non-immediate', description: 'Non-Immediate Improvement Idea 4', links: [{ url: 'https://example.com', description: 'Link 1' }] }
        ];

        members = [
            { id: 1, name: 'Member 1', position: 'Position 1', link: 'https://example.com' },
            { id: 2, name: 'Member 2', position: 'Position 2', link: 'https://example.com' },
            { id: 3, name: 'Member 3', position: 'Position 3', link: 'https://example.com' }
        ];

        projects[0].members = [members[0], members[1]];
        projects[1].members = [members[1], members[2]];
        projects[2].members = [members[0], members[2]];

        projects[0].objective_prices = [
            { objective_price: 0, price_description: 'any reason 1' },
            { objective_price: 10, price_description: 'any reason 2' },
            { objective_price: 20, price_description: 'any reason 3' }
        ];
        projects[1].objective_prices = [
            { objective_price: 0, price_description: 'any reason 1' },
            { objective_price: 100, price_description: 'any reason 2' },
            { objective_price: 5, price_description: 'any reason 3' }
        ];

        projects[0].current_price = 0;
        projects[1].current_price = 5;
        projects[2].current_price = 0;

        projects[0].target_price = 10;
        projects[1].target_price = 100;
        projects[2].target_price = 20;
    }

const all_fetch_fn = () => {
// const endpoint = "https://cotton-concrete-catsup.glitch.me";
const endpoint = "http://localhost:8000";
// データベース初期化
const initDb = () => fetch(endpoint+'/init_db', { method: 'POST' }).then(res => res.text());
const getUser = id => fetch(endpoint+`/users/${id}`).then(res => res.json()); // ユーザー取得
const getProject = id => fetch(endpoint+`/projects/${id}`).then(res => res.json()); // プロジェクト取得
const getMember = id => fetch(endpoint+`/members/${id}`).then(res => res.json()); // メンバー取得
const getProjectMember = (project_id, member_id) => fetch(endpoint+`/project_members/${project_id}/${member_id}`).then(res => res.json()); // プロジェクトメンバー取得
const getObjectivePrice = id => fetch(endpoint+`/objective_prices/${id}`).then(res => res.json()); // 価格取得
const getPack = id => fetch(endpoint+`/packs/${id}`).then(res => res.json()); // パック取得
const getImprovementIdea = id => fetch(endpoint+`/improvement_ideas/${id}`).then(res => res.json()); // 改善アイデア取得
const getLink = id => fetch(endpoint+`/links/${id}`).then(res => res.json()); // リンク取得
const createUser = data => fetch('/users', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // ユーザー作成
const createProject = data => fetch('/projects', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // プロジェクト作成
const createMember = data => fetch('/members', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // メンバー作成
const createProjectMember = (project_id, data) => fetch(endpoint+`/project_members/${project_id}`, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // プロジェクトメンバー作成
const createObjectivePrice = data => fetch('/objective_prices', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // 価格作成
const createPack = data => fetch('/packs', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // パック作成
const createImprovementIdea = data => fetch('/improvement_ideas', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // 改善アイデア作成
const createLink = data => fetch('/links', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // リンク作成
const updateUser = (id, data) => fetch(endpoint+`/users/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // ユーザー更新
const updateProject = (id, data) => fetch(endpoint+`/projects/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // プロジェクト更新
const updateMember = (id, data) => fetch(endpoint+`/members/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // メンバー更新
const updateProjectMember = (project_id, member_id, data) => fetch(endpoint+`/project_members/${project_id}/${member_id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // プロジェクトメンバー更新
const updateObjectivePrice = (id, data) => fetch(endpoint+`/objective_prices/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // 価格更新
const updatePack = (id, data) => fetch(endpoint+`/packs/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // パック更新
const updateImprovementIdea = (id, data) => fetch(endpoint+`/improvement_ideas/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // 改善アイデア更新
const updateLink = (id, data) => fetch(endpoint+`/links/${id}`, { method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data) }).then(res => res.json()); // リンク更新
const deleteUser = id => fetch(endpoint+`/users/${id}`, { method: 'DELETE' }).then(res => res.text()); // ユーザー削除
const deleteProject = id => fetch(endpoint+`/projects/${id}`, { method: 'DELETE' }).then(res => res.text()); // プロジェクト削除
const deleteMember = id => fetch(endpoint+`/members/${id}`, { method: 'DELETE' }).then(res => res.text()); // メンバー削除
const deleteProjectMember = (project_id, member_id) => fetch(endpoint+`/project_members/${project_id}/${member_id}`, { method: 'DELETE' }).then(res => res.text()); // プロジェクトメンバー削除
const deleteObjectivePrice = id => fetch(endpoint+`/objective_prices/${id}`, { method: 'DELETE' }).then(res => res.text()); // 価格削除
const deletePack = id => fetch(endpoint+`/packs/${id}`, { method: 'DELETE' }).then(res => res.text()); // パック削除
const deleteImprovementIdea = id => fetch(endpoint+`/improvement_ideas/${id}`, { method: 'DELETE' }).then(res => res.text()); // 改善アイデア削除
const deleteLink = id => fetch(endpoint+`/links/${id}`, { method: 'DELETE' }).then(res => res.text()); // リンク削
return {initDb, getUser, getProject, getMember, getProjectMember, getObjectivePrice, getPack, getImprovementIdea, getLink, createUser, createProject, createMember, createProjectMember, createObjectivePrice, createPack, createImprovementIdea, createLink, updateUser, updateProject, updateMember, updateProjectMember, updateObjectivePrice, updatePack, updateImprovementIdea, updateLink, deleteUser, deleteProject, deleteMember, deleteProjectMember, deleteObjectivePrice, deletePack, deleteImprovementIdea, deleteLink};
};



</script>




<header></header>

<div class="container">
    <nav>
        <button on:click={() => setActiveTab('projects')}>{languageData.projectManagement}</button>
        <button on:click={() => setActiveTab('packs')}>{languageData.packManagement}</button>
        <button on:click={() => setActiveTab('progress')}>{languageData.progressManagement}</button>
    </nav>

    <div class="language-select">
        <span>{languageData.languageIcon}</span>
    </div>

    {#if activeTab === 'projects'}
        <div>
            <h2>{languageData.memberManage}</h2>
			<!-- sampleProjectAndThePacks button -->
			<button on:click={sampleProjectAndThePacks}>sampleProjectAndThePacks</button>
			 


            <form on:submit|preventDefault={addMember}>
                <label for="name">{languageData.name}</label>
                <input type="text" bind:value={newMember.name} required minlength="1" maxlength="50" pattern="[a-zA-Z\s]+" />
                <br>
                <label for="position">{languageData.position}</label>
                <input type="text" bind:value={newMember.position} maxlength="10" required />
                <br>
                <label for="link">{languageData.link}</label>
                <input type="url" bind:value={newMember.link} required pattern="https?://.+" />
                <br>
                <button type="submit">{languageData.addMember}</button>
            </form>

            <h2>{languageData.existingMembers}</h2>
            <ul>
                {#each members as member, index}
                    <li>
                        {languageData.name}: {member.name}, {languageData.position}: {member.position}, {languageData.link}: <a href={member.link} target="_blank">{member.link}</a>
                        <button on:click={() => removeMember(index)}>{languageData.delete}</button>
                    </li>
                {/each}
            </ul>

            <h2>{languageData.createProject}</h2>
            <input bind:value={newProject.name} type="text" placeholder={languageData.projectName} required minlength="1" maxlength="100" />
            <textarea bind:value={newProject.description} placeholder={languageData.projectDescription} required minlength="1" maxlength="500"></textarea>
            <input bind:value={newProject.kpi} type="number" placeholder={languageData.projectKPI} min="0" />
            <input bind:value={newProject.dueDate} type="number" placeholder={languageData.projectDueDate} min="1" />
            <button on:click={addProject}>{languageData.addProject}</button>

            <h2>{languageData.existingProjects}</h2>
            <div>
                <button on:click={() => sortProjects('kpi', 'asc')}>sortByKPIAsc</button>
                <button on:click={() => sortProjects('kpi', 'desc')}>sortByKPIDesc</button>
                <!-- Other sorting buttons -->
            </div>
			<script>
				import { onMount } from 'svelte';
				
				let sortedProjects = [];
				let members = [];
				let selectedMemberId = null;
				
				// Dummy data for example
				// In real usage, replace these with actual data fetching or props
				let languageData = {
					current_price: 'Current Price',
					target_price: 'Target Price',
					addObjectivePrice: 'Add Objective Price',
					objective_price: 'Objective Price',
					priceDescription: 'Price Description',
					addMember: 'Add Member',
					add: 'Add',
					name: 'Name',
					position: 'Position',
					link: 'Link',
					delete: 'Delete',
					packsSummary: 'Packs Summary',
					viewPacks: 'View Packs',
				};
			
				function formatDate(date) {
					return new Date(date).toLocaleString(); // Simple date formatting
				}
			
				function projectProgress(project) {
					// Placeholder for calculating project progress
					return Math.min(100, Math.max(0, project.progress || 0));
				}
			
				function addObjectivePrice(projectId) {
					// Implement the function to add objective price
				}
			
				function removeObjectivePrice(projectId, index) {
					// Implement the function to remove objective price
				}
			
				function addMemberToProjectOrPack(projectId, packId, memberId) {
					// Implement the function to add member to project or pack
				}
			
				function removeMemberFromProjectOrPack(projectId, packId, memberId) {
					// Implement the function to remove member from project or pack
				}
			
				function getSelectedMember() {
					return members.find(member => member.id === selectedMemberId);
				}
			
				function getPacksByProject(projectId) {
					// Placeholder function for fetching packs by project
					return [];
				}
			
				function deleteProject(projectId) {
					// Implement the function to delete a project
				}
			
				// Sample onMount logic
				onMount(() => {
					// Initialize or fetch data here
				});
			</script>
			
			<div class="project-list">
				{#each sortedProjects as project (project.id)}
					<div class="project">
						<input bind:value={project.current_price} type="number" placeholder={languageData.current_price} min="0">
						{languageData.current_price}: ${project.current_price}
						<input bind:value={project.target_price} type="number" placeholder={languageData.target_price} min="0">
						{languageData.target_price}: ${project.target_price}
						<button on:click={() => addObjectivePrice(project.id)}>{languageData.addObjectivePrice}</button>
						<ul>
							{#each project.objective_prices as price, index (index)}
								<li>
									<input bind:value={price.objective_price} type="number" placeholder={languageData.objective_price} min="0">
									{languageData.objective_price}: ${price.objective_price}
									<input bind:value={price.price_description} type="text" placeholder={languageData.priceDescription} maxlength="100">
									{languageData.priceDescription}: {price.price_description}
									<button on:click={() => removeObjectivePrice(project.id, index)}>remove</button>
								</li>
							{/each}
						</ul>
			
						<form on:submit|preventDefault={() => addMemberToProjectOrPack(project.id, null, getSelectedMember())}>
							<label for="member">{languageData.addMember}</label>
							<select bind:value={selectedMemberId}>
								{#each members as member}
									<option value={member.id}>{member.name}</option>
								{/each}
							</select>
							<button type="submit">{languageData.add}</button>
						</form>
			
						<ul>
							{#each project.members as member, index (index)}
								<li>
									{languageData.name}: {member.name}, {languageData.position}: {member.position}, {languageData.link}: <a href={member.link} target="_blank">{member.link}</a>
									<button on:click={() => removeMemberFromProjectOrPack(project.id, null, member.id)}>削除</button>
								</li>
							{/each}
						</ul>
			
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<p>KPI: {project.kpi}</p>
						<p>Difficulty: <span class="stars">{'★'.repeat(project.difficulty)}</span></p>
						<p>Due Date: {formatDate(project.dueDate)}</p>
						<div class="progress-bar" style="width: {projectProgress(project)}%;">
							{projectProgress(project)}%
							{#each Array(10) as _, i}
								<span class:filled={projectProgress(project) >= (i + 1) * 10}>
									{projectProgress(project) >= (i + 1) * 10 ? '●' : '○'}
								</span>
							{/each}
						</div>
						<div class="project-summary">
							<h4>{languageData.packsSummary}</h4>
							{#each getPacksByProject(project.id) as pack (pack.id)}
								<div class="pack-summary">
									{#each ['plan', 'do', 'check', 'act'] as stage}
										<span class:done={pack[stage].done}>{languageData[stage]}: {pack[stage].description}</span>
									{/each}
									<button on:click={() => viewPacks(project.id)}>{languageData.viewPacks}</button>
								</div>
							{/each}
						</div>
						<button on:click={() => deleteProject(project.id)} class="delete">{languageData.delete}</button>
					</div>
				{/each}
			</div>
			
        </div>
    {/if}

	{#if activeTab === 'packs'}
    <h2>{languageData.createPack}</h2>
    <select bind:value={newPack.projectId} required>
        {#each projects as project}
            <option value={project.id}>{project.name}</option>
        {/each}
    </select>

    {#each ['plan', 'do', 'check', 'act'] as stage, index}
        <div>
            <input bind:value={newPack[stage].description} type="text" placeholder={languageData[stage]} maxlength="100" required>
            <label>
                <input type="checkbox" bind:checked={newPack[stage].done}> {languageData.done}
            </label>

            <div class="links">
                {#each newPack[stage].links as link, linkIndex}
                    <div>
                        <input bind:value={link.name} type="text" placeholder={languageData.linkName} maxlength="100" required>
                        <input bind:value={link.href} type="url" placeholder={languageData.linkHref} required pattern="https?://.+">
                        <select bind:value={link.stars}>
                            {#each Array(5) as _, i}
                                <option value={i + 1}>{i + 1}</option>
                            {/each}
                        </select>
                        <span class="stars">{'★'.repeat(link.stars)}</span>
                    </div>
                {/each}
                <button on:click={() => addLink(stage)}>{languageData.addLink}</button>
            </div>                
        </div>
    {/each}

    <input bind:value={newPack.dueDate} type="datetime-local" placeholder={languageData.dueDate} min="1" required>

    <button on:click={addPack}>{languageData.addPack}</button>

    <h2>{languageData.existingPacks}</h2>
	<div class="pack-list">
		{#each packs as pack (pack.id)}
			<div class="pack">
				{#each ['plan', 'do', 'check', 'act'] as stage}
					<!-- doneのステージは灰色に -->
					<div class="stage" class:done={pack[stage].done}>
						<p>{languageData[stage]}: {pack[stage]?.description}</p>
	
						<!-- リンクが存在する場合にのみ表示 -->
						{#if pack[stage]?.links && pack[stage].links.length > 0}
							{#each pack[stage].links as link}
								<div>
									<a href={link.href} target="_blank">{link.name}</a>
									<span class="stars">{'★'.repeat(link.stars)}</span>
								</div>
							{/each}
						{/if}
					<!-- stageをdoneにするボタン -->
					<button on:click={() => pack[stage].done = !pack[stage].done}>{pack[stage].done ? 'Undone' : 'Done'}</button>
					</div>
				{/each}


				<button on:click={() => deletePack(pack.id)} class="delete">{languageData.delete}</button>
			</div>
		{/each}
	</div>
{/if}


    {#if activeTab === 'progress'}
        <h2>{languageData.progressReport}</h2>
        <!-- Progress report content -->
    {/if}
</div>

<footer></footer>



<style>
	/* doneのデータは灰色に */
	.done {
		background-color: #ccc;
	}
	/* class="progress-bar"の配下のspanは改行しない */
	.progress-bar span {
		white-space: nowrap;
	}
</style>
