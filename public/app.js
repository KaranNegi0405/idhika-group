document.addEventListener('DOMContentLoaded', () => {
  initSubtleArchitecturalBackground();
  renderDetailedServices();
  fetchProjects();
  renderArchitecturalWonders();
  renderTeamMembers();
  checkCustomerAuthState();
  loadAdminLeads();
  loadAdminTeamTable();
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

function showPage(pageId) {
  // If leaving admin CRM tab without saving, revert draft edits
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

function toggleMobileMenu() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) menu.classList.toggle('active');
}

function closeMobileMenu() {
  const menu = document.getElementById('nav-links-menu');
  if (menu) menu.classList.remove('active');
}

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

function closeLeadModal() { document.getElementById('lead-modal').style.display = 'none'; }
function openFeedbackModal() { document.getElementById('feedback-modal').style.display = 'flex'; }
function closeFeedbackModal() { document.getElementById('feedback-modal').style.display = 'none'; }
function openCustomerLoginModal() { document.getElementById('customer-login-modal').style.display = 'flex'; }
function closeCustomerLoginModal() { document.getElementById('customer-login-modal').style.display = 'none'; }
function openRoleModal() { document.getElementById('role-modal').style.display = 'flex'; }
function closeRoleModal() { document.getElementById('role-modal').style.display = 'none'; }
function closeProjectModal() { document.getElementById('project-detail-modal').style.display = 'none'; }

function openManualLeadModal() { document.getElementById('manual-lead-modal').style.display = 'flex'; }
function closeManualLeadModal() { document.getElementById('manual-lead-modal').style.display = 'none'; }

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
function closeStaffModal() { document.getElementById('staff-modal').style.display = 'none'; }

function toggleDirectorFields(val) {
  document.getElementById('director-extra-fields').style.display = val === 'director' ? 'block' : 'none';
}

function toggleStaffEndDate(isChecked) {
  document.getElementById('staff-end-date-wrapper').style.display = isChecked ? 'none' : 'block';
}

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

function switchAdminTab(tab) {
  document.getElementById('admin-view-crm').style.display = tab === 'crm' ? 'block' : 'none';
  document.getElementById('admin-view-team').style.display = tab === 'team' ? 'block' : 'none';
  document.getElementById('admin-tab-btn-crm').className = tab === 'crm' ? 'btn btn-primary' : 'btn btn-secondary';
  document.getElementById('admin-tab-btn-team').className = tab === 'team' ? 'btn btn-primary' : 'btn btn-secondary';
}

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

// CUSTOM IN-PAGE DELETE CONFIRMATION MODAL LOGIC
let pendingDeleteId = null;

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

function closeCustomConfirm() {
  document.getElementById('custom-confirm-modal').style.display = 'none';
  pendingDeleteId = null;
}

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

// ==========================================
// FORM VALIDATION (Full Name Allows Single & Multiple Spaces Properly)
// ==========================================
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

  // 1. Name: Fixed to strictly allow alphabets, dots, and spaces (single or multiple)
  const nameRegex = /^[A-Za-zs.]+$/;
  if (nameVal && !nameRegex.test(nameVal)) {
    nameErr.style.display = 'block';
    isFormValid = false;
  } else {
    nameErr.style.display = 'none';
  }

  // 2. Phone: Numbers only
  const phoneRegex = /^[0-9]+$/;
  if (phoneVal && !phoneRegex.test(phoneVal)) {
    phoneErr.style.display = 'block';
    isFormValid = false;
  } else {
    phoneErr.style.display = 'none';
  }

  // 3. Email: Gmail, Yahoo, Outlook, Yopmail + duplicate check
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

function handleCustomerLeadSubmit(event) {
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

function closeSuccessPopup() {
  document.getElementById('success-popup-modal').style.display = 'none';
}

function handleFeedbackSubmit(event) {
  event.preventDefault();
  alert('Customer feedback submitted successfully!');
  document.getElementById('fb-name').value = '';
  document.getElementById('fb-msg').value = '';
  closeFeedbackModal();
}

function saveAndSyncCRM() {
  localStorage.setItem('idhika_crm_leads', JSON.stringify(storedLeadsList));
  loadAdminLeads();
}

function filterCrmTable() {
  const query = document.getElementById('crm-search-input').value.toLowerCase();
  loadAdminLeads(query);
}

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
        '<select id="status-sel-' + l.id + '" class="form-control" style="padding:0.3rem; font-size:0.75rem; margin-top:0;">' +
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
          '<button onclick="cloneLead(' + l.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem;" title="Clone entry">Clone</button>' +
          '<button onclick="deleteLead(' + l.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; border-color:#ef4444; color:#f87171;">Delete</button>' +
        '</div>' +
      '</td>' +
    '</tr>';
  }).join('');
}

