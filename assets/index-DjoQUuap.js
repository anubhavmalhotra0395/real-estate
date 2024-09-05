(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}})();const ve=()=>`
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
   
                
               
            

    `,V="/real-estate/image/orla4.jpg",X="/real-estate/image/ava4.jpg",J="/real-estate/image/a-bg.jpg",Q=()=>{let e=document.getElementById("next"),t=document.getElementById("prev"),i=document.querySelector(".carousel"),r=i.querySelector(".carousel .list"),n=document.querySelector(".carousel .thumbnail"),s=n.querySelectorAll(".item");document.querySelector(".carousel .time"),n.appendChild(s[0]);let o=3e3,d=7e3;e.onclick=function(){u("next")},t.onclick=function(){u("prev")};let p,a=setTimeout(()=>{next.click()},d);function u(l){let f=r.querySelectorAll(".carousel .list .item"),y=document.querySelectorAll(".carousel .thumbnail .item");l==="next"?(r.appendChild(f[0]),n.appendChild(y[0]),i.classList.add("next")):(r.prepend(f[f.length-1]),n.prepend(y[y.length-1]),i.classList.add("prev")),clearTimeout(p),p=setTimeout(()=>{i.classList.remove("next"),i.classList.remove("prev")},o),clearTimeout(a),a=setTimeout(()=>{next.click()},d)}},he=()=>`
    <div class="list w-100">
    <div class="item w-100">
        <img src=${V}>
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
        <img src=${X}>
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
        <img src=${J}>
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
        <img src=${J}>
    
    </div>
    <div class="item zarah">
        <img src="${V}">
 
    </div>
    <div class="item zarah">
        <img src=${X}>

    </div>
</div>

<div class="arrows">
    <button id="prev"><</button>
    <button id="next">></button>
</div>

<div class="time"></div>
`,pe="/real-estate/image/zarah5.jpeg",ye=()=>`
      <div class="d-flex py-5" style="background-color:#f9f7f2;">
        <div class="col-4 d-flex justify-content-center align-items-center text-center">
          <h1 class="about-header w-100">ABOUT ME</h1>
        </div>
        <div class="col-4">
          <img src="${pe}" alt="Zarah" class="img-fluid"/>
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center text-center px-5">
          <h1 class="about-des text-dark w-100">
            "Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."
          </h1>
        </div>
      </div>
`,ge="/real-estate/image/il1.png",me="/real-estate/image/il3.png",be="/real-estate/image/il4.png",we=()=>`
<div class="d-flex justify-content-center align-items-center py-5" style="height:45vh;">
<div class="d-flex col-8 justify-content-center align-items-center">
<div class="col-4 d-flex flex-column">
<img src="${ge}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${me}" class="img-fluid">
<h3></h3>
</div>
<div class="col-4 d-flex flex-column">
<img src="${be}" class="img-fluid">
<h3></h3>
</div>
</div>
</div>
`,xe="/real-estate/image/hero-img.jpeg",Ee=()=>`
    <div class="d-flex pt-5 col-12" style=" height:106vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-5  mb-5 " style="filter:grayscale(100)">
    <img src="${xe}" class="img-fluid hero-img"/>
    </div>
    <div class="col-7  mb-5 " >
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4 ">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>

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

*/function F(e){return typeof window.Node=="object"?e instanceof window.Node:e!==null&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"}/*! @license is-dom-node-list v1.2.1

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

*/function Ie(e){var t=Object.prototype.toString.call(e),i=/^\[object (HTMLCollection|NodeList|Object)\]$/;return typeof window.NodeList=="object"?e instanceof window.NodeList:e!==null&&typeof e=="object"&&typeof e.length=="number"&&i.test(t)&&(e.length===0||F(e[0]))}/*! @license Tealight v0.3.6

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

*/function L(e,t){if(t===void 0&&(t=document),e instanceof Array)return e.filter(F);if(F(e))return[e];if(Ie(e))return Array.prototype.slice.call(e);if(typeof e=="string")try{var i=t.querySelectorAll(e);return Array.prototype.slice.call(i)}catch{return[]}return[]}/*! @license Rematrix v0.3.0

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
*/function U(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(e.length===16)return e;if(e.length===6){var t=w();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function w(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function Ae(e,t){for(var i=U(e),r=U(t),n=[],s=0;s<4;s++)for(var o=[i[s],i[s+4],i[s+8],i[s+12]],d=0;d<4;d++){var p=d*4,a=[r[p],r[p+1],r[p+2],r[p+3]],u=o[0]*a[0]+o[1]*a[1]+o[2]*a[2]+o[3]*a[3];n[s+p]=u}return n}function Te(e){if(typeof e=="string"){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t){var i=t[2].split(", ").map(parseFloat);return U(i)}}return w()}function je(e){var t=Math.PI/180*e,i=w();return i[5]=i[10]=Math.cos(t),i[6]=i[9]=Math.sin(t),i[9]*=-1,i}function Le(e){var t=Math.PI/180*e,i=w();return i[0]=i[10]=Math.cos(t),i[2]=i[8]=Math.sin(t),i[2]*=-1,i}function Oe(e){var t=Math.PI/180*e,i=w();return i[0]=i[5]=Math.cos(t),i[1]=i[4]=Math.sin(t),i[4]*=-1,i}function _(e,t){var i=w();return i[0]=e,i[5]=e,i}function Se(e){var t=w();return t[12]=e,t}function $e(e){var t=w();return t[13]=e,t}/*! @license miniraf v1.0.0

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

*/var ne=function(){var e=Date.now();return function(t){var i=Date.now();i-e>16?(e=i,t(i)):setTimeout(function(){return ne(t)},0)}}(),Re=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ne;/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/var se={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};function ke(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}function De(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})}var T={success:De,failure:ke};function D(e){return e!==null&&e instanceof Object&&(e.constructor===Object||Object.prototype.toString.call(e)==="[object Object]")}function c(e,t){if(D(e)){var i=Object.keys(e);return i.forEach(function(r){return t(e[r],r,e)})}if(e instanceof Array)return e.forEach(function(r,n){return t(r,n,e)});throw new TypeError("Expected either an array or object literal.")}function E(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(this.constructor.debug&&console){var r="%cScrollReveal: "+e;t.forEach(function(n){return r+=`
 — `+n}),console.log(r,"color: #ea654b;")}}function oe(){var e=this,t=function(){return{active:[],stale:[]}},i=t(),r=t(),n=t();try{c(L("[data-sr-id]"),function(s){var o=parseInt(s.getAttribute("data-sr-id"));i.active.push(o)})}catch(s){throw s}c(this.store.elements,function(s){i.active.indexOf(s.id)===-1&&i.stale.push(s.id)}),c(i.stale,function(s){return delete e.store.elements[s]}),c(this.store.elements,function(s){n.active.indexOf(s.containerId)===-1&&n.active.push(s.containerId),s.hasOwnProperty("sequence")&&r.active.indexOf(s.sequence.id)===-1&&r.active.push(s.sequence.id)}),c(this.store.containers,function(s){n.active.indexOf(s.id)===-1&&n.stale.push(s.id)}),c(n.stale,function(s){var o=e.store.containers[s].node;o.removeEventListener("scroll",e.delegate),o.removeEventListener("resize",e.delegate),delete e.store.containers[s]}),c(this.store.sequences,function(s){r.active.indexOf(s.id)===-1&&r.stale.push(s.id)}),c(r.stale,function(s){return delete e.store.sequences[s]})}var ee=function(){var e={},t=document.documentElement.style;function i(r,n){if(n===void 0&&(n=t),r&&typeof r=="string"){if(e[r])return e[r];if(typeof n[r]=="string")return e[r]=r;if(typeof n["-webkit-"+r]=="string")return e[r]="-webkit-"+r;throw new RangeError('Unable to find "'+r+'" style property.')}throw new TypeError("Expected a string.")}return i.clearCache=function(){return e={}},i}();function Pe(e){var t=window.getComputedStyle(e.node),i=t.position,r=e.config,n={},s=e.node.getAttribute("style")||"",o=s.match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];n.computed=o?o.map(function(m){return m.trim()}).join("; ")+";":"",n.generated=o.some(function(m){return m.match(/visibility\s?:\s?visible/i)})?n.computed:o.concat(["visibility: visible"]).map(function(m){return m.trim()}).join("; ")+";";var d=parseFloat(t.opacity),p=isNaN(parseFloat(r.opacity))?parseFloat(t.opacity):parseFloat(r.opacity),a={computed:d!==p?"opacity: "+d+";":"",generated:d!==p?"opacity: "+p+";":""},u=[];if(parseFloat(r.distance)){var l=r.origin==="top"||r.origin==="bottom"?"Y":"X",f=r.distance;(r.origin==="top"||r.origin==="left")&&(f=/^-/.test(f)?f.substr(1):"-"+f);var y=f.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=y[0],x=y[1];switch(x){case"em":f=parseInt(t.fontSize)*g;break;case"px":f=g;break;case"%":f=l==="Y"?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}l==="Y"?u.push($e(f)):u.push(Se(f))}r.rotate.x&&u.push(je(r.rotate.x)),r.rotate.y&&u.push(Le(r.rotate.y)),r.rotate.z&&u.push(Oe(r.rotate.z)),r.scale!==1&&(r.scale===0?u.push(_(2e-4)):u.push(_(r.scale)));var h={};if(u.length){h.property=ee("transform"),h.computed={raw:t[h.property],matrix:Te(t[h.property])},u.unshift(h.computed.matrix);var ue=u.reduce(Ae);h.generated={initial:h.property+": matrix3d("+ue.join(", ")+");",final:h.property+": matrix3d("+h.computed.matrix.join(", ")+");"}}else h.generated={initial:"",final:""};var v={};if(a.generated||h.generated.initial){v.property=ee("transition"),v.computed=t[v.property],v.fragments=[];var K=r.delay,S=r.duration,$=r.easing;a.generated&&v.fragments.push({delayed:"opacity "+S/1e3+"s "+$+" "+K/1e3+"s",instant:"opacity "+S/1e3+"s "+$+" 0s"}),h.generated.initial&&v.fragments.push({delayed:h.property+" "+S/1e3+"s "+$+" "+K/1e3+"s",instant:h.property+" "+S/1e3+"s "+$+" 0s"});var fe=v.computed&&!v.computed.match(/all 0s|none 0s/);fe&&v.fragments.unshift({delayed:v.computed,instant:v.computed});var Z=v.fragments.reduce(function(m,R,G){return m.delayed+=G===0?R.delayed:", "+R.delayed,m.instant+=G===0?R.instant:", "+R.instant,m},{delayed:"",instant:""});v.generated={delayed:v.property+": "+Z.delayed+";",instant:v.property+": "+Z.instant+";"}}else v.generated={delayed:"",instant:""};return{inline:n,opacity:a,position:i,transform:h,transition:v}}function A(e,t){t.split(";").forEach(function(i){var r=i.split(":"),n=r[0],s=r.slice(1);n&&s&&(e.style[n.trim()]=s.join(":"))})}function Y(e){var t=this,i;try{c(L(e),function(r){var n=r.getAttribute("data-sr-id");if(n!==null){i=!0;var s=t.store.elements[n];s.callbackTimer&&window.clearTimeout(s.callbackTimer.clock),A(s.node,s.styles.inline.generated),r.removeAttribute("data-sr-id"),delete t.store.elements[n]}})}catch(r){return E.call(this,"Clean failed.",r.message)}if(i)try{oe.call(this)}catch(r){return E.call(this,"Clean failed.",r.message)}}function qe(){var e=this;c(this.store.elements,function(t){A(t.node,t.styles.inline.generated),t.node.removeAttribute("data-sr-id")}),c(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.removeEventListener("scroll",e.delegate),i.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function O(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];if(D(e))return c(t,function(r){c(r,function(n,s){D(n)?((!e[s]||!D(e[s]))&&(e[s]={}),O(e[s],n)):e[s]=n})}),e;throw new TypeError("Target must be an object literal.")}function P(e){return e===void 0&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var W=function(){var e=0;return function(){return e++}}();function ae(){var e=this;oe.call(this),c(this.store.elements,function(t){var i=[t.styles.inline.generated];t.visible?(i.push(t.styles.opacity.computed),i.push(t.styles.transform.generated.final),t.revealed=!0):(i.push(t.styles.opacity.generated),i.push(t.styles.transform.generated.initial),t.revealed=!1),A(t.node,i.filter(function(r){return r!==""}).join(" "))}),c(this.store.containers,function(t){var i=t.node===document.documentElement?window:t.node;i.addEventListener("scroll",e.delegate),i.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function j(e,t){t===void 0&&(t={});var i=t.pristine||this.pristine,r=e.config.useDelay==="always"||e.config.useDelay==="onload"&&i||e.config.useDelay==="once"&&!e.seen,n=e.visible&&!e.revealed,s=!e.visible&&e.revealed&&e.config.reset;if(t.reveal||n)return Me.call(this,e,r);if(t.reset||s)return Ne.call(this,e)}function Me(e,t){var i=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?i.push(e.styles.transition.generated.delayed):i.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,A(e.node,i.filter(function(r){return r!==""}).join(" ")),ce.call(this,e,t)}function Ne(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,A(e.node,t.filter(function(i){return i!==""}).join(" ")),ce.call(this,e)}function ce(e,t){var i=this,r=t?e.config.duration+e.config.delay:e.config.duration,n=e.revealed?e.config.beforeReveal:e.config.beforeReset,s=e.revealed?e.config.afterReveal:e.config.afterReset,o=0;e.callbackTimer&&(o=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),n(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){s(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&Y.call(i,e.node)},r-o)}}function le(e,t){if(t===void 0&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return j.call(this,e,{reset:!0});var i=this.store.sequences[e.sequence.id],r=e.sequence.index;if(i){var n=new te(i,"visible",this.store),s=new te(i,"revealed",this.store);if(i.models={visible:n,revealed:s},!s.body.length){var o=i.members[n.body[0]],d=this.store.elements[o];if(d)return k.call(this,i,n.body[0],-1,t),k.call(this,i,n.body[0],1,t),j.call(this,d,{reveal:!0,pristine:t})}if(!i.blocked.head&&r===[].concat(s.head).pop()&&r>=[].concat(n.body).shift())return k.call(this,i,r,-1,t),j.call(this,e,{reveal:!0,pristine:t});if(!i.blocked.foot&&r===[].concat(s.foot).shift()&&r<=[].concat(n.body).pop())return k.call(this,i,r,1,t),j.call(this,e,{reveal:!0,pristine:t})}}function He(e){var t=Math.abs(e);if(!isNaN(t))this.id=W(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1};else throw new RangeError("Invalid sequence interval.")}function te(e,t,i){var r=this;this.head=[],this.body=[],this.foot=[],c(e.members,function(n,s){var o=i.elements[n];o&&o[t]&&r.body.push(s)}),this.body.length&&c(e.members,function(n,s){var o=i.elements[n];o&&!o[t]&&(s<r.body[0]?r.head.push(s):r.foot.push(s))})}function k(e,t,i,r){var n=this,s=["head",null,"foot"][1+i],o=e.members[t+i],d=this.store.elements[o];e.blocked[s]=!0,setTimeout(function(){e.blocked[s]=!1,d&&le.call(n,d,r)},e.interval)}function de(e,t,i){var r=this;t===void 0&&(t={}),i===void 0&&(i=!1);var n=[],s,o=t.interval||se.interval;try{o&&(s=new He(o));var d=L(e);if(!d.length)throw new Error("Invalid reveal target.");var p=d.reduce(function(a,u){var l={},f=u.getAttribute("data-sr-id");f?(O(l,r.store.elements[f]),A(l.node,l.styles.inline.computed)):(l.id=W(),l.node=u,l.seen=!1,l.revealed=!1,l.visible=!1);var y=O({},l.config||r.defaults,t);if(!y.mobile&&P()||!y.desktop&&!P())return f&&Y.call(r,l),a;var g=L(y.container)[0];if(!g)throw new Error("Invalid container.");if(!g.contains(u))return a;var x;return x=Ce(g,n,r.store.containers),x===null&&(x=W(),n.push({id:x,node:g})),l.config=y,l.containerId=x,l.styles=Pe(l),s&&(l.sequence={id:s.id,index:s.members.length},s.members.push(l.id)),a.push(l),a},[]);c(p,function(a){r.store.elements[a.id]=a,a.node.setAttribute("data-sr-id",a.id)})}catch(a){return E.call(this,"Reveal failed.",a.message)}c(n,function(a){r.store.containers[a.id]={id:a.id,node:a.node}}),s&&(this.store.sequences[s.id]=s),i!==!0&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(ae.bind(this),0))}function Ce(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var r=null;return c(t,function(n){c(n,function(s){r===null&&s.node===e&&(r=s.id)})}),r}function Be(){var e=this;c(this.store.history,function(t){de.call(e,t.target,t.options,!0)}),ae.call(this)}var ze=function(e){return(e>0)-(e<0)||+e},ie=Math.sign||ze;function re(e,t){var i=t?e.node.clientHeight:e.node.offsetHeight,r=t?e.node.clientWidth:e.node.offsetWidth,n=0,s=0,o=e.node;do isNaN(o.offsetTop)||(n+=o.offsetTop),isNaN(o.offsetLeft)||(s+=o.offsetLeft),o=o.offsetParent;while(o);return{bounds:{top:n,right:s+r,bottom:n+i,left:s},height:i,width:r}}function Fe(e){var t,i;return e.node===document.documentElement?(t=window.pageYOffset,i=window.pageXOffset):(t=e.node.scrollTop,i=e.node.scrollLeft),{top:t,left:i}}function Ue(e){e===void 0&&(e={});var t=this.store.containers[e.containerId];if(t){var i=Math.max(0,Math.min(1,e.config.viewFactor)),r=e.config.viewOffset,n={top:e.geometry.bounds.top+e.geometry.height*i,right:e.geometry.bounds.right-e.geometry.width*i,bottom:e.geometry.bounds.bottom-e.geometry.height*i,left:e.geometry.bounds.left+e.geometry.width*i},s={top:t.geometry.bounds.top+t.scroll.top+r.top,right:t.geometry.bounds.right+t.scroll.left-r.right,bottom:t.geometry.bounds.bottom+t.scroll.top-r.bottom,left:t.geometry.bounds.left+t.scroll.left+r.left};return n.top<s.bottom&&n.right>s.left&&n.bottom>s.top&&n.left<s.right||e.styles.position==="fixed"}}function We(e,t){var i=this;e===void 0&&(e={type:"init"}),t===void 0&&(t=this.store.elements),Re(function(){var r=e.type==="init"||e.type==="resize";c(i.store.containers,function(n){r&&(n.geometry=re.call(i,n,!0));var s=Fe.call(i,n);n.scroll&&(n.direction={x:ie(s.left-n.scroll.left),y:ie(s.top-n.scroll.top)}),n.scroll=s}),c(t,function(n){(r||n.geometry===void 0)&&(n.geometry=re.call(i,n)),n.visible=Ue.call(i,n)}),c(t,function(n){n.sequence?le.call(i,n):j.call(i,n)}),i.pristine=!1})}function Ye(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}function Ke(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}var Ze="4.0.9",q,M,N,H,C,b,B,z;function I(e){e===void 0&&(e={});var t=typeof this>"u"||Object.getPrototypeOf(this)!==I.prototype;if(t)return new I(e);if(!I.isSupported())return E.call(this,"Instantiation failed.","This browser is not supported."),T.failure();var i;try{i=b?O({},b,e):O({},se,e)}catch(n){return E.call(this,"Invalid configuration.",n.message),T.failure()}try{var r=L(i.container)[0];if(!r)throw new Error("Invalid container.")}catch(n){return E.call(this,n.message),T.failure()}return b=i,!b.mobile&&P()||!b.desktop&&!P()?(E.call(this,"This device is disabled.","desktop: "+b.desktop,"mobile: "+b.mobile),T.failure()):(T.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,q=q||We.bind(this),M=M||qe.bind(this),N=N||de.bind(this),H=H||Y.bind(this),C=C||Be.bind(this),Object.defineProperty(this,"delegate",{get:function(){return q}}),Object.defineProperty(this,"destroy",{get:function(){return M}}),Object.defineProperty(this,"reveal",{get:function(){return N}}),Object.defineProperty(this,"clean",{get:function(){return H}}),Object.defineProperty(this,"sync",{get:function(){return C}}),Object.defineProperty(this,"defaults",{get:function(){return b}}),Object.defineProperty(this,"version",{get:function(){return Ze}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),z||(z=this))}I.isSupported=function(){return Ye()&&Ke()};Object.defineProperty(I,"debug",{get:function(){return B||!1},set:function(e){return B=typeof e=="boolean"?e:B}});I();const Ge=()=>`

    <div class="d-flex  pb-5 align-items-center flex-column justify-content-center ach-con" >
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
    <header class="rev"></header>
    <div class="d-flex justify-content-center align-items-center flex-column ">
      <div class="carousel">
        ${he()}
      </div>
      <div class="rev">${Ee()}</div>
      <div class="d-flex pb-5 rev">
        ${Ge()}
      </div>
      <div class="d-flex justify-content-center align-items-center w-100 rev" style="height:32vh;">
        <div class="main-text">ZARAH LENZ</div>
      </div>
      <div class="rev">${ye()}</div>
      <div class="rev">${we()}</div>
      <div class="rev">${ve()}</div>
    </div>
  `,setTimeout(()=>{I().reveal(".rev",{duration:1e3,origin:"top",distance:"-50px",delay:400})},100);const e=document.querySelectorAll("img");let t=0;e.length===0?(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",Q()):e.forEach(r=>{r.onload=r.onerror=()=>{t++,t===e.length&&(document.getElementById("loading-screen").style.display="none",document.getElementById("main-content").style.display="block",Q())}});const i=document.getElementById("sendLetter");i&&i.addEventListener("click",Ve)});function Ve(){document.body.classList.add("sent")}
