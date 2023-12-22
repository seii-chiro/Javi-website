"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  });

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
    console.log(entry2);
    if (entry2.isIntersecting) {
      entry2.target.classList.add('apply');
    } else {
      entry2.target.classList.remove('apply');
    }
  });
});

const observer3 = new IntersectionObserver((entries3) => {
  entries3.forEach((entry3) => {
    console.log(entry3);
    if (entry3.isIntersecting) {
      entry3.target.classList.add('add');
    } else {
      entry3.target.classList.remove('add');
    }
  });
});

const hiddenEl = document.querySelectorAll('.hidden');
hiddenEl.forEach((el) => observer.observe(el));

const headerAnimation = document.querySelectorAll('.animate');
headerAnimation.forEach((headAni) => observer2.observe(headAni));

const profileAnimation = document.querySelectorAll('.moveit');
profileAnimation.forEach((mo) => observer3.observe(mo));