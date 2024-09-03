import orla1 from '/image/orla4.jpg'
import ava4 from '/image/ava4.jpg'
import binyan2 from '/image/binyan4.jpg'


export const carousel = () => {
    //step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
}

export const carouselHtml = () => {
    return `
    <div class="list w-100">
    <div class="item w-100">
        <img src=${orla1}>
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
        <img src=${ava4}>
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
        <img src=${binyan2}>
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
        <img src=${binyan2}>
        <div class="content">
            <div class="title">EYWA</div>
            <div class="description">BINYAN</div>
        </div>
    </div>
    <div class="item zarah">
        <img src="${orla1}">
        <div class="content">
            <div class="title">ORLA</div>
            <div class="description">INFINITY</div>
        </div>
    </div>
    <div class="item zarah">
        <img src=${ava4}>
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
`
}