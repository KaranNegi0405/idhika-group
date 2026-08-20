
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. public/index.html
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IDHIKA GROUP | Enterprise Architectural Portal</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,800;1,300&family=Cinzel:wght@600;700;900&display=swap" rel="stylesheet">
</head>
<body>
  <canvas id="architecture-canvas"></canvas>
  <nav class="navbar">
    <div class="logo-container" onclick="window.showPage('home')">
      <div class="nav-brand-mark"><img src="logo-master.png" alt="IDHIKA GROUP" class="nav-master-logo" onerror="this.style.display='none'"></div>
      <div class="nav-brand-text"><span class="brand-main">ÍDHIKA</span><span class="brand-sub">GROUP</span></div>
    </div>
    <button class="mobile-menu-toggle" onclick="window.toggleMobileMenu()">☰</button>
    <ul class="nav-links" id="nav-links-menu">
      <li><a href="javascript:void(0)" onclick="window.showPage('home'); window.closeMobileMenu();" class="nav-link active" id="nav-home">Home</a></li>
      <li><a href="javascript:void(0)" onclick="window.showPage('portfolio'); window.closeMobileMenu();" class="nav-link" id="nav-portfolio">Portfolio</a></li>
      <li><a href="javascript:void(0)" onclick="window.showPage('services'); window.closeMobileMenu();" class="nav-link" id="nav-services">Services</a></li>
      <li><a href="javascript:void(0)" onclick="window.showPage('team'); window.closeMobileMenu();" class="nav-link" id="nav-team">Leadership & Team</a></li>
      <li><a href="javascript:void(0)" onclick="window.showPage('wonders'); window.closeMobileMenu();" class="nav-link" id="nav-wonders">Architectural Wonders</a></li>
      <li id="nav-client-link" style="display:none;"><a href="javascript:void(0)" onclick="window.showPage('client-portal'); window.closeMobileMenu();" class="nav-link gold-link">Customer Dashboard</a></li>
      <li id="nav-employee-link" style="display:none;"><a href="javascript:void(0)" onclick="window.showPage('employee-portal'); window.closeMobileMenu();" class="nav-link gold-link">Employee Space</a></li>
      <li id="nav-admin-link" style="display:none;"><a href="javascript:void(0)" onclick="window.showPage('admin-portal'); window.closeMobileMenu();" class="nav-link gold-link">Director / Admin Console</a></li>
      <li><button id="login-nav-btn" onclick="window.openRoleModal(); window.closeMobileMenu();" class="portal-btn">Portal Login</button></li>
    </ul>
  </nav>

  <div id="page-home" class="page-section active">
    <div class="hero-viewport">
      <div class="hero-center-box">
        <div class="brand-logo-wrapper real-logo-plaque"><img src="logo-master.png" alt="IDHIKA GROUP Master Logo" class="master-hero-logo" onerror="this.style.display='none';"></div>
        <p class="hero-tagline">EXPERTISE IN TOWNSHIP, GROUP HOUSING, APARTMENTS & COMMERCIAL TOWERS ACROSS INDIA</p>
        <div class="hero-actions">
          <button onclick="window.showPage('portfolio')" class="btn btn-primary">Portfolio Showcase</button>
          <button onclick="window.showPage('team')" class="btn btn-secondary">Meet Our Leadership</button>
        </div>
      </div>
    </div>
  </div>

  <div id="page-portfolio" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Architectural Achievements & Signature Projects</h2>
      <div class="gallery-grid" id="portfolio-grid"></div>
    </div>
  </div>

  <div id="page-services" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Comprehensive Architecture & Engineering Services</h2>
      <div class="services-wrapper" id="services-container"></div>
    </div>
  </div>

  <div id="page-team" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Leadership & Professional Engineering Team</h2>
      <h3 class="gold-text" style="font-size:1.2rem; margin-bottom:1rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:0.5rem;">Managing Directors & Principal Architects</h3>
      <div class="directors-grid" id="directors-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.5rem; margin-bottom:2.5rem;"></div>
      <h3 class="gold-text" style="font-size:1.2rem; margin-bottom:1rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:0.5rem;">Specialized Consultants & Team Members</h3>
      <div class="team-grid" id="team-members-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.2rem;"></div>
    </div>
  </div>

  <div id="page-wonders" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Wonders of Architecture</h2>
      <div class="gallery-grid" id="wonders-grid"></div>
    </div>
  </div>

  <div id="page-client-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Customer Work-in-Progress Dashboard</h2>
      <div id="client-project-display"></div>
    </div>
  </div>

  <div id="page-employee-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Internal Employee Space</h2>
      <div id="employee-profile-card" class="glass-card" style="max-width:700px; margin:0 auto; border-left:3px solid var(--accent-gold);"></div>
    </div>
  </div>

  <div id="page-admin-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Director / Admin Console</h2>
      <div style="display:flex; justify-content:center; gap:1rem; margin-bottom:2rem; flex-wrap:wrap;">
        <button onclick="window.switchAdminTab('crm')" id="admin-tab-btn-crm" class="btn btn-primary" style="font-size:0.75rem;">Client CRM</button>
        <button onclick="window.switchAdminTab('team')" id="admin-tab-btn-team" class="btn btn-secondary" style="font-size:0.75rem;">Staff Directory</button>
        <button onclick="window.switchAdminTab('projects')" id="admin-tab-btn-projects" class="btn btn-secondary" style="font-size:0.75rem;">Portfolio Projects</button>
      </div>

      <div id="admin-view-crm" class="admin-tab-view"><div class="glass-card"><table class="crm-table" id="admin-leads-table"><thead><tr><th>Client</th><th>Location</th><th>Service</th><th>Manager</th><th>Status</th><th>Actions</th></tr></thead><tbody id="admin-leads-tbody"></tbody></table></div></div>
      <div id="admin-view-team" class="admin-tab-view" style="display:none;"><div class="glass-card"><table class="crm-table"><thead><tr><th>Staff</th><th>Visibility</th><th>Tenure</th><th>Actions</th></tr></thead><tbody id="admin-team-table-tbody"></tbody></table></div></div>
      <div id="admin-view-projects" class="admin-tab-view" style="display:none;"><div class="glass-card"><table class="crm-table"><thead><tr><th>Project</th><th>Location</th><th>Actions</th></tr></thead><tbody id="admin-projects-table-tbody"></tbody></table></div></div>
    </div>
  </div>

  <div id="persistent-contact-bubble" class="floating-contact-bubble" onclick="window.openLeadModal()">💬 Quick Inquiry</div>

  <!-- MODALS -->
  <div id="lead-modal" class="modal-overlay"><div class="modal-card glass-card"><h3>Customer Inquiry</h3><form onsubmit="window.handleCustomerLeadSubmit(event)"><input type="text" id="lead-name" class="form-control" placeholder="Name" required><input type="tel" id="lead-phone" class="form-control" placeholder="Phone" required><input type="email" id="lead-email" class="form-control" placeholder="Email" required><input type="text" id="lead-location" class="form-control" placeholder="Location" required><select id="lead-service" class="form-control"><option value="Architectural Design">Architectural Design</option></select><button type="submit" class="btn btn-primary" style="width:100%;">Submit</button></form></div></div>
  <div id="project-admin-modal" class="modal-overlay"><div class="modal-card glass-card"><h3>Edit Project</h3><form onsubmit="window.handleProjectFormSubmit(event)"><input type="hidden" id="proj-edit-id"><input type="text" id="proj-name" class="form-control" placeholder="Project Name" required><input type="file" id="proj-file-input" class="form-control" accept="image/*" onchange="window.previewProjectImage(event)"><input type="hidden" id="proj-img"><button type="submit" class="btn btn-primary">Save</button></form></div></div>
  <div id="staff-modal" class="modal-overlay"><div class="modal-card glass-card"><h3>Edit Staff</h3><form onsubmit="window.handleStaffFormSubmit(event)"><input type="hidden" id="staff-edit-id"><input type="text" id="staff-name" class="form-control" placeholder="Name" required><input type="file" id="staff-file-input" class="form-control" accept="image/*" onchange="window.previewLocalImage(event)"><input type="hidden" id="staff-imgurl"><button type="submit" class="btn btn-primary">Save</button></form></div></div>
  <div id="role-modal" class="modal-overlay"><div class="modal-card glass-card"><h3>Auth</h3><div class="modal-actions"><button onclick="window.switchRole('admin')" class="btn btn-primary">Director Mode</button><button onclick="window.switchRole('public')" class="btn btn-secondary">Public</button></div></div></div>

  <script src="app.js"></script>
