// Función para calcular y actualizar las alturas dinámicas
function actualizarMedidas() {
    const header = document.querySelector('header');
    const navWrapper = document.querySelector('.nav-wrapper');
    
    if (header && navWrapper) {
        // Obtenemos la altura real de los elementos
        const headerHeight = header.offsetHeight;
        const navHeight = navWrapper.offsetHeight;
        
        // Pasamos esos valores a variables CSS en la raíz del documento
        document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    }
}

// Ejecutar al cargar y al redimensionar la ventana
actualizarMedidas();
window.addEventListener('resize', actualizarMedidas);

document.addEventListener('DOMContentLoaded', function() {
    
    // =================================================================
    // 1. RENDERIZADO DINÁMICO (Con sistema de Tracking Inteligente)
    // =================================================================
    function renderizarTimeline() {
        if (typeof timelineData === 'undefined') {
            console.warn("Aún no se ha vinculado el archivo datos.js o está vacío.");
            return;
        }

        timelineData.forEach((item, itemIndex) => {
            const seccion = document.getElementById(item.eraId);
            if (!seccion) return; 

            // Manejo de textos descriptivos sueltos (como "Pasan 10 años...")
            if (item.tipo === "descripcion") {
                const wrapper = document.createElement('div');
                // Usamos Flexbox para poner el texto a la izquierda y la cajita a la derecha
                wrapper.style.display = 'flex';
                wrapper.style.justifyContent = 'space-between';
                wrapper.style.alignItems = 'flex-start';
                wrapper.style.marginBottom = '1.5rem';
                
                if (item.categoria) wrapper.dataset.categories = item.categoria;

                let htmlInterno = `<p class="era-description" style="margin-bottom: 0; flex-grow: 1;">${item.texto}</p>`;
                
                // Si le pusiste un año, le inyectamos la etiqueta inteligente
                if (item.año) {
                    const esDBY = item.año.includes("DBY");
                    const claseColor = esDBY ? "badge-dby" : "badge-aby";
                    const textoTooltip = esDBY ? "DBY: Después de la Batalla de Yavin" : "ABY: Antes de la Batalla de Yavin";
                    
                    htmlInterno += `<span class="badge-year ${claseColor}" data-tooltip="${textoTooltip}" style="margin-left: 15px; margin-top: 5px; flex-shrink: 0;">${item.año}</span>`;
                }

                wrapper.innerHTML = htmlInterno;
                seccion.appendChild(wrapper);
                return; 
            }

            const article = document.createElement('article');
            article.className = `timeline-item ${item.categoria}`;
            article.dataset.categories = item.categoria;

            const mainId = `item-${item.eraId}-${itemIndex}`;

            let badgeHTML = '';
            if (item.año) {
                const esDBY = item.año.includes("DBY");
                const claseColor = esDBY ? "badge-dby" : "badge-aby";
                const textoTooltip = esDBY ? "DBY: Después de la Batalla de Yavin" : "ABY: Antes de la Batalla de Yavin";
                badgeHTML = `<span class="badge-year ${claseColor}" data-tooltip="${textoTooltip}">${item.año}</span>`;
            }

            let htmlInterno = `
                <div class="tracking-header">
                    <input type="checkbox" class="tracker-checkbox main-tracker" id="${mainId}">
                    <label for="${mainId}" class="tracker-label"><h3>${item.titulo}</h3></label>
                    ${badgeHTML}
                </div>
            `;

            if (item.eventos && item.eventos.length > 0) {
                // VERIFICACIÓN CLAVE: 
                // Buscamos si alguno de los eventos tiene la propiedad "clase" (como los de Clone Wars).
                // Si la tiene, es una lista de capítulos. Si no, es solo texto explicativo.
                const esListaDeCapitulos = item.eventos.some(evento => evento.clase);

                // Asignamos la clase correcta al contenedor <ul>
                if (esListaDeCapitulos) {
                    htmlInterno += '<ul class="tracking-list">';
                } else {
                    htmlInterno += '<ul>'; // Lista normal que respeta las viñetas (•)
                }

                item.eventos.forEach((evento, evIndex) => {
                    const eventId = `ev-${item.eraId}-${itemIndex}-${evIndex}`;
                    const claseTemporada = evento.clase ? ` class="${evento.clase}"` : '';
                    const tiempoStr = evento.tiempo ? `<strong>${evento.tiempo}</strong><br><br>` : '';
                    
                    if (evento.clase) { // <--- SOLUCIÓN: Cambiar por evento.clase
                        // Renderiza CON checkbox secundario (Para episodios individuales)
                        htmlInterno += `
                            <li${claseTemporada}>
                                <div class="tracking-event">
                                    <input type="checkbox" class="tracker-checkbox sub-tracker" id="${eventId}" data-parent="${mainId}">
                                    <label for="${eventId}" class="tracker-label">${tiempoStr}${evento.descripcion}</label>
                                </div>
                            </li>
                        `;
                    } else {
                        // Renderiza SIN checkbox, como texto normal explicativo
                        // Le agregamos la clase "texto-explicativo" para poder controlarlo en CSS
                        htmlInterno += `
                            <li class="${evento.clase ? evento.clase + ' ' : ''}texto-explicativo">
                                ${tiempoStr}${evento.descripcion}
                            </li>
                        `;
                    }
                });
                htmlInterno += '</ul>';
            } else if (item.contenidoExtra) {
                htmlInterno += item.contenidoExtra;
            }

            article.innerHTML = htmlInterno;
            seccion.appendChild(article);
        });
    }

    // =================================================================
    // 2. MENÚ PRINCIPAL MÓVIL (Off-canvas mejorado)
    // =================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    // Creamos un fondo oscuro (overlay) dinámicamente
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    if (menuToggle && mainNav) {
        const toggleMenu = () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
            overlay.classList.toggle('active');
            
            // Cambiar el ícono
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        };

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu); // Cerrar al tocar afuera

        // Actualizar la lógica de cerrar al hacer clic en un enlace
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }

    // =================================================================
    // 3. TOGGLE DE FILTROS MÓVIL
    // =================================================================
    const filtroToggle = document.querySelector('.filtro-toggle');
    const filtros = document.querySelector('.filtros');

    if (filtroToggle && filtros) {
        const cerrarFiltros = () => {
            filtros.classList.remove('active');
        };
        
        const toggleFiltros = (e) => {
            e.stopPropagation();
            filtros.classList.toggle('active');
        };
        
        filtroToggle.addEventListener('click', toggleFiltros);
        
        // Solo cerrar si el clic NO ocurre en el botón ni dentro de filtros
        document.addEventListener('click', (e) => {
            const esClickEnBoton = e.target.closest('.filtro-toggle');
            const esClickEnFiltros = e.target.closest('.filtros');

            if (!esClickEnBoton && !esClickEnFiltros) {
                cerrarFiltros();
            }
        });
        
        // Cerrar al cambiar el tamaño de pantalla a desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                cerrarFiltros();
            }
        });
    }

    // =================================================================
    // 4. LÓGICA DE FILTRADO
    // =================================================================
    const defaultFilters = {
        movie: true,
        'live-action': true, // Corrección: guion medio para coincidir con tu HTML
        animated: true,
        cortos: true,
        game: true
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

    // =================================================================
    // 5. CERRAR MENÚS AL NAVEGAR (Móviles)
    // =================================================================
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Evita cerrar el menú si se hace clic dentro del área de filtros
            if (e.target.closest('.filtros')) return;
    
            if (window.innerWidth <= 768 && mainNav && menuToggle) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });    

    // =================================================================
    // ORDEN DE EJECUCIÓN (¡Fundamental!)
    // =================================================================
    renderizarTimeline(); // 1º: Dibuja todo el HTML desde el array
    inicializarFiltros(); // 2º: Lee las checkboxes y oculta/muestra lo recién dibujado

    // =================================================================
    // 6. SISTEMA DE PROGRESO (TRACKER EN CASCADA 2 NIVELES)
    // =================================================================
    function inicializarTracker() {
        const savedProgress = JSON.parse(localStorage.getItem('starWarsProgress')) || {};
        const checkboxes = document.querySelectorAll('.tracker-checkbox');

        const actualizarVisual = (chk) => {
            const label = document.querySelector(`label[for="${chk.id}"]`);
            if (label) {
                if (chk.checked) {
                    label.classList.add('completado');
                } else {
                    label.classList.remove('completado');
                }
            }
        };

        checkboxes.forEach(chk => {
            // Cargar datos guardados
            if (savedProgress[chk.id]) {
                chk.checked = true;
                actualizarVisual(chk);
            }

            // Escuchar los clicks
            chk.addEventListener('change', (e) => {
                const checked = e.target.checked;
                savedProgress[e.target.id] = checked;
                
                // NIVEL 1: Si marco el Padre (H3), marco sus hijos (LIs)
                if (e.target.classList.contains('main-tracker')) {
                    const parentId = e.target.id;
                    const childCheckboxes = document.querySelectorAll(`input[data-parent="${parentId}"]`);
                    
                    childCheckboxes.forEach(child => {
                        child.checked = checked;
                        savedProgress[child.id] = checked;
                        actualizarVisual(child);
                    });
                }
                
                // NIVEL 2: Si marco un Capítulo (LI), reviso su H3
                else if (e.target.classList.contains('sub-tracker')) {
                    const parentId = e.target.dataset.parent;
                    const parentCheckbox = document.getElementById(parentId);
                    const siblings = Array.from(document.querySelectorAll(`input[data-parent="${parentId}"]`));
                    
                    if (parentCheckbox) {
                        const allChecked = siblings.every(sib => sib.checked);
                        parentCheckbox.checked = allChecked;
                        savedProgress[parentCheckbox.id] = allChecked;
                        actualizarVisual(parentCheckbox);
                    }
                }

                localStorage.setItem('starWarsProgress', JSON.stringify(savedProgress));
                actualizarVisual(e.target);
            });
        });
    }
    inicializarTracker();
});