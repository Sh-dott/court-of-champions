const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const DB_FILE = path.join(__dirname, 'players.json');

function readDB() {
    try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
    catch(e) { return {}; }
}

function writeDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data), 'utf8');
}

// Save/update player state
app.post('/api/sync', (req, res) => {
    const { key, data } = req.body;
    if (!key || !data) return res.status(400).json({ error: 'missing' });
    const db = readDB();
    db[key] = data;
    writeDB(db);
    res.json({ ok: true });
});

// Get all players
app.get('/api/players', (req, res) => {
    const db = readDB();
    res.json(Object.values(db).filter(p => p && p.started));
});

// Delete a player
app.delete('/api/player/:key', (req, res) => {
    const db = readDB();
    delete db[req.params.key];
    writeDB(db);
    res.json({ ok: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on port ' + PORT));