</body>
</html>`;

// 2. public/styles.css (Simplified)
const stylesCss = `:root { --bg-dark: #07090e; --accent-gold: #d4af37; --text-main: #f8fafc; }
body { background-color: var(--bg-dark); color: var(--text-main); font-family: 'Montserrat', sans-serif; }
.navbar { display: flex; padding: 1rem; background: #000; position: sticky; top: 0; z-index: 1000; }
.page-section { display: none; padding: 2rem; }
.page-section.active { display: block; }
.glass-card { background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 8px; }
.form-control { width: 100%; padding: 0.5rem; margin: 0.5rem 0; background: #222; color: #fff; border: 1px solid #444; }
.modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.9); z-index: 2000; align-items: center; justify-content: center; }
.modal-card { background: #111; padding: 2rem; border-radius: 8px; max-width: 500px; width: 90%; }
.btn { padding: 0.5rem 1rem; cursor: pointer; border: none; }
.btn-primary { background: var(--accent-gold); color: #000; }
`;

// 3. public/app.js (with secure file upload logic)
const appJs = `
const BACKEND_URL = 'https://idhika-group.onrender.com';
let signatureProjects = [], teamMembersData = [], storedLeadsList = [];

document.addEventListener('DOMContentLoaded', async () => {
    await fetchPortalDataFromBackend();
    renderTeamMembers();
    renderPortfolio(signatureProjects);
});

async function fetchPortalDataFromBackend() {
    try {
        const res = await fetch(\`\${BACKEND_URL}/api/portal-data\`);
        const data = await res.json();
        signatureProjects = data.projects || [];
        teamMembersData = data.team || [];
        storedLeadsList = data.leads || [];
    } catch(e) { console.error(e); }
}

async function syncDataToBackend() {
    await fetch(\`\${BACKEND_URL}/api/portal-data\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leads: storedLeadsList, team: teamMembersData, projects: signatureProjects })
    });
}

// SECURE UPLOAD FUNCTIONS
async function uploadImageToServer(file) {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(\`\${BACKEND_URL}/api/upload\`, { method: 'POST', body: formData });
    const data = await res.json();
    return data.url; // Returns /uploads/filename.jpg
}

async function previewLocalImage(event) {
    const url = await uploadImageToServer(event.target.files[0]);
    document.getElementById('staff-imgurl').value = url;
    document.getElementById('image-preview-box').innerText = '✓ Securely uploaded!';
}
window.previewLocalImage = previewLocalImage;

async function previewProjectImage(event) {
    const url = await uploadImageToServer(event.target.files[0]);
    document.getElementById('proj-img').value = url;
    document.getElementById('proj-img-preview-box').innerText = '✓ Securely uploaded!';
}
window.previewProjectImage = previewProjectImage;

// NAVIGATION & RENDERING
window.showPage = (id) => {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + id).classList.add('active');
};
window.switchRole = (role) => {
    document.getElementById('role-modal').style.display = 'none';
    if(role === 'admin') window.showPage('admin-portal');
};
window.openRoleModal = () => document.getElementById('role-modal').style.display = 'flex';
window.openProjectModalAdmin = () => document.getElementById('project-admin-modal').style.display = 'flex';
window.openStaffModal = () => document.getElementById('staff-modal').style.display = 'flex';
window.openLeadModal = () => document.getElementById('lead-modal').style.display = 'flex';
window.switchAdminTab = (tab) => {
    document.querySelectorAll('.admin-tab-view').forEach(v => v.style.display = 'none');
    document.getElementById('admin-view-' + tab).style.display = 'block';
};
`;

fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);
fs.writeFileSync(path.join(publicDir, 'styles.css'), stylesCss);
fs.writeFileSync(path.join(publicDir, 'app.js'), appJs);
