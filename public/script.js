const marqueeContent = document.querySelector('.marquee-content');
const marqueeText = marqueeContent.innerHTML;

// Duplica o texto várias vezes para criar o efeito infinito
for (let i = 0; i < 15; i++) {
  marqueeContent.innerHTML += marqueeText;
}

let position = 0;
const speed = 1; // Ajuste a velocidade aqui (quanto maior, mais rápido)

function animate() {
  position -= speed;
  
  // Quando metade do conteúdo passar, reseta a posição
  if (Math.abs(position) >= marqueeContent.scrollWidth / 2) {
    position = 0;
  }
  
  marqueeContent.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();

  AOS.init({
    duration: 1000, // Duração da animação em ms
    once: false, // Anima só uma vez
    offset: 100, // Quando começa a animação (px antes de aparecer)
  });