<script>
// 命名規則(prefix)
// auth => authentication関係の変数と関数
// test => テスト用の変数と関数
// design => デザイン関係の変数と関数
// web => webデータの変数と関数
// fetch => fetch関係の関数

import { onMount } from "svelte";
let design_link_create_mode = false;
let design_project_description_edit_mode = false;
let design_project_due_date_edit_mode = false;
let design_project_name_edit_mode = false;

const sampleUIDs = [
    'user1a34efgh5678ijkl9012mnop',
    'user2a34uvwx5678yzab9012cdef',
    'user3a34klmn5678opqr9012stuv'
];
async function test_sample_uids() {
    auth_uid = sampleUIDs[0];
    auth_user_id = 1;
};
async function test_create_project(){

    // auth_user_id = 1;
    const nums = [
        "44444",
        "55555",
        "66666",
    ];
    for (const num of nums) {
        newProject = Object.assign(newProject, {
            name: num + 'Test Project' + num,
            description: num + 'Test Description' + num,
            // kpiは0~100の間でランダム
            kpi: Math.floor(Math.random() * 101),
            // due_date: new Date().toISOString().slice(0, 16),
            due_date: new Date().toISOString(),
            // difficultyは1~5の間でランダム
            difficulty: Math.floor(Math.random() * 5) + 1,
        });
        await create_project();
    }
    // auth_user_id = 1;
}
async function test_create_pack() {
    const nums = [
        "11111",
        "22222",
        "33333",
    ];
    for (const num of nums) {
        newPack = Object.assign(newPack, {
            project_id: 1,
            plan_description: 'Test Plan' + num,
            plan_done: 1,
            do_description: 'Test Do' + num,
            do_done: 0,
            check_description: 'Test Check' + num,
            check_done: 1,
            act_description: 'Test Act' + num,
            act_done: 0,
            due_date: new Date().toISOString(),
        });
        await create_pack();
    }
    // auth_user_id = 1;
}
async function test_create_link() {

    new_link = {
        url: 'https://www.google.com',
        description: 'Google',
    };
    create_link(1, 'plan');
    new_link = {
        url: 'https://www.yahoo.co.jp',
        description: 'Yahoo',
    };
    create_link(1, 'plan');
    new_link = {
        url: 'https://www.bing.com',
        description: 'Bing',
    };
    create_link(3, 'check');
    // auth_user_id = 1;
}
async function create_project() {
    try {
        console.log('Creating project:', newProject);
        // uidがない場合はエラーで終了(ワンライナーで書く)
        auth_uid ? null : (() => { errors.push('Error creating project: No UID'); console.error('Error creating project: No UID'); return; })();
        // all_validation_fnでチェック
        const valid_errors = all_validation_fn.validateProject(newProject);
        errors.push(...valid_errors);
        // errorsがある場合はエラーで終了
        if (errors.length > 0) {
            console.error('Error creating project:', errors);
            return;
        }
        const response = await fetch(`${web_endpoint}/create_projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: newProject.name,
                description: newProject.description,
                kpi: newProject.kpi,
                due_date: toISOStringFromDatetimeLocal(newProject.due_date),
                difficulty: newProject.difficulty,
                uid: auth_uid
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating project:', errorData.errors);
            return;
        }

        const data = await response.json();
        console.log('Project created with ID:', data.id);
        await fetch_data();
    } catch (error) {
        console.error('Error creating project:', error);
    }
}
async function create_pack() {
    try {
        // newPackのdue_dateをISO8601形式に変換
        // newPack.due_date = new Date(newPack.due_date).toISOString();
        // valid
        // auth_uidがない場合はエラーで終了(ワンライナーで書く)
        auth_uid ? null : (() => { errors.push('Error creating pack: No UID'); console.error('Error creating pack: No UID'); return; })();
        const valid_errors = all_validation_fn.validatePack(newPack);
        errors.push(...valid_errors);
        errors.length > 0 ? null : (() => { throw new Error('Error creating pack:', errors); })();


        const response = await fetch(web_endpoint + '/create_packs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                project_id: newPack.project_id,
                plan_description: newPack.plan_description,
                plan_done: newPack.plan_done,
                do_description: newPack.do_description,
                do_done: newPack.do_done,
                check_description: newPack.check_description,
                check_done: newPack.check_done,
                act_description: newPack.act_description,
                act_done: newPack.act_done,

                uid: auth_uid,
                due_date: toISOStringFromDatetimeLocal(newPack.due_date),
            })


        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error creating pack:', errorData.errors);
            return;
        }

        const data = await response.json();
        console.log('Pack created with ID:', data.id);
        await fetch_data();
    } catch (error) {
        console.error('Error creating pack:', error);
    }
}
async function create_link(pack_id, stage) {
    try {
        console.log(
            { 
                pack_id: pack_id,
                url: new_link.url,
                description: new_link.description,
                stage: stage,
                uid: auth_uid
            }
        );
        // valid
        // auth_uidがない場合はエラーで終了(ワンライナーで書く)
        console.log('1');
        auth_uid ? null : (() => { throw new Error('auth_uid is required'); })();
        console.log('2');
        // new_linkのstageにstageを格納
        new_link.stage = stage;
        const valid_errors = all_validation_fn.validateLink(new_link);
        console.log('3');
        console.log('valid_errors', valid_errors);
        console.log('4');
        valid_errors.length > 0 ? (() => { throw new Error('Error creating link:', valid_errors); })() : null;
        console.log('5');

        const response = await fetch(web_endpoint + '/create_links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pack_id: pack_id,
                url: new_link.url,
                description: new_link.description,
                stage: new_link.stage,
                uid: auth_uid
            })
        });


        if (!response.ok) {
            console.log('6');
            const errorData = await response.json();
            console.error('Error creating link:', errorData.errors);
            return;
        }
        const data = await response.json();
        console.log('Link created with ID:', data.id);
        await fetch_data();
        // リンク追加後、入力をリセット
        new_link = {
            url: '',
            description: '',
            stage: ''
        };

    } catch (error) {
        console.log('7');
        console.log(error);
        // console.error('Error creating link:', error);
    }
}
async function all_test_fn_exe(){
    await test_create_project();
    await test_create_pack();
    await test_create_link();
}
function toISOStringFromDatetimeLocal(datetimeLocalValue) {
    // input type="datetime-local"の値をと、
    // sqlite3のcreate_at(TEXT型)とupdate_at(TEXT型)に保存する際はISO8601形式で保存するため、
    // それぞれの関数を作成create_project, create_packの2つの関数で使用
    const date = new Date(datetimeLocalValue);
    return date.toISOString();
}
function toDatetimeLocalFromISOString(isoString) {
    return isoString.slice(0, 16); // 'YYYY-MM-DDTHH:MM' 形式を抽出
}

let errors = [];
const all_validation_fn = {
    validateUser: (uid) => {
        const errors = [];
        const uidRegex = /^[a-zA-Z0-9_-]{28}$/; // Google Firebase Authentication UID format
        if (!uidRegex.test(uid)) {
            errors.push('Invalid UID format');
        }
        return errors;
    },
    validateProject: (project) => {
        const errors = [];
        if (typeof project.name !== 'string' || project.name.length < 1 || project.name.length > 50) {
            errors.push('Invalid project name');
        }
        if (typeof project.description !== 'string' || project.description.length < 1 || project.description.length > 300) {
            errors.push('Invalid project description');
        }
        if (!Number.isInteger(project.kpi) || project.kpi < 0 || project.kpi > 100) {
            errors.push('Invalid project KPI');
        }
        // if (isNaN(Date.parse(project.due_date))) {
        //     errors.push('Invalid project due date');
        // }
        if (!Number.isInteger(project.difficulty) || project.difficulty < 1 || project.difficulty > 5) {
            errors.push('Invalid project difficulty');
        }
        return errors;
    },
    validatePack: (pack) => {
        const errors = [];
        if (typeof pack.plan_description !== 'string' || pack.plan_description.length < 1 || pack.plan_description.length > 300) {
            errors.push('Invalid plan description');
        }
        if (![0, 1].includes(pack.plan_done)) {
            errors.push('Invalid plan done value');
        }
        if (typeof pack.do_description !== 'string' || pack.do_description.length < 1 || pack.do_description.length > 300) {
            errors.push('Invalid do description');
        }
        if (![0, 1].includes(pack.do_done)) {
            errors.push('Invalid do done value');
        }
        if (typeof pack.check_description !== 'string' || pack.check_description.length < 1 || pack.check_description.length > 300) {
            errors.push('Invalid check description');
        }
        if (![0, 1].includes(pack.check_done)) {
            errors.push('Invalid check done value');
        }
        if (typeof pack.act_description !== 'string' || pack.act_description.length < 1 || pack.act_description.length > 300) {
            errors.push('Invalid act description');
        }
        if (![0, 1].includes(pack.act_done)) {
            errors.push('Invalid act done value');
        }
        const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
        if (!isoDateRegex.test(pack.due_date)) {
            errors.push('Invalid pack due date format. Must be ISO 8601 format.');
        }
        return errors;
    },
    validateLink: (link) => {
        const errors = [];
        const validStages = ['plan', 'do', 'check', 'act'];
    
        if (typeof link.url !== 'string' || link.url.length < 1 || link.url.length > 300 || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(link.url)) {
            errors.push('Invalid URL');
        }
        if (typeof link.description !== 'string' || link.description.length < 1 || link.description.length > 300) {
            errors.push('Invalid link description');
        }
        if (!validStages.includes(link.stage)) {
            errors.push('Invalid stage');
        }
        return errors;
    }
};

const test_mode = true;
// const test_mode = false;
let auth_login_result = 'Not logged in';
let auth_uid = null;
// let auth_uid = "user1";
let auth_user_id = null;
// let auth_user_id = 1;
// let web_endpoint = 'http://localhost:8000/app7';
let web_endpoint = 'https://cotton-concrete-catsup.glitch.me/app7';
let web_data = [];
let new_link = {
    url: '',
    description: '',
    stage: ''
};

const auth_firebase_config = {
    apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
    authDomain: "p2auth-ea50a.firebaseapp.com",
    projectId: "p2auth-ea50a",
    storageBucket: "p2auth-ea50a.appspot.com",
    messagingSenderId: "796225429484",
    appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
};
firebase.initializeApp(auth_firebase_config);
const auth_google_provider = new firebase.auth.GoogleAuthProvider();

async function auth_check_login() {
try {
    const current_user = await new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(resolve, reject);
    });
    console.log('Current user:', current_user);

    const auth_user = current_user;
    if (auth_user) {
        auth_login_result = 'Logged in';
        auth_uid = auth_user.uid;
    } else {
        auth_login_result = 'Not logged in';
        if(test_mode){
            auth_login_result = 'Logged in';
        }
    }
} catch (error) {
    console.error('Error during authentication:', error);
    auth_login_result = 'Authentication failed';
    auth_uid = "";
}
}

async function auth_google_login() {
    try {
        const result = await firebase.auth().signInWithPopup(auth_google_provider);
        const auth_user = result.user;
        auth_login_result = `Logged in as: ${auth_user.displayName}`;
    } catch (error) {
        console.error('Error during Google login:', error);
        alert('Google login failed. ' + error.message);
    }
}

async function auth_sign_out() {
    try {
        await firebase.auth().signOut();
        auth_login_result = 'Not logged in';
    } catch (error) {
        console.error('Error during sign-out:', error);
        alert('Sign out failed. ' + error.message);
    }
}

async function initializeDatabase() {
    try {
        const response = await fetch(web_endpoint + '/init_db', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: 'init' })
        });
        const data = await response.json();
        console.log('Database initialized:', data);
    } catch (error) {
        console.error('Error initializing database:', error);
    }
};

async function fetch_data() {
    try {
        console.log('Fetching data...', auth_uid);
        const response = await fetch(web_endpoint + '/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uid: auth_uid }) // リクエストボディにuidを追加
        });
        web_data = await response.json();
        [projects_and_packs, packs, auth_user_id] =
            [web_data.projects_and_packs, web_data.packs, web_data.user_id];
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

async function fetch_delete_projects(project_id) {
        try {
            const response = await fetch(`${web_endpoint}/delete_projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    project_id: project_id,
                    uid: auth_uid
                })

            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Project successfully deleted:', result);
            // successならfetch_data
            await fetch_data();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
}

