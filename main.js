import './style.css'
import { contactHtml } from './contact'
import { carousel, carouselHtml } from './carousel.js'
import {  aboutHtml } from './about.js'
import 'bootstrap/dist/css/bootstrap.min.css'

import { extrasHtml } from './extras'

document.querySelector('#app').innerHTML = `

<header>

</header>

<div class="d-flex justify-content-center align-items-center flex-column">

<div class="carousel">
    ${carouselHtml()}
</div>
<div class="d-flex justify-content-center align-items-center w-100" style="height:65vh;">
<div class="main-text">ZARAH LENZ</div>
</div>
<div>
${aboutHtml()}

</div>

${extrasHtml()}
<div >
${contactHtml()}
</div>


`

carousel()