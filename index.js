import{a as c,S as n,i as d}from"./assets/vendor-BBiwxaSv.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u={getImagesByQuery:r=>c.get(`https://pixabay.com/api/?key=54346745-2618290c8cbee7c5ced8d190a&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)},i={createGallery:r=>{const a=r.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
                <ul class="gallery-text-container">
                <li class="gallery-text">
                    <div class="gallery-title">
                    Likes
                    </div>
                    <div class="gallery-sub-title">
                    ${e.likes}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Views
                    </div>
                    <div class="gallery-sub-title">
                    ${e.views}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Comments
                    </div>
                    <div class="gallery-sub-title">
                    ${e.comments}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Downloads
                    </div>
                    <div class="gallery-sub-title">
                    ${e.downloads}
                    </div>
                </li>
                </ul>
            </a>
            </li>
        `),l=document.querySelector(".gallery");l.innerHTML=a.join(""),document.querySelectorAll(".gallery-item").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault(),new n(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()})})},clearGallery:()=>{const r=document.querySelector(".gallery");r.innerHTML=""},showLoader:()=>{const r=document.querySelector(".gallery");r.innerHTML='<span class="loader"></span>'},hideLoader:()=>{const r=document.querySelector(".gallery");r.innerHTML=""}},y=document.querySelector(".form-button");y.addEventListener("click",()=>{i.clearGallery(),i.showLoader();const a=document.querySelector(".form-input").value;u.getImagesByQuery(a).then(l=>{i.hideLoader(),l.data.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!"}):i.createGallery(l.data.hits)}).catch(l=>{console.error(l)})});
//# sourceMappingURL=index.js.map
