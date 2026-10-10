const mobileToggle = document.getElementById('mobileToggle');
const menu = document.getElementById('menu');
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const suggestionBtns = document.querySelectorAll('.suggestions button');
const navLinks = document.querySelectorAll('.menu a');

mobileToggle?.addEventListener('click', () => {
  menu.classList.toggle('open');
});

suggestionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const query = btn.dataset.query || btn.textContent.trim();
    searchInput.value = query;
    searchInput.focus();
  });
});

searchForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = searchInput.value.trim();
  if (!value) {
    searchInput.focus();
    return;
  }
  alert(`Buscar: ${value}`);
});

const sections = ['inicio', 'pedir', 'enviar', 'tienda'];
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.remove('active'));
    const id = entry.target.id || 'inicio';
    const active = document.querySelector(`.menu a[href="#${id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.55 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});
