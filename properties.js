import './properties.css';

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
                <div class="item2" style="background-image: url(public/image/orla1.jpg)">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url(public/image/binyan3.jpg)">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url(public/image/ava4.jpg)">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2" style="background-image: url(public/image/a-bg.jpg)">
                    <div class="content w-100">
                        <div class="from">Dak Lak</div>
                        <div class="name">Núi đá voi DakLak</div>
                        <div class="type">Leo núi</div>
                    </div>
                </div>

                <div class="item2 " style="background-image: url(public/image/orla4.jpg)">
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
