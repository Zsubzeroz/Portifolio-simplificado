const textToType = "Luan Estifer";
const typedTextElement = document.getElementById("typed-text");
const cursorElement = document.getElementById("cursor");
let index = 0;

function typeText() {
  if (index < textToType.length) {
    typedTextElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); // Velocidade da animação (100ms = 0.1 segundo)
  } else {
    cursorElement.style.display = ""; // Esconde o cursor quando a digitação termina
  }
}

window.onload = typeText;