// PAGE-LEVEL SAVE ALL CHANGES BUTTON (Commits draft edits and checks for PROCEED welcome email)
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
        lead.tempPassword = 'idhika123';
        newlyProceededLead = lead;
      }
    }
  });

  saveAndSyncCRM();
  showAdminBanner('All CRM changes saved successfully!');

  if (newlyProceededLead) {
    const welcomeHtml = 
      '<p>Dear <strong>' + newlyProceededLead.name + '</strong>,</p>' +
      '<p style="margin-top:6px; color:#34d399; font-weight:600;">🎉 Congratulations! Your project contract has been officially approved and set to PROCEED.</p>' +
      '<p style="margin-top:6px;">We are thrilled to welcome you to the <strong>ÍDHIKA GROUP</strong> family. Your dedicated Customer Dashboard has been provisioned securely.</p>' +
      '<p style="margin-top:8px;"><strong>Secure Access Credentials:</strong><br>' +
      '• Portal Login URL: <a href="http://localhost:3000" target="_blank" style="color:var(--accent-gold);">Access Client Portal</a><br>' +
      '• Registered Email: ' + newlyProceededLead.email + '<br>' +
      '• Temporary Secure Password: <em>idhika123</em> (Please update upon first login)</p>' +
      '<p style="margin-top:10px; font-style:italic; color:var(--accent-gold);">Warmest regards & best wishes,<br>Executive Director Office, Ídhika Group</p>';

    document.getElementById('popup-title-text').innerText = 'Official Welcome Email Sent';
    document.getElementById('success-popup-content').innerHTML = welcomeHtml;
    document.getElementById('success-popup-modal').style.display = 'flex';
  }
}

// CLONE LEAD ENTRY
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

function loadAdminTeamTable() {
  const tbody = document.getElementById('admin-team-table-tbody');
  if (!tbody) return;
  tbody.innerHTML = teamMembersData.map(function(t) {
    const isVisible = t.visible !== false;
    const workingStatus = t.current !== false ? '<span style="color:#34d399; font-weight:700;">Currently Working</span>' : '<span style="color:#f87171;">End Date: ' + t.endDate + '</span>';
    return '<tr>' +
      '<td><strong>' + t.name + '</strong><br><span style="font-size:0.75rem; color:var(--accent-gold);">' + t.role + ' (' + t.type.toUpperCase() + ')</span></td>' +
      '<td>' + (isVisible ? '<span style="color:#34d399; font-weight:700;">Visible on Website</span>' : '<span style="color:#f87171; font-weight:700;">Hidden from Website</span>') + '</td>' +
      '<td><span style="font-size:0.78rem;">Joined: ' + (t.joining || 'N/A') + '</span><br>' + workingStatus + '</td>' +
      '<td><span style="font-size:0.78rem; color:var(--text-muted);">' + t.details + '</span></td>' +
      '<td>' +
        '<button onclick="editStaff(' + t.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; margin-right:4px;">Edit</button>' +
        '<button onclick="deleteStaff(' + t.id + ')" class="btn btn-secondary" style="padding:0.25rem 0.5rem; font-size:0.65rem; border-color:#ef4444; color:#f87171;">Delete</button>' +
      '</td>' +
    '</tr>';
  }).join('');
}

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

