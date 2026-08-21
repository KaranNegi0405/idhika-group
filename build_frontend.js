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
    <div class="logo-container" onclick="window.showPage('home')">
      <div class="nav-brand-mark">
        <img src="logo-master.png" alt="IDHIKA GROUP" class="nav-master-logo" onerror="this.style.display='none'">
      </div>
      <div class="nav-brand-text">
        <span class="brand-main">ÍDHIKA</span>
        <span class="brand-sub">GROUP</span>
      </div>
    </div>

    <!-- Mobile Hamburger Toggle Button -->
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

  <!-- PAGE 1: HOME -->
  <div id="page-home" class="page-section active">
    <div class="hero-viewport">
      <div class="hero-center-box">
        <div class="brand-logo-wrapper real-logo-plaque">
          <img src="logo-master.png" alt="IDHIKA GROUP Master Logo" class="master-hero-logo" onerror="this.style.display='none';">
        </div>
        <p class="hero-tagline" id="home-hero-tagline">EXPERTISE IN TOWNSHIP, GROUP HOUSING, APARTMENTS & COMMERCIAL TOWERS ACROSS INDIA</p>
        <div class="trust-metrics-strip">
          <div class="trust-badge"><span class="trust-val" id="home-metric1-val">10+ YRS</span><span class="trust-lbl" id="home-metric1-lbl">Architectural Excellence</span></div>
          <div class="trust-divider"></div>
          <div class="trust-badge"><span class="trust-val" id="home-metric2-val">M.ARCH / AIIA</span><span class="trust-lbl" id="home-metric2-lbl">Certified Directors</span></div>
          <div class="trust-divider"></div>
          <div class="trust-badge"><span class="trust-val" id="home-metric3-val">100% SAFE</span><span class="trust-lbl" id="home-metric3-lbl">Structural Guarantee</span></div>
        </div>
        <div class="hero-actions">
          <button onclick="window.showPage('portfolio')" class="btn btn-primary">Portfolio Showcase</button>
          <button onclick="window.showPage('team')" class="btn btn-secondary">Meet Our Leadership</button>
        </div>
      </div>
