import ZarahImg from '/image/zarah5.jpeg';;


export const aboutHtml = () => {
    return `
    <div class="d-flex py-5" style="background-color:#f9f7f2;">
  
    <div class="col-4 d-flex justify-content-center align-items-center text-center">
   <h1 class="about-header  w-100 ">ABOUT ME</h1>
    </div>
    <div class="col-4">
    <img src="${ZarahImg}" class="img-fluid"/>
    </div>
    <div class="col-4 d-flex justify-content-center align-items-center text-center  px-5 ">
    <h1 class="about-des text-dark w-100 ">"Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I tur real estate dreams into reality, one deal at a time.My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1>
    </div>
    </div>`;
};

