// Animação de entrada para o título
gsap.from("#title h1", { 
    duration: 2, 
    opacity: 0, 
    y: -50,
    ease: "bounce.out"
}); 

// Animação de entrada para o parágrafo
gsap.from(".paragrafo1", { 
    duration: 1.5, 
    opacity: 0, 
    x: -100,
    delay: 1
});

// Animação de entrada para as notícias
gsap.from(".noticias", { 
    duration: 1.5, 
    opacity: 0, 
    y: 50,
    delay: 2
});

// Animação para os botões ao passar o mouse
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { 
            duration: 0.5, 
            scale: 1.1, 
            ease: "power1.inOut" 
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, { 
            duration: 0.5, 
            scale: 1, 
            ease: "power1.inOut" 
        });
    });
});
