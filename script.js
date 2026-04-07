// =======================
// 🌙 DARK / LIGHT MODE (UPDATED)
// =======================
const initTheme = () => {
    // Connect to the button you already have in your HTML
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // 1. Check for saved user preference on page load
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    // 2. Listen for the click
    themeToggle.addEventListener('click', () => {
        const isNowLight = document.body.classList.toggle('light-mode');
        
        // 3. Save the preference so it stays on refresh
        localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
        
        // Optional: Animate the button icon slightly on click
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1.1)';
        }, 100);
    });
};

// =======================
// ✨ CURSOR GLOW
// =======================
const initCursor = () => {
    const cursorGlow = document.createElement("div");
    cursorGlow.classList.add("cursor-glow");
    document.body.appendChild(cursorGlow);

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

    typingElement.textContent = ""; // Clear existing text before starting
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
// 🌌 SCROLL EFFECTS
// =======================
const initScrollEffects = () => {
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

    const a1 = document.querySelector(".ambient-one");
    const a2 = document.querySelector(".ambient-two");
    
    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if(a1) a1.style.transform = `translateY(${y * 0.15}px)`;
        if(a2) a2.style.transform = `translateY(${y * -0.15}px)`;
    }, { passive: true });
};

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initCursor();
    initTyping();
    initScrollEffects();
});
