import g from"https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const v="/real-estate/image/orla4.jpg",p="/real-estate/image/ava4.jpg",f="/real-estate/image/binyan4.jpg",y=()=>{let n=document.getElementById("next"),r=document.getElementById("prev"),i=document.querySelector(".carousel"),s=i.querySelector(".carousel .list"),e=document.querySelector(".carousel .thumbnail"),t=e.querySelectorAll(".item");document.querySelector(".carousel .time"),e.appendChild(t[0]);let o=3e3,c=7e3;n.onclick=function(){m("next")},r.onclick=function(){m("prev")};let d,u=setTimeout(()=>{next.click()},c);function m(h){let l=s.querySelectorAll(".carousel .list .item"),a=document.querySelectorAll(".carousel .thumbnail .item");h==="next"?(s.appendChild(l[0]),e.appendChild(a[0]),i.classList.add("next")):(s.prepend(l[l.length-1]),e.prepend(a[a.length-1]),i.classList.add("prev")),clearTimeout(d),d=setTimeout(()=>{i.classList.remove("next"),i.classList.remove("prev")},o),clearTimeout(u),u=setTimeout(()=>{next.click()},c)}},x=()=>`
    <div class="list w-100">
    <div class="item w-100">
        <img src=${v}>
        <div class="content w-100">
        <div class="author">AVA</div>
        <div class="title">PALM JUMEIRAH</div>
            <div class="topic">DOR. COLLECTION</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-50">
            "Discover the epitome of luxury living in Dubai's booming real estate market. From waterfront villas to high-rise apartments, find your dream home or next investment in one of the world's most sought-after cities."</p>
     </div>
        </div>
    </div>
    <div class="item w-100">
        <img src=${p}>
        <div class="content w-100">
        <div class="author">AVA</div>
        <div class="title">PALM JUMEIRAH</div>
            <div class="topic">THE SKY PALACE</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-50">
            "Discover the epitome of luxury living in Dubai's booming real estate market. From waterfront villas to high-rise apartments, find your dream home or next investment in one of the world's most sought-after cities."</p>
     </div>
        </div>
    </div>
    <div class="item w-100">
        <img src=${f}>
        <div class="content w-100">
        <div class="author">EYWA</div>
        <div class="title">EYWA</div>
            <div class="topic">EYWA BINYAN</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-50">
            "Discover the epitome of luxury living in Dubai's booming real estate market. From waterfront villas to high-rise apartments, find your dream home or next investment in one of the world's most sought-after cities."</p>
     </div>
        </div>
    </div>
</div>

<div class="thumbnail">
    <div class="item zarah">
        <img src=${f}>
        <div class="content">
            <div class="title">EYWA</div>
            <div class="description">BINYAN</div>
        </div>
    </div>
    <div class="item zarah">
        <img src="${v}">
        <div class="content">
            <div class="title">ORLA</div>
            <div class="description">INFINITY</div>
        </div>
    </div>
    <div class="item zarah">
        <img src=${p}>
        <div class="content">
            <div class="title">AVA</div>
            <div class="description">THE SKY PALACE</div>
        </div>
    </div>
</div>

<div class="arrows">
    <button id="prev"><</button>
    <button id="next">></button>
</div>

<div class="time"></div>
`,A="/real-estate/image/zarah5.jpeg",b=()=>`
    <div class="d-flex ">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${A}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des  w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I tur real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`;document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".marquee-content");["Where luxury meets lifestyle—discover your new address","Explore the pinnacle of luxury living","Your dream home awaits you"].forEach(i=>{const s=document.createElement("span");s.textContent=i.toUpperCase(),n.appendChild(s),n.appendChild(document.createTextNode("      "))}),new g(document.getElementById("marq"),{duplicated:!0,gap:40,speed:250})});document.querySelector("#app").innerHTML=`

<header>

</header>

<div class="d-flex justify-content-center align-items-center flex-column">

<div class="carousel">
    ${x()}
</div>
<div class="d-flex justify-content-center align-items-center w-100" style="height:50vh;">
<div class="main-text">ZARAH LENZ</div>
</div>
<div>
${b()}
</div>


`;y();
