"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });