// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get the current page's URL
const currentUrl = window.location.pathname.substring(1);

// Iterate through each link and update the active class
navLinks.forEach(link => {
  const page = link.getAttribute('href');
  if (page === currentUrl) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});