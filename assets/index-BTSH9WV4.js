import b from"https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const v="/real-estate/image/orla4.jpg",p="/real-estate/image/ava4.jpg",g="/real-estate/image/binyan2.jpg",h=()=>{let n=document.getElementById("next"),a=document.getElementById("prev"),t=document.querySelector(".carousel"),s=t.querySelector(".carousel .list"),e=document.querySelector(".carousel .thumbnail"),i=e.querySelectorAll(".item");document.querySelector(".carousel .time"),e.appendChild(i[0]);let l=3e3,o=7e3;n.onclick=function(){m("next")},a.onclick=function(){m("prev")};let c,d=setTimeout(()=>{next.click()},o);function m(f){let r=s.querySelectorAll(".carousel .list .item"),u=document.querySelectorAll(".carousel .thumbnail .item");f==="next"?(s.appendChild(r[0]),e.appendChild(u[0]),t.classList.add("next")):(s.prepend(r[r.length-1]),e.prepend(u[u.length-1]),t.classList.add("prev")),clearTimeout(c),c=setTimeout(()=>{t.classList.remove("next"),t.classList.remove("prev")},l),clearTimeout(d),d=setTimeout(()=>{next.click()},o)}},y=()=>`<div class="list">
    <div class="item">
        <img src=${v}>
        <div class="content">
            <div class="author">ORLA</div>
            <div class="title">INFINITY</div>
            <div class="topic">DORCHESTER COLLECTION</div>
            <div class="des">
                Orla Infinity Dorchester Collection offers luxurious residences with stunning design, world-class amenities, and breathtaking views in a prime location.
            </div>
            <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src=${p}>
        <div class="content">
            <div class="author">AVA</div>
            <div class="title">PALM JUMEIRAH</div>
            <div class="topic">THE SKY PALACE</div>
            <div class="des">
                Orla Infinity Dorchester Collection features elegant residences, exceptional service, exclusive amenities, and panoramic views, providing an unparalleled luxury living experience.
            </div>
            <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
    <div class="item">
        <img src=${g}>
        <div class="content">
            <div class="author">EYWA</div>
            <div class="title">BINYAN</div>
            <div class="topic">EYWA BINYAN</div>
            <div class="des">
                Orla Infinity Dorchester Collection features elegant residences, exceptional service, exclusive amenities, and panoramic views, providing an unparalleled luxury living experience.
            </div>
            <div class="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    </div>
</div>

<div class="thumbnail">
    <div class="item">
        <img src=${g}>
        <div class="content">
            <div class="title">EYWA</div>
            <div class="description">BINYAN</div>
        </div>
    </div>
    <div class="item">
        <img src="${v}">
        <div class="content">
            <div class="title">ORLA</div>
            <div class="description">INFINITY</div>
        </div>
    </div>
    <div class="item">
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

<div class="time"></div>`,x="/real-estate/image/zarah3.png",E=()=>`
   
    <div class="main-bg">
<div class="d-flex justify-content-center align-items-center">

        <div class="d-flex row py-5 mx-auto col-10" >
   
            <div class="col-6 zarah">
                <img class="img-fluid w-100" src="${x}" alt="Zarah Image"/>
            </div>
            <div class="col-6" style="text-align:justify">
                <h1 class="about-header mb-4">ABOUT ME</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac v
                <br/>
                </p>
                <div>
                </div>
            </div>
            </div>
    </div>`;document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".marquee-content");["Where luxury meets lifestyle—discover your new address","Explore the pinnacle of luxury living","Your dream home awaits you"].forEach(t=>{const s=document.createElement("span");s.textContent=t.toUpperCase(),n.appendChild(s),n.appendChild(document.createTextNode("      "))}),new b(document.getElementById("marq"),{duplicated:!0,gap:40,speed:250})});document.querySelector("#app").innerHTML=`
<header>
<nav>
<a  class="logo" style="font-size:22px;text-decoration:none;">ZARAH LENZ</a>
  
</nav>
</header>
<div class="carousel">
    ${y()}
</div>
<div>
${E()}
</div>

`;h();
