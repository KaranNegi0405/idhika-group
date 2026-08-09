const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let projectTracker = [
  { id: 101, name: "Township Phase 1", status: "In Progress", progress: 65, employee: "Mr. ANUPAM KATIYAR", client: "Lucknow Dev Corp" },
  { id: 102, name: "Commercial Tower A", status: "Design Phase", progress: 30, employee: "Ar. SOUMAYA SAXENA", client: "Apex Heights" },
  { id: 103, name: "Group Housing Complex", status: "Completed", progress: 100, employee: "Er. RABISH KUMAR", client: "Royal Residency" }
];

let userDatabase = [
  { id: 1, name: "Ar. ANKUR SRIVASTAVA", role: "Employer / Director", email: "ankur@idhikagroup.com" },
  { id: 2, name: "Ar. PRATEEK SRIVASTAVA", role: "Employer / Director", email: "prateek@idhikagroup.com" },
  { id: 3, name: "Mr. ANUPAM KATIYAR", role: "Employee (Project Manager)", email: "anupam@idhikagroup.com" },
  { id: 4, name: "Client User", role: "Client", email: "client@external.com" }
];

app.get('/api/content', (req, res) => {
  const contentPath = path.join(__dirname, 'data', 'content.json');
  fs.readFile(contentPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read content file" });
    res.json(JSON.parse(data));
  });
});

app.get('/api/projects', (req, res) => { res.json(projectTracker); });

app.post('/api/projects/update', (req, res) => {
  const { id, progress, status } = req.body;
  const proj = projectTracker.find(p => p.id === parseInt(id));
  if (proj) {
    if (progress !== undefined) proj.progress = parseInt(progress);
    if (status) proj.status = status;
    return res.json({ success: true, project: proj });
  }
  res.status(404).json({ error: "Project not found" });
});

app.get('/api/users', (req, res) => { res.json(userDatabase); });

app.listen(PORT, () => {
  console.log(`IDHIKA GROUP Server running on http://localhost:${PORT}`);
});