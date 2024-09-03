import ZarahImg from '/image/zarah5.jpeg';
import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';


export const aboutHtml = () => {
    return `
    <div class="d-flex ">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${ZarahImg}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des  w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`;
};

document.addEventListener('DOMContentLoaded', function() {
    const marqueeContent = document.querySelector('.marquee-content');
    const texts = [
        'Where luxury meets lifestyle—discover your new address',
        'Explore the pinnacle of luxury living',
        'Your dream home awaits you'
    ];

    texts.forEach(text => {
        const span = document.createElement('span');
        span.textContent = text.toUpperCase();
        marqueeContent.appendChild(span);
        marqueeContent.appendChild(document.createTextNode(' \u00A0\u00A0\u00A0\u00A0 ')); // Adding space between texts
    });

    new marquee(document.getElementById('marq'), {
        duplicated: true,
        gap: 40,
        speed: 250,
    });
});
