// このサンプルデータを基に、プロジェクトやパック、改善案、メンバー、価格に対するバリデーションルールを策定します。以下に各項目ごとのバリデーションルールを示します。

// - **`id`**: 整数で、重複がないこと。
// - **`name`**: 1文字以上50文字以下であること。空欄禁止。
// - **`description`**: 1文字以上300文字以下であること。
// - **`kpi`**: 0以上100以下の数値。
// - **`dueDate`**: プロジェクトの締め切りまでの期間（時間単位）。0以上であること。
// - **`difficulty`**: 1～5の範囲であること。
// - **`members`**: プロジェクトには1人以上のメンバーが必要。メンバーは重複してはいけない。
// - **`objective_prices`**:
//     - **`objective_price`**: 0以上の整数。
//     - **`price_description`**: 1文字以上100文字以下であること。
// - **`current_price`**: `objective_prices`の範囲内にあること。
// - **`target_price`**: `objective_prices`の範囲内にあること。

// - `current_price`や`target_price`が`objective_prices`の範囲外の場合、エラーメッセージを返す。


// - **`id`**: 整数で、重複がないこと。
// - **`projectId`**: 存在するプロジェクトIDであること。
// - **`plan`, `do`, `check`, `act`**:
//     - **`description`**: 1文字以上300文字以下であること。
//     - **`done`**: ブール値（`true` または `false`）。
//     - **`links`**: 
//         - **`name`**: 1文字以上50文字以下。
//         - **`href`**: 有効なURLであること。
//         - **`stars`**: 1～5の範囲の整数。
// - **`dueDate`**: 現在の日時より未来の日付であること。
// - **`improvement_ideas`**:
//     - **`id`**: 整数で、重複がないこと。
//     - **`packId`**: 既存のパックIDと一致すること。
//     - **`type`**: `'immediate'` または `'non-immediate'` のみを許可。
//     - **`description`**: 1文字以上300文字以下であること。
//     - **`links`**:
//         - **`url`**: 有効なURLであること。
//         - **`description`**: 1文字以上100文字以下。

// - `dueDate`が過去の日付の場合、バリデーションエラーを返す。
// - `improvement_ideas` の`packId`が正しくない場合エラーメッセージを表示。


// - **`id`**: 整数で、重複がないこと。
// - **`name`**: 1文字以上50文字以下であること。空欄禁止。
// - **`position`**: 1文字以上50文字以下であること。空欄禁止。
// - **`link`**: 有効なURLであること。


// - **`objective_price`**: 0以上の整数であること。
// - **`price_description`**: 1文字以上100文字以下であること。
// - **`current_price`, `target_price`**:
//     - **`current_price`**は `objective_prices` 内に含まれている値であること。
//     - **`target_price`**は `objective_prices` 内に含まれている値であること。


// 1. プロジェクトが `kpi` の範囲外の場合：
//    - エラー例: 「`kpi` は 0 以上 100 以下の範囲でなければなりません。」

// 2. `dueDate` が過去の日付の場合：
//    - エラー例: 「`dueDate` は現在の日付より未来の日付である必要があります。」

// 3. `objective_prices` が不正な値の場合：
//    - エラー例: 「`objective_price` は 0 以上でなければなりません。」



const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');

const app = express();
app.use(bodyParser.json());


// データベースの初期化
const db_for_app7 = new Database('app7.db');