<!-- GROUP SISTER CONCERNS & ASSOCIATED DIVISIONS -->
      <div class="container" style="margin: 2rem auto; max-width:1150px;">
        <h3 class="gold-text" style="text-align:center; font-size:1.1rem; margin-bottom:0.2rem; letter-spacing:1px; font-family:'Cinzel',serif;">Group Sister Concerns & Associated Divisions</h3>
        <p style="text-align:center; color:var(--text-muted); font-size:0.75rem; margin-bottom:1.2rem;">Delivering specialized architectural and engineering excellence.</p>
        <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.5rem;">
          <div class="sub-company-card">
            <div class="sub-company-logo-wrap"><img src="astre-logo.png" alt="ASTRE Design Studio" class="sub-company-logo" onerror="this.src='logo-master.png'"></div>
            <div>
              <h4 class="gold-text" style="font-size:0.95rem; margin-bottom:0.1rem; font-family:'Cinzel',serif;">ASTRE Design Studio</h4>
              <span style="font-size:0.68rem; color:var(--accent-gold); display:block; margin-bottom:0.25rem; font-weight:600; text-transform:uppercase;">Associate Architectural Design Studio</span>
              <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">Collaborative design studio specializing in contemporary urban aesthetics, styling, and master planning.</p>
            </div>
          </div>
          <div class="sub-company-card">
            <div class="sub-company-logo-wrap"><img src="idhika-trade-logo.png" alt="IDHIKA Trade and Constructions" class="sub-company-logo" onerror="this.src='logo-master.png'"></div>
            <div>
              <h4 class="gold-text" style="font-size:0.95rem; margin-bottom:0.1rem; font-family:'Cinzel',serif;">IDHIKA Trade & Constructions</h4>
              <span style="font-size:0.68rem; color:var(--accent-gold); display:block; margin-bottom:0.25rem; font-weight:600; text-transform:uppercase;">Specialized Engineering & Execution</span>
              <p style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">Expert structural execution, high-grade material procurement, and premium architectural project delivery.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="compact-philosophy-bar glass-card">
        <h3>OUR PHILOSOPHY</h3>
        <p id="home-philosophy-text">"We believe that quality of our surroundings—their design and construction—deeply influence the way we work, relax and live."</p>
      </div>
    </div>
  </div>

 <!-- PAGE 2: PORTFOLIO -->
  <div id="page-portfolio" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Architectural Achievements & Signature Projects</h2>
      <p style="text-align:center; color:var(--text-muted); margin-bottom:1.5rem;">Click on any project to view detailed architectural floor plans and 3D renders.</p>
      
      <!-- LIVE PORTFOLIO SEARCH BAR -->
      <div style="display:flex; justify-content:center; margin-bottom:2.5rem;">
        <input type="text" id="portfolio-search-input" class="form-control" placeholder="Type to search project by name or type..." oninput="window.executePortfolioSearch()" style="max-width:380px; padding:0.55rem 1rem; margin-top:0;">
      </div>

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

  <!-- PAGE 4: LEADERSHIP & TEAM DIRECTORY -->
  <div id="page-team" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Leadership & Professional Engineering Team</h2>
      <p style="text-align:center; color:var(--text-muted); max-width:800px; margin:0 auto 2.5rem; line-height:1.7;">IDHIKA GROUP is a young experienced firm headed by seasoned architects specializing in urban design, housing projects, and advanced structural engineering.</p>
      
      <!-- DIRECTORS SECTION -->
      <h3 class="gold-text" style="font-size:1.2rem; margin-bottom:1rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:0.5rem;">Managing Directors & Principal Architects</h3>
      <div class="directors-grid" id="directors-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap:1.5rem; margin-bottom:2.5rem;"></div>

      <!-- TEAM MEMBERS & CONSULTANTS SECTION -->
      <h3 class="gold-text" style="font-size:1.2rem; margin-bottom:1rem; border-bottom:1px solid rgba(212,175,55,0.2); padding-bottom:0.5rem;">Specialized Consultants & Team Members</h3>
      <div class="team-grid" id="team-members-container" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:1.2rem;"></div>
    </div>
  </div>

  <!-- PAGE 5: WONDERS -->
  <div id="page-wonders" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Wonders of Architecture: A Tribute to Human Ingenuity</h2>
      <p style="text-align:center; color:var(--text-muted); max-width:800px; margin:0 auto 2.5rem; line-height:1.7;">Architecture shapes civilizations and elevates human spirit. At IDHIKA GROUP, we draw endless inspiration from world-renowned masterworks that define structural engineering, aesthetic harmony, and timeless design.</p>
      <div class="gallery-grid" id="wonders-grid"></div>
    </div>
  </div>

  <!-- PAGE 6: CUSTOMER DASHBOARD -->
  <div id="page-client-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Customer Work-in-Progress Dashboard</h2>
      <div id="customer-profile-greeting" class="glass-card" style="margin-bottom: 1.5rem; border-left: 3px solid var(--accent-gold);">
        <h3 class="gold-text" id="cust-welcome-title">Welcome, Valued Client</h3>
        <p id="cust-details-text" style="font-size:0.85rem; color:var(--text-muted);">Please log in or submit a project inquiry via the contact bubble.</p>
      </div>
      <div id="client-project-display"></div>
    </div>
  </div>

  <!-- PAGE 6.5: EMPLOYEE INTERNAL SPACE -->
  <div id="page-employee-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Internal Employee Profile & Career Tracker</h2>
      <div id="employee-profile-card" class="glass-card" style="max-width:700px; margin:0 auto; border-left:3px solid var(--accent-gold);"></div>
    </div>
  </div>

  <!-- PAGE 7: DIRECTOR / ADMIN CONSOLE -->
  <div id="page-admin-portal" class="page-section">
    <div class="container section-padding">
      <h2 class="section-title">Director / Admin Console</h2>
      
      <!-- Admin Tab Switcher -->
      <div style="display:flex; justify-content:center; gap:1rem; margin-bottom:2rem; flex-wrap:wrap;">
        <button onclick="window.switchAdminTab('crm')" id="admin-tab-btn-crm" class="btn btn-primary" style="font-size:0.75rem;">Client CRM & Contracts</button>
        <button onclick="window.switchAdminTab('team')" id="admin-tab-btn-team" class="btn btn-secondary" style="font-size:0.75rem;">Staff Directory</button>
        <button onclick="window.switchAdminTab('projects')" id="admin-tab-btn-projects" class="btn btn-secondary" style="font-size:0.75rem;">Manage Portfolio Projects</button>
	<button onclick="window.switchAdminTab('home-content')" id="admin-tab-btn-home" class="btn btn-secondary" style="font-size:0.75rem;">Manage Home Content</button>
      </div>

      <!-- VIEW 1: CLIENT CRM -->
      <div id="admin-view-crm" class="admin-tab-view">
        <div class="glass-card" style="margin-bottom: 2rem;">
          <div id="admin-inpage-banner" style="display:none; padding:0.75rem 1rem; margin-bottom:1rem; border-radius:4px; font-size:0.8rem; background:rgba(16, 185, 129, 0.2); border:1px solid #34d399; color:#34d399;"></div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:12px;">
            <div style="display:flex; gap:10px; align-items:center;">
              <h3 class="gold-text" style="margin-bottom:0;">Incoming Leads & Task Allocation Table</h3>
              <button onclick="window.openManualLeadModal()" class="btn btn-secondary lead-hover-btn" style="padding:0.4rem 0.9rem; font-size:0.7rem; border-color:var(--accent-gold);">+ Manual Add Lead</button>
            </div>
            <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
              <input type="text" id="crm-search-input" class="form-control" placeholder="Search name, phone, location, manager..." onkeyup="window.filterCrmTable()" style="padding:0.4rem 0.8rem; font-size:0.8rem; min-width:260px; margin-top:0;">
              <button onclick="window.saveAllCrmChanges()" class="admin-save-global-btn">SAVE</button>
            </div>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;">Manage lead lifecycles across the table. Changes remain in draft until you click **SAVE**.</p>
          <div style="overflow-x: auto;">
            <table class="crm-table" id="admin-leads-table">
              <thead>
                <tr>
                  <th>Client Name & Contact</th>
                  <th>Site Location</th>
                  <th>Requested Service</th>
                  <th>Assigned Manager</th>
                  <th>Status</th>
                  <th>Comments / Notes</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="admin-leads-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- VIEW 2: STAFF & DIRECTOR CMS EDITOR -->
      <div id="admin-view-team" class="admin-tab-view" style="display:none;">
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
            <h3 class="gold-text" style="margin-bottom:0;">Staff Directory, Tenure & Public Visibility Control</h3>
            <button onclick="window.openStaffModal()" class="btn btn-primary" style="font-size:0.7rem; padding:0.4rem 1rem;">+ Add New Employee / Consultant</button>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1.5rem;">Control visibility, upload profile pictures from local drive, manage director biographies, and track tenures.</p>
          <div style="overflow-x: auto;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Staff Name & Role</th>
                  <th>Public Visibility</th>
                  <th>Tenure Tracking</th>
                  <th>Experience & Details</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="admin-team-table-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- VIEW 3: PORTFOLIO & PROJECTS MANAGEMENT CMS -->
      <div id="admin-view-projects" class="admin-tab-view" style="display:none;">
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
            <h3 class="gold-text" style="margin-bottom:0;">Portfolio Projects & Picture Management</h3>
            <button onclick="window.openProjectModalAdmin()" class="btn btn-primary" style="font-size:0.7rem; padding:0.4rem 1rem;">+ Add New Project</button>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1.5rem;">Modify existing signature projects, upload new pictures from local device, or delete projects from public view.</p>
          <div style="overflow-x: auto;">
            <table class="crm-table">
              <thead>
                <tr>
                  <th>Project Name & Type</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody id="admin-projects-table-tbody"></tbody>
            </table>
          </div>
        </div>
      </div>



      <!-- VIEW 4: HOME PAGE CONTENT MANAGEMENT -->
      <div id="admin-home-content-section" class="admin-tab-view" style="display:none;">
        <div class="glass-card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; flex-wrap:wrap; gap:10px;">
            <h3 class="gold-text" style="margin-bottom:0;">Edit Home Page Content</h3>
          </div>

          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1.5rem;">
            Update the information displayed on the public Home page. Changes are saved to the company database.
          </p>

          <div style="background:rgba(255,255,255,0.03); padding:20px; border-radius:8px; border:1px solid rgba(212,175,55,0.2);">

            <!-- MAIN TAGLINE -->
            <div style="margin-bottom:1.2rem;">
              <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                Main Tagline
              </label>

              <textarea
                id="home-tagline-inp"
                class="form-control"
                rows="3"
                placeholder="Enter the main Home page tagline..."
              ></textarea>
            </div>

            <!-- METRIC 1 -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 1 Value
                </label>

                <input
                  type="text"
                  id="home-m1val-inp"
                  class="form-control"
                  placeholder="e.g. 10+ YRS"
                >
              </div>

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 1 Label
                </label>

                <input
                  type="text"
                  id="home-m1lbl-inp"
                  class="form-control"
                  placeholder="e.g. Architectural Excellence"
                >
              </div>

            </div>

            <!-- METRIC 2 -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 2 Value
                </label>

                <input
                  type="text"
                  id="home-m2val-inp"
                  class="form-control"
                  placeholder="e.g. M.ARCH / AIIA"
                >
              </div>

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 2 Label
                </label>

                <input
                  type="text"
                  id="home-m2lbl-inp"
                  class="form-control"
                  placeholder="e.g. Certified Directors"
                >
              </div>

            </div>

            <!-- METRIC 3 -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px; margin-bottom:15px;">

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 3 Value
                </label>

                <input
                  type="text"
                  id="home-m3val-inp"
                  class="form-control"
                  placeholder="e.g. 100% SAFE"
                >
              </div>

              <div>
                <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                  Metric 3 Label
                </label>

                <input
                  type="text"
                  id="home-m3lbl-inp"
                  class="form-control"
                  placeholder="e.g. Structural Guarantee"
                >
              </div>

            </div>

            <!-- PHILOSOPHY -->
            <div style="margin-top:1.2rem; margin-bottom:1.2rem;">

              <label style="display:block; margin-bottom:6px; font-size:0.85rem; color:var(--accent-gold);">
                Company Philosophy
              </label>

              <textarea
                id="home-phil-inp"
                class="form-control"
                rows="4"
                placeholder="Enter company philosophy..."
              ></textarea>

            </div>

            <!-- SAVE -->
            <div style="display:flex; justify-content:flex-end;">

              <button
                onclick="window.saveHomeContentChanges()"
                class="btn btn-primary"
                type="button"
              >
                Save Home Content
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- GUARANTEED CLICKABLE FLOATING ACTION BUTTONS -->
  <div id="persistent-contact-bubble" class="floating-contact-bubble" onclick="window.openLeadModal()">
    💬 Quick Inquiry
  </div>
  <button class="feedback-badge-btn" onclick="window.openFeedbackModal()">
    ● Customer Feedback
  </button>

  <!-- MODALS -->
  <div id="lead-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Customer Inquiry & Consultation</h3>
      <form onsubmit="window.handleCustomerLeadSubmit(event)">
        <div style="text-align:left; margin-bottom:0.75rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Full Name (Letters and dots only):</label>
          <input type="text" id="lead-name" class="form-control" required placeholder="e.g. A K Sharma" oninput="window.validateFormGlobally()">
          <span id="name-error-msg" style="font-size:0.7rem; color:#f87171; display:none; margin-top:2px;">Numbers and special symbols are not allowed in names.</span>
        </div>

        <div style="text-align:left; margin-bottom:0.75rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Phone Number (Numbers only):</label>
          <div style="display:flex; gap:6px; margin-top:0.3rem;">
            <select id="lead-country-code" class="form-control" style="width:110px; margin-top:0;">
              <option value="+91" selected>India (+91)</option>
              <option value="+1">USA/Canada (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+971">UAE (+971)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+65">Singapore (+65)</option>
            </select>
            <input type="tel" id="lead-phone" class="form-control" required placeholder="9876543210" oninput="window.validateFormGlobally()" style="margin-top:0; flex:1;">
          </div>
          <span id="phone-error-msg" style="font-size:0.7rem; color:#f87171; display:none; margin-top:2px;">Only numbers are permitted in phone numbers.</span>
        </div>

        <div style="text-align:left; margin-bottom:0.75rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Email Address (Gmail, Yahoo, Outlook, Yopmail):</label>
          <input type="email" id="lead-email" class="form-control" placeholder="idhikiatest@yopmail.com" required oninput="window.validateFormGlobally()">
          <span id="email-error-msg" style="font-size:0.7rem; color:#f87171; display:none; margin-top:2px;">Allowed domains: Gmail, Yahoo, Outlook, Yopmail.</span>
        </div>

        <div style="text-align:left; margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Site Location:</label><input type="text" id="lead-location" class="form-control" required oninput="window.validateFormGlobally()"></div>
        <div style="text-align:left; margin-bottom:0.9rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Select Service:</label>
          <select id="lead-service" class="form-control" required>
            <option value="Architectural Design">Architectural Design & Master Blueprints</option>
            <option value="Structural Engineering">Structural Engineering & Safety Analysis</option>
            <option value="Master & Land Planning">Master & Land Planning / Feasibility</option>
            <option value="Interior Architecture">Interior Architecture & Space Planning</option>
            <option value="Landscape Architecture">Landscape Architecture & Site Greenery</option>
          </select>
        </div>
        <button type="submit" id="submit-inquiry-btn" class="btn btn-primary" style="width:100%;">Submit Inquiry</button>
      </form>
      <button onclick="window.closeLeadModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <!-- DIRECTOR MANUAL LEAD ADDITION MODAL -->
  <div id="manual-lead-modal" class="modal-overlay">
    <div class="modal-card glass-card" style="text-align:left;">
      <h3 class="gold-text" style="text-align:center;">Director Manual Lead Entry</h3>
      <form onsubmit="window.handleManualLeadSubmit(event)">
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Client Full Name:</label><input type="text" id="manual-name" class="form-control" required></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Phone Number:</label><input type="text" id="manual-phone" class="form-control" required></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Email Address:</label><input type="email" id="manual-email" class="form-control" required></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">New Site Location:</label><input type="text" id="manual-location" class="form-control" required></div>
        <div style="margin-bottom:0.9rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Select Service:</label>
          <select id="manual-service" class="form-control" required>
            <option value="Architectural Design">Architectural Design</option>
            <option value="Structural Engineering">Structural Engineering</option>
            <option value="Master & Land Planning">Master & Land Planning</option>
            <option value="Interior Architecture">Interior Architecture</option>
            <option value="Landscape Architecture">Landscape Architecture</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Create Manual Entry</button>
      </form>
      <button onclick="window.closeManualLeadModal()" class="close-modal-btn" style="margin-top:1rem; display:block; margin-left:auto; margin-right:auto;">✕ Close</button>
    </div>
  </div>

  <!-- ADD / EDIT PROJECT ADMIN MODAL -->
  <div id="project-admin-modal" class="modal-overlay">
    <div class="modal-card glass-card" style="text-align:left;">
      <h3 class="gold-text" id="project-modal-title" style="text-align:center;">Signature Project Record</h3>
      <form onsubmit="window.handleProjectFormSubmit(event)">
        <input type="hidden" id="proj-edit-id">
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Project Name:</label><input type="text" id="proj-name" class="form-control" required placeholder="e.g. DREAM GALAXY"></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Project Type / Category:</label><input type="text" id="proj-type" class="form-control" required placeholder="e.g. Housing & Commercial Mall Complex"></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Location:</label><input type="text" id="proj-location" class="form-control" required placeholder="e.g. Lucknow"></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Description:</label><textarea id="proj-desc" class="form-control" rows="3" required placeholder="Enter project overview..."></textarea></div>
        
        <div style="margin-bottom:0.75rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Upload Main Image from Local Machine or Enter Path:</label>
          <input type="file" id="proj-file-input" class="form-control" accept="image/*" onchange="window.previewProjectImage(event)" style="padding:0.4rem; margin-bottom:6px;">
          <input type="text" id="proj-img" class="form-control" placeholder="dream-galaxy.jpg or local path">
          <div id="proj-img-preview-box" style="margin-top:4px; font-size:0.75rem; color:#34d399;"></div>
        </div>

        <div style="margin-bottom:0.9rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Floor Plan Image File Name / URL:</label>
          <input type="text" id="proj-planimg" class="form-control" placeholder="dream-galaxy-plan.jpg">
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Save Project Record</button>
      </form>
      <button onclick="window.closeProjectModalAdmin()" class="close-modal-btn" style="margin-top:1rem; display:block; margin-left:auto; margin-right:auto;">✕ Close</button>
    </div>
  </div>

  <!-- CUSTOM POPUP MODAL -->
  <div id="success-popup-modal" class="modal-overlay">
    <div class="modal-card glass-card" style="text-align:center; max-width:480px;">
      <div id="popup-company-icon" style="font-size:2.2rem; margin-bottom:0.5rem;"><img src="logo-master.png" alt="IDHIKA" style="height:38px; width:auto; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.9);"></div>
      <h3 class="gold-text" id="popup-title-text">Notification</h3>
      <div id="success-popup-content" style="font-size:0.85rem; color:var(--text-muted); margin:1rem 0; line-height:1.6; text-align:left; background:rgba(0,0,0,0.3); padding:1rem; border-radius:6px; border:1px solid rgba(212,175,55,0.2);"></div>
      <button onclick="window.closeSuccessPopup()" class="btn btn-primary" style="width:100%;">Okay / Continue</button>
    </div>
  </div>

  <!-- CUSTOM IN-PAGE DELETE CONFIRMATION MODAL -->
  <div id="custom-confirm-modal" class="modal-overlay">
    <div class="modal-card glass-card" style="text-align:center; max-width:400px;">
      <h3 class="gold-text">Confirm Deletion</h3>
      <p style="font-size:0.85rem; color:var(--text-muted); margin:1rem 0;">Are you sure you want to delete this record?</p>
      <div style="display:flex; gap:10px; justify-content:center;">
        <button id="confirm-delete-yes-btn" class="btn btn-primary" style="background:#ef4444; color:#fff; padding:0.5rem 1.2rem;">Yes, Delete</button>
        <button onclick="window.closeCustomConfirm()" class="btn btn-secondary" style="padding:0.5rem 1.2rem;">Cancel</button>
      </div>
    </div>
  </div>

  <!-- ADD / EDIT STAFF MODAL -->
  <div id="staff-modal" class="modal-overlay">
    <div class="modal-card glass-card" style="text-align:left;">
      <h3 class="gold-text" id="staff-modal-title" style="text-align:center;">Staff / Director Record</h3>
      <form onsubmit="window.handleStaffFormSubmit(event)">
        <input type="hidden" id="staff-edit-id">
        <div style="margin-bottom:0.75rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Staff Type:</label>
          <select id="staff-type" class="form-control" onchange="window.toggleDirectorFields(this.value)">
            <option value="member">Team Member / Consultant</option>
            <option value="director">Managing Director (Enables Picture & Bio Section)</option>
          </select>
        </div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Full Name:</label><input type="text" id="staff-name" class="form-control" required></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Role / Title:</label><input type="text" id="staff-role" class="form-control" required></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Experience / Details:</label><input type="text" id="staff-details" class="form-control" placeholder="e.g. 10+ Yr Experience" required></div>
        
        <div id="director-extra-fields" style="display:none; border-top:1px dashed rgba(212,175,55,0.3); padding-top:0.75rem; margin-top:0.75rem;">
          <div style="margin-bottom:0.75rem;">
            <label style="font-size:0.78rem; color:var(--accent-gold);">Upload Profile Picture from Local Drive:</label>
            <input type="file" id="staff-file-input" class="form-control" accept="image/*" onchange="window.previewLocalImage(event)" style="padding:0.4rem;">
            <input type="hidden" id="staff-imgurl">
            <div id="image-preview-box" style="margin-top:8px; font-size:0.75rem; color:#34d399;"></div>
          </div>
          <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Detailed Information & Bio (Director Only):</label><textarea id="staff-bio" class="form-control" rows="3" placeholder="Enter professional director background and accomplishments..."></textarea></div>
        </div>

        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Email (For Employee Login):</label><input type="email" id="staff-email" class="form-control" placeholder="staff@idhika.com"></div>
        <div style="margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Joining Date:</label><input type="date" id="staff-joining" class="form-control"></div>
        <div style="margin-bottom:0.75rem; display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="staff-current" onchange="window.toggleStaffEndDate(this.checked)" checked style="cursor:pointer;">
          <label for="staff-current" style="font-size:0.75rem; color:var(--text-muted); cursor:pointer;">Currently Working Here</label>
        </div>
        <div style="margin-bottom:0.75rem;" id="staff-end-date-wrapper" style="display:none;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">End Date:</label><input type="date" id="staff-end" class="form-control">
        </div>
        <div style="margin-bottom:0.9rem;">
          <label style="font-size:0.78rem; color:var(--accent-gold);">Public Website Visibility:</label>
          <select id="staff-visible" class="form-control">
            <option value="true">Show on Website</option>
            <option value="false">Hide from Website (Experience Tracking Only)</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Save Record</button>
      </form>
      <button onclick="window.closeStaffModal()" class="close-modal-btn" style="margin-top:1rem; display:block; margin-left:auto; margin-right:auto;">✕ Close</button>
    </div>
  </div>

  <div id="feedback-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Pre-Finalization Customer Feedback</h3>
      <form onsubmit="window.handleFeedbackSubmit(event)">
        <div style="text-align:left; margin-bottom:0.75rem;"><input type="text" id="fb-name" class="form-control" placeholder="Your Name" required></div>
        <div style="text-align:left; margin-bottom:0.75rem;"><textarea id="fb-msg" class="form-control" placeholder="Describe feedback..." rows="4" required></textarea></div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Send Feedback</button>
      </form>
      <button onclick="window.closeFeedbackModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <div id="customer-login-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Portal Login</h3>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Enter your registered Client or Employee email & password:</p>
      <form onsubmit="window.handlePortalLoginSubmit(event)">
        <div style="text-align:left; margin-bottom:0.75rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Email ID:</label><input type="email" id="portal-login-email" class="form-control" required></div>
        <div style="text-align:left; margin-bottom:0.9rem;"><label style="font-size:0.78rem; color:var(--accent-gold);">Password:</label><input type="password" id="portal-login-pass" class="form-control" required></div>
        <button type="submit" class="btn btn-primary" style="width:100%;">Log In</button>
      </form>
      <button onclick="window.closeCustomerLoginModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <div id="role-modal" class="modal-overlay">
    <div class="modal-card glass-card">
      <h3 class="gold-text">Portal Authentication</h3>
      <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:1rem;">Log in to view restricted company environments:</p>
      <div class="modal-actions" style="display:flex; flex-direction:column; gap:0.8rem;">
        <button onclick="window.openCustomerLoginModal(); window.closeRoleModal();" class="btn btn-secondary">Client Access Portal / Employee Login</button>
        <button onclick="window.switchRole('admin')" class="btn btn-primary">Director / Admin Console</button>
        <button onclick="window.switchRole('public')" class="btn btn-secondary" style="border-color:rgba(255,255,255,0.2);">Log Out / Public Mode</button>
      </div>
      <button onclick="window.closeRoleModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <div id="project-detail-modal" class="modal-overlay">
    <div class="modal-card glass-card project-modal-wide">
      <h3 id="modal-proj-name" class="gold-text">Project</h3>
      <div id="modal-proj-content"></div>
      <button onclick="window.closeProjectModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <div id="youtube-video-modal" class="modal-overlay" onclick="window.closeVideoModal()">
    <div class="modal-card glass-card video-modal-container" onclick="event.stopPropagation()">
      <h3 class="gold-text">IDHIKA GROUP Brand Experience</h3>
      <div class="video-responsive-wrapper"><iframe id="youtube-iframe" src="" frameborder="0" allowfullscreen></iframe></div>
      <button onclick="window.closeVideoModal()" class="close-modal-btn" style="margin-top:1rem;">✕ Close</button>
    </div>
  </div>

  <div id="image-zoom-overlay" class="zoom-modal-overlay" onclick="window.closeZoomModal()">
    <img id="zoomed-image-target" class="zoomed-image" src="" alt="Zoom">
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
body { background-color: var(--bg-dark); color: var(--text-main); line-height: 1.4; overflow-x: hidden; }
#architecture-canvas { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 0; pointer-events: none; background: radial-gradient(circle at 50% 35%, #0f172a 0%, #07090e 85%); }

.navbar { display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 3%; background: rgba(7, 9, 14, 0.98); backdrop-filter: blur(20px); position: fixed; top: 0; width: 100%; z-index: 1000; border-bottom: 1px solid var(--border-chrome); height: 65px; }
.logo-container { display: flex; align-items: center; gap: 8px; cursor: pointer; flex-shrink: 0; }
.nav-master-logo { height: 32px; width: auto; background: transparent; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.9)); }
.nav-brand-text { display: flex; align-items: baseline; gap: 4px; }
.brand-main { font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 800; letter-spacing: 1.5px; color: #fff; }
.brand-sub { font-family: 'Montserrat', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 1.5px; color: var(--accent-gold); }

.mobile-menu-toggle { display: none; background: none; border: none; color: var(--accent-gold); font-size: 1.5rem; cursor: pointer; }
.nav-links { display: flex; list-style: none; gap: 1rem; align-items: center; }
.nav-link { color: var(--text-main); text-decoration: none; font-size: 0.78rem; font-weight: 500; transition: color 0.3s ease, text-shadow 0.3s ease; white-space: nowrap; }
.nav-link.active, .nav-link:hover { color: var(--accent-gold); text-shadow: 0 0 10px rgba(212,175,55,0.6); }
.gold-link { color: var(--accent-gold) !important; font-weight: 700; }
.portal-btn { background: linear-gradient(135deg, var(--accent-gold) 0%, #997a15 100%); color: #000; padding: 0.35rem 0.9rem; border-radius: 3px; font-weight: 700; border: none; cursor: pointer; font-size: 0.7rem; text-transform: uppercase; white-space: nowrap; }

/* PROFESSIONAL BLUE SAVE BUTTON */
.admin-save-global-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: #fff;
  padding: 0.5rem 1.4rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.78rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transition: transform 0.2s ease, opacity 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.admin-save-global-btn:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

/* OVERRIDE AUTOFILL BACKGROUND TO KEEP IT PERMANENTLY DARK */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-text-fill-color: #fff !important;
  -webkit-box-shadow: 0 0 0px 1000px rgba(0,0,0,0.7) inset !important;
  transition: background-color 5000s ease-in-out 0s;
}

/* ULTRA-SLOW 3.2s LUXURIOUS ANIMATIONS */
.page-section { display: none; min-height: calc(100vh - 65px); padding-top: 75px; position: relative; z-index: 10; opacity: 0; }
.page-section.active { display: block; animation: archRevealUltraSlow 3.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes archRevealUltraSlow { 
  0% { opacity: 0; transform: translateY(80px) scale(0.95); } 
  100% { opacity: 1; transform: translateY(0) scale(1); } 
}

.hero-viewport { min-height: calc(100vh - 65px); display: flex; flex-direction: column; justify-content: space-between; align-items: center; padding: 1.2rem 5% 1.5rem; }
.hero-center-box { text-align: center; width: 100%; max-width: 900px; display: flex; flex-direction: column; align-items: center; gap: 0.8rem; margin: auto 0; }
.brand-logo-wrapper { width: 100%; max-width: 320px; display: flex; justify-content: center; align-items: center; }
.master-hero-logo { width: 100%; height: auto; display: block; filter: drop-shadow(0 20px 45px rgba(0,0,0,0.98)); }
.hero-tagline { max-width: 720px; color: var(--text-muted); font-size: 0.78rem; letter-spacing: 1.3px; text-align: center; }
.trust-metrics-strip { display: flex; justify-content: center; align-items: center; gap: 1.5rem; padding: 0.5rem 1.4rem; background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); border-radius: 20px; width: 100%; max-width: 580px; }
.trust-badge { text-align: center; }
.trust-val { display: block; font-weight: 800; font-size: 0.78rem; color: var(--accent-gold); }
.trust-lbl { display: block; font-size: 0.62rem; color: var(--text-muted); }
.trust-divider { width: 1px; height: 18px; background: var(--border-chrome); }
.hero-actions { display: flex; gap: 1rem; justify-content: center; margin-top: 0.2rem; flex-wrap: wrap; }

.btn { 
  padding: 0.65rem 1.6rem; 
  border-radius: 4px; 
  cursor: pointer; 
  font-weight: 600; 
  font-size: 0.78rem; 
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
  text-transform: uppercase; 
  text-decoration: none; 
  display: inline-block; 
  background: rgba(15, 23, 42, 0.85); /* Added dark background by default */
  color: var(--text-main);           /* Added light text by default */
  border: 1px solid rgba(212, 175, 55, 0.3); /* Added clean subtle border */
}

/* ==========================================
   DIRECTOR / ADMIN ACTIVE TAB
   ========================================== */

.admin-tab-active {
  background: var(--accent-gold) !important;
  color: #000 !important;
  border: 1px solid var(--accent-gold) !important;
  box-shadow: 0 0 18px rgba(212, 175, 55, 0.35) !important;
  font-weight: 800 !important;
}

.admin-tab-inactive {
  background: rgba(15, 23, 42, 0.85) !important;
  color: var(--text-main) !important;
  border: 1px solid rgba(212, 175, 55, 0.35) !important;
  box-shadow: none !important;
}

.admin-tab-inactive:hover {
  background: rgba(212, 175, 55, 0.12) !important;
  color: var(--accent-gold) !important;
  border-color: var(--accent-gold) !important;
}

.btn:hover {
  background: var(--accent-gold); 
  color: #000; 
  border-color: var(--accent-gold); 
  transform: translateY(-4px) scale(1.03); 
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.45); 
}

/* Specific Hero Action overrides if needed */
.hero-actions .btn-primary, 
.hero-actions .btn-secondary { 
  background: rgba(15, 23, 42, 0.85); 
  color: var(--text-main); 
  border: 1px solid rgba(212, 175, 55, 0.3); 
  box-shadow: 0 4px 12px rgba(0,0,0,0.4); 
}

.lead-hover-btn {
  color: #fff !important;
}

.lead-hover-btn:hover {
  color: #000 !important;
  background: var(--accent-gold);
}

.hero-actions .btn-primary:hover, 
.hero-actions .btn-secondary:hover { 
  background: var(--accent-gold); 
  color: #000; 
  border-color: var(--accent-gold); 
  transform: translateY(-4px) scale(1.03); 
  box-shadow: 0 10px 25px rgba(212, 175, 55, 0.45); 
}
}