function loadCustomerDashboard(cust) {
  document.getElementById('cust-welcome-title').innerText = 'Welcome, ' + cust.name;
  document.getElementById('cust-details-text').innerHTML = 'Site: ' + cust.location + ' | Service: ' + cust.service + ' | Manager: ' + cust.assignedTo;
  document.getElementById('client-project-display').innerHTML = '<div class="glass-card"><h3 class="gold-text">' + cust.service + ' — Active Tracker</h3><p style="margin:0.5rem 0; color:var(--text-muted);">Status: Work in Progress</p><button onclick="closeCustomerProject(' + cust.id + ')" class="btn btn-primary" style="margin-top:1rem;">Mark Project as Closed / Completed</button></div>';
}

function loadEmployeeDashboard(emp) {
  const workingTxt = emp.current !== false ? 'Currently Working' : 'Tenure Ended: ' + emp.endDate;
  document.getElementById('employee-profile-card').innerHTML = 
    '<h3 class="gold-text">' + emp.name + '</h3>' +
    '<p style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:0.5rem;"><strong>Role:</strong> ' + emp.role + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.3rem;"><strong>Experience Details:</strong> ' + emp.details + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.3rem;"><strong>Joining Date:</strong> ' + (emp.joining || 'N/A') + '</p>' +
    '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:1rem;"><strong>Employment Status:</strong> ' + workingTxt + '</p>' +
    '<button onclick="logoutEmployee()" class="btn btn-secondary" style="font-size:0.7rem;">Log Out Employee Space</button>';
}

function logoutEmployee() {
  localStorage.removeItem('idhika_logged_employee');
  showPage('home');
  checkCustomerAuthState();
}

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

