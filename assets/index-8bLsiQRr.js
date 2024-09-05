(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const pe=()=>`
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
   
                
               
            

    `,Y="/real-estate/image/orla4.jpg",V="/real-estate/image/ava4.jpg",X="/real-estate/image/a-bg.jpg",te=()=>{let e=document.getElementById("next"),t=document.getElementById("prev"),i=document.querySelector(".carousel"),s=i.querySelector(".carousel .list"),r=document.querySelector(".carousel .thumbnail"),n=r.querySelectorAll(".item");document.querySelector(".carousel .time"),r.appendChild(n[0]);let o=3e3,d=7e3;e.onclick=function(){u("next")},t.onclick=function(){u("prev")};let m,a=setTimeout(()=>{next.click()},d);function u(c){let f=s.querySelectorAll(".carousel .list .item"),p=document.querySelectorAll(".carousel .thumbnail .item");c==="next"?(s.appendChild(f[0]),r.appendChild(p[0]),i.classList.add("next")):(s.prepend(f[f.length-1]),r.prepend(p[p.length-1]),i.classList.add("prev")),clearTimeout(m),m=setTimeout(()=>{i.classList.remove("next"),i.classList.remove("prev")},o),clearTimeout(a),a=setTimeout(()=>{next.click()},d)}},ge=()=>`
    <div class="list w-100">
    <div class="item w-100">
        <img src=${Y}>
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
        <img src=${V}>
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
        <img src=${X}>
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
        <img src=${X}>
    
    </div>
    <div class="item zarah">
        <img src="${Y}">
 
    </div>
    <div class="item zarah">
        <img src=${V}>

    </div>
</div>

<div class="arrows">
    <button id="prev"><</button>
    <button id="next">></button>
</div>

<div class="time"></div>
`,ye="/real-estate/image/zarah5.jpeg",be=()=>`
      <div class="d-flex py-5" style="background-color:#f9f7f2;">
        <div class="col-4 d-flex justify-content-center align-items-center text-center">
          <h1 class="about-header w-100">ABOUT ME</h1>
        </div>
        <div class="col-4">
          <img src="${ye}" alt="Zarah" class="img-fluid"/>
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center text-center px-5 flex-column">
          <h1 class="about-des text-dark w-100">
            "Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."
          </h1>
          <div class="w-100 d-flex">
          <button class="button-about">LEARN MORE</button>
          </div>
        </div>
      </div>
`,b="/real-estate/image/il1.png",x="/real-estate/image/il3.png",w="/real-estate/image/il4.png",xe=()=>`
<div class="d-flex justify-content-center align-items-center py-5" style="height:45vh;">
    <div class="d-flex col-12 justify-content-center align-items-center marquee-container">
        <div class="marquee-content d-flex col-10 justify-content-center align-items-center">
            <div class="col-4 d-flex flex-column">
                <img src="${b}" class="img-fluid">
                <h3></h3>
            </div>
            <div class="col-4 d-flex flex-column">
                <img src="${x}" class="img-fluid">
                <h3></h3>
            </div>
            <div class="col-4 d-flex flex-column">
                <img src="${w}" class="img-fluid">
                <h3></h3>
            </div>
            <div class="col-4 d-flex flex-column">
            <img src="${b}" class="img-fluid">
            <h3></h3>
        </div>
        <div class="col-4 d-flex flex-column">
            <img src="${x}" class="img-fluid">
            <h3></h3>
        </div>
        <div class="col-4 d-flex flex-column">
            <img src="${w}" class="img-fluid">
            <h3></h3>
        </div>
        <div class="col-4 d-flex flex-column">
        <img src="${b}" class="img-fluid">
        <h3></h3>
    </div>
    <div class="col-4 d-flex flex-column">
        <img src="${x}" class="img-fluid">
        <h3></h3>
    </div>
    <div class="col-4 d-flex flex-column">
        <img src="${w}" class="img-fluid">
        <h3></h3>
    </div>
    <div class="col-4 d-flex flex-column">
    <img src="${b}" class="img-fluid">
    <h3></h3>
</div>
<div class="col-4 d-flex flex-column">
    <img src="${x}" class="img-fluid">
    <h3></h3>
</div>
<div class="col-4 d-flex flex-column">
    <img src="${w}" class="img-fluid">
    <h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${b}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${x}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${w}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${b}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${x}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${w}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${b}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${x}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${w}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${b}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${x}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${w}" class="img-fluid">
<h3></h3>
</div>
    </div>
        </div>
    </div>
</div>

`,we="/real-estate/image/hero-img.jpeg",Ee=()=>`
    <div class="d-flex pt-5 col-12" style=" height:106vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-5  mb-5 " style="filter:grayscale(100)">
    <img src="${we}" class="img-fluid hero-img"/>
    </div>
    <div class="col-7  mb-5 " >
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4 ">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>
<div >
<button class="button-hero ">GET IN TOUCH</button>
</div>
    </div>
    </div>
    </div>
    `;/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function G(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function $e(e){var t=Object.prototype.toString.call(e),i=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&i.test(t)&&(e.length===0||G(e[0]))}/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/function O(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(G);if(G(e))return[e];if($e(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var i=t.querySelectorAll(e);return Array.prototype.slice.call(i)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function K(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=$();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function $(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Ie(e,t){for(var i=K(e),s=K(t),r=[],n=0;n<4;n++)for(var o=[i[n],i[n+4],i[n+8],i[n+12]],d=0;d<4;d++){var m=d*4,a=[s[m],s[m+1],s[m+2],s[m+3]],u=o[0]*a[0]+o[1]*a[1]+o[2]*a[2]+o[3]*a[3];r[n+m]=u}return r}function Le(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var i=t[2].split(", ").map(parseFloat);return K(i)}}return $()}function ke(e){var t=Math.PI/180*e,i=$();return i[5]=i[10]=Math.cos(t),i[6]=i[9]=Math.sin(t),i[9]*=-1,i}function Te(e){var t=Math.PI/180*e,i=$();return i[0]=i[10]=Math.cos(t),i[2]=i[8]=Math.sin(t),i[2]*=-1,i}function Ae(e){var t=Math.PI/180*e,i=$();return i[0]=i[5]=Math.cos(t),i[1]=i[4]=Math.sin(t),i[4]*=-1,i}function ie(e,t){var i=$();return i[0]=e,i[5]=e,i}function je(e){var t=$();return t[12]=e,t}function Oe(e){var t=$();return t[13]=e,t}/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var ae=function(){var e=Date.now();return function(t){var i=Date.now();i-e>16?(e=i,t(i)):setTimeout(function(){return ae(t)},0)}}(),Se=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var le={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function Re(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function De(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var A={success:De,failure:Re};function q(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function l(e,t){if(q(e)){var i=Object.keys(e);return i.forEach(function(s){return t(e[s],s,e)})}if(e instanceof Array)return e.forEach(function(s,r){return t(s,r,e)});throw new TypeError("Expected either an array or object literal.")}function L(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(this.constructor.debug&&console){var s="%cScrollReveal: "+e;t.forEach(function(r){return s+=`
 — `+r}),console.log(s,"color: #ea654b;")}}function ce(){var e=this,t=function(){return{active:[],stale:[]}},i=t(),s=t(),r=t();try{l(O("[data-sr-id]"),function(n){var o=parseInt(n.getAttribute("data-sr-id"));i.active.push(o)})}catch(n){throw n}l(this.store.elements,function(n){i.active.indexOf(n.id)===-1&&i.stale.push(n.id)}),l(i.stale,function(n){return delete e.store.elements[n]}),l(this.store.elements,function(n){r.active.indexOf(n.containerId)===-1&&r.active.push(n.containerId),n.hasOwnProperty("sequence")&&s.active.indexOf(n.sequence.id)===-1&&s.active.push(n.sequence.id)}),l(this.store.containers,function(n){r.active.indexOf(n.id)===-1&&r.stale.push(n.id)}),l(r.stale,function(n){var o=e.store.containers[n].node;o.removeEventListener("scroll",e.delegate),o.removeEventListener("resize",e.delegate),delete e.store.containers[n]}),l(this.store.sequences,function(n){s.active.indexOf(n.id)===-1&&s.stale.push(n.id)}),l(s.stale,function(n){return delete e.store.sequences[n]})}var se=function(){var e={},t=document.documentElement.style;function i(s,r){if(r===void 0&&(r=t),s&&typeof s=="string"){if(e[s])return e[s];if(typeof r[s]=="string")return e[s]=s;if(typeof r["-webkit-"+s]=="string")return e[s]="-webkit-"+s;throw new RangeError('Unable to find "'+s+'" style property.')}throw new TypeError("Expected a string.")}return i.clearCache=function(){return e={}},i}();function Pe(e){var t=window.getComputedStyle(e.node),i=t.position,s=e.config,r={},n=e.node.getAttribute("style")||"",o=n.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(y){return y.trim()}).join("; ")+";":"",r.generated=o.some(function(y){return y.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(y){return y.trim()}).join("; ")+";";var d=parseFloat(t.opacity),m=isNaN(parseFloat(s.opacity))?parseFloat(t.opacity):parseFloat(s.opacity),a={computed:d!==m?"opacity: "+d+";":"",generated:d!==m?"opacity: "+m+";":""},u=[];if(parseFloat(s.distance)){var c=s.origin==="top"||s.origin==="bottom"?"Y":"X",f=s.distance;(s.origin==="top"||s.origin==="left")&&(f=/^-/.test(f)?f.substr(1):"-"+f);var p=f.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=p[0],I=p[1];switch(I){case"em":f=parseInt(t.fontSize)*g;break;case"px":f=g;break;case"%":f=c==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}c==="Y"?u.push(Oe(f)):u.push(je(f))}s.rotate.x&&u.push(ke(s.rotate.x)),s.rotate.y&&u.push(Te(s.rotate.y)),s.rotate.z&&u.push(Ae(s.rotate.z)),s.scale!==1&&(s.scale===0?u.push(ie(2e-4)):u.push(ie(s.scale)));var h={};if(u.length){h.property=se("transform"),h.computed={raw:t[h.property],matrix:Le(t[h.property])},u.unshift(h.computed.matrix);var he=u.reduce(Ie);h.generated={initial:h.property+": matrix3d("+he.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var v={};if(a.generated||h.generated.initial){v.property=se("transition"),v.computed=t[v.property],v.fragments=[];var Q=s.delay,R=s.duration,D=s.easing;a.generated&&v.fragments.push({delayed:"opacity "+R/1e3+"s "+D+" "+Q/1e3+"s",instant:"opacity "+R/1e3+"s "+D+" 0s"}),h.generated.initial&&v.fragments.push({delayed:h.property+" "+R/1e3+"s "+D+" "+Q/1e3+"s",instant:h.property+" "+R/1e3+"s "+D+" 0s"});var me=v.computed&&!v.computed.match(/all 0s|none 0s/);me&&v.fragments.unshift({delayed:v.computed,instant:v.computed});var _=v.fragments.reduce(function(y,P,ee){return y.delayed+=ee===0?P.delayed:", "+P.delayed,y.instant+=ee===0?P.instant:", "+P.instant,y},{delayed:"",instant:""});v.generated={delayed:v.property+": "+_.delayed+";",instant:v.property+": "+_.instant+";"}}else v.generated={delayed:"",instant:""};return{inline:r,opacity:a,position:i,transform:h,transition:v}}function T(e,t){t.split(";").forEach(function(i){var s=i.split(":"),r=s[0],n=s.slice(1);r&&n&&(e.style[r.trim()]=n.join(":"))})}function J(e){var t=this,i;try{l(O(e),function(s){var r=s.getAttribute("data-sr-id");if(r!==null){i=!0;var n=t.store.elements[r];n.callbackTimer&&window.clearTimeout(n.callbackTimer.clock),T(n.node,n.styles.inline.generated),s.removeAttribute("data-sr-id"),delete t.store.elements[r]}})}catch(s){return L.call(this,"Clean failed.",s.message)}if(i)try{ce.call(this)}catch(s){return L.call(this,"Clean failed.",s.message)}}function Ne(){var e=this;l(this.store.elements,function(t){T(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),l(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function S(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(q(e))return l(t,function(s){l(s,function(r,n){q(r)?((!e[n]||!q(e[n]))&&(e[n]={}),S(e[n],r)):e[n]=r})}),e;throw new TypeError("Target must be an object literal.")}function M(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var Z=function(){var e=0;return function(){return e++}}();function de(){var e=this;ce.call(this),l(this.store.elements,function(t){var i=[t.styles.inline.generated];t.visible?(i.push(t.styles.opacity.computed),i.push(t.styles.transform.generated.final),t.revealed=!0):(i.push(t.styles.opacity.generated),i.push(t.styles.transform.generated.initial),t.revealed=!1),T(t.node,i.filter(function(s){return s!==""}).join(" "))}),l(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.addEventListener("scroll",e.delegate),i.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function j(e,t){t===void 0&&(t={});var i=t.pristine||this.pristine,s=e.config.useDelay==="always"||e.config.useDelay==="onload"&&i||e.config.useDelay==="once"&&!e.seen,r=e.visible&&!e.revealed,n=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||r)return qe.call(this,e,s);if(t.reset||n)return Me.call(this,e)}function qe(e,t){var i=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?i.push(e.styles.transition.generated.delayed):i.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,T(e.node,i.filter(function(s){return s!==""}).join(" ")),ue.call(this,e,t)}function Me(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,T(e.node,t.filter(function(i){return i!==""}).join(" ")),ue.call(this,e)}function ue(e,t){var i=this,s=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,n=e.revealed?e.config.afterReveal:e.config.afterReset,o=0;e.callbackTimer&&(o=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){n(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&J.call(i,e.node)},s-o)}}function fe(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return j.call(this,e,{reset:!0});var i=this.store.sequences[e.sequence.id],s=e.sequence.index;if(i){var r=new re(i,"visible",this.store),n=new re(i,"revealed",this.store);if(i.models={visible:r,revealed:n},!n.body.length){var o=i.members[r.body[0]],d=this.store.elements[o];if(d)return N.call(this,i,r.body[0],-1,t),N.call(this,i,r.body[0],1,t),j.call(this,d,{reveal:!0,pristine:t})}if(!i.blocked.head&&s===[].concat(n.head).pop()&&s>=[].concat(r.body).shift())return N.call(this,i,s,-1,t),j.call(this,e,{reveal:!0,pristine:t});if(!i.blocked.foot&&s===[].concat(n.foot).shift()&&s<=[].concat(r.body).pop())return N.call(this,i,s,1,t),j.call(this,e,{reveal:!0,pristine:t})}}function Ce(e){var t=Math.abs(e);if(!isNaN(t))this.id=Z(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function re(e,t,i){var s=this;this.head=[],this.body=[],this.foot=[],l(e.members,function(r,n){var o=i.elements[r];o&&o[t]&&s.body.push(n)}),this.body.length&&l(e.members,function(r,n){var o=i.elements[r];o&&!o[t]&&(n<s.body[0]?s.head.push(n):s.foot.push(n))})}function N(e,t,i,s){var r=this,n=["head",null,"foot"][1+i],o=e.members[t+i],d=this.store.elements[o];e.blocked[n]=!0,setTimeout(function(){e.blocked[n]=!1,d&&fe.call(r,d,s)},e.interval)}function ve(e,t,i){var s=this;t===void 0&&(t={}),i===void 0&&(i=!1);var r=[],n,o=t.interval||le.interval;try{o&&(n=new Ce(o));var d=O(e);if(!d.length)throw new Error("Invalid reveal target.");var m=d.reduce(function(a,u){var c={},f=u.getAttribute("data-sr-id");f?(S(c,s.store.elements[f]),T(c.node,c.styles.inline.computed)):(c.id=Z(),c.node=u,c.seen=!1,c.revealed=!1,c.visible=!1);var p=S({},c.config||s.defaults,t);if(!p.mobile&&M()||!p.desktop&&!M())return f&&J.call(s,c),a;var g=O(p.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(u))return a;var I;return I=He(g,r,s.store.containers),I===null&&(I=Z(),r.push({id:I,node:g})),c.config=p,c.containerId=I,c.styles=Pe(c),n&&(c.sequence={id:n.id,index:n.members.length},n.members.push(c.id)),a.push(c),a},[]);l(m,function(a){s.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return L.call(this,"Reveal failed.",a.message)}l(r,function(a){s.store.containers[a.id]={id:a.id,node:a.node}}),n&&(this.store.sequences[n.id]=n),i!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(de.bind(this),0))}function He(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var s=null;return l(t,function(r){l(r,function(n){s===null&&n.node===e&&(s=n.id)})}),s}function Be(){var e=this;l(this.store.history,function(t){ve.call(e,t.target,t.options,!0)}),de.call(this)}var ze=function(e){return(e>0)-(e<0)||+e},ne=Math.sign||ze;function oe(e,t){var i=t?e.node.clientHeight:e.node.offsetHeight,s=t?e.node.clientWidth:e.node.offsetWidth,r=0,n=0,o=e.node;do isNaN(o.offsetTop)||(r+=o.offsetTop),isNaN(o.offsetLeft)||(n+=o.offsetLeft),o=o.offsetParent;while(o);return{bounds:{top:r,right:n+s,bottom:r+i,left:n},height:i,width:s}}function Fe(e){var t,i;return e.node===document.documentElement?(t=window.pageYOffset,i=window.pageXOffset):(t=e.node.scrollTop,i=e.node.scrollLeft),{top:t,left:i}}function Ue(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var i=Math.max(0,Math.min(1,e.config.viewFactor)),s=e.config.viewOffset,r={top:e.geometry.bounds.top+e.geometry.height*i,right:e.geometry.bounds.right-e.geometry.width*i,bottom:e.geometry.bounds.bottom-e.geometry.height*i,left:e.geometry.bounds.left+e.geometry.width*i},n={top:t.geometry.bounds.top+t.scroll.top+s.top,right:t.geometry.bounds.right+t.scroll.left-s.right,bottom:t.geometry.bounds.bottom+t.scroll.top-s.bottom,left:t.geometry.bounds.left+t.scroll.left+s.left};return r.top<n.bottom&&r.right>n.left&&r.bottom>n.top&&r.left<n.right||e.styles.position==="fixed"}}function We(e,t){var i=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Se(function(){var s=e.type==="init"||e.type==="resize";l(i.store.containers,function(r){s&&(r.geometry=oe.call(i,r,!0));var n=Fe.call(i,r);r.scroll&&(r.direction={x:ne(n.left-r.scroll.left),y:ne(n.top-r.scroll.top)}),r.scroll=n}),l(t,function(r){(s||r.geometry===void 0)&&(r.geometry=oe.call(i,r)),r.visible=Ue.call(i,r)}),l(t,function(r){r.sequence?fe.call(i,r):j.call(i,r)}),i.pristine=!1})}function Ye(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Ve(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Xe="4.0.9",C,H,B,z,F,E,U,W;function k(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==k.prototype;if(t)return new k(e);if(!k.isSupported())return L.call(this,"Instantiation failed.","This browser is not supported."),A.failure();var i;try{i=E?S({},E,e):S({},le,e)}catch(r){return L.call(this,"Invalid configuration.",r.message),A.failure()}try{var s=O(i.container)[0];if(!s)throw new Error("Invalid container.")}catch(r){return L.call(this,r.message),A.failure()}return E=i,!E.mobile&&M()||!E.desktop&&!M()?(L.call(this,"This device is disabled.","desktop: "+E.desktop,"mobile: "+E.mobile),A.failure()):(A.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,C=C||We.bind(this),H=H||Ne.bind(this),B=B||ve.bind(this),z=z||J.bind(this),F=F||Be.bind(this),Object.defineProperty(this,"delegate",{get:function(){return C}}),Object.defineProperty(this,"destroy",{get:function(){return H}}),Object.defineProperty(this,"reveal",{get:function(){return B}}),Object.defineProperty(this,"clean",{get:function(){return z}}),Object.defineProperty(this,"sync",{get:function(){return F}}),Object.defineProperty(this,"defaults",{get:function(){return E}}),Object.defineProperty(this,"version",{get:function(){return Xe}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),W||(W=this))}k.isSupported=function(){return Ye()&&Ve()};Object.defineProperty(k,"debug",{get:function(){return U||!1},set:function(e){return U=typeof e=="boolean"?e:U}});k();const Ge=()=>`

    <div class="d-flex  pb-5 align-items-center flex-column justify-content-center ach-con" >
  <h1 class="about-header2 " >WHY WORK WITH ME ?</h1>
   <div class="d-flex col-8">
   <div class="ach-text col-4 d-flex flex-column">
  <h1 class="ach-header">TOP PERFORMER</h1>
  <p class="ach-des">MEGAPOLIS</p>
   </div>
   <div class="ach-text col-4 d-flex flex-column">
   <h1 class="ach-header">FAST PROPERTY</h1>
   <p class="ach-des">SALES</p>
   </div>
   <div class="ach-text col-4 d-flex flex-column">
   <h1 class="ach-header">CLOSED X</h1>
  <p class="ach-des">DEALS</p>
   </div>

    </div>
    </div>



    `,Ke="/real-estate/image/orla1.jpg",Ze="/real-estate/image/binyan4.jpg",Je=()=>` 
    <div class="dev-con">
        <div class="container2">
            <h1>
               VIEW EXCLUSIVE PROPERTIES<br />

            </h1>
            <div id="slide">
                <div class="item2" style="background-image: url('${Ke}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${Y}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${X}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${V}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2 " style="background-image: url('${Ze}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

    
            </div>
            <div class="buttons2">
                <button id="prev2">PREV</button>
                <button id="next2">NEXT</button>
            </div>
        </div>
    </div>`;window.addEventListener("load",()=>{document.querySelector("#main-content").innerHTML=`
    <header class="rev"></header>
    <div class="d-flex justify-content-center align-items-center flex-column ">
      <div class="carousel">
        ${ge()}
      </div>
      <div class="rev">${Ee()}</div>
      <div>
            ${Je()}
      </div>
      <div class="d-flex pb-5 rev">
        ${Ge()}
      </div>
      <div class="d-flex justify-content-center align-items-center w-100 rev pb-5" style="height:35vh;">
        <div class="main-text">ZARAH LENZ</div>
      </div>
      <div class="rev">${be()}</div>
      <div >${xe()}</div>
      <div class="rev">${pe()}</div>
    </div>
  `,setTimeout(()=>{k().reveal(".rev",{duration:1e3,origin:"top",distance:"-50px",delay:400})},100);const e=document.querySelectorAll("img");let t=0;e.length===0?(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",te(),carousel2()):e.forEach(s=>{s.onload=s.onerror=()=>{t++,t===e.length&&(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",te(),carousel2())}});const i=document.getElementById("sendLetter");i&&i.addEventListener("click",Qe)});function Qe(){document.body.classList.add("sent")}
