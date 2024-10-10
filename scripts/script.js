// Simulación de efecto de neón en los botones
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 20px #39ff14';
    });

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
    });
});
