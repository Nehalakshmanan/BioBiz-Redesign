// Add sticky behavior and shrink effect to the navbar
window.onscroll = function () {
    const navbar = document.querySelector(".navbar-custom");
    const body = document.body;
    
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");  // Add the 'shrink' class to navbar
        body.classList.add("shrink-navbar");  // Adjust the body padding when navbar shrinks
    } else {
        navbar.classList.remove("shrink");  // Remove 'shrink' class
        body.classList.remove("shrink-navbar");  // Reset body padding
    }
};




