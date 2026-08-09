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

  <!-- Ambient Architectural Blueprint Canvas -->
  <canvas id="architecture-canvas"></canvas>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="logo-container" onclick="showPage('home')">
      <div class="nav-brand-mark">
        <img src="logo-master.png" alt="IDHIKA GROUP" class="nav-master-logo" onerror="this.style.display='none'">
      </div>
      <div class="nav-brand-text">
        <span class="brand-main">ÍDHIKA</span>
        <span class="brand-sub">GROUP</span>
      </div>
    </div>

    <ul class="nav-links">
      <li><a href="#" onclick="showPage('home')" class="nav-link active" id="nav-home">Home</a></li>
      <li><a href="#" onclick="showPage('portfolio')" class="nav-link" id="nav-portfolio">Portfolio</a></li>
      <li><a href="#" onclick="showPage('services')" class="nav-link" id="nav-services">Services</a></li>
      <li><a href="#" onclick="showPage('wonders')" class="nav-link" id="nav-wonders">Architectural Wonders</a></li>
      <li id="nav-client-link" style="display:none;"><a href="#" onclick="showPage('client-portal')" class="nav-link gold-link">My Project Tracker</a></li>
      <li id="nav-employee-link" style="display:none;"><a href="#" onclick="showPage('employee-portal')" class="nav-link gold-link">Employee Space</a></li>
      <li id="nav-admin-link" style="display:none;"><a href="#" onclick="showPage('admin-portal')" class="nav-link gold-link">Director Console</a></li>
      <li><button id="login-nav-btn" onclick="openRoleModal()" class="portal-btn">Portal Login</button></li>
    </ul>
  </nav>

  <!-- PAGE 1: HOME -->
  <div id="page-home" class="page-section active">
    <div class="hero-viewport">
      <div class="hero-center-box">
        
        <!-- MASTER LOGO CONTAINER -->
        <div class="brand-logo-wrapper">
          <img src="logo-master.png" alt="IDHIKA GROUP Master Logo" class="master-hero-logo" onerror="this.style.display='none';">
        </div>

        <p class="hero-tagline">EXPERTISE IN TOWNSHIP, GROUP HOUSING, APARTMENTS & COMMERCIAL TOWERS ACROSS INDIA</p>

        <!-- Trust Badges -->
        <div class="trust-metrics-strip">
          <div class="trust-badge"><span class="trust-val">10+ YRS</span><span class="trust-lbl">Architectural Excellence</span></div>
          <div class="trust-divider"></div>
          <div class="trust-badge"><span class="trust-val">M.ARCH / AIIA</span><span class="trust-lbl">Certified Directors</span></div>
          <div class="trust-divider"></div>
          <div class="trust-badge"><span class="trust-val">100% SAFE</span><span class="trust-lbl">Structural Guarantee</span></div>
        </div>

        <!-- Hero Actions with Working Buttons -->
        <div class="hero-actions">
          <button onclick="showPage('portfolio')" class="btn btn-primary">Portfolio Showcase</button>
          <button onclick="openVideoModal()" class="btn btn-secondary">▶ Watch Brand Intro</button>
        </div>
      </div>

      <div class="compact-philosophy-bar glass-card">
        <h3>OUR PHILOSOPHY</h3>
        <p>"We believe that quality of our surroundings—their design and construction—deeply influence the way we work, relax and live."</p>
      </div>
    </div>
  </div>

  <!-- PAGE 2: PUBLIC ARCHITECTURAL PORTFOLIO -->
  <div id="page-portfolio" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Architectural Achievements & Signature Projects</h2>
      <p style="text-align:center; color:var(--text-muted); margin-bottom:2rem;">Click on any project to view detailed architectural floor plans and 3D renders.</p>
      <div class="gallery-grid" id="portfolio-grid"></div>
    </div>
  </div>

  <!-- PAGE 3: SERVICES -->
  <div id="page-services" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Comprehensive Architecture & Engineering Services</h2>
      <p style="text-align:center; color:var(--text-muted); max-width:750px; margin:0 auto 2.5rem; line-height:1.6;">Explore our core architectural domains. Click any service card to expand technical scope and included deliverables.</p>
      <div class="services-wrapper" id="services-container"></div>
    </div>
  </div>

  <!-- PAGE 4: ARCHITECTURAL WONDERS & TRIBUTE -->
  <div id="page-wonders" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Wonders of Architecture: A Tribute to Human Ingenuity</h2>
      <p style="text-align:center; color:var(--text-muted); max-width:800px; margin:0 auto 2.5rem; line-height:1.7;">Architecture shapes civilizations and elevates human spirit. At IDHIKA GROUP, we draw endless inspiration from world-renowned masterworks that define structural engineering, aesthetic harmony, and timeless design.</p>
      <div class="gallery-grid" id="wonders-grid"></div>
    </div>
  </div>

  <!-- PAGE 5: CLIENT STAGE TRACKER -->
  <div id="page-client-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Client Signed-off Project Progress</h2>
      <div class="glass-card client-search-card">
        <p>Enter your assigned Project Reference ID to monitor active stage progress:</p>
        <div class="search-box">
          <input type="number" id="client-project-id" placeholder="e.g. 101" value="101">
          <button onclick="searchClientProject()" class="btn btn-primary">Track Stage</button>
        </div>
      </div>
      <div id="client-project-display" class="client-display-grid"></div>
    </div>
  </div>

  <!-- PAGE 6: EMPLOYEE SPACE -->
  <div id="page-employee-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Employee Portal & Site Calendar</h2>
      <div class="employee-layout">
        <div class="employee-card glass-card">
          <h3 class="gold-text">My Assigned Site Projects</h3>
          <div id="employee-assigned-projects"></div>
        </div>
        <div class="employee-card glass-card">
          <h3 class="gold-text">Working Dates & Leave Calendar</h3>
          <div class="calendar-grid">
            <div class="cal-day head">M</div><div class="cal-day head">T</div><div class="cal-day head">W</div><div class="cal-day head">T</div><div class="cal-day head">F</div><div class="cal-day head">S</div><div class="cal-day head">S</div>
            <div class="cal-day"></div><div class="cal-day"></div><div class="cal-day"></div><div class="cal-day"></div><div class="cal-day"></div><div class="cal-day">1</div><div class="cal-day sunday">2</div>
            <div class="cal-day">3</div><div class="cal-day site-work">4</div><div class="cal-day site-work">5</div><div class="cal-day">6</div><div class="cal-day">7</div><div class="cal-day">8</div><div class="cal-day sunday">9</div>
            <div class="cal-day leave">10</div><div class="cal-day leave">11</div><div class="cal-day">12</div><div class="cal-day site-work">13</div><div class="cal-day">14</div><div class="cal-day">15</div><div class="cal-day sunday">16</div>
            <div class="cal-day">17</div><div class="cal-day">18</div><div class="cal-day">19</div><div class="cal-day">20</div><div class="cal-day">21</div><div class="cal-day">22</div><div class="cal-day sunday">23</div>
            <div class="cal-day">24</div><div class="cal-day">25</div><div class="cal-day">26</div><div class="cal-day">27</div><div class="cal-day">28</div><div class="cal-day">29</div><div class="cal-day sunday">30</div>
          </div>
          <div class="calendar-legend">
            <span><span class="legend-box site-work"></span> Assigned Site Visit</span>
            <span><span class="legend-box leave"></span> Approved Leave</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- PAGE 7: DIRECTOR / ADMIN CMS CONSOLE -->
  <div id="page-admin-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Director Management & Feedback Console</h2>
      <div class="admin-grid">
        <div class="glass-card">
          <h3 class="gold-text">Submitted Client Phase 1 Feedback</h3>
          <div id="admin-feedback-list"><p style="color:var(--text-muted); font-size:0.85rem;">No client feedback submitted yet.</p></div>
        </div>
        <div class="glass-card">
          <h3 class="gold-text">All Projects Milestone Controls</h3>
          <div id="admin-project-controls"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- YouTube Video Modal Overlay -->
  <div id="youtube-video-modal" class="modal-overlay" onclick="closeVideoModal()">
    <div class="modal-card glass-card video-modal-container" onclick="event.stopPropagation()">
      <h3 class="gold-text" style="margin-bottom:1rem;">IDHIKA GROUP Brand Experience</h3>
      <div class="video-responsive-wrapper">
        <iframe id="youtube-iframe" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <button onclick="closeVideoModal()" class="close-modal-btn" style="margin-top:1.2rem; font-size:0.9rem;">✕ Close Video</button>
    </div>
  </div>

  <!-- Floating Feedback Button -->
  <button onclick="openFeedbackModal()" class="floating-feedback-btn">💬 Phase 1 Feedback</button>

  <!-- Feedback Submission Modal -->
  <div id="feedback-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Submit Phase 1 Client Feedback</h3>
      <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">We value your thoughts! Let us know your suggestions or observations on Phase 1:</p>
      <div style="text-align:left; margin-bottom:1rem;">
        <label style="font-size:0.80rem; color:var(--accent-gold);">Feedback Category:</label>
        <select id="feedback-category" class="form-control" style="margin-top:0.3rem;">
          <option value="General Review">General Review & Overall Impression</option>
          <option value="Design & Layout">Logo / Visual Design & Page Layout</option>
          <option value="Services & Portfolio">Services & Portfolio Content</option>
        </select>
      </div>
      <div style="text-align:left; margin-bottom:1rem;">
        <label style="font-size:0.80rem; color:var(--accent-gold);">Your Feedback / Notes:</label>
        <textarea id="feedback-text" class="form-control" rows="4" placeholder="Enter your suggestions here..." style="margin-top:0.3rem; resize:vertical;"></textarea>
      </div>
      <div class="modal-actions"><button onclick="submitClientFeedback()" class="btn btn-primary">Submit Feedback</button></div>
      <button onclick="closeFeedbackModal()" class="close-modal-btn">✕ Close</button>
    </div>
  </div>

  <!-- Role Switcher Modal -->
  <div id="role-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Portal Authentication</h3>
      <p>Log in to view restricted company environments:</p>
      <div class="modal-actions">
        <button onclick="switchRole('client')" class="btn btn-secondary">Client Access Portal</button>
        <button onclick="switchRole('employee')" class="btn btn-secondary">Employee Space Login</button>
        <button onclick="switchRole('admin')" class="btn btn-primary">Director / Admin Console</button>
        <button onclick="switchRole('public')" class="btn btn-secondary" style="border-color:rgba(255,255,255,0.2);">Log Out / Public Mode</button>
      </div>
      <button onclick="closeRoleModal()" class="close-modal-btn">✕ Close</button>
    </div>
  </div>

  <!-- Project Detail Lightbox Modal -->
  <div id="project-detail-modal" class="modal-overlay">
    <div class="modal-card glass-card project-modal-wide">
      <h3 id="modal-proj-name" class="gold-text" style="font-size:1.6rem;">Project Name</h3>
      <div id="modal-proj-content"></div>
      <button onclick="closeProjectModal()" class="close-modal-btn" style="margin-top:1.5rem; font-size:0.9rem;">✕ Close Project Details</button>
    </div>
  </div>

  <!-- Interactive Image Zoom Overlay -->
  <div id="image-zoom-overlay" class="zoom-modal-overlay" onclick="closeZoomModal()">
    <img id="zoomed-image-target" class="zoomed-image" src="" alt="Zoomed View">
    <div class="zoom-close-hint">Click anywhere to exit zoom</div>
  </div>

  <script src="app.js"></script>
