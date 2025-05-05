document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Filtros
    const checkboxes = document.querySelectorAll('.filtro-checkbox');
    
    // Aplicar filtros cuando cambia cualquier checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', aplicarFiltros);
    });
    
    function aplicarFiltros() {
        // Obtener categorías seleccionadas
        const categoriasActivas = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.dataset.category);
        
        // Mostrar/ocultar elementos según filtros
        document.querySelectorAll('.timeline-item').forEach(item => {
            const itemCategories = item.dataset.categories.split(' ');
            const shouldShow = itemCategories.some(cat => categoriasActivas.includes(cat));
            
            if (shouldShow) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }
    
    // Aplicar filtros al cargar la página
    aplicarFiltros();
    
    // Cerrar menú al hacer clic en un enlace (para móviles)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
});