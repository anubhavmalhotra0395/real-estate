import MainImg from '/image/hero-img.jpeg'

export const heroHtml = () => {
    return `
    <div class="d-flex col-12 py-5 pt-0" style=" height:100vh" >
    <div class="container d-flex  gap-5 justify-content-center align-items-center ">
    <div class="col-4  mb-5 " style="filter:grayscale(100)">
    <img src="${MainImg}" class="img-fluid hero-img"/>
    </div>
    <div class="col-8  mb-5 pb-5" >
    <small class="hero-small">ZARAH LENZ</small>
   <h1 class="hero-header">Lets Find Your Dream Home, I'm Here to Help</h1>
   <p class="hero-des mt-4">Discover your dream property in the UAE with our expert real estate services. Whether you're looking for luxury villas, modern apartments, or commercial spaces, we offer a curated selection of properties across prime locations in the UAE. Let us help you find the perfect place to live, invest, or grow your business.</p>
    </div>
    </div>
    </div>
    `
}