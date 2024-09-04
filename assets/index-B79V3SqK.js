(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=()=>`
    <div class="py-5 position-relative contact-con" style="height:65vh; width:100vw;">
    <div class="wrapper centered">
      <article class="letter ">
        <div class="side">
          <h1>Book an Appointment</h1>
          <p>
            <textarea placeholder="Message"></textarea>
          </p>
        </div>
        <div class="side ">
          <p>
            <input type="text" placeholder="Name" >
          </p>
          <p>
            <input type="email" placeholder="Email" >
          </p>
          <p>
          <input type="date" placeholder="Dates" >
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
   
                
               
            

    `,v="/real-estate/image/orla4.jpg",p="/real-estate/image/ava4.jpg",h="/real-estate/image/binyan4.jpg",f=()=>{let c=document.getElementById("next"),l=document.getElementById("prev"),s=document.querySelector(".carousel"),i=s.querySelector(".carousel .list"),e=document.querySelector(".carousel .thumbnail"),t=e.querySelectorAll(".item");document.querySelector(".carousel .time"),e.appendChild(t[0]);let n=3e3,d=7e3;c.onclick=function(){m("next")},l.onclick=function(){m("prev")};let r,u=setTimeout(()=>{next.click()},d);function m(g){let a=i.querySelectorAll(".carousel .list .item"),o=document.querySelectorAll(".carousel .thumbnail .item");g==="next"?(i.appendChild(a[0]),e.appendChild(o[0]),s.classList.add("next")):(i.prepend(a[a.length-1]),e.prepend(o[o.length-1]),s.classList.add("prev")),clearTimeout(r),r=setTimeout(()=>{s.classList.remove("next"),s.classList.remove("prev")},n),clearTimeout(u),u=setTimeout(()=>{next.click()},d)}},x=()=>`
    <div class="list w-100">
    <div class="item w-100">
        <img src=${v}>
        <div class="content w-100">
        <div class="author">UAE</div>
        <div class="title">DUBAI</div>
            <div class="topic">DUBAI LISTINGS</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-100 text-center">
            "Check out some of the Dubai Listings"</p>
     </div>
     <div class="buttons d-flex justify-content-center">
    <button class="button w-100">VIEW  PROPERTIES</button>
     </div>
        </div>
    </div>
    <div class="item w-100">
        <img src=${p}>
        <div class="content w-100">
        <div class="author">UAE</div>
        <div class="title">ABU DHABI</div>
            <div class="topic">ABU DHABI LISTINGS</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-100 text-center">
            "Check out some of the Abu Dhabi Listings"</p>
     </div>
     <div class="buttons d-flex justify-content-center">
     <button class="button w-100">VIEW  PROPERTIES</button>
      </div>
        </div>
    </div>
    <div class="item w-100">
        <img src=${h}>
        <div class="content w-100">
        <div class="author">UAE</div>
        <div class="title">RAS AL KHAIMAH</div>
            <div class="topic">RAS AL KHAIMAH LISTINGS</div>
            <div class="text-center d-flex justify-content-center">
            <p class="des w-100 text-center">
            "Check out some of the Ras Al Khaimah Listings"</p>
     </div> <div class="buttons d-flex justify-content-center">
     <button class="button w-100">VIEW  PROPERTIES</button>
      </div>
        </div>
    </div>
</div>

<div class="thumbnail">
    <div class="item zarah">
        <img src=${h}>
    
    </div>
    <div class="item zarah">
        <img src="${v}">
 
    </div>
    <div class="item zarah">
        <img src=${p}>

    </div>
</div>

<div class="arrows">
    <button id="prev"><</button>
    <button id="next">></button>
</div>

<div class="time"></div>
`,b="/real-estate/image/zarah5.jpeg",A=()=>`
    <div class="d-flex py-5" style="background-color:#f9f7f2;">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${b}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des text-dark w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I tur real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`,I="/real-estate/image/il1.png",E="/real-estate/image/il3.png",L="/real-estate/image/il4.png",w=()=>`
<div class="d-flex justify-content-center align-items-center py-5" style="height:45vh;">
<div class="d-flex col-8 justify-content-center align-items-center">
<div class="col-4 d-flex flex-column">
<img src="${I}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${E}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${L}" class="img-fluid">
<h3></h3>
</div>
</div>
</div>
`,S="/real-estate/image/hero-img.jpeg",D=()=>`
    <div class="d-flex col-12  pt-5" style=" height:100vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-5  mb-5 " style="filter:grayscale(100)">
    <img src="${S}" class="img-fluid hero-img"/>
    </div>
    <div class="col-7  mb-5 " >
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4 ">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>

    </div>
    </div>
    </div>
    `,H=()=>`

    <div class="d-flex  py-5 align-items-center flex-column align-items-center ach-con" >
  <h1 class="about-header2 " >WHY WORK WITH ME ?</h1>
   <div class="d-flex col-8">
   <div class="ach-text col-4 d-flex flex-column">
  <h1 class="ach-header">AED +</h1>
  <p class="ach-des">SOLD</p>
   </div>
   <div class="ach-text col-4 d-flex flex-column">
   <h1 class="ach-header">AED</h1>
   <p class="ach-des">TEAM</p>
   </div>
   <div class="ach-text col-4 d-flex flex-column">
   <h1 class="ach-header">AED</h1>
  <p class="ach-des">TEAM</p>
   </div>

    </div>
    </div>



    `;window.addEventListener("load",()=>{document.querySelector("#main-content").innerHTML=`
      <header></header>
      <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="carousel">
      ${x()}
    </div>
      <div>${D()}</div>
      <div class=""d-flex pb-5" style="background-color:#f9f7f2;">
      ${H()}
      </div>
     

        <div class="d-flex justify-content-center align-items-center w-100" style="height:32vh;">
          <div class="main-text">ZARAH LENZ</div>
        </div>
        <div>${A()}</div>
        <div>${w()}</div>
     
        <div>${y()}</div>
      </div>
    `;const c=document.querySelectorAll("img");let l=0;c.length===0?(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",f()):c.forEach(i=>{i.onload=i.onerror=()=>{l++,l===c.length&&(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",f())}});const s=document.getElementById("sendLetter");s&&s.addEventListener("click",j)});function j(){document.body.classList.add("sent")}
