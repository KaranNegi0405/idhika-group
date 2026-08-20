const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' })); // Allow large Base64 image payloads
app.use(express.static(path.join(__dirname, 'public')));

const DATA_FILE = path.join(__dirname, 'database.json');

// Helper to load data
function loadDb() {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      leads: [],
      team: [],
      projects: []
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// Helper to save data
function saveDb(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// API: Get all portal data (Projects, Team, Leads)
app.get('/api/portal-data', (req, res) => {
  const db = loadDb();
  res.json(db);
});

// API: Save/Update portal data globally
app.post('/api/portal-data', (req, res) => {
  const { leads, team, projects } = req.body;
  const db = loadDb();
  if (leads) db.leads = leads;
  if (team) db.team = team;
  if (projects) db.projects = projects;
  saveDb(db);
  res.json({ success: true, message: 'Data saved successfully for all users!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('IDHIKA server running on port ' + PORT);
});