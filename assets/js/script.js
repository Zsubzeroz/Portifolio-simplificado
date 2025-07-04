/* ==========================================================================
   ARQUIVO JAVASCRIPT UNIFICADO PARA O PORTFÓLIO
   ========================================================================== */

// Usamos 'DOMContentLoaded' para garantir que todo o HTML foi carregado
// antes de qualquer script tentar manipulá-lo.
document.addEventListener('DOMContentLoaded', function() {

    // --- CÓDIGO DA PÁGINA PRINCIPAL (HOME) ---
    // Funcionalidade: Animação de digitação
    const typedTextElement = document.getElementById("typed-text");
    if (typedTextElement) { // <-- Isso é uma "guarda". O código só roda se o elemento existir.
        const textToType = "Luan Estifer";
        const cursorElement = document.getElementById("cursor");
        let index = 0;

        function typeText() {
            if (index < textToType.length) {
                typedTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(typeText, 100); // Velocidade da digitação
            } else {
                // Mantém o cursor piscando no final
                if (cursorElement) {
                    cursorElement.style.animation = 'blink-caret 0.75s infinite';
                }
            }
        }
        
        // Inicia a animação de digitação
        typeText();
    }


    // --- CÓDIGO DA PÁGINA DE PROJETOS ---
    // Funcionalidade: Carrossel de imagens
    const carousel = document.querySelector('.carousel');
    if (carousel) { // <-- Guarda para o carrossel
        const prevBtn = document.querySelector('.carousel__prev');
        const nextBtn = document.querySelector('.carousel__next');
        const slider = document.querySelector('.carousel__slider');
        const items = document.querySelectorAll('.carousel__slider__item');
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= items.length) {
                currentIndex = 0; // Volta para o primeiro se chegar ao fim
            } else if (index < 0) {
                currentIndex = items.length - 1; // Vai para o último se voltar do primeiro
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        if(prevBtn && nextBtn && slider) {
            prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
            nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
            
            // Inicia o carrossel no primeiro slide
            showSlide(currentIndex);
        }
    }


    // --- CÓDIGO DA PÁGINA DE CURRÍCULO ---
    // Funcionalidade: Botões de imprimir/download
    const downloadPdfBtn = document.getElementById('download-pdf');
    if (downloadPdfBtn) { // <-- Guarda para o primeiro botão
        downloadPdfBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    const imprimirBtn = document.getElementById('imprimir');
    if (imprimirBtn) { // <-- Guarda para o segundo botão
        imprimirBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    
    // --- CÓDIGO DA PÁGINA DE AGRADECIMENTOS ---
    // Funcionalidade: Mostrar mensagem especial ao clicar
    const mostrarMensagemBtn = document.getElementById('mostrarMensagem');
    if (mostrarMensagemBtn) { // <-- Guarda para o botão de agradecimento
        mostrarMensagemBtn.addEventListener('click', function() {
            const mensagemEspecial = document.getElementById('mensagemEspecial');
            if (mensagemEspecial) {
                mensagemEspecial.style.display = 'block';
            }
        });
    }

}); // Fim do 'DOMContentLoaded'