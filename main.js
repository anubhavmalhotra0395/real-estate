import './style.css'

import { carousel, carouselHtml } from './carousel.js'
import {  aboutHtml } from './about.js'
import 'bootstrap/dist/css/bootstrap.min.css'

document.querySelector('#app').innerHTML = `
<header>
<nav>
<a  class="logo" style="font-size:22px;text-decoration:none;">ZARAH LENZ</a>
  
</nav>
</header>
<div class="carousel">
    ${carouselHtml()}
</div>
<div>
${aboutHtml()}
</div>

`

carousel()