.compact-philosophy-bar { text-align: center; padding: 0.75rem 1.5rem; width: 100%; max-width: 800px; margin-top: 0.5rem; }
.compact-philosophy-bar h3 { font-family: 'Cinzel', serif; font-size: 0.82rem; color: var(--metallic-silver); letter-spacing: 2px; margin-bottom: 0.15rem; }
.compact-philosophy-bar p { font-size: 0.76rem; font-style: italic; color: var(--text-muted); }

.container { width: 92%; max-width: 1280px; margin: 0 auto; }
.section-padding { padding: 2.5rem 0; }
.section-title { font-family: 'Cinzel', serif; font-size: 1.7rem; text-align: center; margin-bottom: 1.2rem; letter-spacing: 2px; color: var(--metallic-silver); }

.glass-card { background: var(--bg-card); backdrop-filter: blur(20px); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1.5rem; }
.gold-text { color: var(--accent-gold); margin-bottom: 1rem; font-family: 'Cinzel', serif; }

/* CLICKABLE FLOATING ACTION BUTTONS */
.floating-contact-bubble { 
  position: fixed; bottom: 25px; right: 25px; 
  background: linear-gradient(135deg, var(--accent-gold) 0%, #997a15 100%); 
  color: #000; padding: 0.75rem 1.25rem; border-radius: 30px; 
  font-weight: 800; font-size: 0.8rem; cursor: pointer; 
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4); z-index: 99999; pointer-events: auto; 
}
.feedback-badge-btn { 
  position: fixed; bottom: 25px; left: 25px; 
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.2); 
  color: #fff; padding: 0.6rem 1rem; border-radius: 20px; font-size: 0.75rem; 
  cursor: pointer; z-index: 99999; backdrop-filter: blur(10px); pointer-events: auto; 
}

.services-wrapper, .gallery-grid, .employee-layout, .admin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 360px)); gap: 1.5rem; justify-content: center; }
.service-card, .portfolio-card, .team-member-card { background: var(--bg-card); border: 1px solid var(--glass-border); padding: 1.5rem; border-radius: 8px; transition: transform 0.3s ease; }
.service-card:hover, .portfolio-card:hover, .team-member-card:hover { transform: translateY(-4px); border-color: rgba(212,175,55,0.3); }

.service-icon-head { display: flex; align-items: center; gap: 12px; margin-bottom: 0.8rem; }
.service-icon-badge { width: 36px; height: 36px; border-radius: 50%; background: rgba(212, 175, 55, 0.12); border: 1px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; font-weight: 800; color: var(--accent-gold); font-size: 0.9rem; }
.service-short-summary { font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-bottom: 1rem; }
.expand-details-btn { width: 100%; padding: 0.55rem; background: rgba(255,255,255,0.04); border: 1px solid var(--border-chrome); color: var(--accent-gold); border-radius: 4px; cursor: pointer; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; }
.service-drawer-content { display: none; margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--border-chrome); }
.service-drawer-content.active { display: block; }
.drawer-tech-desc { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.8rem; line-height: 1.5; }
.deliverables-grid { display: grid; grid-template-columns: 1fr; gap: 0.5rem; }
.deliverable-item { background: rgba(0,0,0,0.4); padding: 0.45rem 0.7rem; border-radius: 4px; border-left: 3px solid var(--accent-gold); font-size: 0.78rem; color: var(--metallic-silver); }

