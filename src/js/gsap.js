document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.main-content__title');
    
    // Разбиваем текст на отдельные span элементы
    title.innerHTML = title.textContent.split('').map(char => `<span>${char}</span>`).join('');
    
    const chars = title.querySelectorAll('span');
  
    // Создаем анимацию при наведении
    title.addEventListener('mouseenter', () => {
      gsap.to(chars, {
        duration: 0.5,
        y: -20,
        rotation: 360,
        color: '#007bff',
        stagger: 0.03,
        ease: "back.out(1.7)"
      });
    });
  
    // Возвращаем в исходное состояние при уходе курсора
    title.addEventListener('mouseleave', () => {
      gsap.to(chars, {
        duration: 0.5,
        y: 0,
        rotation: 0,
        color: 'inherit',
        stagger: 0.02,
        ease: "power2.out"
      });
    });
  });