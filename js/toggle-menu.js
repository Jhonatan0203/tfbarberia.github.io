document.getElementById('mobile-menu').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-menu');
    navLinks.classList.toggle('nav-active');
})
// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById('nav-menu');
    var mobileMenu = document.getElementById('mobile-menu');
    
    // Verifica si el clic fue fuera del menú o del botón
    if (!navLinks.contains(event.target) && !mobileMenu.contains(event.target)) {
        navLinks.classList.remove('nav-active');
    }
});
