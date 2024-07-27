//функционал открытия-закрытия мобильного меню

document.addEventListener('DOMContentLoaded', () => {
  const menuOpenBtn = document.querySelector('[data-menu-open]');
  const menuCloseBtn = document.querySelector('[data-menu-close]');
  const sidebar = document.querySelector('.sidebar');

  function openMenu() {
    sidebar.classList.remove('is-hidden');
    // Используем requestAnimationFrame для обеспечения применения начальных стилей
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sidebar.classList.add('is-open');
      });
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('is-open');
    sidebar.addEventListener('transitionend', function handler(e) {
      if (e.propertyName === 'transform') {
        sidebar.classList.add('is-hidden');
        sidebar.removeEventListener('transitionend', handler);
      }
    });
    document.body.style.overflow = '';
  }

  menuOpenBtn.addEventListener('click', openMenu);
  menuCloseBtn.addEventListener('click', closeMenu);
});