app.post('/init_db', (req, res) => {
    try {
        db_for_app7.exec('DROP TABLE IF EXISTS users');
        db_for_app7.exec('DROP TABLE IF EXISTS projects');
        db_for_app7.exec('DROP TABLE IF EXISTS members');
        db_for_app7.exec('DROP TABLE IF EXISTS project_members');
        db_for_app7.exec('DROP TABLE IF EXISTS objective_prices');
        db_for_app7.exec('DROP TABLE IF EXISTS packs');
        db_for_app7.exec('DROP TABLE IF EXISTS improvement_ideas');
        db_for_app7.exec('DROP TABLE IF EXISTS links');
        // ユーザーテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                uid TEXT NOT NULL UNIQUE,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            )`);

        // プロジェクトテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY,
                user_id INTEGER,
                name TEXT NOT NULL,
                description TEXT,
                kpi INTEGER,
                due_date INTEGER,
                difficulty INTEGER,
                current_price INTEGER,
                target_price INTEGER,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id)
            )`);

        // メンバーテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS members (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                position TEXT,
                link TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP
            )`);

        // プロジェクトメンバーの関連テーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS project_members (
                project_id INTEGER,
                member_id INTEGER,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (project_id) REFERENCES projects(id),
                FOREIGN KEY (member_id) REFERENCES members(id),
                PRIMARY KEY (project_id, member_id)
            )`);

        // 価格テーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS objective_prices (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                project_id INTEGER,
                objective_price INTEGER,
                price_description TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (project_id) REFERENCES projects(id)
            )`);

        // パックテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS packs (
                id INTEGER PRIMARY KEY,
                project_id INTEGER,
                plan_description TEXT,
                plan_done BOOLEAN,
                do_description TEXT,
                do_done BOOLEAN,
                check_description TEXT,
                check_done BOOLEAN,
                act_description TEXT,
                act_done BOOLEAN,
                due_date TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (project_id) REFERENCES projects(id)
            )`);

        // 改善アイデアテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS improvement_ideas (
                id INTEGER PRIMARY KEY,
                pack_id INTEGER,
                type TEXT,
                description TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (pack_id) REFERENCES packs(id)
            )`);

        // リンクテーブルの作成
        db_for_app7.exec(`
            CREATE TABLE IF NOT EXISTS links (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                pack_id INTEGER,
                improvement_idea_id INTEGER,
                url TEXT,
                description TEXT,
                created_at TEXT DEFAULT CURRENT_TIMESTAMP,
                updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (pack_id) REFERENCES packs(id),
                FOREIGN KEY (improvement_idea_id) REFERENCES improvement_ideas(id)
            )`);
        
        res.status(201).send('Database initialized');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// CRUD エンドポイントの定義

