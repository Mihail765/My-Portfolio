particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#4f46e5'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#4f46e5',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero-text h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".hero-text p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".hero-text .btn", {
    duration: 1.5,
    y: 50,
    opacity: 1,
    delay: 0.6,
    ease: "power3.out"
});

gsap.from(".profile-container", {
    duration: 1.5,
    x: 50,
    opacity: 0,
    delay: 0.9,
    ease: "power3.out"
});

// Scroll Animations
gsap.from(".section-title", {
    scrollTrigger: {
        trigger: ".section-title",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".skills-container", {
    scrollTrigger: {
        trigger: ".skills-container",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".projects-grid", {
    scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".contact-form", {
    scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         const headerOffset = 80;
//         const elementPosition = target.offsetTop;
//         const offsetPosition = elementPosition - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });

//         // Close mobile menu if open
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//         }
//     });
// });



function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ostdbee", "template_dq2n1mf", parms)
    .then(() => {
        alert("Email Sent!");
        form.reset();
    })
    .catch((error) => {
        console.error("Email failed:", error);
        alert("Failed to send email. Please try again later.");
    });
}

