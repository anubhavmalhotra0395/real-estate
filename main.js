import './style.css';
import { contactHtml } from './contact';
import { carousel, carouselHtml } from './carousel.js';
import { aboutHtml } from './about.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { extrasHtml } from './extras';
import { heroHtml } from './hero';
import ScrollReveal from 'scrollreveal';
import { achievementsHtml} from './achievements';
import { propertiesHtml,carousel2  } from './properties';

window.addEventListener('load', () => {
  // Inject the HTML content first
  document.querySelector('#main-content').innerHTML = `
    <header class="rev"></header>
    <div class="d-flex justify-content-center align-items-center flex-column ">
      <div class="carousel">
        ${carouselHtml()}
      </div>
      <div class="rev">${heroHtml()}</div>
      <div>
            ${propertiesHtml()}
      </div>
      <div class="d-flex pb-5 rev">
        ${achievementsHtml()}
      </div>
      <div class="d-flex justify-content-center align-items-center w-100 rev pb-5" style="height:35vh;">
        <div class="main-text">ZARAH LENZ</div>
      </div>
      <div class="rev">${aboutHtml()}</div>
      <div >${extrasHtml()}</div>
      <div class="rev">${contactHtml()}</div>
    </div>
  `;

  // Ensure ScrollReveal is applied after all content is injected
  setTimeout(() => {
    ScrollReveal().reveal('.rev', {
      duration: 1000,      // Duration of animation
      origin: 'top',       // Animation starts from the top
      distance: '-50px',    // Element moves 50px from the top
      delay: 400           // Delay before the animation starts
    });
  }, 100);  // Small timeout to ensure DOM is updated

  // Handle image loading
  const images = document.querySelectorAll('img');
  let imagesLoaded = 0;

  if (images.length === 0) {
    // If no images, hide loading screen immediately
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    carousel();
    carousel2(); // Initialize carousel immediately
  } else {
    images.forEach((img) => {
      img.onload = img.onerror = () => {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
          document.getElementById('loading-screen').style.display = 'none';
          document.getElementById('main-content').style.display = 'block';
          carousel();
          carousel2();// Initialize carousel after all images are loaded
        }
      };
    });
  }

  const sendLetter = document.getElementById("sendLetter");

  if (sendLetter) {
    sendLetter.addEventListener("click", addClass);
  }

  // Initialize AOS (if needed) or ScrollReveal has already been initialized
});

function addClass() {
  document.body.classList.add("sent");
}
