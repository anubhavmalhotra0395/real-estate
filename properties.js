import './properties.css';
import Image1 from '/image/orla1.jpg'
import Image2 from '/image/orla4.jpg'
import Image3 from '/image/a-bg.jpg'
import Image4 from '/image/ava4.jpg'
import Image5 from '/image/binyan4.jpg'

export const carousel2 = () => {
    // Wait for DOM content to be fully loaded
    document.getElementById('next2').onclick = function(){
        console.log('ok')
        let lists = document.querySelectorAll('.item2');
        document.getElementById('slide').appendChild(lists[0]);
     }
     document.getElementById('prev2').onclick = function(){
        let lists = document.querySelectorAll('.item2');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
     }
    }     

export const propertiesHtml = () => {
    return ` 
    <div class="dev-con">
        <div class="container2">
            <h1>
               VIEW EXCLUSIVE PROPERTIES<br />

            </h1>
            <div id="slide">
                <div class="item2" style="background-image: url('${Image1}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${Image2}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${Image3}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url('${Image4}')">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2 " style="background-image: url('${Image5}')">
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
    </div>`;
};