async function fetch_delete_packs(pack_id) {
    try {
        const response = await fetch(`${web_endpoint}/delete_packs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pack_id: pack_id,
                uid: auth_uid,
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Pack successfully deleted:', result);
        await fetch_data();
    } catch (error) {
        console.error('Error deleting pack:', error);
    }
}

async function fetch_delete_links(link_id) {
    try {
        const response = await fetch(`${web_endpoint}/delete_links`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                link_id: link_id,
                uid: auth_uid,
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Link successfully deleted:', result);
        await fetch_data();
    } catch (error) {
        console.error('Error deleting link:', error);
    }
}

async function fetch_update_projects(project_id) {
    try {
        // validation
        // auth_uidがない場合はエラーで終了(ワンライナーで書く)
        auth_uid ? null : (() => { errors.push('Error updating project: No UID'); console.error('Error updating project: No UID'); return; })();
        // idを指定してupdateProject
        const updateProject = projects_and_packs.find(p => p.id === project_id);
        // update_projectsをvalid
        const valid_errors = all_validation_fn.validateProject(updateProject);
        errors.push(...valid_errors);
        // errorsがある場合はエラーで終了
        if (errors.length > 0) {
            console.error('Error updating project:', errors);
            return;
        }
        const response = await fetch(`${web_endpoint}/update_projects`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                project_id: project_id,
                name: updateProject.name,
                description: updateProject.description,
                kpi: updateProject.kpi,
                due_date: toISOStringFromDatetimeLocal(updateProject.due_date),
                difficulty: updateProject.difficulty,
                uid: auth_uid
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Project successfully updated:', result);
        await fetch_data();
    } catch (error) {
        console.error('Error updating project:', error);
    }
    
}

async function fetch_update_packs(pack_id) {
try {
    // auth_uidがない場合はエラーで終了(ワンライナーで書く)
    auth_uid ? null : (() => { errors.push('Error updating pack: No UID'); console.error('Error updating pack: No UID'); return; })();
    // idを指定してupdatePack
    const updatePack = packs.find(p => p.id === pack_id);
    // update_packsをvalid
    const valid_errors = all_validation_fn.validatePack(updatePack);
    errors.push(...valid_errors);
    // errorsがある場合はエラーで終了
    if (errors.length > 0) {
        console.error('Error updating pack:', errors);
        return;
    }
    const response = await fetch(`${web_endpoint}/update_packs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pack_id: pack_id,
            project_id: updatePack.project_id,
            plan_description: updatePack.plan_description,
            plan_done: updatePack.plan_done,
            do_description: updatePack.do_description,
            do_done: updatePack.do_done,
            check_description: updatePack.check_description,
            check_done: updatePack.check_done,
            act_description: updatePack.act_description,
            act_done: updatePack.act_done,
            due_date: toISOStringFromDatetimeLocal(updatePack.due_date),
            uid: auth_uid
        })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const result = await response.json();
    console.log('Pack successfully updated:', result);
    await fetch_data();
} catch (error) {
    console.error('Error updating pack:', error);
}
}

