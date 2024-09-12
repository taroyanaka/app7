const express = require('express');
const bodyParser = require('body-parser');
const Database = require('better-sqlite3');

const app = express();
app.use(bodyParser.json());

// データベースの初期化
const db = new Database('database.db', { verbose: console.log });

// ユーザーテーブルの作成
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    uid TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
)`);

// プロジェクトテーブルの作成
db.exec(`
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
db.exec(`
CREATE TABLE IF NOT EXISTS members (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT,
    link TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
)`);

// プロジェクトメンバーの関連テーブルの作成
db.exec(`
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
db.exec(`
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
db.exec(`
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
db.exec(`
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
db.exec(`
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

// CRUD エンドポイントの定義

// ユーザーの作成
app.post('/users', (req, res) => {
    const { uid, name, email } = req.body;
    if (!uid || !name || !email) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO users (uid, name, email) VALUES (?, ?, ?)');
    const info = stmt.run(uid, name, email);
    res.status(201).json({ id: info.lastInsertRowid });
});

// プロジェクトの作成
app.post('/projects', (req, res) => {
    const { user_id, name, description, kpi, due_date, difficulty, current_price, target_price } = req.body;
    if (!user_id || !name) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO projects (user_id, name, description, kpi, due_date, difficulty, current_price, target_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    const info = stmt.run(user_id, name, description, kpi, due_date, difficulty, current_price, target_price);
    res.status(201).json({ id: info.lastInsertRowid });
});

// メンバーの作成
app.post('/members', (req, res) => {
    const { name, position, link } = req.body;
    if (!name) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO members (name, position, link) VALUES (?, ?, ?)');
    const info = stmt.run(name, position, link);
    res.status(201).json({ id: info.lastInsertRowid });
});

// プロジェクトメンバーの関連付け
app.post('/project_members', (req, res) => {
    const { project_id, member_id } = req.body;
    if (!project_id || !member_id) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO project_members (project_id, member_id) VALUES (?, ?)');
    const info = stmt.run(project_id, member_id);
    res.status(201).json({ id: info.lastInsertRowid });
});

// 価格の作成
app.post('/objective_prices', (req, res) => {
    const { project_id, objective_price, price_description } = req.body;
    if (!project_id || objective_price === undefined) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO objective_prices (project_id, objective_price, price_description) VALUES (?, ?, ?)');
    const info = stmt.run(project_id, objective_price, price_description);
    res.status(201).json({ id: info.lastInsertRowid });
});

// パックの作成
app.post('/packs', (req, res) => {
    const { project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date } = req.body;
    if (!project_id) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO packs (project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    const info = stmt.run(project_id, plan_description, plan_done, do_description, do_done, check_description, check_done, act_description, act_done, due_date);
    res.status(201).json({ id: info.lastInsertRowid });
});

// 改善アイデアの作成
app.post('/improvement_ideas', (req, res) => {
    const { pack_id, type, description } = req.body;
    if (!pack_id || !type) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO improvement_ideas (pack_id, type, description) VALUES (?, ?, ?)');
    const info = stmt.run(pack_id, type, description);
    res.status(201).json({ id: info.lastInsertRowid });
});

// リンクの作成
app.post('/links', (req, res) => {
    const { pack_id, improvement_idea_id, url, description } = req.body;
    if (!pack_id || !url) {
        return res.status(400).send('Invalid input');
    }
    const stmt = db.prepare('INSERT INTO links (pack_id, improvement_idea_id, url, description) VALUES (?, ?, ?, ?)');
    const info = stmt.run(pack_id, improvement_idea_id, url, description);
    res.status(201).json({ id: info.lastInsertRowid });
});

// サーバーの起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
