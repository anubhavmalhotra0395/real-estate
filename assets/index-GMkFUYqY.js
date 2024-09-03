import"https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g=()=>`
    <div class="py-5 position-relative contact-con" style="height:65vh; width:100vw;">
    <div class="wrapper centered">
      <article class="letter">
        <div class="side">
          <h1>Get in Touch</h1>
          <p>
            <textarea placeholder="Your message"></textarea>
          </p>
        </div>
        <div class="side">
          <p>
            <input type="text" placeholder="Your name" >
          </p>
          <p>
            <input type="email" placeholder="Your email" >
          </p>
          <p>
            <button id="sendLetter">Send</button>
          </p>
        </div>
      </article>
      <div class="envelope front"></div>
      <div class="envelope back"></div>
    </div>
    <p class="result-message centered text-center">Thank you for your message</p>
    </div>
    <div class="main-bg" style=" background-color:#f8f3ea">
<small class="text-center text-dark" style="font-size:10px;">@zarahrealestate 2024</small>
    </div>
    `;function y(){document.body.classList.add("sent")}window.onload=()=>{const l=document.getElementById("sendLetter");l&&l.addEventListener("click",y)};const u="/real-estate/image/orla4.jpg",p="/real-estate/image/ava4.jpg",f="/real-estate/image/binyan4.jpg",x=()=>{let l=document.getElementById("next"),r=document.getElementById("prev"),i=document.querySelector(".carousel"),s=i.querySelector(".carousel .list"),e=document.querySelector(".carousel .thumbnail"),t=e.querySelectorAll(".item");document.querySelector(".carousel .time"),e.appendChild(t[0]);let n=3e3,o=7e3;l.onclick=function(){m("next")},r.onclick=function(){m("prev")};let d,v=setTimeout(()=>{next.click()},o);function m(h){let a=s.querySelectorAll(".carousel .list .item"),c=document.querySelectorAll(".carousel .thumbnail .item");h==="next"?(s.appendChild(a[0]),e.appendChild(c[0]),i.classList.add("next")):(s.prepend(a[a.length-1]),e.prepend(c[c.length-1]),i.classList.add("prev")),clearTimeout(d),d=setTimeout(()=>{i.classList.remove("next"),i.classList.remove("prev")},n),clearTimeout(v),v=setTimeout(()=>{next.click()},o)}},b=()=>`
    <div class="list w-100">
    <div class="item w-100">
        <img src=${u}>
        <div class="content w-100">
        <div class="author">AVA</div>
        <div class="title">PALM JUMEIRAH</div>
            <div class="topic">D. COLLECTION</div>
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
        <img src="${u}">
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
`,A="/real-estate/image/zarah5.jpeg",w=()=>`
    <div class="d-flex py-5" style="background-color:#f8f3ea">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${A}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des  w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I tur real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`,L="/real-estate/image/il1.png",I="/real-estate/image/il3.png",E="/real-estate/image/il4.png",D=()=>`
<div class="d-flex justify-content-center align-items-center py-5" style="height:45vh;">
<div class="d-flex col-12 justify-content-center align-items-center">
<div class="col-2 d-flex flex-column">
<img src="${L}" class="img-fluid">
<h3></h3>
</div>
<div class="col-2 d-flex flex-column">
<img src="${I}" class="img-fluid">
<h3></h3>
</div>
<div class="col-2 d-flex flex-column">
<img src="${E}" class="img-fluid">
<h3></h3>
</div>
</div>
</div>
`;document.querySelector("#app").innerHTML=`
<header>

</header>
<div class="d-flex justify-content-center align-items-center flex-column">

<div class="carousel">
    ${b()}
</div>
<div class="d-flex justify-content-center align-items-center w-100" style="height:65vh;">
<div class="main-text">ZARAH LENZ</div>
</div>
<div>
${w()}

</div>

${D()}
<div >
${g()}
</div>

`;x();
