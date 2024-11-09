// I copied this from google's AI search results
// Get all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Get the current page's URL
const splitUrl = window.location.pathname.split("/");
console.log(splitUrl)
const currentPage = splitUrl[splitUrl.length - 1];

// Iterate through each link and update the active class
navLinks.forEach(link => {
  const page = link.getAttribute('href');
  if (page === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});