.wonder-card-img { width: 100%; height: 180px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem; border: 1px solid var(--glass-border); background: #0b0f17; }
.wonder-link-btn { margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.72rem; width: 100%; text-align: center; }

.crm-table { width: 100%; border-collapse: collapse; text-align: left; font-size: 0.8rem; }
.crm-table th, .crm-table td { padding: 0.75rem; border-bottom: 1px solid rgba(255,255,255,0.08); }
.crm-table th { color: var(--accent-gold); font-family: 'Cinzel', serif; }

.form-control { width: 100%; padding: 0.65rem; background: rgba(0,0,0,0.5); border: 1px solid var(--border-chrome); color: #fff; border-radius: 4px; font-size: 0.85rem; margin-top: 0.3rem; }
.modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); z-index: 20000; align-items: center; justify-content: center; }
.modal-card { width: 92%; max-width: 500px; text-align: center; padding: 1.5rem; max-height: 90vh; overflow-y: auto; position: relative; }
.modal-actions { display: flex; flex-direction: column; gap: 0.8rem; margin: 1.2rem 0; }
.close-modal-btn { background: none; border: none; color: var(--text-muted); cursor: pointer; font-size: 0.78rem; }

.project-modal-wide { max-width: 900px; width: 95%; text-align: left; }
.modal-spec-box { display: grid; grid-template-columns: 1fr; gap: 1.2rem; margin-top: 1rem; }
@media (min-width: 768px) { .modal-spec-box { grid-template-columns: 1fr 1fr; } }
.modal-image-container { display: flex; flex-direction: column; gap: 1rem; margin-top: 0.5rem; }
.project-render-wrapper { position: relative; overflow: hidden; border-radius: 6px; border: 1px solid var(--glass-border); cursor: zoom-in; }
.project-render-img { width: 100%; height: auto; display: block; object-fit: cover; }
.zoom-badge { position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.75); color: var(--accent-gold); padding: 4px 8px; border-radius: 3px; font-size: 0.7rem; font-weight: 600; pointer-events: none; }

/* ZOOM LIGHTBOX OVERLAY */
.zoom-modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.95); z-index: 30000; align-items: center; justify-content: center; cursor: zoom-out; }
.zoomed-image { max-width: 92vw; max-height: 92vh; object-fit: contain; border-radius: 6px; border: 1px solid var(--accent-gold); box-shadow: 0 0 40px rgba(0,0,0,0.9); }
.zoom-close-hint { position: absolute; bottom: 20px; color: var(--text-muted); font-size: 0.8rem; }

/* SUB-COMPANY CARD STYLING */
.sub-company-card { background: rgba(18, 23, 31, 0.95); border: 1px solid rgba(212, 175, 55, 0.3); padding: 1.1rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem; text-align: left; box-shadow: 0 8px 24px rgba(0,0,0,0.6); }
.sub-company-logo-wrap { width: 75px; height: 75px; background: #000; border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 6px; display: flex; align-items: center; justify-content: center; padding: 4px; flex-shrink: 0; }
.sub-company-logo { max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.9)); }


/* TOUCH SCROLLABLE NAV FOR MOBILE */
@media (max-width: 768px) {
  .mobile-menu-toggle { display: block; }
  .nav-links { 
    display: none; 
    flex-direction: row; 
    overflow-x: auto; 
    white-space: nowrap; 
    position: absolute; 
    top: 65px; 
    left: 0; 
    width: 100%; 
    background: rgba(7, 9, 14, 0.98); 
    padding: 0.8rem 1rem; 
    gap: 1.5rem; 
    z-index: 2000; 
    -webkit-overflow-scrolling: touch;
  }
  .nav-links.active { display: flex; }
}
`;

// 3. public/app.js (Complete script with loadAdminProjectsTable() and loadAdminTeamTable() fully wired)
const appJs = `document.addEventListener('DOMContentLoaded', () => {
  initSubtleArchitecturalBackground();
  renderDetailedServices();
  fetchProjects();
  renderArchitecturalWonders();
  renderTeamMembers();
  checkCustomerAuthState();
  loadAdminLeads();
  loadAdminTeamTable();
  loadAdminProjectsTable();

// Default Admin Console tab
switchAdminTab('crm');

  // Fetch and load home content into the admin form
  fetch('/api/portal-data')
    .then(res => res.json())
    .then(data => {
      if (data.homeContent) {
        loadHomeContentIntoAdmin(data.homeContent);
      }
    })
    .catch(err => console.error('Failed to load home content:', err));
});

let storedLeadsList = JSON.parse(localStorage.getItem('idhika_crm_leads')) || [
  { id: 1, name: "Aarav Mehta", phone: "+91 9811122233", email: "idhikiatest@yopmail.com", location: "Hazratganj, Lucknow", service: "Architectural Design", assignedTo: "Unassigned", status: "NEW", comment: "Initial inquiry submitted." }
];

let teamMembersData = JSON.parse(localStorage.getItem('idhika_team_members')) || [
  { id: 1, type: 'director', name: "Ar. ANKUR SRIVASTAVA", role: "Principal Director", details: "M.ARCH., AIIID, AIIA (10+ Yr Exp.)", bio: "Principal Director heading major township, group housing, and commercial architectural divisions with over 10 years of professional expertise.", imgUrl: "", email: "ankur@idhika.com", joining: "2015-01-01", current: true, endDate: "", visible: true, imgText: "AS" },
  { id: 2, type: 'director', name: "Ar. PRATEEK SRIVASTAVA", role: "Co-Principal Architect", details: "B.ARCH, AIIID, AIIA (6+ Yr Exp.)", bio: "Co-Principal Architect specializing in contemporary urban design, interior architecture, and housing projects with 6+ years of experience.", imgUrl: "", email: "prateek@idhika.com", joining: "2018-06-01", current: true, endDate: "", visible: true, imgText: "PS" },
  { id: 3, type: 'member', name: "Ar. PRATIMA PANDEY", role: "Urban Design Consultant", details: "10+ Yr Experience", email: "pratima@idhika.com", joining: "2020-03-15", current: true, endDate: "", visible: true },
  { id: 4, type: 'member', name: "Ar. SOUMAYA SAXENA", role: "Senior Architect", details: "9+ Yr Experience", email: "soumaya@idhika.com", joining: "2021-02-10", current: true, endDate: "", visible: true },
  { id: 5, type: 'member', name: "Ar. MALVIKA SRIVASTAVA", role: "Senior Interior Designer", details: "5+ yr Experience", email: "malvika@idhika.com", joining: "2022-05-01", current: true, endDate: "", visible: true },
  { id: 6, type: 'member', name: "Ar. ANANYA MAURYA", role: "Junior Architect", details: "Architectural Planning & Drafting", email: "ananya@idhika.com", joining: "2023-01-10", current: true, endDate: "", visible: true },
  { id: 7, type: 'member', name: "Mr. VIVEK SRIVASTAVA", role: "Senior Draftsman", details: "15+ Yr Exp. (Drafting & Detailing)", email: "vivek@idhika.com", joining: "2012-04-01", current: true, endDate: "", visible: true },
  { id: 8, type: 'member', name: "Er. RABISH KUMAR", role: "Civil Engineer", details: "5+ yr Exp. (Civil Execution)", email: "rabish@idhika.com", joining: "2021-08-12", current: true, endDate: "", visible: true },
  { id: 9, type: 'member', name: "Mr. ANUPAM KATIYAR", role: "Project Manager", details: "20+ Yr Exp. (Site Management)", email: "anupam@idhika.com", joining: "2019-11-20", current: true, endDate: "", visible: true },
  { id: 10, type: 'member', name: "Mr. RAMBABU", role: "Draftsman", details: "10+ Yr Experience", email: "rambabu@idhika.com", joining: "2016-05-14", current: true, endDate: "", visible: true },
  { id: 11, type: 'member', name: "Mr. VIKRAM VERMA", role: "Draftsman", details: "7+ Yr Experience", email: "vikram@idhika.com", joining: "2018-09-01", current: true, endDate: "", visible: true },
  { id: 12, type: 'member', name: "Miss. AARTI PANDEY", role: "Intern", details: "Architectural Intern", email: "aarti@idhika.com", joining: "2024-01-05", current: true, endDate: "", visible: true },
  { id: 13, type: 'member', name: "Miss. KRITIKA PANDEY", role: "Intern", details: "Architectural Intern", email: "kritika@idhika.com", joining: "2024-01-05", current: true, endDate: "", visible: true },
  { id: 14, type: 'member', name: "Mr. SHIV KUMAR", role: "Site Supervisor", details: "20+ yr Exp. (Site Supervision)", email: "shiv@idhika.com", joining: "2014-07-19", current: true, endDate: "", visible: true },
  { id: 15, type: 'member', name: "ATS STRUCTURAL CONSULTANTS — Er. AKHILESK KUMAR SINGH", role: "Structural Consultant", details: "B.Tech, M.Tech. (IIT BHU) With 18+ Years' Experience", email: "akhilesk@idhika.com", joining: "2011-01-01", current: true, endDate: "", visible: true },
  { id: 16, type: 'member', name: "Er. RAGHVENDRA VERMA", role: "Estimation Consultant", details: "AMICE (Civil)", email: "raghvendra@idhika.com", joining: "2017-03-10", current: true, endDate: "", visible: true },
  { id: 17, type: 'member', name: "Er. ANKUR BAIPAI", role: "MEP Consultant", details: "Mechanical, Electrical & Plumbing", email: "ankurb@idhika.com", joining: "2019-08-15", current: true, endDate: "", visible: true },
  { id: 18, type: 'member', name: "ASTRE DESIGN STUDIO LLP / PLATINUM ARCHITECTS", role: "Associate Architect", details: "Associated Design Studios", email: "astre@idhika.com", joining: "2015-01-01", current: true, endDate: "", visible: true }
];

let signatureProjects = JSON.parse(localStorage.getItem('idhika_signature_projects')) || [
  { id: 101, name: "DREAM GALAXY", type: "Housing & Commercial Mall Complex", location: "Near New Amity Campus Malhor, Lucknow", description: "A premier housing project featuring 216 luxury flats and an integrated commercial shopping mall, designed on a sprawling 1.7-acre prime urban site.", image: "dream-galaxy.jpg", planImage: "dream-galaxy-plan.jpg", specs: ["Site Area: 1.7 Acres", "Flats: 216 Residential Units", "Commercial Mall Integrated", "Location: Lucknow"] },
  { id: 102, name: "GOPAL CRYSTAL TOWER", type: "Luxury Group Housing Tower", location: "Raebareli Central City Area", description: "Luxury group housing development offering over 100 premium flats over a site area of 65,000 sq.ft., combining contemporary comfort with architectural luxury.", image: "gopal-crystal.jpg", planImage: "", specs: ["Site Area: 65,000 Sq.Ft.", "Capacity: Over 100 Flats", "Urban Central Location", "Vastu Compliant Design"] },
  { id: 103, name: "KAMYA VILLAS & GREENS", type: "Township & Villa Extension", location: "Main Highway to Dewa", description: "Extensive township project with over 1,000 flats and luxury villas situated along the main Dewa Highway corridor.", image: "kamya-villas.jpg", planImage: "", specs: ["Capacity: 1000+ Units & Villas", "Highway Corridor Frontage", "Gated Township Amenities"] },
  { id: 104, name: "SPRING MEADOWS", type: "Luxury Farmhouse Township", location: "Peaceful Suburban Zone", description: "An exclusive, tranquil township consisting of 63 luxury farm estates surrounded by lush green landscapes, offering absolute privacy.", image: "spring-meadows.jpg", planImage: "", specs: ["Unit Count: 63 Exclusive Farms", "High Security Perimeter", "Private Villa & Garden Renders"] },
  { id: 105, name: "TOWNSHIP AT BPCL, KOCHI", type: "GRIHA 5-Star Rated Township", location: "BPCL Township, Kochi, Kerala", description: "Sustainable 35,000 sq.m. industrial township development featuring 67 residential flats, M.P. Hall, Club House, and transit residential quarters.", image: "bpcl-kochi.jpg", planImage: "", specs: ["Plot Area: 35,000 Sq.M.", "GRIHA 5-Star Rating Target", "F.A.R. Achieved: 0.5%", "Facilities: Club House, M.P. Hall"] },
  { id: 106, name: "KUTUMBH SIGNATURE", type: "Affordable Housing Apartment Project", location: "Urban Growth Corridor", description: "Modern low-cost apartment project comprising 16 thoughtfully designed flats delivering a future vision of accessible quality homes.", image: "kutumbh-signature.jpg", planImage: "", specs: ["Capacity: 16 Apartment Units", "Modular Kitchen & Interior Renders", "Low-Cost Efficient Floor Plan"] }
];

