 document.addEventListener('DOMContentLoaded', () => {
            ScrollReveal().reveal('.reveal', {
                delay: 300,
                distance: '60px',
                duration: 1000,
                origin: 'bottom',
                opacity: 0,
                scale: 0.95,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                interval: 150
            });
        });

const boton = document.getElementById('btnContacto');
const publicar = document.getElementById('btnPublicar');

boton.addEventListener('click', () => {
    window.location.href = 'https://wa.link/jbox9q';
});

publicar.addEventListener('click', () => {
    window.location.href = 'publicarVacante.html';
});

 