function switchRole(role) {
  closeRoleModal();
  const clientLink = document.getElementById('nav-client-link');
  const adminLink = document.getElementById('nav-admin-link');
  if(clientLink) clientLink.style.display = 'none'; 
  if(adminLink) adminLink.style.display = 'none';
  if (role === 'admin') { if(adminLink) adminLink.style.display = 'block'; showPage('admin-portal'); loadAdminLeads(); loadAdminTeamTable(); }
  else { showPage('home'); checkCustomerAuthState(); }
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

function renderDetailedServices() {
  const container = document.getElementById('services-container');
  if (container) {
    container.innerHTML = detailedServicesData.map((s, idx) => 
      '<div class="service-card">' +
        '<div class="service-icon-head"><div class="service-icon-badge">' + s.num + '</div><h3 class="gold-text" style="font-size:1.1rem; margin-bottom:0;">' + s.title + '</h3></div>' +
        '<p class="service-short-summary">' + s.clientSummary + '</p>' +
        '<button id="service-btn-' + idx + '" onclick="toggleServiceDrawer(' + idx + ')" class="expand-details-btn">Explore Deliverables & Scope ↓</button>' +
        '<div id="service-drawer-' + idx + '" class="service-drawer-content">' +
          '<p class="drawer-tech-desc">' + s.description + '</p>' +
          '<h4 style="font-size:0.8rem; color:var(--accent-gold); margin-bottom:0.5rem; text-transform:uppercase;">Included Technical Deliverables:</h4>' +
          '<div class="deliverables-grid">' + s.deliverables.map(item => '<div class="deliverable-item">✓ ' + item + '</div>').join('') + '</div>' +
        '</div>' +
      '</div>'
    ).join('');
  }
}

function renderTeamMembers() {
  const dirContainer = document.getElementById('directors-container');
  const memContainer = document.getElementById('team-members-container');
  
  const visibleStaff = teamMembersData.filter(t => t.visible !== false);

  if (dirContainer) {
    const directors = visibleStaff.filter(t => t.type === 'director');
    dirContainer.innerHTML = directors.map(d => {
      const picHtml = d.imgUrl ? 
        '<img src="' + d.imgUrl + '" alt="' + d.name + '" style="width:110px; height:110px; margin:0 auto 1rem; border-radius:50%; object-fit:cover; border:2px solid var(--accent-gold); box-shadow:0 0 20px rgba(212,175,55,0.3); display:block;" onerror="this.style.display=\'none\';">' :
        '<div style="width:110px; height:110px; margin:0 auto 1rem; border-radius:50%; background:linear-gradient(135deg, var(--accent-gold), #33270a); display:flex; align-items:center; justify-content:center; font-size:2.2rem; font-family:\'Cinzel\',serif; color:#000; font-weight:800; border:2px solid var(--accent-gold); box-shadow:0 0 20px rgba(212,175,55,0.3);">' + (d.imgText || 'DG') + '</div>';

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
        '<h4 style="font-size:0.95rem; font-family:\'Cinzel\',serif; color:#fff; margin-bottom:0.3rem;">' + m.name + '</h4>' +
        '<p style="font-size:0.78rem; color:var(--text-muted);">' + m.details + '</p>' +
      '</div>'
    ).join('');
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
    container.innerHTML = architecturalWonders.map(w => 
      '<div class="portfolio-card">' +
        '<img src="' + w.image + '" alt="' + w.name + '" class="wonder-card-img" onerror="this.style.display=\'none\';">' +
        '<h3 class="gold-text" style="font-size:1.1rem; margin-bottom:0.2rem;">' + w.name + '</h3>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>' + w.location + '</strong> — ' + w.archetype + '</p>' +
        '<p style="font-size:0.8rem; line-height:1.5; margin-bottom:0.8rem;">' + w.description + '</p>' +
        '<a href="' + w.googleUrl + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary wonder-link-btn">Explore on Google Search ↗</a>' +
      '</div>'
    ).join('');
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
}

function renderPortfolio(projects) {
  const container = document.getElementById('portfolio-grid');
  if (container) {
    container.innerHTML = projects.map(p => 
      '<div class="portfolio-card">' +
        '<h3 style="color:var(--accent-gold);margin-bottom:0.4rem;">' + p.name + '</h3>' +
        '<p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.5rem;"><strong>' + p.type + '</strong> — ' + p.location + '</p>' +
        '<p style="font-size:0.82rem; margin-bottom:1rem;">' + p.description + '</p>' +
        '<button onclick="viewProjectDetails(' + p.id + ')" class="btn btn-primary" style="padding:0.5rem 1rem; font-size:0.72rem; width:100%;">View Floor Plans & Renders</button>' +
      '</div>'
    ).join('');
  }
}

function viewProjectDetails(id) {
  const p = signatureProjects.find(proj => proj.id === id);
  if (!p) return;
  document.getElementById('modal-proj-name').innerText = p.name + " — Architectural Overview";
  let imagesHtml = '';
  if (p.image) imagesHtml += '<div class="project-render-wrapper" onclick="openZoomModal(\'' + p.image + '\')"><img src="' + p.image + '" class="project-render-img"><div class="zoom-badge">🔍 Click to Expand</div></div>';
  if (p.planImage) imagesHtml += '<div class="project-render-wrapper" onclick="openZoomModal(\'' + p.planImage + '\')" style="margin-top:0.8rem;"><img src="' + p.planImage + '" class="project-render-img"><div class="zoom-badge">🔍 Expand Plan</div></div>';

  document.getElementById('modal-proj-content').innerHTML = 
    '<p><strong>Type:</strong> ' + p.type + ' | <strong>Location:</strong> ' + p.location + '</p>' +
    '<p style="margin-top:0.4rem; color:var(--text-muted);">' + p.description + '</p>' +
    '<div class="modal-spec-box">' +
      '<div><h4 class="gold-text" style="font-size:0.95rem;">Specs</h4><ul>' + p.specs.map(s => '<li style="font-size:0.8rem;">' + s + '</li>').join('') + '</ul></div>' +
      '<div><h4 class="gold-text" style="font-size:0.95rem;">Renders (Click to Zoom)</h4><div class="modal-image-container">' + imagesHtml + '</div></div>' +
    '</div>';
  document.getElementById('project-detail-modal').style.display = 'flex';
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

function renderEmployeeSpace(projects) {
  const container = document.getElementById('employee-assigned-projects');
  if (container) {
    container.innerHTML = projects.map(p => 
      '<div style="margin-bottom:0.8rem; padding-bottom:0.8rem; border-bottom:1px solid rgba(255,255,255,0.1);">' +
        '<h4>' + p.name + '</h4><p style="font-size:0.82rem;">' + p.type + '</p>' +
      '</div>'
    ).join('');
  }
}