function showPage(pageId) {
  if (document.getElementById('page-admin-portal').classList.contains('active') && pageId !== 'admin-portal') {
    loadAdminLeads();
  }

  document.querySelectorAll('.page-section').forEach(page => page.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const activePage = document.getElementById('page-' + pageId);
  const activeNav = document.getElementById('nav-' + pageId);
  if (activePage) { activePage.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  if (activeNav) activeNav.classList.add('active');
}
window.showPage = showPage;

function toggleMobileMenu() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) menu.classList.toggle('active');
}
window.toggleMobileMenu = toggleMobileMenu;

function closeMobileMenu() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) menu.classList.remove('active');
}
window.closeMobileMenu = closeMobileMenu;

function openLeadModal() {
  document.getElementById('lead-name').value = '';
  document.getElementById('lead-phone').value = '';
  document.getElementById('lead-email').value = '';
  document.getElementById('lead-location').value = '';
  document.getElementById('name-error-msg').style.display = 'none';
  document.getElementById('phone-error-msg').style.display = 'none';
  document.getElementById('email-error-msg').style.display = 'none';
  document.getElementById('lead-modal').style.display = 'flex';
  validateFormGlobally();
}
window.openLeadModal = openLeadModal;

function closeLeadModal() { document.getElementById('lead-modal').style.display = 'none'; }
window.closeLeadModal = closeLeadModal;

function openFeedbackModal() { document.getElementById('feedback-modal').style.display = 'flex'; }
window.openFeedbackModal = openFeedbackModal;

function closeFeedbackModal() { document.getElementById('feedback-modal').style.display = 'none'; }
window.closeFeedbackModal = closeFeedbackModal;

function openCustomerLoginModal() { document.getElementById('customer-login-modal').style.display = 'flex'; }
window.openCustomerLoginModal = openCustomerLoginModal;

function closeCustomerLoginModal() { document.getElementById('customer-login-modal').style.display = 'none'; }
window.closeCustomerLoginModal = closeCustomerLoginModal;

function openRoleModal() { document.getElementById('role-modal').style.display = 'flex'; }
window.openRoleModal = openRoleModal;

function closeRoleModal() { document.getElementById('role-modal').style.display = 'none'; }
window.closeRoleModal = closeRoleModal;

function closeProjectModal() { document.getElementById('project-detail-modal').style.display = 'none'; }
window.closeProjectModal = closeProjectModal;

function openManualLeadModal() { document.getElementById('manual-lead-modal').style.display = 'flex'; }
window.openManualLeadModal = openManualLeadModal;

function closeManualLeadModal() { document.getElementById('manual-lead-modal').style.display = 'none'; }
window.closeManualLeadModal = closeManualLeadModal;

function openProjectModalAdmin() {
  document.getElementById('proj-edit-id').value = '';
  document.getElementById('proj-name').value = '';
  document.getElementById('proj-type').value = '';
  document.getElementById('proj-location').value = '';
  document.getElementById('proj-desc').value = '';
  document.getElementById('proj-img').value = '';
  document.getElementById('proj-planimg').value = '';
  document.getElementById('proj-img-preview-box').innerText = '';
  document.getElementById('project-admin-modal').style.display = 'flex';
}
window.openProjectModalAdmin = openProjectModalAdmin;

function closeProjectModalAdmin() { document.getElementById('project-admin-modal').style.display = 'none'; }
window.closeProjectModalAdmin = closeProjectModalAdmin;

function previewProjectImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('proj-img').value = e.target.result;
      document.getElementById('proj-img-preview-box').innerText = '✓ Local machine image loaded successfully!';
    };
    reader.readAsDataURL(file);
  }
}
window.previewProjectImage = previewProjectImage;

function handleProjectFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('proj-edit-id').value;
  const name = document.getElementById('proj-name').value;
  const type = document.getElementById('proj-type').value;
  const location = document.getElementById('proj-location').value;
  const description = document.getElementById('proj-desc').value;
  const image = document.getElementById('proj-img').value;
  const planImage = document.getElementById('proj-planimg').value;

  if (id) {
    const p = signatureProjects.find(item => item.id == id);
    if (p) {
      p.name = name; p.type = type; p.location = location; p.description = description; p.image = image; p.planImage = planImage;
    }
  } else {
    const newProj = {
      id: Date.now(),
      name, type, location, description, image, planImage,
      specs: ["Custom Managed Project", "Location: " + location]
    };
    signatureProjects.push(newProj);
  }

  localStorage.setItem('idhika_signature_projects', JSON.stringify(signatureProjects));
  closeProjectModalAdmin();
  fetchProjects();
  loadAdminProjectsTable();
  showAdminBanner('Project record and pictures saved successfully!');
}
window.handleProjectFormSubmit = handleProjectFormSubmit;

function editProject(id) {
  const p = signatureProjects.find(item => item.id == id);
  if (!p) return;
  document.getElementById('proj-edit-id').value = p.id;
  document.getElementById('proj-name').value = p.name;
  document.getElementById('proj-type').value = p.type;
  document.getElementById('proj-location').value = p.location;
  document.getElementById('proj-desc').value = p.description;
  document.getElementById('proj-img').value = p.image || '';
  document.getElementById('proj-planimg').value = p.planImage || '';
  document.getElementById('proj-img-preview-box').innerText = p.image ? '✓ Current image loaded' : '';
  document.getElementById('project-admin-modal').style.display = 'flex';
}
window.editProject = editProject;

let pendingDeleteId = null;

function deleteProject(id) {
  pendingDeleteId = id;
  document.getElementById('custom-confirm-modal').style.display = 'flex';
  document.getElementById('confirm-delete-yes-btn').onclick = function() {
    signatureProjects = signatureProjects.filter(p => p.id != pendingDeleteId);
    localStorage.setItem('idhika_signature_projects', JSON.stringify(signatureProjects));
    fetchProjects();
    loadAdminProjectsTable();
    closeCustomConfirm();
    showAdminBanner('Project record deleted successfully!');
  };
}
window.deleteProject = deleteProject;

function loadAdminProjectsTable() {
  const tbody = document.getElementById('admin-projects-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = signatureProjects.map(function(p) {
    return '<tr>' +
      '<td><strong>' + p.name + '</strong><br><span style="font-size:0.75rem; color:var(--accent-gold);">' + p.type + '</span></td>' +
      '<td>' + p.location + '</td>' +
      '<td><span style="font-size:0.78rem; color:var(--text-muted);">' + p.description + '</span></td>' +
      '<td>' +
        '<button onclick="window.editProject(' + p.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; margin-right:4px;">Edit</button>' +
        '<button onclick="window.deleteProject(' + p.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; border-color:#ef4444; color:#f87171;">Delete</button>' +
      '</td>' +
    '</tr>';
  }).join('');
}
window.loadAdminProjectsTable = loadAdminProjectsTable;

function openStaffModal() { 
  document.getElementById('staff-edit-id').value = ''; 
  document.getElementById('staff-type').value = 'member';
  document.getElementById('staff-name').value = ''; 
  document.getElementById('staff-role').value = ''; 
  document.getElementById('staff-details').value = ''; 
  document.getElementById('staff-email').value = ''; 
  document.getElementById('staff-joining').value = ''; 
  document.getElementById('staff-current').checked = true; 
  document.getElementById('staff-end-date-wrapper').style.display = 'none'; 
  document.getElementById('director-extra-fields').style.display = 'none';
  document.getElementById('staff-imgurl').value = '';
  document.getElementById('image-preview-box').innerText = '';
  document.getElementById('staff-bio').value = '';
  document.getElementById('staff-modal').style.display = 'flex'; 
}
window.openStaffModal = openStaffModal;

function closeStaffModal() { document.getElementById('staff-modal').style.display = 'none'; }
window.closeStaffModal = closeStaffModal;

function toggleDirectorFields(val) {
  document.getElementById('director-extra-fields').style.display = val === 'director' ? 'block' : 'none';
}
window.toggleDirectorFields = toggleDirectorFields;

function toggleStaffEndDate(isChecked) {
  document.getElementById('staff-end-date-wrapper').style.display = isChecked ? 'none' : 'block';
}
window.toggleStaffEndDate = toggleStaffEndDate;

function previewLocalImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('staff-imgurl').value = e.target.result;
      document.getElementById('image-preview-box').innerText = '✓ Local image loaded successfully!';
    };
    reader.readAsDataURL(file);
  }
}
window.previewLocalImage = previewLocalImage;

function switchAdminTab(tab) {

  // ==========================================
  // ADMIN CONTENT VIEWS
  // ==========================================

  const views = {
    crm: document.getElementById('admin-view-crm'),
    team: document.getElementById('admin-view-team'),
    projects: document.getElementById('admin-view-projects'),
    'home-content': document.getElementById('admin-home-content-section')
  };

  // Show selected view and hide the others
  Object.keys(views).forEach(function(key) {

    const view = views[key];

    if (view) {
      view.style.display =
        key === tab ? 'block' : 'none';
    }

  });


  // ==========================================
  // ADMIN TAB BUTTONS
  // ==========================================

  const buttons = {
    crm: document.getElementById('admin-tab-btn-crm'),
    team: document.getElementById('admin-tab-btn-team'),
    projects: document.getElementById('admin-tab-btn-projects'),
    'home-content': document.getElementById('admin-tab-btn-home')
  };


  // Reset all buttons first
  Object.keys(buttons).forEach(function(key) {

    const button = buttons[key];

    if (!button) return;

    button.classList.remove(
      'admin-tab-active',
      'admin-tab-inactive'
    );

    button.classList.add(
      key === tab
        ? 'admin-tab-active'
        : 'admin-tab-inactive'
    );

  });

}

window.switchAdminTab = switchAdminTab;


function handleStaffFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById('staff-edit-id').value;
  const type = document.getElementById('staff-type').value;
  const name = document.getElementById('staff-name').value;
  const role = document.getElementById('staff-role').value;
  const details = document.getElementById('staff-details').value;
  const email = document.getElementById('staff-email').value;
  const joining = document.getElementById('staff-joining').value;
  const current = document.getElementById('staff-current').checked;
  const endDate = current ? '' : document.getElementById('staff-end').value;
  const visible = document.getElementById('staff-visible').value === 'true';
  const imgUrl = type === 'director' ? document.getElementById('staff-imgurl').value : '';
  const bio = type === 'director' ? document.getElementById('staff-bio').value : '';

  if (id) {
    const member = teamMembersData.find(m => m.id == id);
    if (member) {
      member.type = type; member.name = name; member.role = role; member.details = details; member.email = email; member.joining = joining; member.current = current; member.endDate = endDate; member.visible = visible; member.imgUrl = imgUrl; member.bio = bio;
    }
  } else {
    const newMember = {
      id: Date.now(),
      type,
      name, role, details, email, joining, current, endDate, visible, imgUrl, bio,
      imgText: name.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase()
    };
    teamMembersData.push(newMember);
  }

  localStorage.setItem('idhika_team_members', JSON.stringify(teamMembersData));
  closeStaffModal();
  renderTeamMembers();
  loadAdminTeamTable();
  showAdminBanner('Staff record saved successfully!');
}
window.handleStaffFormSubmit = handleStaffFormSubmit;

function editStaff(id) {
  const m = teamMembersData.find(item => item.id == id);
  if (!m) return;
  document.getElementById('staff-edit-id').value = m.id;
  document.getElementById('staff-type').value = m.type || 'member';
  toggleDirectorFields(m.type || 'member');
  document.getElementById('staff-name').value = m.name;
  document.getElementById('staff-role').value = m.role;
  document.getElementById('staff-details').value = m.details;
  document.getElementById('staff-email').value = m.email || '';
  document.getElementById('staff-joining').value = m.joining || '';
  document.getElementById('staff-current').checked = m.current !== false;
  toggleStaffEndDate(m.current !== false);
  if(m.current === false) document.getElementById('staff-end').value = m.endDate || '';
  document.getElementById('staff-visible').value = m.visible !== false ? 'true' : 'false';
  document.getElementById('staff-imgurl').value = m.imgUrl || '';
  document.getElementById('image-preview-box').innerText = m.imgUrl ? '✓ Current image loaded' : '';
  document.getElementById('staff-bio').value = m.bio || '';
  document.getElementById('staff-modal').style.display = 'flex';
}
window.editStaff = editStaff;

