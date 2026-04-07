// =======================
// 🌙 THEME TOGGLE (LIGHT/DARK)
// =======================
const initTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    // Load saved preference
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        const isNowLight = document.body.classList.toggle('light-mode');
        localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
        
        // Visual feedback on the button
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => { themeToggle.style.transform = 'scale(1.1)'; }, 100);
    });
};

// =======================
// ✨ CURSOR GLOW 
// =======================
const initCursor = () => {
    // Create the glow element that matches your CSS .cursor-glow
    const cursorGlow = document.createElement("div");
    cursorGlow.classList.add("cursor-glow");
    document.body.appendChild(cursorGlow);

    let mouseX = 0, mouseY = 0;
    
    // Track mouse position
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Update position smoothly at 60fps
    const updateCursor = () => {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
        requestAnimationFrame(updateCursor);
    };
    updateCursor();
};

// =======================
// 🌌 STARRY NIGHT GENERATOR
// =======================
const initStars = () => {
    const container = document.getElementById('star-container');
    if (!container) return;

    const starCount = 100; // Total stars in the sky

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random Position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random Size
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Connect to CSS custom properties (variables)
        star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
        star.style.setProperty('--opacity', Math.random() * 0.6 + 0.2);
        star.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(star);
    }
};

// =======================
// ⌨️ TYPING EFFECT & SCROLL
// =======================
const initTyping = () => {
    const text = "Tulsi Shree Harini";
    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;
    typingElement.textContent = ""; 
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
};

// =======================
// 🏁 INITIALIZE ALL
// =======================
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initCursor();
    initStars();
    initTyping();
    initScrollEffects();
});
