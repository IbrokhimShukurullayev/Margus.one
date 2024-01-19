window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add("backtop-show");
  } else {
    backtop.classList.remove("backtop-show");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Get all accordion headers
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  // Add click event listener to each header
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      // Toggle the visibility of the associated content
      var content = this.nextElementSibling;

      // Check if the content is currently visible
      var isVisible = content.style.display === "block";

      // Hide all accordion contents
      accordionHeaders.forEach(function (otherHeader) {
        var otherContent = otherHeader.nextElementSibling;
        otherContent.style.display = "none";
      });

      // If the content was not visible, show it
      if (!isVisible) {
        content.style.display = "block";
      }
    });
  });

  // Trigger a click on the first header to initially hide its content
  accordionHeaders[0].click();
});


const openModal = document.querySelector(".about__video");
const modalContent = document.getElementById("modal");
const closeModal = document.querySelector(".close__modal");
const main = document.getElementById("main");

openModal.addEventListener("click", () => {
  modalContent.style.display = "block";
  closeModal.style.display = "inline-block";
});

closeModal.addEventListener("click", () => {
  closeModal.style.display = "none";
  modalContent.style.display = "none";
});




// const loading = document.getElementById("loading");

// const loadingDuration = 1000; // 1s

// setTimeout(() => {
//   loading.classList.add("loading-none");
// }, loadingDuration);

// function openNavbar() {
//   document.getElementById("navbar-responsive").style.left = "-80px";
//   // document.getElementById("navbar-responsive").style.top = "0";
// }
// function closeNavbar() {
//   document.getElementById("navbar-responsive").style.left = "-100%";
//   document.getElementById("main").style.left = "-100%";
//   // document.getElementById("navbar-responsive").style.top = "-100%";
// }

// document.getElementById("navbar-open").addEventListener("click", openNavbar);
// document.getElementById("navbar-close").addEventListener("click", closeNavbar);
// document.getElementById("main").addEventListener("click", closeNavbar);

// // AOS.init();
