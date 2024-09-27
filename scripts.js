// Animação de rolagem suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

// Configuração das partículas de fundo
particlesJS('particles.min.js', {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#4caf50"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#4caf50",
      opacity: 0.4,
      width: 1
    },
    move: {
      speed: 2
    }
  }
});

// Efeito de transição para as seções
const sections = document.querySelectorAll('.scroll-section');
const options = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector('.content').classList.add('fade-in');
    } else {
      entry.target.querySelector('.content').classList.remove('fade-in');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
