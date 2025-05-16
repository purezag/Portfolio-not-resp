const typingText = "Olá, aventureiro{a}";
const typingEl = document.getElementById("main-typing");
const fadeInText = document.getElementById("fade-in-text");
let index = 0;

function type() {
  if (index < typingText.length) {
    typingEl.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  }  {
    // Mostra o texto de baixo com fade após digitação
    setTimeout(() => {
      fadeInText.classList.remove("hidden");
      fadeInText.classList.add("show");
    }, 10); // atraso pequeno para suavidade
  }
}

window.onload = function type() {
  if (index < typingText.length) {
    typingEl.textContent += typingText.charAt(index);
    index++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      fadeInText.classList.remove("hidden");
      fadeInText.classList.add("show");

      // Mostra o footer com fade após o texto principal
      const footer = document.querySelector(".fade-footer");
      if (footer) {
        footer.classList.remove("hidden");
        footer.classList.add("show");
      }
    }, 500); // pequeno atraso para suavidade
  }
}
;


window.addEventListener("DOMContentLoaded", () => {
  typeWithFade(fadeText, fadeContainer);
});


// ========= FRASES ALEATÓRIAS E LOOP ========= //
const phrases = [
  "Codando sonhos, desenhando realidades      ",
  "Desafie o desconhecido       ",
  "Transforme ideias em código       ",
  "Codando sonhos, desenhando realidades       ",
  "Transformando café em código e design em emoção         ",
  "Crie o impossível      ",
  "Desenvolver é criar mundos com lógica e arte       ",
  "Codando sonhos, desenhando realidades       ",
  "Desafie o desconhecido     ",
  "Transforme ideias em código        ",
  "Codando sonhos, desenhando realidades      ",
  "Transformando café em código e design em emoção        ",
  "Crie o impossível         ",
  "Desenvolver é criar mundos com lógica e arte          "

];

const container = document.getElementById("typing-background");

function createTypingPhrase() {
  const el = document.createElement("span");
  el.classList.add("typing-phrase");

  // posição aleatória na tela
  const x = Math.random() * 80; // %
  const y = Math.random() * 80; // %
  el.style.left = x + "vw";
  el.style.top = y + "vh";

  const phrase = phrases[Math.floor(Math.random() * phrases.length)];
  let index = 0;
  let isDeleting = false;

  container.appendChild(el);

  function type() {
    if (!isDeleting) {
      el.textContent = phrase.substring(0, index);
      index++;
      if (index > phrase.length) {
        isDeleting = true;
        setTimeout(type, 2000); // espera antes de apagar
        return;
      }
    } else {
      el.textContent = phrase.substring(0, index);
      index--;
      if (index < 0) {
        el.remove();
        createTypingPhrase(); // cria nova frase em outro local
        return;
      }
    }

    setTimeout(type, isDeleting ? 75 : 100);
  }

  type();
}

// Inicializa frases ao fundo
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => createTypingPhrase(), i * 500);
  }
});

// efeito mudança de foto

const foto = document.querySelector('.foto-swap');

foto.addEventListener('mouseenter', () => {
  foto.src = '5.png';
});

foto.addEventListener('mouseleave', () => {
  foto.src = '3.png';
});
