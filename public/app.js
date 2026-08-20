
const BACKEND_URL = 'https://idhika-group.onrender.com';
let signatureProjects = [], teamMembersData = [], storedLeadsList = [];

document.addEventListener('DOMContentLoaded', async () => {
    await fetchPortalDataFromBackend();
    renderTeamMembers();
    renderPortfolio(signatureProjects);
});

async function fetchPortalDataFromBackend() {
    try {
        const res = await fetch(`${BACKEND_URL}/api/portal-data`);
        const data = await res.json();
        signatureProjects = data.projects || [];
        teamMembersData = data.team || [];
        storedLeadsList = data.leads || [];
    } catch(e) { console.error(e); }
}

async function syncDataToBackend() {
    await fetch(`${BACKEND_URL}/api/portal-data`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ leads: storedLeadsList, team: teamMembersData, projects: signatureProjects })
    });
}

// SECURE UPLOAD FUNCTIONS
async function uploadImageToServer(file) {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${BACKEND_URL}/api/upload`, { method: 'POST', body: formData });
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
