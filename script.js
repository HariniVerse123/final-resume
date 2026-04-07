// =======================
// 🌙 DARK / LIGHT MODE (CLEANED)
// =======================
const initTheme = () => {
    const toggle = document.createElement("button");
    toggle.classList.add("theme-toggle");
    // Set initial icon based on saved preference
    const isLight = localStorage.getItem("theme") === "light";
    toggle.innerText = isLight ? "☀️" : "🌙";
    if (isLight) document.body.classList.add("light-mode");
    
    document.body.appendChild(toggle);

    toggle.addEventListener("click", () => {
        const isNowLight = document.body.classList.toggle("light-mode");
        localStorage.setItem("theme", isNowLight ? "light" : "dark");
        toggle.innerText = isNowLight ? "☀️" : "🌙";
    });
};

// =======================
// ✨ CURSOR GLOW (PERFORMANCE FIX)
// =======================
const initCursor = () => {
    const cursorGlow = document.createElement("div");
    cursorGlow.classList.add("cursor-glow");
    document.body.appendChild(cursorGlow);

    // Use requestAnimationFrame for smoother 60fps movement
    let mouseX = 0, mouseY = 0;
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const updateCursor = () => {
        cursorGlow.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
        requestAnimationFrame(updateCursor);
    };
    updateCursor();
};

// =======================
// ⌨️ TYPING EFFECT
// =======================
const initTyping = () => {
    const text = "Tulsi Shree Harini";
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    let i = 0;
    const type = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    };
    type();
};

// =======================
// 🌌 SCROLL EFFECTS (REVEAL & PARALLAX)
// =======================
const initScrollEffects = () => {
    // Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach((el, idx) => {
        el.style.transitionDelay = `${Math.min(idx * 70, 400)}ms`;
        observer.observe(el);
    });

    // Ambient Motion
    const a1 = document.querySelector(".ambient-one");
    const a2 = document.querySelector(".ambient-two");
    
    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if(a1) a1.style.transform = `translateY(${y * 0.15}px)`;
        if(a2) a2.style.transform = `translateY(${y * -0.15}px)`;
    }, { passive: true });
};

// Run everything when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initCursor();
    initTyping();
    initScrollEffects();
});
