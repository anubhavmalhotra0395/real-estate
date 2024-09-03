import './style.css';
import { contactHtml } from './contact';
import { carousel, carouselHtml } from './carousel.js';
import { aboutHtml } from './about.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { extrasHtml } from './extras';

window.addEventListener('load', () => {
    // First, inject the HTML content
    document.querySelector('#main-content').innerHTML = `
      <header></header>
      <div class="d-flex justify-content-center align-items-center flex-column">
        <div class="carousel">
          ${carouselHtml()}
        </div>
        <div class="d-flex justify-content-center align-items-center w-100" style="height:65vh;">
          <div class="main-text">ZARAH LENZ</div>
        </div>
        <div>${aboutHtml()}</div>
        ${extrasHtml()}
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
    } else {
      images.forEach((img) => {
        img.onload = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
          }
        };
        img.onerror = () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
          }
        };
      });
    }
  });
  
  // Initialize your carousel after content injection
  carousel();
  
