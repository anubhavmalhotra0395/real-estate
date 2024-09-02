import ZarahImg from '/image/zarah3.png';
import marquee from 'https://cdn.jsdelivr.net/npm/vanilla-marquee/dist/vanilla-marquee.js';


export const aboutHtml = () => {
    return `
   
    <div class="main-bg">
<div class="d-flex justify-content-center align-items-center">

        <div class="d-flex row py-5 mx-auto col-10" >
   
            <div class="col-6 zarah">
                <img class="img-fluid w-100" src="${ZarahImg}" alt="Zarah Image"/>
            </div>
            <div class="col-6" style="text-align:justify">
                <h1 class="about-header mb-4">ABOUT ME</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac velit. Nullam at ipsum nec lectus interdum facilisis non ac mi. Sed sagittis nisi vel neque dictum vehicula. Vivamus bibendum, felis eu gravida faucibus, justo libero facilisis nisi, a tincidunt orci magna non nisl. Proin varius quam ut nibh sollicitudin, sed viverra sem varius. In pharetra urna ut leo gravida convallis. Vestibulum ut feugiat odio.
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in felis non elit viverra convallis. Quisque fermentum, metus nec egestas tempus, lectus ex lobortis arcu, sit amet luctus ligula turpis ac v
                <br/>
                </p>
                <div>
                </div>
            </div>
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
