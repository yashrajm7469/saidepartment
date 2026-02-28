// Change header style on scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
  offset: 100
});

// Add subtle parallax effect on cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    setTimeout(() => {
      // Reapply hover transform if needed but usually css hover takes over
      card.style.transform = '';
    }, 300);
  });
});

// Initialize Particles JS for Hero Section (Hover effect)
if (document.getElementById('particles-js')) {
  tsParticles.load('particles-js', {
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "char",
        character: [
          { value: "🎁", font: "sans-serif", weight: "400" },
          { value: "🧸", font: "sans-serif", weight: "400" },
          { value: "🎈", font: "sans-serif", weight: "400" },
          { value: "🖍️", font: "sans-serif", weight: "400" },
          { value: "🎨", font: "sans-serif", weight: "400" },
          { value: "📚", font: "sans-serif", weight: "400" },
          { value: "🎀", font: "sans-serif", weight: "400" }
        ]
      },
      opacity: {
        value: 0.9,
        random: true,
        anim: {
          enable: false
        }
      },
      size: {
        value: 30, // Size of emoji
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: false // no connections between items
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Push items playfully away
        },
        onclick: {
          enable: true,
          mode: "push" // Adds items on click
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4
        },
        push: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  });
}
