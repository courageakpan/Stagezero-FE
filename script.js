 const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = `Current time in milliseconds: ${currentTime}`;
}

 updateTime();


 document.getElementById(contactForm).addEventListener("submit", function(e) {
    e.preventDefault;

    let valid = true;

    const smallTags = document.querySelectorAll("small");
    for (let i = 0; i < smallTags.length; i++){
        smallTags[i] = "";
    }
    document.getElementById("success-message").textContent = "";

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("document");
    const message = document.getElementById("message");

    if (name.value.trim() === "") {
        document.getElementById("error-name").textContent = "Name is required.";
        valid = false;
    }
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      document.getElementById("error-email").textContent = "Enter a valid email.";
      valid = false;
    }

    if (subject.value.trim() === "") {
      document.getElementById("error-subject").textContent = "Subject is required.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      valid = false;
    }

    if (valid) {
      document.getElementById("success-message").textContent = "Message sent successfully!";
      document.getElementById("contactForm").reset();
    }
  


 })