(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();console.log("Hello world!");new Swiper(".mySwiper",{slidesPerView:3,spaceBetween:10,centeredSlides:!0,loop:!0,freeMode:!1,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1}});document.getElementById("searchButton").addEventListener("click",function(){let o=document.getElementById("searchBox");o.classList.contains("show")||new bootstrap.Collapse(o,{toggle:!0})});document.getElementById("closeSearchBox").addEventListener("click",function(){let o=document.getElementById("searchBox");new bootstrap.Collapse(o,{toggle:!0})});
