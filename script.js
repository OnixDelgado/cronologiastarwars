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
                // Usamos Flexbox para separar el texto a la izquierda y los extras a la derecha
                wrapper.style.display = 'flex';
                wrapper.style.justifyContent = 'space-between';
                wrapper.style.alignItems = 'flex-start';
                wrapper.style.marginBottom = '1.5rem';
                
                if (item.categoria) wrapper.dataset.categories = item.categoria;

                let arrayImagenes = [];
                if (item.imagenes) arrayImagenes = item.imagenes;
                else if (item.imagen) arrayImagenes = [item.imagen];

                let posterHTML = '';
                if (arrayImagenes.length > 0) {
                    const checkId = `toggle-poster-desc-${itemIndex}`;
                    const textoBoton = arrayImagenes.length > 1 ? "Ver portadas" : "Ver portada";
                    const iconoBoton = arrayImagenes.length > 1 ? "fas fa-images" : "fas fa-image";
                    
                    let imagenesHTML = '';
                    arrayImagenes.forEach((imgSrc) => {
                        imagenesHTML += `<img src="${imgSrc}" alt="Portada descriptiva" class="timeline-poster" loading="lazy">`;
                    });

                    // ESTE ES EL CAMBIO CLAVE: Le quitamos el float y le damos un margen superior
                    posterHTML = `
                        <div class="poster-container" style="float: none; margin-left: 0; margin-top: 10px; margin-bottom: 0;">
                            <input type="checkbox" id="${checkId}" class="poster-toggle-check">
                            <label for="${checkId}" class="btn-ver-portada"><i class="${iconoBoton}"></i> ${textoBoton}</label>
                            <div class="poster-wrapper">
                                ${imagenesHTML}
                            </div>
                        </div>
                    `;
                }

                let añoHTML = '';
                if (item.año) {
                    const esDBY = item.año.includes("DBY");
                    const claseColor = esDBY ? "badge-dby" : "badge-aby";
                    const textoTooltip = esDBY ? "DBY: Después de la Batalla de Yavin" : "ABY: Antes de la Batalla de Yavin";
                    
                    // Generamos el HTML del año
                    añoHTML = `<span class="badge-year ${claseColor}" data-tooltip="${textoTooltip}" style="margin-left: 0;">${item.año}</span>`;
                }

                // Armamos las dos columnas: Izquierda (texto) y Derecha (Año + Portada)
                let htmlInterno = `
                    <div class="era-description" style="margin-bottom: 0; flex-grow: 1; min-width: 0;">
                        ${item.texto}
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: flex-end; flex-shrink: 0; margin-left: 15px; position: relative;">
                        ${añoHTML}
                        ${posterHTML}
                    </div>
                `;
                
                wrapper.innerHTML = htmlInterno;
                seccion.appendChild(wrapper);
                return; 
            }

            const article = document.createElement('article');
            article.className = `timeline-item ${item.categoria}`;
            article.dataset.categories = item.categoria;

            const mainId = `item-${item.eraId}-${itemIndex}`;

            // Lógica para detectar si es ABY o DBY y armar la etiqueta inteligente
            let spanAño = '';
            if (item.año) {
                const esDBY = item.año.includes("DBY");
                const claseColor = esDBY ? "badge-dby" : "badge-aby";
                const textoTooltip = esDBY ? "DBY: Después de la Batalla de Yavin" : "ABY: Antes de la Batalla de Yavin";
                spanAño = `<span class="badge-year ${claseColor}" data-tooltip="${textoTooltip}">${item.año}</span>`;
            }

            let htmlInterno = `
                <div class="tracking-header">
                    <input type="checkbox" class="tracker-checkbox main-tracker" id="${mainId}">
                    <label for="${mainId}" class="tracker-label"><h3>${item.titulo}</h3></label>
                    ${spanAño}
                </div>
            `;

            // 1. Unificamos si el usuario usa 'imagen' (una sola) o 'imagenes' (varias)
            let arrayImagenes = [];
            if (item.imagenes) {
                arrayImagenes = item.imagenes;
            } else if (item.imagen) {
                arrayImagenes = [item.imagen];
            }

            // 2. Contenedor inteligente
            if (arrayImagenes.length > 0) {
                const checkId = `toggle-poster-${itemIndex}`;
                // Detectamos si es plural o singular para cambiar el botón y el ícono
                const textoBoton = arrayImagenes.length > 1 ? "Ver portadas" : "Ver portada";
                const iconoBoton = arrayImagenes.length > 1 ? "fas fa-images" : "fas fa-image";
                
                // Generamos todas las etiquetas <img> necesarias
                let imagenesHTML = '';
                arrayImagenes.forEach((imgSrc) => {
                    imagenesHTML += `<img src="${imgSrc}" alt="Portada de ${item.titulo}" class="timeline-poster" loading="lazy">`;
                });

                htmlInterno += `
                    <div class="poster-container">
                        <input type="checkbox" id="${checkId}" class="poster-toggle-check">
                        <label for="${checkId}" class="btn-ver-portada"><i class="${iconoBoton}"></i> ${textoBoton}</label>
                        <div class="poster-wrapper">
                            ${imagenesHTML}
                        </div>
                    </div>
                `;
            }

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

            // --- ESTA LÍNEA ES LA MAGIA QUE SOLUCIONA EL DESBORDE ---
            htmlInterno += '<div style="clear: both;"></div>';

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
    // ORDEN DE EJECUCIÓN (¡Fundamental!)
    // =================================================================
    renderizarTimeline(); // 1º: Dibuja todo el HTML desde el array
    inicializarFiltros(); // 2º: Lee las checkboxes y oculta/muestra lo recién dibujado

    // =================================================================
    // 6. SISTEMA DE PROGRESO (TRACKER EN CASCADA 2 NIVELES + BARRA)
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

        // Lógica de la Barra de Progreso
        const actualizarBarraProgreso = () => {
            const totalCheckboxes = document.querySelectorAll('.tracker-checkbox').length;
            if (totalCheckboxes === 0) return;

            const checkedCheckboxes = document.querySelectorAll('.tracker-checkbox:checked').length;
            const percentage = Math.round((checkedCheckboxes / totalCheckboxes) * 100);

            const progressFill = document.getElementById('progress-fill');
            const progressText = document.getElementById('progress-text');
            const progressMessage = document.getElementById('progress-message');

            if (progressFill && progressText && progressMessage) {
                progressFill.style.width = `${percentage}%`;
                progressText.textContent = `${percentage}%`;

                // Cambiar mensajes según el avance
                if (percentage === 0) {
                    progressMessage.textContent = "¡Comienza tu viaje por la galaxia!";
                } else if (percentage < 25) {
                    progressMessage.textContent = "Apenas eres un joven Padawan. ¡Sigue explorando!";
                } else if (percentage < 50) {
                    progressMessage.textContent = "La Fuerza es intensa en ti. ¡Ya casi llegas a la mitad!";
                } else if (percentage < 80) {
                    progressMessage.textContent = "Un verdadero Caballero Jedi. ¡El final se acerca!";
                } else if (percentage < 100) {
                    progressMessage.textContent = "Estás en el Consejo, pero no te otorgamos el rango de maestro. ¡Solo unos pasos más!";
                    
                    // Restauramos los colores si bajó del 100%
                    progressFill.style.background = "linear-gradient(90deg, #0288d1, #4fc3f7, #e1f5fe)";
                    progressFill.style.boxShadow = "0 0 10px #4fc3f7, 0 0 20px #4fc3f7";
                    progressText.style.color = "#4fc3f7";
                    progressText.style.textShadow = "0 0 10px rgba(79, 195, 247, 0.6)";
                } else {
                    progressMessage.textContent = "¡Felicidades, Gran Maestro! Has completado todo el canon.";
                    
                    // El sable de luz se vuelve verde (como el de Luke/Yoda) al llegar al 100%
                    progressFill.style.background = "linear-gradient(90deg, #2e7d32, #66bb6a, #c8e6c9)";
                    progressFill.style.boxShadow = "0 0 10px #66bb6a, 0 0 20px #66bb6a";
                    progressText.style.color = "#66bb6a";
                    progressText.style.textShadow = "0 0 10px rgba(102, 187, 106, 0.6)";
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
                actualizarBarraProgreso(); // Actualiza la barra en cada clic
            });
        });

        actualizarBarraProgreso(); // Calcula la barra al cargar la página por primera vez
    }
    // =================================================================
    // 7. CERRAR PORTADAS (TOOLTIPS) AL HACER CLIC AFUERA (Móviles)
    // =================================================================
    document.addEventListener('click', (e) => {
        const clicEnPortada = e.target.closest('.poster-container');
        
        // Si el clic fue AFUERA de cualquier portada, cerramos todas
        if (!clicEnPortada) {
            document.querySelectorAll('.poster-toggle-check').forEach(checkbox => {
                checkbox.checked = false;
            });
        } else {
            // Si el clic fue en un botón de portada, cerramos las demás para que solo quede una abierta
            if (e.target.closest('.btn-ver-portada')) {
                const checkboxActual = clicEnPortada.querySelector('.poster-toggle-check');
                document.querySelectorAll('.poster-toggle-check').forEach(checkbox => {
                    if (checkbox !== checkboxActual) {
                        checkbox.checked = false; // Desmarca las otras
                    }
                });
            }
        }
    });

    // =================================================================
    // 8. BOTÓN VOLVER ARRIBA
    // =================================================================
    const btnVolverArriba = document.getElementById('btn-volver-arriba');

    if (btnVolverArriba) {
        // Escuchar el evento de scroll en toda la ventana
        window.addEventListener('scroll', () => {
            // Si el usuario bajó más de 400 píxeles, mostramos el botón
            if (window.scrollY > 400) {
                btnVolverArriba.classList.add('visible');
            } else {
                btnVolverArriba.classList.remove('visible');
            }
        });

        // Al hacer clic, subir suavemente
        btnVolverArriba.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' /* Esto hace que el deslizamiento sea animado y no de golpe */
            });
        });
    }
    inicializarTracker();
});