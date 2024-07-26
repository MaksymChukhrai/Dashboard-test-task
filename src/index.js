document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const sidebar = document.querySelector('.sidebar');

  function openMenu() {
    sidebar.classList.remove('is-hidden');
    sidebar.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('is-open');
    setTimeout(() => {
      sidebar.classList.add('is-hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  menuOpenBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
});