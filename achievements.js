import AchImg from '/image/hero-2.jpeg'

export const achievementsHtml = () => {
    return `

    <div class="d-flex justify-content-center py-5 align-items-center flex-column" >
    <h1 class="about-header text-center w-100 ">ACHIEVEMENTS</h1>
    <div class="d-flex col-10 px-5 gap-5 py-5 justify-content-center align-items-center">
        <div class="col-6 d-flex flex-column   px-5">
    
            <h1 class="about-des3  w-100">"1.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1><br/>
            <h1 class="about-des3 w-100">"2.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1><br/>
            <h1 class="about-des3  w-100">"3.Passionate about helping clients find their perfect home or investment. With a keen eye for market trends and a deep understanding of property values, I turn real estate dreams into reality, one deal at a time. My commitment is to provide personalized service, ensuring every client finds a property that truly fits their lifestyle and goals."</h1><br/>
        </div>
        <div class="col-6">
            <img src="${AchImg}" class="img-fluid" alt="Achievements Image"style="filter:grayscale(100)" />
        </div>
    </div>
    </div>



    `
}