function deleteStaff(id) {
  pendingDeleteId = id;
  document.getElementById('custom-confirm-modal').style.display = 'flex';
  document.getElementById('confirm-delete-yes-btn').onclick = function() {
    teamMembersData = teamMembersData.filter(m => m.id != pendingDeleteId);
    localStorage.setItem('idhika_team_members', JSON.stringify(teamMembersData));
    renderTeamMembers();
    loadAdminTeamTable();
    closeCustomConfirm();
    showAdminBanner('Staff member deleted successfully!');
  };
}
window.deleteStaff = deleteStaff;

function deleteLead(id) {
  pendingDeleteId = id;
  document.getElementById('custom-confirm-modal').style.display = 'flex';
  document.getElementById('confirm-delete-yes-btn').onclick = function() {
    storedLeadsList = storedLeadsList.filter(l => l.id != pendingDeleteId);
    saveAndSyncCRM();
    closeCustomConfirm();
    showAdminBanner('Lead entry deleted successfully!');
  };
}
window.deleteLead = deleteLead;

function closeCustomConfirm() {
  document.getElementById('custom-confirm-modal').style.display = 'none';
  pendingDeleteId = null;
}
window.closeCustomConfirm = closeCustomConfirm;

function showAdminBanner(msg, isError = false) {
  const banner = document.getElementById('admin-inpage-banner');
  if (!banner) return;
  banner.innerText = msg;
  banner.style.background = isError ? 'rgba(239, 68, 68, 0.2)' : 'rgba(16, 185, 129, 0.2)';
  banner.style.borderColor = isError ? '#ef4444' : '#34d399';
  banner.style.color = isError ? '#f87171' : '#34d399';
  banner.style.display = 'block';
  setTimeout(() => { banner.style.display = 'none'; }, 4000);
}
window.showAdminBanner = showAdminBanner;

function validateFormGlobally() {
  const nameInput = document.getElementById('lead-name');
  const phoneInput = document.getElementById('lead-phone');
  const emailInput = document.getElementById('lead-email');

  const nameVal = nameInput.value;
  const phoneVal = phoneInput.value.trim();
  const emailVal = emailInput.value.trim().toLowerCase();

  const nameErr = document.getElementById('name-error-msg');
  const phoneErr = document.getElementById('phone-error-msg');
  const emailErr = document.getElementById('email-error-msg');
  const submitBtn = document.getElementById('submit-inquiry-btn');

  let isFormValid = true;

  const nameRegex = /^[A-Za-z. ]+$/;
  if (nameVal && !nameRegex.test(nameVal)) {
    nameErr.style.display = 'block';
    isFormValid = false;
  } else {
    nameErr.style.display = 'none';
  }

  const phoneRegex = /^[0-9]+$/;
  if (phoneVal && !phoneRegex.test(phoneVal)) {
    phoneErr.style.display = 'block';
    isFormValid = false;
  } else {
    phoneErr.style.display = 'none';
  }

  const allowedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'yopmail.com'];
  if (emailVal) {
    const parts = emailVal.split('@');
    let emailOk = true;
    if (parts.length !== 2 || !allowedDomains.includes(parts[1])) {
      emailOk = false;
    } else {
      const username = parts[0];
      const usernameRegex = /^[a-z0-9.]+$/;
      if (!usernameRegex.test(username)) emailOk = false;
    }

    const isDuplicate = storedLeadsList.some(l => l.email.toLowerCase() === emailVal);
    if (!emailOk || isDuplicate) {
      emailErr.innerText = isDuplicate ? 'This email address already exists in our inquiry database.' : 'Allowed domains: Gmail, Yahoo, Outlook, Yopmail.';
      emailErr.style.display = 'block';
      isFormValid = false;
    } else {
      emailErr.style.display = 'none';
    }
  } else {
    emailErr.style.display = 'none';
  }

  if (!nameVal.trim() || !phoneVal || !emailVal || !isFormValid) {
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.5';
  } else {
    submitBtn.disabled = false;
    submitBtn.style.opacity = '1';
  }
}
window.validateFormGlobally = validateFormGlobally;

async function handleCustomerLeadSubmit(event) {
  event.preventDefault();
  const countryCode = document.getElementById('lead-country-code').value;
  const rawPhone = document.getElementById('lead-phone').value.trim();
  const name = document.getElementById('lead-name').value.trim();
  const phone = countryCode + ' ' + rawPhone;
  const email = document.getElementById('lead-email').value.trim().toLowerCase();
  const location = document.getElementById('lead-location').value.trim();
  const service = document.getElementById('lead-service').value;

  if (storedLeadsList.some(l => l.email.toLowerCase() === email)) {
    alert('An inquiry with this email address already exists.');
    return;
  }

  const newLead = { id: Date.now(), name, phone, email, location, service, assignedTo: 'Unassigned', status: 'NEW', comment: 'Inquiry captured via bubble.' };
  storedLeadsList.push(newLead);
  saveAndSyncCRM();
  closeLeadModal();

  // Send actual email via backend server endpoint in the background
  try {
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, location, service })
    });
  } catch (err) {
    console.error('Background email dispatch failed:', err);
  }

  const popupContent = 
    '<p><strong>To:</strong> ' + email + '</p>' +
    '<p><strong>Subject:</strong> Inquiry Received — Ídhika Group</p>' +
    '<hr style="border:0; border-top:1px solid rgba(212,175,55,0.3); margin:10px 0;">' +
    '<p>Dear <strong>' + name + '</strong>,</p>' +
    '<p style="margin-top:6px;">Thank you for contacting <strong>ÍDHIKA GROUP</strong> regarding your architectural requirement for <em>' + service + '</em> at <em>' + location + '</em>.</p>' +
    '<p style="margin-top:6px;">We have successfully received your inquiry. Our professional advisory team will review your project parameters and connect with you shortly.</p>' +
    '<p style="margin-top:10px; font-style:italic; color:var(--accent-gold);">Warm regards,<br>Client Relations Desk, Ídhika Group</p>';

  document.getElementById('popup-title-text').innerText = 'Inquiry Successfully Submitted';
  document.getElementById('success-popup-content').innerHTML = popupContent;
  document.getElementById('success-popup-modal').style.display = 'flex';
}
window.handleCustomerLeadSubmit = handleCustomerLeadSubmit;

function handleManualLeadSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('manual-name').value.trim();
  const phone = document.getElementById('manual-phone').value.trim();
  const email = document.getElementById('manual-email').value.trim().toLowerCase();
  const location = document.getElementById('manual-location').value.trim();
  const service = document.getElementById('manual-service').value;

  const newLead = { id: Date.now(), name, phone, email, location, service, assignedTo: 'Unassigned', status: 'NEW', comment: 'Manually added by Director/Admin.' };
  storedLeadsList.push(newLead);
  saveAndSyncCRM();
  closeManualLeadModal();
  showAdminBanner('Manual lead entry created successfully!');
  document.getElementById('manual-name').value = '';
  document.getElementById('manual-phone').value = '';
  document.getElementById('manual-email').value = '';
  document.getElementById('manual-location').value = '';
}
window.handleManualLeadSubmit = handleManualLeadSubmit;

function closeSuccessPopup() {
  document.getElementById('success-popup-modal').style.display = 'none';
}
window.closeSuccessPopup = closeSuccessPopup;

function handleFeedbackSubmit(event) {
  event.preventDefault();
  alert('Customer feedback submitted successfully!');
  document.getElementById('fb-name').value = '';
  document.getElementById('fb-msg').value = '';
  closeFeedbackModal();
}
window.handleFeedbackSubmit = handleFeedbackSubmit;

function saveAndSyncCRM() {
  localStorage.setItem('idhika_crm_leads', JSON.stringify(storedLeadsList));
  loadAdminLeads();
}
window.saveAndSyncCRM = saveAndSyncCRM;

function filterCrmTable() {
  const query = document.getElementById('crm-search-input').value.toLowerCase();
  loadAdminLeads(query);
}
window.filterCrmTable = filterCrmTable;

function loadAdminLeads(filterQuery = '') {
  const tbody = document.getElementById('admin-leads-tbody');
  if (!tbody) return;

  let filteredList = storedLeadsList;
  if (filterQuery) {
    filteredList = storedLeadsList.filter(l => 
      l.name.toLowerCase().includes(filterQuery) || 
      l.phone.toLowerCase().includes(filterQuery) || 
      l.location.toLowerCase().includes(filterQuery) ||
      l.assignedTo.toLowerCase().includes(filterQuery)
    );
  }

  if (filteredList.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; color:var(--text-muted);">No matching inquiries found.</td></tr>';
    return;
  }

  tbody.innerHTML = filteredList.map(function(l) {
    let badgeClass = 'badge-new';
    if (l.status === 'ALLOCATED') badgeClass = 'badge-allocated';
    if (l.status === 'PROCEED') badgeClass = 'badge-proceed';
    if (l.status === 'COMPLETED') badgeClass = 'badge-completed';
    if (l.status === 'CANCEL') badgeClass = 'badge-cancel';
    if (l.status === 'BLACKLISTED') badgeClass = 'badge-blacklist';

    return '<tr>' +
      '<td><strong>' + l.name + '</strong><br><span style="font-size:0.75rem; color:var(--text-muted);">' + l.phone + ' | ' + l.email + '</span></td>' +
      '<td>' + l.location + '</td>' +
      '<td>' + l.service + '</td>' +
      '<td>' +
        '<select id="assignee-sel-' + l.id + '" class="form-control" style="padding:0.3rem; font-size:0.75rem; margin-top:0;">' +
          '<option value="Unassigned"' + (l.assignedTo === 'Unassigned' ? ' selected' : '') + '>Unassigned</option>' +
          '<option value="Karan Negi (Manager)"' + (l.assignedTo === 'Karan Negi (Manager)' ? ' selected' : '') + '>Karan Negi</option>' +
          '<option value="Amit Sharma (Admin)"' + (l.assignedTo === 'Amit Sharma (Admin)' ? ' selected' : '') + '>Amit Sharma</option>' +
        '</select>' +
      '</td>' +
      '<td>' +
        '<select id="status-sel-' + l.id + '" class="form-control" style="padding:0.3rem; font-size:0.75rem; margin-top:0;"' + (l.status === 'BLACKLISTED' ? ' disabled style="padding:0.3rem; font-size:0.75rem; margin-top:0; background:#1a1d24; color:#94a3b8; cursor:not-allowed;"' : '') + '>' +
          '<option value="NEW"' + (l.status === 'NEW' ? ' selected' : '') + '>NEW</option>' +
          '<option value="ALLOCATED"' + (l.status === 'ALLOCATED' ? ' selected' : '') + '>ALLOCATED</option>' +
          '<option value="PROCEED"' + (l.status === 'PROCEED' ? ' selected' : '') + '>PROCEED</option>' +
          '<option value="COMPLETED"' + (l.status === 'COMPLETED' ? ' selected' : '') + '>COMPLETED</option>' +
          '<option value="CANCEL"' + (l.status === 'CANCEL' ? ' selected' : '') + '>CANCEL</option>' +
          '<option value="BLACKLISTED"' + (l.status === 'BLACKLISTED' ? ' selected' : '') + '>BLACKLISTED</option>' +
        '</select>' +
      '</td>' +
      '<td><input type="text" id="comment-inp-' + l.id + '" class="form-control" style="padding:0.3rem; font-size:0.75rem; margin-top:0;" value="' + (l.comment || '') + '"></td>' +
      '<td>' +
        '<div style="display:flex; gap:4px; flex-wrap:wrap;">' +
          '<button onclick="window.cloneLead(' + l.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem;" title="Clone entry">Clone</button>' +
          '<button onclick="window.deleteLead(' + l.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; border-color:#ef4444; color:#f87171;">Delete</button>' +
        '</div>' +
      '</td>' +
    '</tr>';
  }).join('');
}
window.loadAdminLeads = loadAdminLeads;

function checkBlacklistGuard(id, selectEl) {
  const lead = storedLeadsList.find(l => l.id == id);
  if (lead && lead.status === 'BLACKLISTED' && selectEl.value !== 'BLACKLISTED') {
    alert('This lead is Blacklisted and its status cannot be changed.');
    selectEl.value = 'BLACKLISTED';
  }
}
window.checkBlacklistGuard = checkBlacklistGuard;

