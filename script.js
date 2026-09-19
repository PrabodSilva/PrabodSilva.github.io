/* ============================================
   1. MOBILE MENU - open and close
   ============================================ */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");   // adds .open if missing, removes it if present
});

/* ============================================
   2. CLOSE THE MENU after tapping a link
   ============================================ */
const navLinks = nav.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

/* ============================================
   3. CURRENT YEAR in the footer
   ============================================ */
document.getElementById("year").textContent = new Date().getFullYear();

/* ============================================
   4. HIGHLIGHT the section you are reading
   ============================================ */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach(function (section) {
    // how far down the page this section starts, minus the header height
    const top = section.offsetTop - 100;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});