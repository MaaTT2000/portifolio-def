// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA ---
    const animatedElements = document.querySelectorAll('.content-section');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => observer.observe(element));
    }

    // --- BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        // Evento de clique para rolagem suave (opcional, já que o CSS faz isso)
        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Evento de rolagem para mostrar/esconder o botão
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }

    // ===================================================================
    //      CONFIGURAÇÃO DO FANCYBOX (substituindo o Lightbox)
    // ===================================================================
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind("[data-fancybox]", {
            // Suas opções customizadas do Fancybox podem ir aqui
        });
    }

});
