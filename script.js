const hamburger = document.querySelector('.hamburger');
const navLinksMobile = document.querySelector('.nav-links-mobile');
const mobileLinks = document.querySelector('.mobile');

// Toggle mobile navigation
hamburger.addEventListener('click', () => {
  navLinksMobile.classList.toggle('active');
});

// Close mobile navigation when a link is clicked
mobileLinks.addEventListener('click', () => {
  navLinksMobile.classList.remove('active');
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from actually submitting

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Construct the mailto link
  const mailtoLink = `mailto:ikonets@yahoo.com?subject=${encodeURIComponent(subject)}&body=Hi, my name is ${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}`;


  // Redirect to mailto link
  window.location.href = mailtoLink;
});