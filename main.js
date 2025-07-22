// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA ---
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

    // --- 2. SCROLL SUAVE PARA LINKS ÂNCORA ---
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            // Se o href for apenas '#', vai para o topo
            let targetElement = targetId === '#' ? document.body : document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 3. BOTÃO "VOLTAR AO TOPO" ---
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            // Mostra o botão após rolar 300 pixels
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    }
});