// ユーザーの作成
app.post('/users', (req, res) => {
    try {
        const { uid, name, email } = req.body;
        if (!uid || !name || !email) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO users (uid, name, email) VALUES (?, ?, ?)');
        const info = stmt.run(uid, name, email);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトの作成
app.post('/projects', (req, res) => {
    try {
        const { user_id, name, description, kpi, due_date, difficulty, current_price, target_price } = req.body;
        if (!user_id || !name) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO projects (user_id, name, description, kpi, due_date, difficulty, current_price, target_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
        const info = stmt.run(user_id, name, description, kpi, due_date, difficulty, current_price, target_price);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// メンバーの作成
app.post('/members', (req, res) => {
    try {
        const { name, position, link } = req.body;
        if (!name) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO members (name, position, link) VALUES (?, ?, ?)');
        const info = stmt.run(name, position, link);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトメンバーの関連付け
app.post('/project_members', (req, res) => {
    try {
        const { project_id, member_id } = req.body;
        if (!project_id || !member_id) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO project_members (project_id, member_id) VALUES (?, ?)');
        const info = stmt.run(project_id, member_id);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// 価格の作成
app.post('/objective_prices', (req, res) => {
    try {
        const { project_id, objective_price, price_description } = req.body;
        if (!project_id || objective_price === undefined) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO objective_prices (project_id, objective_price, price_description) VALUES (?, ?, ?)');
        const info = stmt.run(project_id, objective_price, price_description);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// パックの作成
app.post('/packs', (req, res) => {
    try {
        const { project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date } = req.body;
        if (!project_id) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO packs (project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
        const info = stmt.run(project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// 改善アイデアの作成
app.post('/improvement_ideas', (req, res) => {
    try {
        const { pack_id, type, description } = req.body;
        if (!pack_id || !type) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO improvement_ideas (pack_id, type, description) VALUES (?, ?, ?)');
        const info = stmt.run(pack_id, type, description);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// リンクの作成
app.post('/links', (req, res) => {
    try {
        const { pack_id, improvement_idea_id, url, description } = req.body;
        if (!pack_id || !url) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('INSERT INTO links (pack_id, improvement_idea_id, url, description) VALUES (?, ?, ?, ?)');
        const info = stmt.run(pack_id, improvement_idea_id, url, description);
        res.status(201).json({ id: info.lastInsertRowid });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// ユーザーの取得
app.get('/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        const user = db_for_app7.prepare('SELECT * FROM users WHERE id = ?').get(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトの取得
app.get('/projects/:id', (req, res) => {
    try {
        const { id } = req.params;
        const project = db_for_app7.prepare('SELECT * FROM projects WHERE id = ?').get(id);
        if (!project) {
            return res.status(404).send('Project not found');
        }
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// メンバーの取得
app.get('/members/:id', (req, res) => {
    try {
        const { id } = req.params;
        const member = db_for_app7.prepare('SELECT * FROM members WHERE id = ?').get(id);
        if (!member) {
            return res.status(404).send('Member not found');
        }
        res.json(member);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトメンバーの関連付けの取得
app.get('/project_members', (req, res) => {
    try {
        const projectMembers = db_for_app7.prepare('SELECT * FROM project_members').all();
        res.json(projectMembers);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// 価格の取得
app.get('/objective_prices/:id', (req, res) => {
    try {
        const { id } = req.params;
        const price = db_for_app7.prepare('SELECT * FROM objective_prices WHERE id = ?').get(id);
        if (!price) {
            return res.status(404).send('Price not found');
        }
        res.json(price);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// パックの取得
app.get('/packs/:id', (req, res) => {
    try {
        const { id } = req.params;
        const pack = db_for_app7.prepare('SELECT * FROM packs WHERE id = ?').get(id);
        if (!pack) {
            return res.status(404).send('Pack not found');
        }
        res.json(pack);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// 改善アイデアの取得
app.get('/improvement_ideas/:id', (req, res) => {
    try {
        const { id } = req.params;
        const idea = db_for_app7.prepare('SELECT * FROM improvement_ideas WHERE id = ?').get(id);
        if (!idea) {
            return res.status(404).send('Improvement idea not found');
        }
        res.json(idea);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// リンクの取得
app.get('/links/:id', (req, res) => {
    try {
        const { id } = req.params;
        const link = db_for_app7.prepare('SELECT * FROM links WHERE id = ?').get(id);
        if (!link) {
            return res.status(404).send('Link not found');
        }
        res.json(link);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// ユーザーの更新
app.put('/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { uid, name, email } = req.body;
        if (!uid || !name || !email) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('UPDATE users SET uid = ?, name = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
        const info = stmt.run(uid, name, email, id);
        if (info.changes === 0) {
            return res.status(404).send('User not found');
        }
        res.status(200).send('User updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトの更新
app.put('/projects/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { user_id, name, description, kpi, due_date, difficulty, current_price, target_price } = req.body;
        if (!user_id || !name) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('UPDATE projects SET user_id = ?, name = ?, description = ?, kpi = ?, due_date = ?, difficulty = ?, current_price = ?, target_price = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
        const info = stmt.run(user_id, name, description, kpi, due_date, difficulty, current_price, target_price, id);
        if (info.changes === 0) {
            return res.status(404).send('Project not found');
        }
        res.status(200).send('Project updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// メンバーの更新
app.put('/members/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, position, link } = req.body;
        if (!name) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('UPDATE members SET name = ?, position = ?, link = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
        const info = stmt.run(name, position, link, id);
        if (info.changes === 0) {
            return res.status(404).send('Member not found');
        }
        res.status(200).send('Member updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// プロジェクトメンバーの関連付けの更新
app.put('/project_members', (req, res) => {
    try {
        const { project_id, member_id } = req.body;
        if (!project_id || !member_id) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('UPDATE project_members SET updated_at = CURRENT_TIMESTAMP WHERE project_id = ? AND member_id = ?');
        const info = stmt.run(project_id, member_id);
        if (info.changes === 0) {
            return res.status(404).send('Project member association not found');
        }
        res.status(200).send('Project member association updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// 価格の更新
app.put('/objective_prices/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { project_id, objective_price, price_description } = req.body;
        if (!project_id || objective_price === undefined) {
            return res.status(400).send('Invalid input');
        }
        const stmt = db_for_app7.prepare('UPDATE objective_prices SET project_id = ?, objective_price = ?, price_description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
        const info = stmt.run(project_id, objective_price, price_description, id);
        if (info.changes === 0) {
            return res.status(404).send('Price not found');
        }
        res.status(200).send('Price updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

// パックの更新
// app.put('/packs/:id', (req, res) => {
//     try {
//         const { id