function saveAllCrmChanges() {
  let newlyProceededLead = null;

  storedLeadsList.forEach(function(lead) {
    const assigneeEl = document.getElementById('assignee-sel-' + lead.id);
    const statusEl = document.getElementById('status-sel-' + lead.id);
    const commentEl = document.getElementById('comment-inp-' + lead.id);

    if (assigneeEl && statusEl && commentEl) {
      const oldStatus = lead.status;
      lead.assignedTo = assigneeEl.value;
      lead.status = statusEl.value;
      lead.comment = commentEl.value;

      if (lead.status === 'PROCEED' && oldStatus !== 'PROCEED') {
        newlyProceededLead = lead;
      }
    }
  });

  saveAndSyncCRM();
  showAdminBanner('All CRM changes saved successfully!');

  if (newlyProceededLead) {
    // Trigger background API call to send email and generate password securely on backend
    fetch('/api/send-welcome-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: newlyProceededLead.email, 
        name: newlyProceededLead.name, 
        service: newlyProceededLead.service, 
        location: newlyProceededLead.location 
      })
    }).catch(err => console.error('Background email dispatch failed:', err));

    const welcomeHtml = 
      '<p>Dear <strong>' + newlyProceededLead.name + '</strong>,</p>' +
      '<p style="margin-top:6px; color:#34d399; font-weight:600;">🎉 Congratulations! Your project contract has been officially approved and set to PROCEED.</p>' +
      '<p style="margin-top:6px;">We are thrilled to welcome you to the <strong>ÍDHIKA GROUP</strong> family. Your dedicated Customer Dashboard has been provisioned securely.</p>' +
      '<p style="margin-top:8px;"><strong>Secure Access Credentials:</strong><br>' +
      '• Portal Login URL: <a href="http://localhost:3000" target="_blank" style="color:var(--accent-gold);">Access Client Portal</a><br>' +
      '• Registered Email: ' + newlyProceededLead.email + '<br>' +
      '• Temporary Secure Password: <em>Sent securely to client email</em> (Hidden for security)</p>' +
      '<p style="margin-top:10px; font-style:italic; color:var(--accent-gold);">Warmest regards & best wishes,<br>Executive Director Office, Ídhika Group</p>';

    document.getElementById('popup-title-text').innerText = 'Official Welcome Email Sent';
    document.getElementById('success-popup-content').innerHTML = welcomeHtml;
    document.getElementById('success-popup-modal').style.display = 'flex';
  }
}
window.saveAllCrmChanges = saveAllCrmChanges;
function cloneLead(id) {
  const lead = storedLeadsList.find(l => l.id === id);
  if (!lead) return;

  const cloned = {
    ...lead,
    id: Date.now(),
    assignedTo: 'Unassigned',
    status: 'NEW',
    comment: 'Cloned from entry #' + id,
    tempPassword: ''
  };

  storedLeadsList.push(cloned);
  saveAndSyncCRM();
  showAdminBanner('Entry successfully cloned as Unassigned/New!');
}
window.cloneLead = cloneLead;

function deleteLead(id) {
  pendingDeleteId = id;
  document.getElementById('custom-confirm-modal').style.display = 'flex';
  document.getElementById('confirm-delete-yes-btn').onclick = function() {
    storedLeadsList = storedLeadsList.filter(l => l.id != pendingDeleteId);
    saveAndSyncCRM();
    closeCustomConfirm();
    showAdminBanner('Lead entry deleted successfully!');
  };
}
window.deleteLead = deleteLead;

function loadAdminTeamTable() {
  const tbody = document.getElementById('admin-team-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = teamMembersData.map(function(t) {
    const isVisible = t.visible !== false;
    const workingStatus = t.current !== false ? '<span style="color:#34d399; font-weight:700;">Currently Working</span>' : '<span style="color:#f87171;">End Date: ' + t.endDate + '</span>';
    return '<tr>' +
      '<td><strong>' + t.name + '</strong><br><span style="font-size:0.75rem; color:var(--accent-gold);">' + t.role + ' (' + t.type.toUpperCase() + ')</span></td>' +
      '<td>' + (isVisible ? '<span style="color:#34d399; font-weight:700;">Visible</span>' : '<span style="color:#f87171; font-weight:700;">Hidden</span>') + '</td>' +
      '<td><span style="font-size:0.78rem;">Joined: ' + (t.joining || 'N/A') + '</span><br>' + workingStatus + '</td>' +
      '<td><span style="font-size:0.78rem; color:var(--text-muted);">' + t.details + '</span></td>' +
      '<td>' +
        '<button onclick="window.editStaff(' + t.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; margin-right:4px;">Edit</button>' +
        '<button onclick="window.deleteStaff(' + t.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; border-color:#ef4444; color:#f87171;">Delete</button>' +
      '</td>' +
    '</tr>';
  }).join('');
}
window.loadAdminTeamTable = loadAdminTeamTable;

function handlePortalLoginSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('portal-login-email').value.trim().toLowerCase();
  const pass = document.getElementById('portal-login-pass').value.trim();

  const matchedLead = storedLeadsList.find(l => l.email === email && l.status === 'PROCEED');
  if (matchedLead && (pass === matchedLead.tempPassword || pass === 'idhika123')) {
    localStorage.setItem('idhika_logged_customer', JSON.stringify(matchedLead));
    closeCustomerLoginModal();
    checkCustomerAuthState();
    showPage('client-portal');
    alert('Logged into Customer Dashboard!');
    return;
  }

  const matchedEmp = teamMembersData.find(m => m.email && m.email.toLowerCase() === email);
  if (matchedEmp) {
    localStorage.setItem('idhika_logged_employee', JSON.stringify(matchedEmp));
    closeCustomerLoginModal();
    checkCustomerAuthState();
    showPage('employee-portal');
    alert('Logged into Employee Internal Space!');
    return;
  }

  alert('Authentication failed. Check your credentials or ensure your contract is set to PROCEED.');
}
window.handlePortalLoginSubmit = handlePortalLoginSubmit;

function checkCustomerAuthState() {
  const loggedCust = localStorage.getItem('idhika_logged_customer');
  const loggedEmp = localStorage.getItem('idhika_logged_employee');
  const bubble = document.getElementById('persistent-contact-bubble');
  const clientNavLink = document.getElementById('nav-client-link');
  const empNavLink = document.getElementById('nav-employee-link');

  if (loggedCust) {
    const cust = JSON.parse(loggedCust);
    if (bubble) bubble.style.display = 'none';
    if (clientNavLink) clientNavLink.style.display = 'block';
    loadCustomerDashboard(cust);
  } else if (loggedEmp) {
    const emp = JSON.parse(loggedEmp);
    if (bubble) bubble.style.display = 'none';
    if (empNavLink) empNavLink.style.display = 'block';
    loadEmployeeDashboard(emp);
  } else {
    if (bubble) bubble.style.display = 'block';
    if (clientNavLink) clientNavLink.style.display = 'none';
    if (empNavLink) empNavLink.style.display = 'none';
  }
}
window.checkCustomerAuthState = checkCustomerAuthState;

function loadCustomerDashboard(cust) {
  document.getElementById('cust-welcome-title').innerText = 'Welcome, ' + cust.name;
  document.getElementById('cust-details-text').innerHTML = 'Site: ' + cust.location + ' | Service: ' + cust.service + ' | Manager: ' + cust.assignedTo;
  document.getElementById('client-project-display').innerHTML = '<div class="glass-card"><h3 class="gold-text">' + cust.service + ' — Active Tracker</h3><p style="margin:0.5rem 0; color:var(--text-muted);">Status: Work in Progress</p><button onclick="window.closeCustomerProject(' + cust.id + ')" class="btn btn-primary" style="margin-top:1rem;">Mark Project as Closed / Completed</button></div>';
}
window.loadCustomerDashboard = loadCustomerDashboard;

function loadEmployeeDashboard(emp) {
  const workingTxt = emp.current !== false ? 'Currently Working' : 'Tenure Ended: ' + emp.endDate;
  document.getElementById('employee-profile-card').innerHTML = 
    '<h3 class="gold-text">' + emp.name + '</h3>' +
    '<p style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:0.5rem;"><strong>Role:</strong> ' + emp.role + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.3rem;"><strong>Experience Details:</strong> ' + emp.details + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.3rem;"><strong>Joining Date:</strong> ' + (emp.joining || 'N/A') + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;"><strong>Employment Status:</strong> ' + workingTxt + '</p>' +
    '<button onclick="window.logoutEmployee()" class="btn btn-secondary" style="font-size:0.7rem;">Log Out Employee Space</button>';
}
window.loadEmployeeDashboard = loadEmployeeDashboard;

function logoutEmployee() {
  localStorage.removeItem('idhika_logged_employee');
  showPage('home');
  checkCustomerAuthState();
}
window.logoutEmployee = logoutEmployee;

function closeCustomerProject(id) {
  const lead = storedLeadsList.find(l => l.id === id);
  if (lead) {
    lead.status = 'COMPLETED';
    saveAndSyncCRM();
    localStorage.removeItem('idhika_logged_customer');
    alert('Project closed and synced to COMPLETED!');
    showPage('home');
    checkCustomerAuthState();
  }
}
window.closeCustomerProject = closeCustomerProject;

function switchRole(role) {
  closeRoleModal();
  const clientLink = document.getElementById('nav-client-link');
  const adminLink = document.getElementById('nav-admin-link');
  if(clientLink) clientLink.style.display = 'none'; 
  if(adminLink) adminLink.style.display = 'none';
  if (role === 'admin') { if(adminLink) adminLink.style.display = 'block'; showPage('admin-portal'); loadAdminLeads(); loadAdminTeamTable(); loadAdminProjectsTable(); }
  else { showPage('home'); checkCustomerAuthState(); }
}
window.switchRole = switchRole;

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
window.initSubtleArchitecturalBackground = initSubtleArchitecturalBackground;

const detailedServicesData = [
  { num: "1", title: "ARCHITECTURAL DESIGN", clientSummary: "We turn your spatial needs and site conditions into functional, high-value blueprints tailored precisely to your budget and municipal guidelines.", description: "Great Architectural Design emerges from a careful analysis of project requirements, client goals, and budgetary constraints through all development phases.", deliverables: ["Programming & Spatial Requirements Analysis", "Preliminary Conceptual Design Schematics", "Comprehensive Budget Development", "Advanced Design Development & Specifications", "Detailed Estimates & Material Schedules", "3-D Presentations, Photorealistic Renders & Physical Models", "Computer-Aided Drafting and Design (CADD / BIM)", "Post-Construction Quality Inspections & Support"] },
  { num: "2", title: "STRUCTURAL ENGINEERING", clientSummary: "Complete safety assurance. Our structural engineers compute soil mechanics, load distributions, and foundation depths for long-term safety.", description: "Structural Engineering balances costs, materials, and labor early at the schematic phase, extending through construction documentation.", deliverables: ["Structural Steel Framework Design & Detailing", "Reinforced Concrete Structure (RCC) Design", "Soil Mechanics Analysis & Load Capacities", "Foundation Depth & Substructure Engineering", "Seismic & Wind Resistance Load Calculations", "Contractor Technical Inputs & Quality Coordination"] },
  { num: "3", title: "MASTER & LAND PLANNING", clientSummary: "Smart site development. We analyze site topographies, road access, and environmental features to maximize plot utility.", description: "Land Planning addresses complex interplay between architecture, utility infrastructure, and environmental preservation.", deliverables: ["Comprehensive Master Planning & Zoning", "Site Topography Analysis & Feasibility Studies", "Optimal Plot Layout & Circulation Design", "Utility Infrastructure Analysis (Water, Power, Drainage)", "Environmental Conservation Integration"] },
  { num: "4", title: "INTERIOR ARCHITECTURE", clientSummary: "Luxurious indoor spaces. We design interior layouts that optimize natural light, ventilation, furniture circulation, and modern acoustic comfort.", description: "Interior Design investigates functional client requirements, building systems, and premium material expressions.", deliverables: ["Interior Space Planning & Ergonomic Layouts", "Complete Building Renovation & Modernization", "Adaptive Re-use of Existing Structures", "Acoustic, Lighting & Material Specification", "Custom Millwork, Joinery & Lighting Schematics"] },
  { num: "5", title: "LANDSCAPE ARCHITECTURE", clientSummary: "Vibrant exterior environments. We design outdoor gardens, pathways, lighting, and screening elements tailored to local soil conditions.", description: "Enhances aesthetics and functionality of exterior environments—from pathways and streetscapes to exterior lighting and native plants.", deliverables: ["Exterior Environmental & Garden Master Plans", "Pathway, Courtyard & Streetscape Engineering", "Screening, Buffering & Privacy Boundaries", "Exterior Lighting & Water Feature Components", "Eco-Native Plant Selection for Local Soil Conditions"] }
];

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
window.toggleServiceDrawer = toggleServiceDrawer;

