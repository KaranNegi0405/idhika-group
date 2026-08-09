document.addEventListener('DOMContentLoaded', () => {
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
      container.innerHTML = storedFeedbackList.map(f => `
        <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1); text-align:left;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.3rem;">
            <span style="font-weight:700; color:var(--accent-gold); font-size:0.85rem;">[${f.category}]</span>
            <span style="font-size:0.75rem; color:var(--text-muted);">${f.date}</span>
          </div>
          <p style="font-size:0.85rem; color:var(--text-main);">"${f.text}"</p>
        </div>
      `).join('');
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
    container.innerHTML = detailedServicesData.map((s, idx) => `
      <div class="service-card">
        <div class="service-icon-head"><div class="service-icon-badge">${s.num}</div><h3 class="gold-text" style="font-size:1.25rem; margin-bottom:0;">${s.title}</h3></div>
        <p class="service-short-summary">${s.clientSummary}</p>
        <button id="service-btn-${idx}" onclick="toggleServiceDrawer(${idx})" class="expand-details-btn">Explore Deliverables & Scope ↓</button>
        <div id="service-drawer-${idx}" class="service-drawer-content">
          <p class="drawer-tech-desc">${s.description}</p>
          <h4 style="font-size:0.82rem; color:var(--accent-gold); margin-bottom:0.6rem; text-transform:uppercase;">Included Technical Deliverables:</h4>
          <div class="deliverables-grid">${s.deliverables.map(item => `<div class="deliverable-item">✓ ${item}</div>`).join('')}</div>
        </div>
      </div>
    `).join('');
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
    container.innerHTML = architecturalWonders.map(w => `
      <div class="portfolio-card">
        <img src="${w.image}" alt="${w.name}" class="wonder-card-img" onerror="this.style.display='none';">
        <h3 class="gold-text" style="font-size:1.15rem; margin-bottom:0.2rem;">${w.name}</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.6rem;"><strong>${w.location}</strong> — ${w.archetype}</p>
        <p style="font-size:0.82rem; line-height:1.6; margin-bottom:1rem;">${w.description}</p>
        <a href="${w.googleUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary wonder-link-btn">Explore on Google Search ↗</a>
      </div>
    `).join('');
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
    container.innerHTML = projects.map(p => `
      <div class="portfolio-card">
        <h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">${p.name}</h3>
        <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:0.6rem;"><strong>${p.type}</strong> — ${p.location}</p>
        <p style="font-size:0.85rem; margin-bottom:1.2rem;">${p.description}</p>
        <button onclick="viewProjectDetails(${p.id})" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.75rem; width:100%;">View Architectural Floor Plans & Renders</button>
      </div>
    `).join('');
  }
}

function viewProjectDetails(id) {
  const p = signatureProjects.find(proj => proj.id === id);
  if (!p) return;
  document.getElementById('modal-proj-name').innerText = p.name + " — Architectural Overview";
  
  let imagesHtml = '';
  if (p.image) {
    imagesHtml += `<div class="project-render-wrapper" onclick="openZoomModal('${p.image}')" title="Click to Expand Full Screen"><img src="${p.image}" alt="${p.name} Render" class="project-render-img" onerror="this.parentElement.style.display='none';"><div class="zoom-badge">🔍 Click to Expand</div></div>`;
  }
  if (p.planImage) {
    imagesHtml += `<div class="project-render-wrapper" onclick="openZoomModal('${p.planImage}')" title="Click to Expand Full Screen" style="margin-top:0.8rem;"><img src="${p.planImage}" alt="${p.name} Floor Plan" class="project-render-img" onerror="this.parentElement.style.display='none';"><div class="zoom-badge">🔍 Expand Floor Plan</div></div>`;
  }

  document.getElementById('modal-proj-content').innerHTML = `
    <p><strong>Project Type:</strong> ${p.type}</p>
    <p><strong>Location:</strong> ${p.location}</p>
    <p style="margin-top:0.5rem; color:var(--text-muted);">${p.description}</p>
    <div class="modal-spec-box">
      <div>
        <h4 class="gold-text" style="font-size:1rem; margin-bottom:0.5rem;">Architectural Specifications</h4>
        <ul>${p.specs.map(s => `<li style="font-size:0.85rem; margin-bottom:0.3rem;">${s}</li>`).join('')}</ul>
      </div>
      <div>
        <h4 class="gold-text" style="font-size:1rem; margin-bottom:0.5rem;">Renders & Floor Layouts (Click to Zoom)</h4>
        <div class="modal-image-container">${imagesHtml}</div>
      </div>
    </div>
  `;
  document.getElementById('project-detail-modal').style.display = 'flex';
}

function searchClientProject() {
  const projId = document.getElementById('client-project-id').value;
  const container = document.getElementById('client-project-display');
  const proj = signatureProjects.find(p => p.id === parseInt(projId));
  if (proj && container) {
    container.innerHTML = `
      <div class="client-card glass-card">
        <h3 class="gold-text">${proj.name} (Project ID: #${proj.id})</h3>
        <p><strong>Location:</strong> ${proj.location}</p>
        <p><strong>Project Type:</strong> ${proj.type}</p>
        <h4 style="margin-top:1.5rem;" class="gold-text">Signed-off Architectural Stages</h4>
        <div class="stage-timeline">
          <div class="stage-item">✓ Stage 1: Masterplan & Programming (100%)</div>
          <div class="stage-item">✓ Stage 2: Structural Engineering & Foundations (100%)</div>
          <div class="stage-item">⟳ Stage 3: Interior Fitouts & Handover (In Progress)</div>
        </div>
      </div>
    `;
  }
}

function renderEmployeeSpace(projects) {
  const container = document.getElementById('employee-assigned-projects');
  if (container) {
    container.innerHTML = projects.map(p => `
      <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1);">
        <h4>${p.name}</h4>
        <p style="font-size:0.85rem;">${p.type}</p>
      </div>
    `).join('');
  }
}

function renderAdminControls(projects) {
  const container = document.getElementById('admin-project-controls');
  if (container) {
    container.innerHTML = projects.map(p => `
      <div style="margin-bottom:1rem; padding-bottom:1rem; border-bottom:1px solid rgba(255,255,255,0.1);">
        <p><strong>${p.name}</strong> (${p.type})</p>
        <div style="display:flex; gap:1rem; margin-top:0.5rem;">
          <input type="text" class="form-control" value="Stage 3 In Progress">
          <button onclick="alert('Progress updated!')" class="btn btn-primary">Save</button>
        </div>
      </div>
    `).join('');
  }
}
