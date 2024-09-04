(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y=()=>`
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
   
                
               
            

    `,v="/real-estate/image/orla4.jpg",p="/real-estate/image/ava4.jpg",f="/real-estate/image/binyan4.jpg",g=()=>{let l=document.getElementById("next"),n=document.getElementById("prev"),s=document.querySelector(".carousel"),i=s.querySelector(".carousel .list"),e=document.querySelector(".carousel .thumbnail"),t=e.querySelectorAll(".item");document.querySelector(".carousel .time"),e.appendChild(t[0]);let a=3e3,c=7e3;l.onclick=function(){m("next")},n.onclick=function(){m("prev")};let d,u=setTimeout(()=>{next.click()},c);function m(h){let r=i.querySelectorAll(".carousel .list .item"),o=document.querySelectorAll(".carousel .thumbnail .item");h==="next"?(i.appendChild(r[0]),e.appendChild(o[0]),s.classList.add("next")):(i.prepend(r[r.length-1]),e.prepend(o[o.length-1]),s.classList.add("prev")),clearTimeout(d),d=setTimeout(()=>{s.classList.remove("next"),s.classList.remove("prev")},a),clearTimeout(u),u=setTimeout(()=>{next.click()},c)}},b=()=>`
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
        <img src=${f}>
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
        <img src=${f}>
    
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
`,x="/real-estate/image/zarah5.jpeg",I=()=>`
    <div class="d-flex py-5" style="background-color:#f9f7f2;">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${x}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des text-dark w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I tur real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`,A="/real-estate/image/il1.png",w="/real-estate/image/il3.png",E="/real-estate/image/il4.png",L=()=>`
<div class="d-flex justify-content-center align-items-center py-5" style="height:45vh;">
<div class="d-flex col-8 justify-content-center align-items-center">
<div class="col-4 d-flex flex-column">
<img src="${A}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${w}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${E}" class="img-fluid">
<h3></h3>
</div>
</div>
</div>
`,S="/real-estate/image/hero-img.jpeg",j=()=>`
    <div class="d-flex col-12  pt-5" style=" height:100vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-4  mb-5 " style="filter:grayscale(100)">
    <img src="${S}" class="img-fluid hero-img"/>
    </div>
    <div class="col-8  mb-5 " >
    <small class="hero-small">ZARAH LENZ</small>
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>
   <div class="buttons d-flex justify-content-center">
   <button class="button-hero">VIEW  PROPERTIES</button>
    </div>
    </div>
    </div>
    </div>
    `,k="/real-estate/image/hero-2.jpeg",$="1.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals.",H=()=>`

    <div class="d-flex justify-content-center py-5 align-items-center flex-column" >
  
    <div class="d-flex col-12 px-5 gap-5 py-5 justify-content-center align-items-center">
        <div class="col-8 d-flex flex-column   px-5">
    <h1 class="about-header2 mb-5">Success in real estate starts when you believe you are worthy of it.</h1>
            <h1 class="about-des3  w-100">"${$}"</h1><br/>
            <h1 class="about-des3 w-100">"2.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1><br/>
            <h1 class="about-des3  w-100">"3.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1><br/>
        </div>
        <div class="col-4">
            <img src="${k}" class="img-fluid" alt="Achievements Image"style="filter:grayscale(100)" />
        </div>
    </div>
    </div>



    `;window.addEventListener("load",()=>{document.querySelector("#main-content").innerHTML=`
      <header></header>
      <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="carousel">
      ${b()}
    </div>
      <div>${j()}</div>
      <div class=""d-flex pb-5" style="background-color:#f9f7f2;">
      ${H()}
      </div>
     

        <div class="d-flex justify-content-center align-items-center w-100" style="height:45vh;">
          <div class="main-text">ZARAH LENZ</div>
        </div>
        <div>${I()}</div>
        <div>${L()}</div>
     
        <div>${y()}</div>
      </div>
    `;const l=document.querySelectorAll("img");let n=0;l.length===0?(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",g()):l.forEach(i=>{i.onload=i.onerror=()=>{n++,n===l.length&&(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block")}});const s=document.getElementById("sendLetter");s&&s.addEventListener("click",D)});function D(){document.body.classList.add("sent")}
