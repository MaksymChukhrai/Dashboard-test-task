document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("[data-menu-open]"),n=document.querySelector("[data-menu-close]"),t=document.querySelector(".sidebar");e.addEventListener("click",function(){t.classList.remove("is-hidden"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.classList.add("is-open")})}),document.body.style.overflow="hidden"}),n.addEventListener("click",function(){t.classList.remove("is-open"),t.addEventListener("transitionend",function e(n){"transform"===n.propertyName&&(t.classList.add("is-hidden"),t.removeEventListener("transitionend",e))}),document.body.style.overflow=""})});
//# sourceMappingURL=index.1c0eae2f.js.map