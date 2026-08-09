document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/users').then(res => res.json()).then(users => {
    const tbody = document.getElementById('user-table-body');
    if (tbody) tbody.innerHTML = users.map(u => '<tr><td>' + u.id + '</td><td>' + u.name + '</td><td>' + u.role + '</td><td>' + u.email + '</td></tr>').join('');
  });
});