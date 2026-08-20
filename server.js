const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();
const nodemailer = require('nodemailer');

// Random password generator helper
function generateRandomPassword(length = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, 'public')));

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
app.use('/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, uploadDir); },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

const DATA_FILE = path.join(__dirname, 'database.json');

function loadDb() {
  if (!fs.existsSync(DATA_FILE)) {
    const initialData = {
      leads: [],
      team: [],
      projects: [],
      homeContent: {
        tagline: "EXPERTISE IN TOWNSHIP, GROUP HOUSING, APARTMENTS & COMMERCIAL TOWERS ACROSS INDIA",
        metric1Val: "10+ YRS", metric1Lbl: "Architectural Excellence",
        metric2Val: "M.ARCH / AIIA", metric2Lbl: "Certified Directors",
        metric3Val: "100% SAFE", metric3Lbl: "Structural Guarantee",
        philosophy: "We believe that quality of our surroundings—their design and construction—deeply influence the way we work, relax and live."
      },
      subCompanies: [
        { id: 1, name: "ASTRE Design Studio", subtitle: "Associate Architectural Design Studio", logo: "astre-logo.png", desc: "Collaborative design studio specializing in contemporary urban aesthetics and master planning." },
        { id: 2, name: "IDHIKA Trade & Constructions", subtitle: "Specialized Engineering & Execution", logo: "idhika-trade-logo.png", desc: "Expert structural execution, material procurement, and premium architectural delivery." }
      ]
    };
    fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2));
  }
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  if (!data.homeContent) {
    data.homeContent = {
      tagline: "EXPERTISE IN TOWNSHIP, GROUP HOUSING, APARTMENTS & COMMERCIAL TOWERS ACROSS INDIA",
      metric1Val: "10+ YRS", metric1Lbl: "Architectural Excellence",
      metric2Val: "M.ARCH / AIIA", metric2Lbl: "Certified Directors",
      metric3Val: "100% SAFE", metric3Lbl: "Structural Guarantee",
      philosophy: "We believe that quality of our surroundings—their design and construction—deeply influence the way we work, relax and live."
    };
  }
  if (!data.subCompanies) {
    data.subCompanies = [
      { id: 1, name: "ASTRE Design Studio", subtitle: "Associate Architectural Design Studio", logo: "astre-logo.png", desc: "Collaborative design studio specializing in contemporary urban aesthetics and master planning." },
      { id: 2, name: "IDHIKA Trade & Constructions", subtitle: "Specialized Engineering & Execution", logo: "idhika-trade-logo.png", desc: "Expert structural execution, material procurement, and premium architectural delivery." }
    ];
  }
  return data;
}

function saveDb(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ success: false, message: 'No file uploaded.' });
  res.json({ success: true, url: `/uploads/${req.file.filename}` });
});

app.get('/api/portal-data', (req, res) => {
  res.json(loadDb());
});

app.post('/api/portal-data', (req, res) => {
  const { leads, team, projects, homeContent, subCompanies } = req.body;
  const db = loadDb();
  if (leads) db.leads = leads;
  if (team) db.team = team;
  if (projects) db.projects = projects;
  if (homeContent) db.homeContent = homeContent;
  if (subCompanies) db.subCompanies = subCompanies;
  saveDb(db);
  res.json({ success: true, message: 'Data saved successfully!' });
});

// Configure your email transporter (Replace with your actual SMTP credentials or app password)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',         // Your sending email address
    pass: 'your-email-app-password'      // Your email app password
  }
});

// Endpoint to send the actual welcome email
app.post('/api/send-welcome-email', async (req, res) => {
  const { email, name, service, location } = req.body;

  // Generate a secure random password
  const randomPassword = generateRandomPassword(10);

  const mailOptions = {
    from: '"Ídhika Group Executive Director Office" <your-actual-email@gmail.com>', // Put your real email here
    to: email,
    subject: 'Official Welcome & Project Contract Approval — Ídhika Group',
    html: `
      <div style="font-family:Montserrat,sans-serif; background:#07090e; color:#f8fafc; padding:20px; border-radius:8px;">
        <h2 style="color:#d4af37; font-family:Cinzel,serif;">Official Welcome Email</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>🎉 Congratulations! Your project contract for <em>${service}</em> at <em>${location}</em> has been officially approved and set to PROCEED.</p>
        <p>We are thrilled to welcome you to the <strong>ÍDHIKA GROUP</strong> family. Your dedicated Customer Dashboard has been provisioned securely.</p>
        <p><strong>Secure Access Credentials:</strong></p>
        <ul>
          <li>Portal Login URL: <a href="https://yourdomain.com" style="color:#d4af37;">Access Client Portal</a></li>
          <li>Registered Email: ${email}</li>
          <li>Temporary Secure Password: <em>${randomPassword}</em> (Please update upon first login)</li>
        </ul>
        <p style="color:#d4af37; margin-top:20px;"><em>Warmest regards & best wishes,<br>Executive Director Office, Ídhika Group</em></p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    // Send the password back to the frontend so it can display it in the success popup securely
    res.status(200).json({ success: true, generatedPassword: randomPassword });
  } catch (error) {
    console.error('SMTP Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server running on port ' + PORT); });