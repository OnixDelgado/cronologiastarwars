document.addEventListener('DOMContentLoaded', function() {
    // 1. Menú hamburguesa principal (ya existente)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Reemplaza solo la parte del código del toggle de filtros con esto:

// Control del toggle de filtros
const filtroToggle = document.querySelector('.filtro-toggle');
const filtros = document.querySelector('.filtros');

if (filtroToggle && filtros) {
    // Función para cerrar el menú
    const cerrarFiltros = () => {
        filtros.classList.remove('active');
    };
    
    // Función para alternar el menú
    const toggleFiltros = (e) => {
        e.stopPropagation();
        filtros.classList.toggle('active');
    };
    
    // Evento del botón toggle
    filtroToggle.addEventListener('click', toggleFiltros);
    
    // Solo cerrar si el clic NO ocurre en el botón ni dentro de filtros
document.addEventListener('click', (e) => {
    const esClickEnBoton = e.target.closest('.filtro-toggle');
    const esClickEnFiltros = e.target.closest('.filtros');

    if (!esClickEnBoton && !esClickEnFiltros) {
        cerrarFiltros();
    }
});

    
    // Opcional: Cerrar al cambiar el tamaño de pantalla a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            cerrarFiltros();
        }
    });
}

    // 3. Configuración de filtros (tu código existente continúa aquí)
    const defaultFilters = {
        movie: true,
        liveAction: true,
        animated: true,
        cortos: false,
        game: false
    };

    function cargarFiltros() {
        const savedFilters = localStorage.getItem('starWarsFilters');
        return savedFilters ? JSON.parse(savedFilters) : defaultFilters;
    }

    function guardarFiltros() {
        const filters = {};
        document.querySelectorAll('.filtro-checkbox').forEach(checkbox => {
            filters[checkbox.dataset.category] = checkbox.checked;
        });
        localStorage.setItem('starWarsFilters', JSON.stringify(filters));
    }

    function aplicarFiltros() {
        const activeCategories = Array.from(
            document.querySelectorAll('.filtro-checkbox:checked')
        ).map(checkbox => checkbox.dataset.category);

        document.querySelectorAll('[data-categories]').forEach(element => {
            const elementCategories = element.dataset.categories.split(' ');
            const shouldShow = elementCategories.some(cat => activeCategories.includes(cat));
            element.classList.toggle('filtered-out', !shouldShow);
        });

        guardarFiltros();
    }

    function inicializarFiltros() {
        const filters = cargarFiltros();
        
        document.querySelectorAll('.filtro-checkbox').forEach(checkbox => {
            const category = checkbox.dataset.category;
            checkbox.checked = filters[category] !== undefined ? filters[category] : defaultFilters[category];
            // Si es el de películas, mantener siempre activo y bloquearlo
            if (category === 'movie') {
                checkbox.checked = true;
                checkbox.disabled = true;
            } else {
                checkbox.checked = filters[category] !== undefined ? filters[category] : defaultFilters[category];
                checkbox.addEventListener('change', aplicarFiltros);
            }

        });
        
        aplicarFiltros();
    }

    inicializarFiltros();
    
    // 4. Cerrar menús en móviles (código existente)
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Evita cerrar el menú si se hace clic dentro del área de filtros
            if (e.target.closest('.filtros')) return;
    
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });    
});