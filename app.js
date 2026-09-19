document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // 1. MOBILE NAVIGATION TOGGLE
  // ============================================
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    // Toggle menu on hamburger click
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    // Close menu when tapping any nav link
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // ============================================
  // 2. SCROLL REVEAL ANIMATIONS
  // ============================================
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(el => observer.observe(el));
  }

  // ============================================
  // 3. LIGHT / DARK MODE TOGGLE
  // ============================================
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme : 'light';
  document.body.setAttribute('data-theme', initialTheme);
  updateToggleIcon(initialTheme);

  const lightModeBtn = document.getElementById('lightModeBtn');

  if (lightModeBtn) {
    lightModeBtn.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateToggleIcon(newTheme);
    });
  }

  function updateToggleIcon(theme) {
    const lightModeBtn = document.getElementById('lightModeBtn');
    if (lightModeBtn) {
      lightModeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

});
function setBilling(mode){
  document.getElementById('btn-monthly').classList.toggle('on', mode === 'monthly');
  document.getElementById('btn-annual').classList.toggle('on', mode === 'annual');
  const pro = document.getElementById('pro-price');
  const biz = document.getElementById('biz-price');
  if(mode === 'annual'){
    pro.innerHTML = '$24<span>/mo, billed yearly</span>';
    biz.innerHTML = '$36<span>/seat/mo, billed yearly</span>';
  } else {
    pro.innerHTML = '$30<span>/mo</span>';
    biz.innerHTML = '$45<span>/seat/mo</span>';
  }
}