export const contactHtml = () => {
    return `
    <div class="py-5 position-relative contact-con" style="height:65vh; width:100vw;">
    <div class="wrapper centered">
      <article class="letter">
        <div class="side">
          <h1>Get in Touch</h1>
          <p>
            <textarea placeholder="Your message"></textarea>
          </p>
        </div>
        <div class="side">
          <p>
            <input type="text" placeholder="Your name" >
          </p>
          <p>
            <input type="email" placeholder="Your email" >
          </p>
          <p>
            <button id="sendLetter">Send</button>
          </p>
        </div>
      </article>
      <div class="envelope front"></div>
      <div class="envelope back"></div>
    </div>
    <p class="result-message centered text-center">Thank you for your message</p>
    </div>
    <div class="main-bg" style=" background-color:black;">
<small class="text-center text-dark" style="font-size:10px;">@zarahrealestate 2024</small>
    </div>
    `;
}


