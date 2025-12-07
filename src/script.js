const mobileBtn = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Mobile menu toggle
if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    const expanded = !isHidden;
    mobileBtn.setAttribute('aria-expanded', String(expanded));
    mobileMenu.setAttribute('aria-hidden', String(!expanded));
  });

  // Close menu when a link inside it is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      mobileBtn.focus();
    }
  });
}
