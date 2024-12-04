import{a as n}from"./assets/vendor-DzcBeMgS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();n.defaults.baseURL="https://dummyjson.com/recipes";async function l(){const{data:r}=await n();return r}const a={recipesList:document.querySelector(".recipes-list")};function u(r){const s=r.map(({image:i,name:o,difficulty:e,cuisine:t})=>`<li class="recipes-item">
            <img class="image" src="${i}" alt="${o}" />
            <div class="box">
              <h3 class="title">${o}</h3>
              <p class="text">Cuisine: ${t}</p>
              <p class="text">Difficulty: ${e}</p>
            </div>
          </li>`).join("");a.recipesList.innerHTML=s}async function d(){try{const{recipes:r}=await l();console.log(r),u(r)}catch(r){console.log("error",r)}}document.addEventListener("DOMContentLoaded",d);
//# sourceMappingURL=index.js.map
