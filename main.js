import './style.css';
import { contactHtml } from './contact';
import { carousel, carouselHtml } from './carousel.js';
import { aboutHtml } from './about.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { extrasHtml } from './extras';
import { heroHtml } from './hero';
import { achievementsHtml } from './achievements';

window.addEventListener('load', () => {
    // Inject the HTML content first
    document.querySelector('#main-content').innerHTML = `
      <header></header>
      <div class="d-flex justify-content-center align-items-center flex-column">
      <div class="carousel">
      ${carouselHtml()}
    </div>
      <div>${heroHtml()}</div>
      <div class=""d-flex pb-5" style="background-color:#f9f7f2;">
      ${achievementsHtml()}
      </div>
     

        <div class="d-flex justify-content-center align-items-center w-100" style="height:32vh;">
          <div class="main-text">ZARAH LENZ</div>
        </div>
        <div>${aboutHtml()}</div>
        <div>${extrasHtml()}</div>
     
        <div>${contactHtml()}</div>
      </div>
    `;
  
    // Now handle images
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;
  
    if (images.length === 0) {
      // If there are no images, just hide the loading screen immediately
      document.getElementById('loading-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
      carousel(); // Initialize carousel immediately
    } else {
      images.forEach((img) => {
        img.onload = img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            carousel(); // Initialize carousel after all images are loaded
          }
        };
      });
    }
    const sendLetter = document.getElementById("sendLetter");
    
    if (sendLetter) {
        sendLetter.addEventListener("click", addClass);
    }
});

function addClass() {
    document.body.classList.add("sent");
}
