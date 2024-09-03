export const contactHtml = () => {
    return `
    <div class="py-5 position-relative" style="height:65vh; width:100vw; background:#d1e8ff"">
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
    </div>`;
}

function addClass() {
    document.body.classList.add("sent");
}

// Ensure the DOM is fully loaded
window.onload = () => {
    const sendLetter = document.getElementById("sendLetter");
    
    // Check if the element exists before adding an event listener
    if (sendLetter) {
        sendLetter.addEventListener("click", addClass);
    }
};
