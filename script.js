// Apply saved theme immediately (prevents flash of wrong theme)
(function(){
  const saved = localStorage.getItem('theme');
  if(saved){ document.documentElement.setAttribute('data-theme', saved); }
})();

function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = next === 'dark' ? 'Light mode' : 'Dark mode';
  });
}

document.addEventListener('DOMContentLoaded', function(){
  const saved = localStorage.getItem('theme');
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = saved === 'dark' ? 'Light mode' : 'Dark mode';
  });
});