</body>
</html>`;

// 2. public/styles.css
const stylesCss = `:root {
  --bg-dark: #07090e;
  --bg-card: rgba(18, 23, 31, 0.90);
  --accent-gold: #d4af37;
  --metallic-silver: #e2e8f0;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-chrome: rgba(226, 232, 240, 0.12);
  --glass-border: rgba(255, 255, 255, 0.08);
}
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Montserrat', sans-serif; }
body { background-color: var(--bg-dark); color: var(--text-main); line-height: 1.5; overflow-x: hidden; }
#architecture-canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; pointer-events: none; background: radial-gradient(circle at 50% 35%, #0f172a 0%, #07090e 85%); }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 5%; background: rgba(7, 9, 14, 0.95); backdrop-filter: blur(20px); position: fixed; top: 0; width: 100%; z-index: 1000; border-bottom: 1px solid var(--border-chrome); }
.logo-container { display: flex; align-items: center; gap: 10px; cursor: pointer; }
.nav-master-logo { height: 36px; width: auto; background: transparent; mix-blend-mode: screen; }
.nav-brand-text { display: flex; align-items: baseline; gap: 6px; }
.brand-main { font-family: 'Cinzel', serif; font-size: 1.2rem; font-weight: 800; letter-spacing: 2px; background: linear-gradient(180deg, #ffffff 0%, #cbd5e1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.brand-sub { font-family: 'Montserrat', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 2px; color: var(--accent-gold); }
.nav-links { display: flex; list-style: none; gap: 1.5rem; align-items: center; }
.nav-link { color: var(--text-main); text-decoration: none; font-size: 0.82rem; font-weight: 500; transition: 0.3s; letter-spacing: 0.5px; }
.nav-link.active, .nav-link:hover { color: var(--accent-gold); }
.gold-link { color: var(--accent-gold) !important; font-weight: 700; }
.portal-btn { background: linear-gradient(135deg, var(--accent-gold) 0%, #997a15 100%); color: #000; padding: 0.45rem 1.1rem; border-radius: 3px; font-weight: 700; border: none; cursor: pointer; font-size: 0.75rem; text-transform: uppercase; }
.page-section { display: none; min-height: calc(100vh - 65px); padding-top: 65px; position: relative; z-index: 10; opacity: 0; transition: opacity 0.4s ease; }
.page-section.active { display: block; opacity: 1; }
.hero-viewport { height: calc(100vh - 65px); display: flex; flex-direction: column; justify-content: space-between; padding: 0.8rem 5% 1rem; }
.hero-center-box { text-align: center; margin: auto 0; }
.brand-logo-wrapper { max-width: 480px; margin: 0 auto; display: flex; justify-content: center; align-items: center; }
.master-hero-logo { width: 100%; height: auto; display: block; background: transparent; mix-blend-mode: screen; filter: drop-shadow(0 15px 35px rgba(0,0,0,0.95)); }

/* YouTube Video Modal Styles */
.video-modal-container { max-width: 850px; width: 90%; text-align: center; }
.video-responsive-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 6px; border: 1px solid var(--glass-border); margin-top: 1rem; }
.video-responsive-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }

.hero-tagline { max-width: 750px; margin: 0.6rem auto 0.8rem; color: var(--text-muted); font-size: 0.8rem; letter-spacing: 1.5px; }
.trust-metrics-strip { display: flex; justify-content: center; align-items: center; gap: 1.5rem; margin: 0.6rem auto 1.2rem; padding: 0.5rem 1.5rem; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 20px; max-width: 650px; }
.trust-badge { text-align: center; }
.trust-val { display: block; font-weight: 800; font-size: 0.85rem; color: var(--accent-gold); letter-spacing: 1px; }
.trust-lbl { display: block; font-size: 0.68rem; color: var(--text-muted); }
.trust-divider { width: 1px; height: 22px; background: var(--border-chrome); }
.hero-actions { display: flex; gap: 1.2rem; justify-content: center; }
.btn { padding: 0.75rem 1.8rem; border: none; border-radius: 2px; cursor: pointer; font-weight: 600; font-size: 0.8rem; transition: 0.3s; text-transform: uppercase; text-decoration: none; display: inline-block; }
.btn-primary { background: var(--accent-gold); color: #000; }
.btn-secondary { background: rgba(255, 255, 255, 0.05); color: #fff; border: 1px solid var(--border-chrome); }
.compact-philosophy-bar { text-align: center; padding: 1rem 2rem; }
.compact-philosophy-bar h3 { font-family: 'Cinzel', serif; font-size: 0.95rem; color: var(--metallic-silver); letter-spacing: 3px; margin-bottom: 0.2rem; }
.compact-philosophy-bar p { font-size: 0.82rem; font-style: italic; color: var(--text-muted); }
.container { width: 90%; max-width: 1280px; margin: 0 auto; }
.section-padding { padding: 3rem 0; }
.section-title { font-family: 'Cinzel', serif; font-size: 2rem; text-anchor: middle; text-align: center; margin-bottom: 1.5rem; letter-spacing: 3px; color: var(--metallic-silver); }
.glass-card { background: var(--bg-card); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 8px; padding: 2rem; }
.gold-text { color: var(--accent-gold); margin-bottom: 1rem; font-family: 'Cinzel', serif; }
.floating-feedback-btn { position: fixed; bottom: 24px; right: 24px; background: linear-gradient(135deg, var(--accent-gold) 0%, #997a15 100%); color: #000; padding: 0.75rem 1.4rem; border-radius: 30px; font-weight: 800; font-size: 0.82rem; border: none; cursor: pointer; box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35); z-index: 1500; transition: transform 0.3s ease, box-shadow 0.3s ease; }
.floating-feedback-btn:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(212, 175, 55, 0.5); }
.services-wrapper { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.8rem; }
.service-card { background: var(--bg-card); border: 1px solid var(--glass-border); padding: 1.8rem; border-radius: 8px; transition: transform 0.3s ease, border-color 0.3s ease; }
.service-card:hover { border-color: var(--accent-gold); transform: translateY(-2px); }
.service-icon-head { display: flex; align-items: center; gap: 12px; margin-bottom: 0.8rem; }
.service-icon-badge { width: 38px; height: 38px; border-radius: 50%; background: rgba(212, 175, 55, 0.12); border: 1px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-gold); font-size: 0.95rem; }
.service-short-summary { font-size: 0.88rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.2rem; }
.expand-details-btn { width: 100%; padding: 0.6rem; background: rgba(255,255,255,0.04); border: 1px solid var(--border-chrome); color: var(--accent-gold); border-radius: 4px; cursor: pointer; font-size: 0.78rem; font-weight: 600; text-transform: uppercase; transition: 0.3s; }
.expand-details-btn:hover { background: rgba(212, 175, 55, 0.15); }
.service-drawer-content { display: none; margin-top: 1.2rem; padding-top: 1.2rem; border-top: 1px dashed var(--border-chrome); animation: fadeIn 0.3s ease; }
.service-drawer-content.active { display: block; }
.drawer-tech-desc { font-size: 0.83rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.6; }
.deliverables-grid { display: grid; grid-template-columns: 1fr; gap: 0.6rem; }
.deliverable-item { background: rgba(0,0,0,0.4); padding: 0.5rem 0.8rem; border-radius: 4px; border-left: 3px solid var(--accent-gold); font-size: 0.8rem; color: var(--metallic-silver); }
.gallery-grid, .employee-layout, .admin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.8rem; }
.portfolio-card { background: var(--bg-card); border: 1px solid var(--glass-border); padding: 1.8rem; border-radius: 6px; transition: transform 0.3s ease, border-color 0.3s ease; }
.portfolio-card:hover { transform: translateY(-4px); border-color: var(--accent-gold); }
.wonder-card-img { width: 100%; height: 200px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem; border: 1px solid var(--glass-border); background: #0b0f17; }
.wonder-link-btn { margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.75rem; width: 100%; text-align: center; }
.project-modal-wide { max-width: 950px; text-align: left; }
.modal-spec-box { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem; margin-top: 1rem; }
.modal-image-container { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; }
.project-render-wrapper { position: relative; overflow: hidden; border-radius: 6px; border: 1px solid var(--glass-border); cursor: zoom-in; }
.project-render-wrapper:hover { border-color: var(--accent-gold); }
.project-render-img { width: 100%; height: auto; display: block; object-fit: cover; transition: transform 0.4s ease; }
.project-render-wrapper:hover .project-render-img { transform: scale(1.04); }
.zoom-badge { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.75); color: var(--accent-gold); padding: 4px 8px; border-radius: 3px; font-size: 0.72rem; font-weight: 600; pointer-events: none; }
.zoom-modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.93); backdrop-filter: blur(15px); z-index: 3000; align-items: center; justify-content: center; cursor: zoom-out; }
.zoomed-image { max-width: 92vw; max-height: 92vh; object-fit: contain; border-radius: 6px; border: 1px solid var(--accent-gold); box-shadow: 0 0 40px rgba(212, 175, 55, 0.25); }
.zoom-close-hint { position: absolute; bottom: 20px; color: var(--text-muted); font-size: 0.85rem; letter-spacing: 1px; }
.search-box { display: flex; gap: 1rem; margin-top: 1rem; }
.search-box input, .form-control { flex: 1; padding: 0.7rem; background: rgba(0,0,0,0.5); border: 1px solid var(--border-chrome); color: #fff; border-radius: 4px; }
.stage-timeline { margin-top: 1rem; border-left: 2px solid var(--accent-gold); padding-left: 1rem; }
.stage-item { margin-bottom: 0.8rem; font-size: 0.85rem; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center; margin-top: 1rem; }
.cal-day { padding: 0.6rem 0; background: rgba(255,255,255,0.03); border-radius: 3px; font-size: 0.8rem; }
.cal-day.head { font-weight: 700; color: var(--accent-gold); background: transparent; }
.cal-day.sunday { color: #f87171; }
.cal-day.site-work { background: rgba(212, 175, 55, 0.3); border: 1px solid var(--accent-gold); font-weight: 700; }
.cal-day.leave { background: rgba(239, 68, 68, 0.3); border: 1px solid #ef4444; }
.calendar-legend { display: flex; gap: 1.5rem; margin-top: 1rem; font-size: 0.78rem; color: var(--text-muted); }
.legend-box { display: inline-block; width: 12px; height: 12px; margin-right: 5px; border-radius: 2px; }
.modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); z-index: 2000; align-items: center; justify-content: center; }
.modal-card { width: 90%; text-align: center; position: relative; max-height: 90vh; overflow-y: auto; }
.modal-actions { display: flex; flex-direction: column; gap: 1rem; margin: 1.5rem 0; }
.close-modal-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.8rem; }`;

// 3. public/app.js
const appJs = `document.addEventListener('DOMContentLoaded', () => {
  initSubtleArchitecturalBackground();
  renderDetailedServices();
  fetchProjects();
  renderArchitecturalWonders();
});

let currentRole = 'public';
const storedFeedbackList = [];

function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
  const activePage = document.getElementById('page-' + pageId);
  const activeNav = document.getElementById('nav-' + pageId);
  
  if (activePage) { 
    activePage.classList.add('active'); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
  if (activeNav) {
    activeNav.classList.add('active');
  }
}

function openRoleModal() { document.getElementById('role-modal').style.display = 'flex'; }
function closeRoleModal() { document.getElementById('role-modal').style.display = 'none'; }
function closeProjectModal() { document.getElementById('project-detail-modal').style.display = 'none'; }
function openFeedbackModal() { document.getElementById('feedback-modal').style.display = 'flex'; }
function closeFeedbackModal() { document.getElementById('feedback-modal').style.display = 'none'; }

// YouTube Video Modal Controllers
function openVideoModal() {
  const modal = document.getElementById('youtube-video-modal');
  const iframe = document.getElementById('youtube-iframe');
  if (modal && iframe) {
    // Adding &rel=0 hides external recommended videos at the end
    iframe.src = "https://www.youtube.com/embed/ECLLSN3Nqkc?autoplay=1&rel=0";
    modal.style.display = 'flex';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('youtube-video-modal');
  const iframe = document.getElementById('youtube-iframe');
  if (modal && iframe) {
    iframe.src = "";
    modal.style.display = 'none';
  }
}

function submitClientFeedback() {
  const category = document.getElementById('feedback-category').value;
  const text = document.getElementById('feedback-text').value;

  if (!text.trim()) { alert('Please type your feedback before submitting.'); return; }

  const newFeedback = {
    id: Date.now(),
    category: category,
    text: text,
    date: new Date().toLocaleDateString()
  };
  storedFeedbackList.push(newFeedback);
  renderAdminFeedback();

  document.getElementById('feedback-text').value = '';
  closeFeedbackModal();
  alert('Thank you! Your feedback has been submitted to the Directors.');
}

function renderAdminFeedback() {
  const container = document.getElementById('admin-feedback-list');
  if (container) {
    if (storedFeedbackList.length === 0) {
      container.innerHTML = '<p style="color:var(--text-muted); font-size:0.85rem;">No client feedback submitted yet.</p>';
    } else {
      container.innerHTML = storedFeedbackList.map(f => \`
        <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">
            <span style="font-weight:700; color:var(--accent-gold); font-size:0.85rem;">[\${f.category}]</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">\${f.date}</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-main);">"\${f.text}"</p>
        </div>
      \`).join('');
    }
  }
}

function openZoomModal(imgSrc) {
  const overlay = document.getElementById('image-zoom-overlay');
  const imgTarget = document.getElementById('zoomed-image-target');
  if (overlay && imgTarget) { imgTarget.src = imgSrc; overlay.style.display = 'flex'; }
}
function closeZoomModal() {
  const overlay = document.getElementById('image-zoom-overlay');
  if (overlay) overlay.style.display = 'none';
}

function toggleServiceDrawer(index) {
  const drawer = document.getElementById('service-drawer-' + index);
  const btn = document.getElementById('service-btn-' + index);
  if (drawer && btn) {
    if (drawer.classList.contains('active')) {
      drawer.classList.remove('active');
      btn.innerText = 'Explore Deliverables & Scope ↓';
    } else {
      drawer.classList.add('active');
      btn.innerText = 'Hide Details ↑';
    }
  }
}

function switchRole(role) {
  currentRole = role;
  closeRoleModal();
  const clientLink = document.getElementById('nav-client-link');
  const empLink = document.getElementById('nav-employee-link');
  const adminLink = document.getElementById('nav-admin-link');
  const loginBtn = document.getElementById('login-nav-btn');

  clientLink.style.display = 'none'; empLink.style.display = 'none'; adminLink.style.display = 'none';

  if (role === 'client') {
    clientLink.style.display = 'block'; loginBtn.innerText = 'Log Out (Client)'; showPage('client-portal');
  } else if (role === 'employee') {
    empLink.style.display = 'block'; loginBtn.innerText = 'Log Out (Employee)'; showPage('employee-portal');
  } else if (role === 'admin') {
    clientLink.style.display = 'block'; empLink.style.display = 'block'; adminLink.style.display = 'block'; loginBtn.innerText = 'Log Out (Director)'; showPage('admin-portal');
  } else {
    loginBtn.innerText = 'Portal Login'; showPage('home');
  }
}

function initSubtleArchitecturalBackground() {
  const canvas = document.getElementById('architecture-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();
  let offset = 0;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.03)'; ctx.lineWidth = 1;
    const gridSize = 50; offset += 0.15; if (offset >= gridSize) offset = 0;
    for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
    for (let y = offset; y < canvas.height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
    requestAnimationFrame(render);
  }
  render();
}

const detailedServicesData = [
  { num: "1", title: "ARCHITECTURAL DESIGN", clientSummary: "We turn your spatial needs and site conditions into functional, high-value blueprints tailored precisely to your budget and municipal guidelines.", description: "Great Architectural Design emerges from a careful analysis of project requirements, client goals, and budgetary constraints through all development phases.", deliverables: ["Programming & Spatial Requirements Analysis", "Preliminary Conceptual Design Schematics", "Comprehensive Budget Development", "Advanced Design Development & Specifications", "Detailed Estimates & Material Schedules", "3-D Presentations, Photorealistic Renders & Physical Models", "Computer-Aided Drafting and Design (CADD / BIM)", "Post-Construction Quality Inspections & Support"] },
  { num: "2", title: "STRUCTURAL ENGINEERING", clientSummary: "Complete safety assurance. Our structural engineers compute soil mechanics, load distributions, and foundation depths for long-term safety.", description: "Structural Engineering balances costs, materials, and labor early at the schematic phase, extending through construction documentation.", deliverables: ["Structural Steel Framework Design & Detailing", "Reinforced Concrete Structure (RCC) Design", "Soil Mechanics Analysis & Load Capacities", "Foundation Depth & Substructure Engineering", "Seismic & Wind Resistance Load Calculations", "Contractor Technical Inputs & Quality Coordination"] },
  { num: "3", title: "MASTER & LAND PLANNING", clientSummary: "Smart site development. We analyze site topographies, road access, and environmental features to maximize plot utility.", description: "Land Planning addresses complex interplay between architecture, utility infrastructure, and environmental preservation.", deliverables: ["Comprehensive Master Planning & Zoning", "Site Topography Analysis & Feasibility Studies", "Optimal Plot Layout & Circulation Design", "Utility Infrastructure Analysis (Water, Power, Drainage)", "Environmental Conservation Integration"] },
  { num: "4", title: "INTERIOR ARCHITECTURE", clientSummary: "Luxurious indoor spaces. We design interior layouts that optimize natural light, ventilation, furniture circulation, and modern acoustic comfort.", description: "Interior Design investigates functional client requirements, building systems, and premium material expressions.", deliverables: ["Interior Space Planning & Ergonomic Layouts", "Complete Building Renovation & Modernization", "Adaptive Re-use of Existing Structures", "Acoustic, Lighting & Material Specification", "Custom Millwork, Joinery & Lighting Schematics"] },
  { num: "5", title: "LANDSCAPE ARCHITECTURE", clientSummary: "Vibrant exterior environments. We design outdoor gardens, pathways, lighting, and screening elements tailored to local soil conditions.", description: "Enhances aesthetics and functionality of exterior environments—from pathways and streetscapes to exterior lighting and native plants.", deliverables: ["Exterior Environmental & Garden Master Plans", "Pathway, Courtyard & Streetscape Engineering", "Screening, Buffering & Privacy Boundaries", "Exterior Lighting & Water Feature Components", "Eco-Native Plant Selection for Local Soil Conditions"] }
];

function renderDetailedServices() {
  const container = document.getElementById('services-container');
  if (container) {
    container.innerHTML = detailedServicesData.map((s, idx) => \`
      <div class="service-card">
        <div class="service-icon-head"><div class="service-icon-badge">\${s.num}</div><h3 class="gold-text" style="font-size:1.25rem; margin-bottom:0;">\${s.title}</h3></div>
        <p class="service-short-summary">\${s.clientSummary}</p>
        <button id="service-btn-\${idx}" onclick="toggleServiceDrawer(\${idx})" class="expand-details-btn">Explore Deliverables & Scope ↓</button>
        <div id="service-drawer-\${idx}" class="service-drawer-content">
          <p class="drawer-tech-desc">\${s.description}</p>
          <h4 style="font-size:0.82rem; color:var(--accent-gold); margin-bottom:0.6rem; text-transform:uppercase;">Included Technical Deliverables:</h4>
          <div class="deliverables-grid">\${s.deliverables.map(item => \`<div class="deliverable-item">✓ \${item}</div>\`).join('')}</div>
        </div>
      </div>
    \`).join('');
  }
}

const architecturalWonders = [
  { name: "TAJ MAHAL", location: "Agra, India", archetype: "Symmetrical Marble Perfection", description: "The supreme masterpiece of Mughal architecture, world-renowned for absolute bilateral symmetry, translucent white marble, and optical balance.", image: "wonder-taj.jpg", googleUrl: "https://www.google.com/search?q=Taj+Mahal+Architecture" },
  { name: "KAILASA TEMPLE", location: "Ellora Caves, Maharashtra, India", archetype: "Monolithic Rock-Cut Masterpiece", description: "Carved from top to bottom out of a single basalt cliff face, this 8th-century monolithic wonder excavated over 200,000 tons of rock without structural jointing.", image: "wonder-kailasa.jpg", googleUrl: "https://www.google.com/search?q=Kailasa+Temple+Ellora+Architecture" },
  { name: "LOTUS TEMPLE", location: "New Delhi, India", archetype: "Expressionist Biomimetic Design", description: "Composed of 27 free-standing marble clad petals arranged in clusters of three, forming a lotus flower structure with natural passive ventilation.", image: "wonder-lotus.jpg", googleUrl: "https://www.google.com/search?q=Lotus+Temple+Delhi+Architecture" },
  { name: "BURJ KHALIFA", location: "Dubai, UAE", archetype: "Buttressed Core Skyscraper", description: "Standing at 828m, this skyscraper utilizes a Y-shaped buttressed core system inspired by desert flora to optimize wind load distribution.", image: "wonder-burj.jpg", googleUrl: "https://www.google.com/search?q=Burj+Khalifa+Architectural+Engineering" },
  { name: "FALLINGWATER", location: "Pennsylvania, USA", archetype: "Organic Cantilever Architecture", description: "Designed by Frank Lloyd Wright, this home bridges architecture and nature by cantilevering concrete balconies directly over a mountain waterfall.", image: "wonder-fallingwater.jpg", googleUrl: "https://www.google.com/search?q=Fallingwater+Frank+Lloyd+Wright" },
  { name: "LA SAGRADA FAMÍLIA", location: "Barcelona, Spain", archetype: "Hyperbolic Biomimetic Vaults", description: "Antoni Gaudí’s ongoing basilica masterpiece featuring tree-like branching column vaults that transfer structural loads without heavy external buttresses.", image: "wonder-sagrada.jpg", googleUrl: "https://www.google.com/search?q=La+Sagrada+Familia+Architecture" }
];

function renderArchitecturalWonders() {
  const container = document.getElementById('wonders-grid');
  if (container) {
    container.innerHTML = architecturalWonders.map(w => \`
      <div class="portfolio-card">
        <img src="\${w.image}" alt="\${w.name}" class="wonder-card-img" onerror="this.style.display='none';">
        <h3 class="gold-text" style="font-size:1.15rem; margin-bottom:0.2rem;">\${w.name}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.6rem;"><strong>\${w.location}</strong> — \${w.archetype}</p>
        <p style="font-size:0.82rem; line-height:1.6; margin-bottom:1rem;">\${w.description}</p>
        <a href="\${w.googleUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary wonder-link-btn">Explore on Google Search ↗</a>
      </div>
    \`).join('');
  }
}

const signatureProjects = [
  { id: 101, name: "DREAM GALAXY", type: "Housing & Commercial Mall Complex", location: "Near New Amity Campus Malhor, Lucknow", description: "A premier housing project featuring 216 luxury flats and an integrated commercial shopping mall, designed on a sprawling 1.7-acre prime urban site.", image: "dream-galaxy.jpg", planImage: "dream-galaxy-plan.jpg", specs: ["Site Area: 1.7 Acres", "Flats: 216 Residential Units", "Commercial Mall Integrated", "Location: Lucknow"] },
  { id: 102, name: "GOPAL CRYSTAL TOWER", type: "Luxury Group Housing Tower", location: "Raebareli Central City Area", description: "Luxury group housing development offering over 100 premium flats over a site area of 65,000 sq.ft., combining contemporary comfort with architectural luxury.", image: "gopal-crystal.jpg", planImage: "", specs: ["Site Area: 65,000 Sq.Ft.", "Capacity: Over 100 Flats", "Urban Central Location", "Vastu Compliant Design"] },
  { id: 103, name: "KAMYA VILLAS & GREENS", type: "Township & Villa Extension", location: "Main Highway to Dewa", description: "Extensive township project with over 1,000 flats and luxury villas situated along the main Dewa Highway corridor.", image: "kamya-villas.jpg", planImage: "", specs: ["Capacity: 1000+ Units & Villas", "Highway Corridor Frontage", "Gated Township Amenities"] },
  { id: 104, name: "SPRING MEADOWS", type: "Luxury Farmhouse Township", location: "Peaceful Suburban Zone", description: "An exclusive, tranquil township consisting of 63 luxury farm estates surrounded by lush green landscapes, offering absolute privacy.", image: "spring-meadows.jpg", planImage: "", specs: ["Unit Count: 63 Exclusive Farms", "High Security Perimeter", "Private Villa & Garden Renders"] },
  { id: 105, name: "TOWNSHIP AT BPCL, KOCHI", type: "GRIHA 5-Star Rated Township", location: "BPCL Township, Kochi, Kerala", description: "Sustainable 35,000 sq.m. industrial township development featuring 67 residential flats, M.P. Hall, Club House, and transit residential quarters.", image: "bpcl-kochi.jpg", planImage: "", specs: ["Plot Area: 35,000 Sq.M.", "GRIHA 5-Star Rating Target", "F.A.R. Achieved: 0.5%", "Facilities: Club House, M.P. Hall"] },
  { id: 106, name: "KUTUMBH SIGNATURE", type: "Affordable Housing Apartment Project", location: "Urban Growth Corridor", description: "Modern low-cost apartment project comprising 16 thoughtfully designed flats delivering a future vision of accessible quality homes.", image: "kutumbh-signature.jpg", planImage: "", specs: ["Capacity: 16 Apartment Units", "Modular Kitchen & Interior Renders", "Low-Cost Efficient Floor Plan"] }
];

function fetchProjects() {
  renderPortfolio(signatureProjects);
  renderEmployeeSpace(signatureProjects);
  renderAdminControls(signatureProjects);
}

function renderPortfolio(projects) {
  const container = document.getElementById('portfolio-grid');
  if (container) {
    container.innerHTML = projects.map(p => \`
      <div class="portfolio-card">
        <h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">\${p.name}</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.6rem;"><strong>\${p.type}</strong> — \${p.location}</p>
        <p style="font-size:0.85rem; margin-bottom:1.2rem;">\${p.description}</p>
        <button onclick="viewProjectDetails(\${p.id})" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.75rem; width:100%;">View Architectural Floor Plans & Renders</button>
      </div>
    \`).join('');
  }
}

function viewProjectDetails(id) {
  const p = signatureProjects.find(proj => proj.id === id);
  if (!p) return;
  document.getElementById('modal-proj-name').innerText = p.name + " — Architectural Overview";
  
  let imagesHtml = '';
  if (p.image) {
    imagesHtml += \`<div class="project-render-wrapper" onclick="openZoomModal('\${p.image}')" title="Click to Expand Full Screen"><img src="\${p.image}" alt="\${p.name} Render" class="project-render-img" onerror="this.parentElement.style.display='none';"><div class="zoom-badge">🔍 Click to Expand</div></div>\`;
  }
  if (p.planImage) {
    imagesHtml += \`<div class="project-render-wrapper" onclick="openZoomModal('\${p.planImage}')" title="Click to Expand Full Screen" style="margin-top:0.8rem;"><img src="\${p.planImage}" alt="\${p.name} Floor Plan" class="project-render-img" onerror="this.parentElement.style.display='none';"><div class="zoom-badge">🔍 Expand Floor Plan</div></div>\`;
  }

  document.getElementById('modal-proj-content').innerHTML = \`
    <p><strong>Project Type:</strong> \${p.type}</p>
    <p><strong>Location:</strong> \${p.location}</p>
    <p style="margin-top:0.5rem; color:var(--text-muted);">\${p.description}</p>
    <div class="modal-spec-box">
      <div>
        <h4 class="gold-text" style="font-size:1rem; margin-bottom:0.5rem;">Architectural Specifications</h4>
        <ul>\${p.specs.map(s => \`<li style="font-size:0.85rem; margin-bottom:0.3rem;">\${s}</li>\`).join('')}</ul>
      </div>
      <div>
        <h4 class="gold-text" style="font-size:1rem; margin-bottom:0.5rem;">Renders & Floor Layouts (Click to Zoom)</h4>
        <div class="modal-image-container">\${imagesHtml}</div>
      </div>
    </div>
  \`;
  document.getElementById('project-detail-modal').style.display = 'flex';
}

function searchClientProject() {
  const projId = document.getElementById('client-project-id').value;
  const container = document.getElementById('client-project-display');
  const proj = signatureProjects.find(p => p.id === parseInt(projId));
  if (proj && container) {
    container.innerHTML = \`
      <div class="client-card glass-card">
        <h3 class="gold-text">\${proj.name} (Project ID: #\${proj.id})</h3>
        <p><strong>Location:</strong> \${proj.location}</p>
        <p><strong>Project Type:</strong> \${proj.type}</p>
        <h4 style="margin-top:1.5rem;" class="gold-text">Signed-off Architectural Stages</h4>
        <div class="stage-timeline">
          <div class="stage-item">✓ Stage 1: Masterplan & Programming (100%)</div>
          <div class="stage-item">✓ Stage 2: Structural Engineering & Foundations (100%)</div>
          <div class="stage-item">⟳ Stage 3: Interior Fitouts & Handover (In Progress)</div>
        </div>
      </div>
    \`;
  }
}

function renderEmployeeSpace(projects) {
  const container = document.getElementById('employee-assigned-projects');
  if (container) {
    container.innerHTML = projects.map(p => \`
      <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1);">
        <h4>\${p.name}</h4>
        <p style="font-size:0.85rem;">\${p.type}</p>
      </div>
    \`).join('');
  }
}

function renderAdminControls(projects) {
  const container = document.getElementById('admin-project-controls');
  if (container) {
    container.innerHTML = projects.map(p => \`
      <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1);">
        <p><strong>\${p.name}</strong> (\${p.type})</p>
        <div style="display:flex; gap:1rem; margin-top:0.5rem;">
          <input type="text" class="form-control" value="Stage 3 In Progress">
          <button onclick="alert('Progress updated!')" class="btn btn-primary">Save</button>
        </div>
      </div>
    \`).join('');
  }
}
`;

// Write files to public
fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);
fs.writeFileSync(path.join(publicDir, 'styles.css'), stylesCss);
fs.writeFileSync(path.join(publicDir, 'app.js'), appJs);

console.log('IDHIKA GROUP Navigation Router & App Script Fixed Successfully!');