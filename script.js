const currentPage = location.pathname.split('/').pop(); // Get current file name
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });

const toggleButton = document.getElementById('language-toggle');

// Get saved preference or default to Assamese
let isAssamese = localStorage.getItem('preferredLang') !== 'en';

// Apply language to elements
function applyLanguage() {
  document.querySelectorAll('[data-as]').forEach(el => {
    el.textContent = isAssamese ? el.getAttribute('data-as') : el.getAttribute('data-en');
  });
  toggleButton.textContent = isAssamese ? 'English' : 'অসমীয়া';
}

// Handle toggle button click
toggleButton.addEventListener('click', () => {
  isAssamese = !isAssamese;
  localStorage.setItem('preferredLang', isAssamese ? 'as' : 'en');
  applyLanguage();
});

// Apply language on page load
applyLanguage();

document.querySelectorAll('.team-wrapper').forEach(wrapper => {
    const scrollContainer = wrapper.querySelector('.team-scroll');
    const leftBtn = wrapper.querySelector('.scroll-btn.left');
    const rightBtn = wrapper.querySelector('.scroll-btn.right');

    leftBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });
  });