function renderDetailedServices() {
  const container = document.getElementById('services-container');
  if (container) {
    container.innerHTML = detailedServicesData.map((s, idx) => 
      '<div class="service-card">' +
        '<div class="service-icon-head"><div class="service-icon-badge">' + s.num + '</div><h3 class="gold-text" style="font-size:1.1rem; margin-bottom:0;">' + s.title + '</h3></div>' +
        '<p class="service-short-summary">' + s.clientSummary + '</p>' +
        '<button id="service-btn-' + idx + '" onclick="window.toggleServiceDrawer(' + idx + ')" class="expand-details-btn">Explore Deliverables & Scope ↓</button>' +
        '<div id="service-drawer-' + idx + '" class="service-drawer-content">' +
          '<p class="drawer-tech-desc">' + s.description + '</p>' +
          '<h4 style="font-size:0.8rem; color:var(--accent-gold); margin-bottom:0.5rem; text-transform:uppercase;">Included Technical Deliverables:</h4>' +
          '<div class="deliverables-grid">' + s.deliverables.map(item => '<div class="deliverable-item">✓ ' + item + '</div>').join('') + '</div>' +
        '</div>' +
      '</div>'
    ).join('');
  }
}
window.renderDetailedServices = renderDetailedServices;

function renderTeamMembers() {
  const dirContainer = document.getElementById('directors-container');
  const memContainer = document.getElementById('team-members-container');
  
  const visibleStaff = teamMembersData.filter(t => t.visible !== false);

  if (dirContainer) {
    const directors = visibleStaff.filter(t => t.type === 'director');
    dirContainer.innerHTML = directors.map(d => {
      const picHtml = d.imgUrl ? 
        '<img src="' + d.imgUrl + '" alt="' + d.name + '" style="width:110px; height:110px; margin:0 auto 1rem; border-radius:50%; object-fit:cover; border:2px solid var(--accent-gold); box-shadow:0 0 20px rgba(212,175,55,0.3); display:block;" onerror="this.style.display=\\'none\\';">' :
        '<div style="width:110px; height:110px; margin:0 auto 1rem; border-radius:50%; background:linear-gradient(135deg, var(--accent-gold), #33270a); display:flex; align-items:center; justify-content:center; font-size:2.2rem; font-family:\\'Cinzel\\',serif; color:#000; font-weight:800; border:2px solid var(--accent-gold); box-shadow:0 0 20px rgba(212,175,55,0.3);">' + (d.imgText || 'DG') + '</div>';

      return '<div class="glass-card director-card" style="text-align:center;">' +
        picHtml +
        '<h4 class="gold-text" style="font-size:1.1rem; margin-bottom:0.2rem;">' + d.name + '</h4>' +
        '<span style="font-size:0.75rem; color:var(--accent-gold); display:block; margin-bottom:0.5rem; font-weight:600;">' + d.role + ' — ' + d.details + '</span>' +
        '<p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;">' + (d.bio || 'Principal Director heading major architectural and housing divisions.') + '</p>' +
      '</div>';
    }).join('');
  }

  if (memContainer) {
    const members = visibleStaff.filter(t => t.type === 'member');
    memContainer.innerHTML = members.map(m => 
      '<div class="team-member-card glass-card">' +
        '<span style="font-size:0.7rem; color:var(--accent-gold); text-transform:uppercase; font-weight:700; display:block; margin-bottom:0.3rem;">' + m.role + '</span>' +
        '<h4 style="font-size:0.95rem; font-family:\\'Cinzel\\',serif; color:#fff; margin-bottom:0.3rem;">' + m.name + '</h4>' +
        '<p style="font-size:0.78rem; color:var(--text-muted);">' + m.details + '</p>' +
      '</div>'
    ).join('');
  }
}
window.renderTeamMembers = renderTeamMembers;

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
    container.innerHTML = architecturalWonders.map(w => 
      '<div class="portfolio-card">' +
        '<img src="' + w.image + '" alt="' + w.name + '" class="wonder-card-img" onerror="this.style.display=\\'none\\';">' +
        '<h3 class="gold-text" style="font-size:1.1rem; margin-bottom:0.2rem;">' + w.name + '</h3>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>' + w.location + '</strong> — ' + w.archetype + '</p>' +
        '<p style="font-size:0.8rem; line-height:1.5; margin-bottom:0.8rem;">' + w.description + '</p>' +
        '<a href="' + w.googleUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary wonder-link-btn">Explore on Google Search ↗</a>' +
      '</div>'
    ).join('');
  }
}
window.renderArchitecturalWonders = renderArchitecturalWonders;

function fetchProjects() {
  renderPortfolio(signatureProjects);
  renderEmployeeSpace(signatureProjects);
}
window.fetchProjects = fetchProjects;

function renderPortfolio(projects) {
  const container = document.getElementById('portfolio-grid');
  if (!container) return;
  
  const listToRender = projects || signatureProjects;

  if (listToRender.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align:center; color:var(--text-muted); padding:2rem;">No matching projects found.</div>';
    return;
  }

  container.innerHTML = listToRender.map(p => {
    const imgTag = p.image ? 
      '<div style="width:100%; height:180px; overflow:hidden; border-radius:6px; margin-bottom:1rem; border:1px solid rgba(255,255,255,0.08); background:#0b0f17;">' +
        '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.style.display=\\'none\\';">' +
      '</div>' : '';

    return '<div class="portfolio-card">' +
      imgTag +
      '<h3 style="color:var(--accent-gold); margin-bottom:0.4rem; font-family:\\'Cinzel\\',serif;">' + p.name + '</h3>' +
      '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>' + p.type + '</strong> — ' + p.location + '</p>' +
      '<p style="font-size:0.82rem; margin-bottom:1rem; color:#e2e8f0; line-height:1.5;">' + p.description + '</p>' +
      '<button onclick="window.viewProjectDetails(' + p.id + ')" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.72rem; width:100%;">View Floor Plans & Renders</button>' +
    '</div>';
  }).join('');
}
window.renderPortfolio = renderPortfolio;

function executePortfolioSearch() {
  const query = document.getElementById('portfolio-search-input').value.trim().toLowerCase();
  const filtered = signatureProjects.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.type.toLowerCase().includes(query) || 
    p.location.toLowerCase().includes(query)
  );
  renderPortfolio(filtered);
}
window.executePortfolioSearch = executePortfolioSearch;

function viewProjectDetails(id) {
  const p = signatureProjects.find(proj => proj.id === id);
  if (!p) return;
  document.getElementById('modal-proj-name').innerText = p.name + " — Architectural Overview";
  let imagesHtml = '';
  if (p.image) imagesHtml += '<div class="project-render-wrapper" onclick="window.openZoomModal(\\'' + p.image + '\\')"><img src="' + p.image + '" class="project-render-img"><div class="zoom-badge">🔍 Click to Expand</div></div>';
  if (p.planImage) imagesHtml += '<div class="project-render-wrapper" onclick="window.openZoomModal(\\'' + p.planImage + '\\')" style="margin-top:0.8rem;"><img src="' + p.planImage + '" class="project-render-img"><div class="zoom-badge">🔍 Expand Plan</div></div>';

  document.getElementById('modal-proj-content').innerHTML = 
    '<p><strong>Type:</strong> ' + p.type + ' | <strong>Location:</strong> ' + p.location + '</p>' +
    '<p style="margin-top:0.4rem; color:var(--text-muted);">' + p.description + '</p>' +
    '<div class="modal-spec-box">' +
      '<div><h4 class="gold-text" style="font-size:0.95rem;">Specs</h4><ul>' + p.specs.map(s => '<li style="font-size:0.8rem;">' + s + '</li>').join('') + '</ul></div>' +
      '<div><h4 class="gold-text" style="font-size:0.95rem;">Renders (Click to Zoom)</h4><div class="modal-image-container">' + imagesHtml + '</div></div>' +
    '</div>';
  document.getElementById('project-detail-modal').style.display = 'flex';
}
window.viewProjectDetails = viewProjectDetails;

function openZoomModal(imgSrc) {
  const overlay = document.getElementById('image-zoom-overlay');
  const imgTarget = document.getElementById('zoomed-image-target');
  if (overlay && imgTarget) { imgTarget.src = imgSrc; overlay.style.display = 'flex'; }
}
window.openZoomModal = openZoomModal;

function closeZoomModal() {
  const overlay = document.getElementById('image-zoom-overlay');
  if (overlay) overlay.style.display = 'none';
}
window.closeZoomModal = closeZoomModal;

function renderEmployeeSpace(projects) {
  const container = document.getElementById('employee-assigned-projects');
  if (container) {
    container.innerHTML = signatureProjects.map(p => 
      '<div style="margin-bottom:0.8rem; padding-bottom:0.8rem; border-bottom:1px solid rgba(255,255,255,0.1);">' +
        '<h4>' + p.name + '</h4><p style="font-size:0.82rem;">' + p.type + '</p>' +
      '</div>'
    ).join('');
  }
}
window.renderEmployeeSpace = renderEmployeeSpace;

function renderEmployeeSpace(projects) {
  const container = document.getElementById('employee-assigned-projects');
  if (container) {
    container.innerHTML = signatureProjects.map(p =>
      '<div style="margin-bottom:0.8rem; padding-bottom:0.8rem; border-bottom:1px solid rgba(255,255,255,0.1);">' +
        '<h4>' + p.name + '</h4><p style="font-size:0.82rem;">' + p.type + '</p>' +
      '</div>'
    ).join('');
  }
}
window.renderEmployeeSpace = renderEmployeeSpace;

function loadHomeContentIntoAdmin(homeContent) {

  if (!homeContent) return;

  // ==========================================
  // LOAD VALUES INTO ADMIN EDITOR
  // ==========================================

  const setValue = function(id, value) {

    const element = document.getElementById(id);

    if (element) {
      element.value = value || '';
    }

  };

  setValue(
    'home-tagline-inp',
    homeContent.tagline
  );

  setValue(
    'home-m1val-inp',
    homeContent.metric1Val
  );

  setValue(
    'home-m1lbl-inp',
    homeContent.metric1Lbl
  );

  setValue(
    'home-m2val-inp',
    homeContent.metric2Val
  );

  setValue(
    'home-m2lbl-inp',
    homeContent.metric2Lbl
  );

  setValue(
    'home-m3val-inp',
    homeContent.metric3Val
  );

  setValue(
    'home-m3lbl-inp',
    homeContent.metric3Lbl
  );

  setValue(
    'home-phil-inp',
    homeContent.philosophy
  );


  // ==========================================
  // UPDATE PUBLIC HOME PAGE
  // ==========================================

  const setText = function(id, value) {

    const element = document.getElementById(id);

    if (element) {
      element.textContent = value || '';
    }

  };

  setText(
    'home-hero-tagline',
    homeContent.tagline
  );

  setText(
    'home-metric1-val',
    homeContent.metric1Val
  );

  setText(
    'home-metric1-lbl',
    homeContent.metric1Lbl
  );

  setText(
    'home-metric2-val',
    homeContent.metric2Val
  );

  setText(
    'home-metric2-lbl',
    homeContent.metric2Lbl
  );

  setText(
    'home-metric3-val',
    homeContent.metric3Val
  );

  setText(
    'home-metric3-lbl',
    homeContent.metric3Lbl
  );


  const philosophy =
    document.getElementById('home-philosophy-text');

  if (philosophy) {

    philosophy.textContent =
      '"' +
      (homeContent.philosophy || '') +
      '"';

  }

}

window.loadHomeContentIntoAdmin =
  loadHomeContentIntoAdmin;

function saveHomeContentChanges() {
  const updatedHomeContent = {
    tagline: document.getElementById('home-tagline-inp').value,
    metric1Val: document.getElementById('home-m1val-inp').value,
    metric1Lbl: document.getElementById('home-m1lbl-inp').value,
    metric2Val: document.getElementById('home-m2val-inp').value,
    metric2Lbl: document.getElementById('home-m2lbl-inp').value,
    metric3Val: document.getElementById('home-m3val-inp').value,
    metric3Lbl: document.getElementById('home-m3lbl-inp').value,
    philosophy: document.getElementById('home-phil-inp').value
  };

  fetch('/api/portal-data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ homeContent: updatedHomeContent })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {

  // Immediately update the public Home page
  loadHomeContentIntoAdmin(updatedHomeContent);

  showAdminBanner(
    'Home content updated successfully!'
  );

} else {
      showAdminBanner('Failed to update home content.', true);
    }
  })
  .catch(err => {
    console.error('Error saving home content:', err);
    showAdminBanner('Server error while saving home content.', true);
  });
}
window.saveHomeContentChanges = saveHomeContentChanges;
`;


// Write files to public
fs.writeFileSync(path.join(publicDir, 'index.html'), indexHtml);
fs.writeFileSync(path.join(publicDir, 'styles.css'), stylesCss);
fs.writeFileSync(path.join(publicDir, 'app.js'), appJs);

console.log('IDHIKA GROUP Portal Deployed Successfully with Staff & Project tables fully populated.');