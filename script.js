// =======================
// REVEAL ANIMATION (UPGRADED)
// =======================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12, // smoother trigger
  }
);

revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index * 60, 400)}ms`;
  observer.observe(element);
});


// =======================
// 🌙 DARK / LIGHT MODE
// =======================

// create toggle button dynamically
const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.classList.add("theme-toggle");
document.body.appendChild(toggle);

// load saved theme
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  toggle.innerText = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "light");
    toggle.innerText = "☀️";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.innerText = "🌙";
  }
});


// =======================
// ✨ CURSOR GLOW EFFECT
// =======================

const cursorGlow = document.createElement("div");
cursorGlow.classList.add("cursor-glow");
document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});


// =======================
// 🌌 AMBIENT BACKGROUND MOTION
// =======================

const ambientOne = document.querySelector(".ambient-one");
const ambientTwo = document.querySelector(".ambient-two");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  ambientOne.style.transform = `translateY(${scrollY * 0.2}px)`;
  ambientTwo.style.transform = `translateY(${scrollY * -0.2}px)`;
});
// =======================
// ⌨️ TYPING EFFECT
// =======================

const text = "Tulsi Shree Harini";
const typingElement = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

typeEffect();