let activeTab = 'projects';
let languageData = {};
let newProject = {
    name: '',
    description: '',
    kpi: 0,
    // due_dateをiso8601形式
    due_date: new Date().toISOString().slice(0, 16), // ISO形式の一部を使用
    difficulty: 3
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

// パックを追加する
async function addPack() {
try {
    // newPackにproject_idを追加
    // newPack.project_id = projects[0].id;

    await create_pack() 
    packs = [...packs, newPack];
    // パック追加後、入力をリセット
    newPack = {
        plan_description: '',
        plan_done: 0,
        do_description: '',
        do_done: 0,
        check_description: '',
        check_done: 0,
        act_description: '',
        act_done: 0,
        due_date: toDatetimeLocalFromISOString(new Date().toISOString()),
    };
} catch (error) {
    console.error('Error adding pack:', error);
}
};

// let projects = [];
let packs = [];
let projects_and_packs = [];
let sortDirection = { projects: 'asc', packs: 'asc' };

function doneOrUndone(packId, stage) {
    // projects_and_packsの該当のpackのdoneを更新
    packs = packs.map(pack => {
        if (pack.id === packId) {
            pack[`${stage}_done`] = pack[`${stage}_done`] ? 0 : 1;
        }
        return pack;
    });
    // projects_and_packsの該当のpackのdoneを更新
    // packIdからprojectIdを取得
    const projectId = packs.find(p => p.id === packId).project_id;

    // パックの完了度を計算
    const progress = packProgress(packId);
    const pack = packs.find(p => p.id === packId);

    const project = projects_and_packs.find(project => project.id === projectId);
    project.packs = project.packs.map(p => {
        if (p.id === packId) {
            p[`${stage}_done`] = p[`${stage}_done`] ? 0 : 1;
        }
        return p;
    });




    // パックの完了度が100%になったら、プロジェクトの進捗を更新
    if (progress === 100) {
        const project = projects_and_packs.find(p => p.id === projectId);
        project.difficulty = Math.max(1, project.difficulty - 1);
    }
    // パックの完了度が0%になったら、プロジェクトの進捗を更新
    if (progress === 0) {
        const project = projects_and_packs.find(p => p.id === projectId);
        project.difficulty = Math.min(5, project.difficulty + 1);
    }
};

const projectProgress = (project) => {
    const packs = project.packs;
    const totalPacks = packs.filter(pack => pack.project_id === project.id).length;
    // const donePacks = packs.filter(pack => pack.project_id === project.id && pack.plan.done && pack.do.done && pack.check.done && pack.act.done).length;
    const donePacks = packs.filter(pack => pack.project_id === project.id && pack.plan_done && pack.do_done && pack.check_done && pack.act_done).length;
    // console.log("totalPacks", totalPacks);
    // console.log("donePacks", donePacks);
    const res = totalPacks === 0 ? 0 : Math.round(donePacks / totalPacks * 100);
    // console.log("res", res);
    return res;
};

const loadTranslations = async () => {
    const response = await fetch('pdca_lang.json');
    return await response.json();
};

$: (async () => {
    // due_dateをdatetime-local形式に変換
    projects_and_packs = projects_and_packs.map(project => {
        project.due_date = toDatetimeLocalFromISOString(project.due_date);
        return project;
    });

})();

onMount(async () => {
    languageData = await loadTranslations();
    // await test_sample_uids();
    await auth_check_login();
    await fetch_data();

});

const setActiveTab = (tab) => activeTab = tab;

const getProjectName = (projectId) => {
    // const project = projects.find(p => p.id === projectId);
    const project = projects_and_packs.find(p => p.id === projectId);
    return project ? project.name : '';
};

const packProgress = (pack_id) => {
    const stages = ['plan', 'do', 'check', 'act'];
    const pack = packs.find(pack => pack.id === pack_id);
    const completedStages = stages.filter(stage => pack[stage].done).length;
    return (completedStages / stages.length) * 100;
};

const sortedProjects = (Sort_By_Asc_Or_Desc="asc") => {
    // Sort_By_Asc_Or_Descが"asc"の場合は昇順、"desc"の場合は降順、それ以外の場合早期リターン
    if (Sort_By_Asc_Or_Desc !== 'asc' && Sort_By_Asc_Or_Desc !== 'desc') {return}
    const new_projects_and_packs = projects_and_packs.sort((a, b) => {
        const direction = sortDirection.projects === Sort_By_Asc_Or_Desc ? 1 : -1;
        return direction * a.name.localeCompare(b.name);
    });
    projects_and_packs = [...new_projects_and_packs];
};
const sortPacks = (Sort_By_Asc_Or_Desc="asc") => {
    if(Sort_By_Asc_Or_Desc !== 'asc' && Sort_By_Asc_Or_Desc !== 'desc'){return}
    const new_packs = packs.sort((a, b) => {
        const direction = sortDirection.packs === Sort_By_Asc_Or_Desc ? 1 : -1;
        return direction * a.plan_description.localeCompare(b.plan_description);
    });
    packs = [...new_packs];
};

// const addProject = () => {
//     const newProjectEntry = { ...newProject, id: Date.now() };
//     projects = [...projects, newProjectEntry];
//     newProject = { user_id: 1, name: '', description: '', kpi: 0, due_date: new Date().toISOString().slice(0, 16), difficulty: 3 };
// };
// const handleDueDateChange = (event) => {
//     const date = new Date(event.target.value);
//     newPack.due_date = date.toISOString();
// };
</script>

<style>
.done {
    background-color: #f0f0f0;
}
.stars {
    color: gold;
}
.progress-bar {
    display: flex;
}
.link-add {
    display: flex;
    justify-content: flex-end;
}
.pack_delete{
    display:  flex;
    justify-content: flex-end;
}
</style>

<header>
    <div class="version">v1.0.2</div>
    <div>auth_login_result: {auth_login_result}</div>
    <div>auth_uid: {auth_uid}</div>
    <div>auth_user_id: {auth_user_id}</div>
    <!-- <div>web_endpoint: {web_endpoint}</div> -->

    {#if test_mode}
    <!-- <button on:click={test_create_project}>Test create project</button>
    <button on:click={test_create_pack}>Test create pack</button>
    <button on:click={test_create_link}>Test create link</button>
    <button on:click={all_test_fn_exe}>All test functions</button>
    <button on:click={initializeDatabase}>initializeDatabase</button> -->
    {/if}

    {#if auth_login_result === 'Logged in'}
    <button on:click={auth_sign_out}>Logout</button>
    {:else}
    <button on:click={auth_google_login}>Login</button>
    {/if}
    auth_login_result: {auth_login_result}
</header>

<nav>
    <button on:click={() => setActiveTab('projects')}>{languageData.projectManagement}</button>
    <button on:click={() => setActiveTab('packs')}>{languageData.packManagement}</button>
    <button on:click={() => setActiveTab('progress')}>{languageData.progressManagement}</button>
</nav>

{#if activeTab === 'projects'}
    <!-- <button on:click={fetch_data}>Fetch Data</button> -->
    <h2>{languageData.createProject}</h2>

    {#if auth_login_result === 'Logged in'  && auth_uid !== null}
    <div>name: <input bind:value={newProject.name} type="text" placeholder={languageData.projectName} maxlength="100"></div>
    <div>description: <input bind:value={newProject.description} type="text" placeholder={languageData.projectDescription} maxlength="200"></div>
    <div>kpi: <input bind:value={newProject.kpi} type="number" placeholder={languageData.projectKPI} min="0"></div>
    <div>due_date: <input bind:value={newProject.due_date} type="datetime-local" placeholder={languageData.projectDueDate}></div>
    <div>difficulty: <input bind:value={newProject.difficulty} type="number" placeholder={languageData.projectDifficulty} min="1" max="5"></div>
    <button on:click={create_project}>{languageData.addProject}</button>
    {/if}

    <h2>{languageData.existingProjects}</h2>
    <button on:click={() => sortedProjects('asc')}>Sort by name ▲</button>
    <button on:click={() => sortedProjects('desc')}>Sort by name ▼</button>
    <div class="project-list">
        {#each projects_and_packs as project}
        <div class="project">
            <h3>{project.name}: user id: {project.user_id}</h3>
            <button on:click={() => design_project_name_edit_mode = !design_project_name_edit_mode}>{languageData.editName} {design_project_name_edit_mode ? '▲' : '▼'}</button>
            {#if design_project_name_edit_mode}
            <input type="text" value={project.name} on:input={(e) => project.name = e.target.value} />
            {/if}
            <button on:click={() => fetch_delete_projects(project.id)}>{languageData.delete}</button>
            <button on:click={() => fetch_update_projects(project.id)}>{languageData.update}</button>
            <p>{project.description}</p>
            <button on:click={() => design_project_description_edit_mode = !design_project_description_edit_mode}>{languageData.editDescription} {design_project_description_edit_mode ? '▲' : '▼'}</button>
            {#if design_project_description_edit_mode}
            <input type="text" value={project.description} on:input={(e) => project.description = e.target.value} />
            {/if}
            <p>KPI: {project.kpi}</p>
            <button on:click={() => project.kpi = Math.min(100, project.kpi + 1)}>+</button>
            <button on:click={() => project.kpi = Math.max(0, project.kpi - 1)}>-</button>
            <p>Difficulty: <span class="stars">{"★".repeat(project.difficulty)}</span></p>
            <button on:click={() => project.difficulty = Math.min(5, project.difficulty + 1)}>+</button>
            <button on:click={() => project.difficulty = Math.max(1, project.difficulty - 1)}>-</button>
            <p>Due Date: {project.due_date}</p>
            <button on:click={() => design_project_due_date_edit_mode = !design_project_due_date_edit_mode}>{languageData.editDueDate} {design_project_due_date_edit_mode ? '▲' : '▼'}</button>
            {#if design_project_due_date_edit_mode}
            <input type="datetime-local" value={project.due_date.slice(0, 16)} on:input={(e) => project.due_date = toDatetimeLocalFromISOString(e.target.value)} />
            {/if}
            <p>Progress: {projectProgress(project)}%</p>
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
        </div>
        {/each}
    </div>
{/if}

{#if activeTab === 'packs'}
<h2>{languageData.createPack}</h2>
<select bind:value={newPack.project_id}>
    {#each projects_and_packs as project}
    <option value={project.id}>{project.name}</option>
    {/each}
</select>

<div>
    <div>pack plan_description: <input bind:value={newPack.plan_description} type="text" placeholder={languageData.planDescription} maxlength="300"></div>
    <div>pack do_description: <input bind:value={newPack.do_description} type="text" placeholder={languageData.doDescription} maxlength="300"></div>
    <div>pack check_description: <input bind:value={newPack.check_description} type="text" placeholder={languageData.checkDescription} maxlength="300"></div>
    <div>pack act_description: <input bind:value={newPack.act_description} type="text" placeholder={languageData.actDescription} maxlength="300"></div>
    <input bind:value={newPack.due_date} type="datetime-local" placeholder={languageData.packDueDate}>
    <!-- <input bind:value={newPack.due_date} type="datetime-local" placeholder={languageData.packDueDate} on:change={handleDueDateChange}> -->
    <button on:click={addPack}>{languageData.addPack}</button>
</div>

<h2>{languageData.existingPacks}</h2>
<button on:click={() => sortPacks('asc')}>Sort by plan ▲</button>
<button on:click={() => sortPacks('desc')}>Sort by plan ▼</button>
<div class="pack-list">
{#each packs as pack, index}
<div class="pack">
    <!-- fetch_update_packs -->
    <div class="pack_update">
        <button on:click={() => fetch_update_packs(pack.id)}>pack {languageData.update}</button>
    </div>
    <div class="pack_delete">
        <button on:click={() => fetch_delete_packs(pack.id)}>pack {languageData.delete}</button>
    </div>

    <h3>{getProjectName(pack.project_id)}</h3>
    {#each ['plan', 'do', 'check', 'act'] as stage}
    <div class:done={pack[`${stage}_done`]}>
        <button on:click={() => doneOrUndone(pack.id, stage)}>{languageData.done}</button>
        <p>{languageData[stage]}: {pack[`${stage}_description`]}</p>
        {#each (pack[stage].links || []) as link}
        <a href={link.url} target="_blank">{link.description}</a>
        <button on:click={() => fetch_delete_links(link.id)}>{languageData.delete}</button>
        {/each}

        <div class="link-add">
            <button class="link-create-mode" on:click={() => design_link_create_mode = !design_link_create_mode}>{languageData.addLink} {design_link_create_mode ? '▲' : '▼'}</button>
            <div class="link-form" style="display: {design_link_create_mode ? 'block' : 'none'}">
            <form on:submit|preventDefault={create_link(pack.id, stage)}>
                <input bind:value={new_link.url} type="text" placeholder={languageData.linkURL} minlength="1" maxlength="300">
                <input bind:value={new_link.description} type="text" placeholder={languageData.linkDescription} minlength="1" maxlength="300">
                <button type="submit">{languageData.addLink}</button>
            </form>
            </div>
        </div>
    </div>
    {/each}
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
