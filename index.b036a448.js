document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector("[data-menu-open]"),t=document.querySelector("[data-menu-close]"),d=document.querySelector(".sidebar");e.addEventListener("click",function(){d.classList.remove("is-hidden"),d.classList.add("is-open"),document.body.style.overflow="hidden"}),t.addEventListener("click",function(){d.classList.remove("is-open"),setTimeout(()=>{d.classList.add("is-hidden")},300),document.body.style.overflow=""})});
//# sourceMappingURL=index.b036a448.js.map