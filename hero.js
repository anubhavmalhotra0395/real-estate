import MainImg from '/image/hero-img.jpeg'

export const heroHtml = () => {
    return `
    <div class="d-flex pt-5 col-12" style=" height:106vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-5  mb-5 " style="filter:grayscale(100)">
    <img src="${MainImg}" class="img-fluid hero-img"/>
    </div>
    <div class="col-7  mb-5 " >
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4 ">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>
<div >
<button class="button-hero ">GET IN TOUCH</button>
</div>
    </div>
    </div>
    </div>
    `
}