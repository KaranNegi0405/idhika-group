const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Secure uploads directory configuration
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Serve uploaded files securely (or restrict if needed)
app.use('/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const DATA_FILE = path.join(__dirname, 'database.json');

function loadDb() {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = { leads: [], team: [], projects: [] };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function saveDb(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Secure Image Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded.' });
  }
  // Return the relative URL path to the uploaded image
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ success: true, url: fileUrl });
});

app.get('/api/portal-data', (req, res) => {
  const db = loadDb();
  res.json(db);
});

app.post('/api/portal-data', (req, res) => {
  const { leads, team, projects } = req.body;
  const db = loadDb();
  if (leads) db.leads = leads;
  if (team) db.team = team;
  if (projects) db.projects = projects;
  saveDb(db);
  res.json({ success: true, message: 'Data saved successfully!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('IDHIKA secure server running on port ' + PORT);
});