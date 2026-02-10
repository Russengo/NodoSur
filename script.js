document.addEventListener("DOMContentLoaded", () => {
    
    // --- LÓGICA DEL CARRUSEL INFINITO ---
    const track = document.getElementById('track');
    if (track) {
        // Clonamos los items para efecto infinito
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });
    }

    // --- LÓGICA DEL MENÚ HAMBURGUESA (MÓVIL) ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Abrir/Cerrar menú
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú automáticamente al tocar un link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    console.log("Nodo Sur: Carrusel + Responsive Menu activos.");
});