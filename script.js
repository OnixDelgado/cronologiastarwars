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

document.addEventListener('DOMContentLoaded', function () {

    // =================================================================
    // 0. BARRA DE PROGRESO STICKY (COMPACTA Y ANCHA)
    // =================================================================
    const stickyProgressHTML = `
        <div id="sticky-progress" class="sticky-progress-container">
            <div class="sticky-progress-content">
                <span class="sticky-progress-title">Progreso del Canon:</span>
                <span id="sticky-progress-text" class="sticky-progress-percentage">0%</span>
            </div>
            <div class="sticky-progress-bg">
                <div class="sticky-progress-fill" id="sticky-progress-fill"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', stickyProgressHTML);

    const stickyProgress = document.getElementById('sticky-progress');

    const updateStickyPosition = () => {
        if (window.innerWidth > 768) {
            const filtros = document.querySelector('.filtros-container');
            if (filtros) {
                // Posiciona exactamente debajo de los filtros en PC
                const filtrosBottom = filtros.getBoundingClientRect().bottom;
                stickyProgress.style.top = Math.max(0, filtrosBottom) + 'px';
            } else {
                stickyProgress.style.top = '60px'; // Fallback
            }
        } else {
            // EN CELULAR: Se pega a 75px para quedar justo debajo de la nueva barra superior
            stickyProgress.style.top = '75px';
        }
    };

    window.addEventListener('scroll', () => {
        const originalProgress = document.querySelector('.progress-container');
        if (originalProgress && stickyProgress) {
            const rect = originalProgress.getBoundingClientRect();
            // Mostrar la barra sticky solo cuando el original esté fuera de la vista hacia arriba
            if (rect.bottom < 0) {
                stickyProgress.classList.add('visible');
                updateStickyPosition();
            } else {
                stickyProgress.classList.remove('visible');
            }
        }
    });

    window.addEventListener('resize', () => {
        if (stickyProgress.classList.contains('visible')) {
            updateStickyPosition();
        }
    });

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
                    const textoBoton = "Ver";
                    const iconoBoton = arrayImagenes.length > 1 ? "fas fa-images" : "fas fa-image";

                    let imagenesHTML = '';
                    arrayImagenes.forEach((imgSrc) => {
                        imagenesHTML += `<img src="${imgSrc}" alt="Portada descriptiva" class="timeline-poster">`;
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

            // Manejo de grupos desplegables (Acordeones)
            if (item.tipo === "grupo-desplegable") {
                const wrapper = document.createElement('div');
                wrapper.className = 'grupo-desplegable-container';
                if (item.categoria) wrapper.dataset.categories = item.categoria;

                let añoHTML = '';
                if (item.año) {
                    const esDBY = item.año.includes("DBY");
                    const claseColor = esDBY ? "badge-dby" : "badge-aby";
                    añoHTML = `<span class="badge-year ${claseColor}" style="margin-left: auto;">${item.año}</span>`;
                }

                let itemsHTML = '';
                item.items.forEach((subItem, subIndex) => {
                    let arrayImagenes = [];
                    if (subItem.imagenes) arrayImagenes = subItem.imagenes;
                    else if (subItem.imagen) arrayImagenes = [subItem.imagen];

                    let posterHTML = '';
                    if (arrayImagenes.length > 0) {
                        const checkId = `toggle-poster-grp-${itemIndex}-${subIndex}`;
                        const textoBoton = "Ver";
                        const iconoBoton = arrayImagenes.length > 1 ? "fas fa-images" : "fas fa-image";

                        let imagenesHTML = '';
                        arrayImagenes.forEach((imgSrc) => {
                            imagenesHTML += `<img src="${imgSrc}" alt="Portada descriptiva" class="timeline-poster" loading="lazy">`;
                        });

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

                    itemsHTML += `
                        <div class="desplegable-item" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; padding-top: 1rem; border-top: 1px solid rgba(255,255,255,0.05);">
                            <div class="era-description" style="margin-bottom: 0; flex-grow: 1; min-width: 0;">
                                ${subItem.texto}
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: flex-end; flex-shrink: 0; margin-left: 15px; position: relative;">
                                ${posterHTML}
                            </div>
                        </div>
                    `;
                });

                wrapper.innerHTML = `
                    <details class="timeline-details">
                        <summary class="timeline-summary">
                            <div class="summary-content" style="display: flex; align-items: center; flex-grow: 1; gap: 15px;">
                                <i class="fas fa-chevron-down summary-icon"></i>
                                <h3 style="margin: 0; font-size: 1.1rem; color: var(--live-action);">${item.titulo}</h3>
                            </div>
                            ${añoHTML}
                        </summary>
                        <div class="details-content" style="padding: 0 20px 5px 20px;">
                            ${itemsHTML}
                        </div>
                    </details>
                `;

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

            // 1. Unificamos si el usuario usa 'imagen' (una sola) o 'imagenes' (varias)
            let arrayImagenes = [];
            if (item.imagenes) {
                arrayImagenes = item.imagenes;
            } else if (item.imagen) {
                arrayImagenes = [item.imagen];
            }

            // 2. Generamos el HTML del poster-container (si hay imágenes)
            let posterHTML = '';
            if (arrayImagenes.length > 0) {
                const checkId = `toggle-poster-${itemIndex}`;
                const textoBoton = "Ver";
                const iconoBoton = arrayImagenes.length > 1 ? "fas fa-images" : "fas fa-image";

                let imagenesHTML = '';
                arrayImagenes.forEach((imgSrc) => {
                    imagenesHTML += `<img src="${imgSrc}" alt="Portada de ${item.titulo}" class="timeline-poster">`;
                });

                posterHTML = `
                    <div class="poster-container">
                        <input type="checkbox" id="${checkId}" class="poster-toggle-check">
                        <label for="${checkId}" class="btn-ver-portada"><i class="${iconoBoton}"></i> ${textoBoton}</label>
                        <div class="poster-wrapper">
                            ${imagenesHTML}
                        </div>
                    </div>
                `;
            }

            // 3. tracking-header: checkbox | título | badge-año
            //    poster-container va al FINAL del article (mobile: botón al pie, PC: grid lo ubica a la derecha)
            let htmlInterno = `
                <div class="tracking-header">
                    <input type="checkbox" class="tracker-checkbox main-tracker" id="${mainId}">
                    <label for="${mainId}" class="tracker-label"><h3>${item.titulo}</h3></label>
                    ${spanAño}
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

            // poster-container al final → en mobile queda al pie de la caja
            // En PC el CSS grid (grid-row: 1/100) lo ubica a la derecha de todo el contenido
            htmlInterno += posterHTML;
            htmlInterno += '<div style="clear: both;"></div>';

            article.innerHTML = htmlInterno;
            seccion.appendChild(article);
        });
    }

    // =================================================================
    // 2. SISTEMA DE SIDEBAR (MENÚ, PERFIL Y ACTUALIZACIONES)
    // =================================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');

    // Creamos un fondo oscuro (overlay) dinámicamente
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);

    let toggleMenu;
    if (menuToggle && sidebar) {
        toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');

            // Cambiar el ícono (Hamburguesa a "X")
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        };

        menuToggle.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu); // Cerrar al tocar fondo
    }

    // Cerrar menú al tocar un enlace (PC y Celular)
    document.querySelectorAll('.sidebar-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            if (typeof toggleMenu === 'function') toggleMenu();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- LÓGICA DE PERFILES MÚLTIPLES (LOCALSTORAGE) ---
    const profileUpload = document.getElementById('profile-upload');
    const profileImg = document.getElementById('profile-img');
    const profileName = document.getElementById('profile-name');
    const profileSelector = document.getElementById('profile-selector');
    const btnAddProfile = document.getElementById('btn-add-profile');
    const btnDeleteProfile = document.getElementById('btn-delete-profile');

    const DEFAULT_IMG = 'assets/img/profile-placeholder.jpg'; // ← Cambiá el nombre si usás otra imagen

    // Cargar o inicializar perfiles
    let profiles = JSON.parse(localStorage.getItem('swProfiles')) || [{ id: 'p1', name: 'Tu Nombre', img: null }];
    window.activeProfileId = localStorage.getItem('swActiveProfile') || 'p1';

    function saveProfilesData() {
        localStorage.setItem('swProfiles', JSON.stringify(profiles));
        localStorage.setItem('swActiveProfile', window.activeProfileId);
    }

    function getActiveProfile() {
        return profiles.find(p => p.id === window.activeProfileId) || profiles[0];
    }

    function renderProfileSelector() {
        if (!profileSelector) return;
        profileSelector.innerHTML = '';
        profiles.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = p.name;
            if (p.id === window.activeProfileId) opt.selected = true;
            profileSelector.appendChild(opt);
        });
    }

    window.cargarInterfazPerfil = () => {
        const p = getActiveProfile();
        if (profileName) profileName.textContent = p.name;
        if (profileImg) profileImg.src = p.img || DEFAULT_IMG;
        renderProfileSelector();
    };

    if (profileImg && profileName) {
        window.cargarInterfazPerfil();

        // Guardar Imagen
        if (profileUpload) {
            profileUpload.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (evento) => {
                        const base64Img = evento.target.result;
                        profileImg.src = base64Img;
                        const p = getActiveProfile();
                        p.img = base64Img;
                        saveProfilesData();
                    };
                    reader.readAsDataURL(file);
                }
            });
        }

        // Guardar Nombre y no permitir que quede vacío
        profileName.addEventListener('blur', () => {
            let newName = profileName.textContent.trim();
            if (newName === '') {
                newName = 'Tu Nombre';
                profileName.textContent = newName;
                if (typeof showToast === 'function') showToast('Debes agregar tu nombre', false);
            }
            const p = getActiveProfile();
            p.name = newName;
            saveProfilesData();
            renderProfileSelector();
        });

        profileName.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                profileName.blur();
            }
        });

        // Evento para el botón del lápiz
        const btnEditName = document.getElementById('btn-edit-name');
        if (btnEditName) {
            btnEditName.addEventListener('click', () => {
                profileName.focus();

                // Poner el cursor al final del texto para mayor comodidad
                if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
                    const range = document.createRange();
                    range.selectNodeContents(profileName);
                    range.collapse(false);
                    const sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            });
        }
    }

    // Cambiar de perfil (Selector)
    if (profileSelector) {
        profileSelector.addEventListener('change', (e) => {
            window.activeProfileId = e.target.value;
            saveProfilesData();
            window.cargarInterfazPerfil();
            if (typeof window.cargarProgresoPerfil === 'function') window.cargarProgresoPerfil();
            if (typeof showToast === 'function') showToast('Perfil cambiado a: ' + getActiveProfile().name);
        });
    }

    // Agregar nuevo perfil (+)
    if (btnAddProfile) {
        btnAddProfile.addEventListener('click', () => {
            const newId = 'p' + Date.now();
            profiles.push({ id: newId, name: 'Agregar Nombre', img: null });
            window.activeProfileId = newId;
            saveProfilesData();
            window.cargarInterfazPerfil();
            if (typeof window.cargarProgresoPerfil === 'function') window.cargarProgresoPerfil();
            if (typeof showToast === 'function') showToast('Nuevo perfil creado');
        });
    }

    // Borrar perfil (-)
    if (btnDeleteProfile) {
        btnDeleteProfile.addEventListener('click', () => {
            if (profiles.length === 1) {
                if (typeof showToast === 'function') showToast('No puedes borrar tu único perfil', false);
                return;
            }
            if (confirm('¿Estás seguro de borrar este perfil y perder todo tu progreso?')) {
                profiles = profiles.filter(p => p.id !== window.activeProfileId);
                localStorage.removeItem('starWarsProgress_' + window.activeProfileId);
                window.activeProfileId = profiles[0].id;
                saveProfilesData();
                window.cargarInterfazPerfil();
                if (typeof window.cargarProgresoPerfil === 'function') window.cargarProgresoPerfil();
                if (typeof showToast === 'function') showToast('Perfil eliminado');
            }
        });
    }

    // =================================================================
    // LÓGICA DE ACTUALIZACIONES (PWA) Y NOTAS DEL PARCHE
    // =================================================================

    // 1. CONFIGURACIÓN MANUAL (Dds cambiar esto en cada actualización)
    const APP_VERSION = "v1.0.0";

    const APP_CHANGELOG_CONTENT = [
        "Se agregó el juego 'Star Wars: Zero Company' en la era de la República (20 ABY)."
    ];

    // Agregá aquí los arreglos, mejoras o cambios de la app en sí
    // (dejá el array vacío [] si no hubo mejoras en este update)
    const APP_CHANGELOG_MEJORAS = [
        "Agregado de multiples perfiles"
    ];

    // 2. Insertar los datos de versión en el HTML al cargar la página
    const verDisplay = document.getElementById('app-version-display');
    const modalVerDisplay = document.getElementById('modal-version');
    if (verDisplay) verDisplay.textContent = APP_VERSION;
    if (modalVerDisplay) modalVerDisplay.textContent = APP_VERSION;

    // 3. Llenar las dos secciones del Modal con las novedades
    const listContent = document.getElementById('changelog-list-content');
    const listMejoras = document.getElementById('changelog-list-mejoras');
    const sectionContent = document.getElementById('changelog-section-content');
    const sectionMejoras = document.getElementById('changelog-section-mejoras');

    // Contenido: si no hay nada, ocultamos la sección entera
    if (listContent) {
        if (APP_CHANGELOG_CONTENT.length === 0) {
            if (sectionContent) sectionContent.style.display = 'none';
        } else {
            APP_CHANGELOG_CONTENT.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                listContent.appendChild(li);
            });
        }
    }

    // Mejoras: si no hay nada, ocultamos la sección entera
    if (listMejoras) {
        if (APP_CHANGELOG_MEJORAS.length === 0) {
            if (sectionMejoras) sectionMejoras.style.display = 'none';
        } else {
            APP_CHANGELOG_MEJORAS.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = item;
                listMejoras.appendChild(li);
            });
        }
    }

    // 4. Lógica de Apertura y Cierre del Modal
    const btnChangelog = document.getElementById('btn-changelog');
    const modalChangelog = document.getElementById('changelog-modal');
    const btnCloseModal = document.getElementById('close-changelog');

    if (btnChangelog && modalChangelog && btnCloseModal) {
        // Al tocar el botón "?" se abre en cualquier momento
        btnChangelog.addEventListener('click', () => {
            modalChangelog.classList.add('active');
        });

        btnCloseModal.addEventListener('click', () => {
            modalChangelog.classList.remove('active');
        });

        // Permitir cerrar el modal tocando fuera de la caja oscura
        modalChangelog.addEventListener('click', (e) => {
            if (e.target === modalChangelog) {
                modalChangelog.classList.remove('active');
            }
        });

        // 🔥 NUEVO: Auto-abrir el cuadro si la app se acaba de actualizar
        if (localStorage.getItem('appJustUpdated') === 'true') {
            localStorage.removeItem('appJustUpdated'); // Lo borramos para que no salga siempre
            setTimeout(() => {
                modalChangelog.classList.add('active');
            }, 800); // Un pequeño retraso elegante tras cargar la página
        }
    }

    // 5. Botón de actualización (eliminado del sidebar, pero el toast sigue disponible)
    const toast = document.getElementById('toast-notification');

    function showToast(msg, isSuccess = true) {
        if (!toast) return;
        toast.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-info-circle'}" style="color: ${isSuccess ? '#55ff55' : '#4fc3f7'};"></i> ${msg}`;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
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

        // Actualizar la barra de progreso si la función está disponible
        if (typeof window.actualizarBarraProgreso === 'function') {
            window.actualizarBarraProgreso();
        }
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
    // 6. SISTEMA DE PROGRESO (TRACKER Y MULTI-PERFILES)
    // =================================================================
    function inicializarTracker() {
        const checkboxes = document.querySelectorAll('.tracker-checkbox');

        window.actualizarVisual = (chk) => {
            const label = document.querySelector(`label[for="${chk.id}"]`);
            if (label) {
                if (chk.checked) label.classList.add('completado');
                else label.classList.remove('completado');
            }
        };

        // Lógica de la Barra de Progreso (Mantenemos tu versión con la barra Sticky)
        window.actualizarBarraProgreso = () => {
            const visibleCheckboxes = Array.from(document.querySelectorAll('.tracker-checkbox')).filter(chk => {
                const item = chk.closest('.timeline-item');
                return item && !item.classList.contains('filtered-out');
            });

            const totalCheckboxes = visibleCheckboxes.length;

            const progressFill = document.getElementById('progress-fill');
            const progressText = document.getElementById('progress-text');
            const progressMessage = document.getElementById('progress-message');

            // Elementos de la barra sticky
            const stickyFill = document.getElementById('sticky-progress-fill');
            const stickyText = document.getElementById('sticky-progress-text');

            if (totalCheckboxes === 0) {
                if (progressFill && progressText && progressMessage) {
                    progressFill.style.width = `0%`;
                    progressText.textContent = `0%`;
                    progressMessage.textContent = "Ajusta los filtros para ver el contenido.";
                }
                if (stickyFill && stickyText) {
                    stickyFill.style.width = `0%`;
                    stickyText.textContent = `0%`;
                }
                return;
            }

            const checkedCheckboxes = visibleCheckboxes.filter(chk => chk.checked).length;
            const percentage = Math.round((checkedCheckboxes / totalCheckboxes) * 100);

            if (progressFill && progressText && progressMessage) {
                progressFill.style.width = `${percentage}%`;
                progressText.textContent = `${percentage}%`;

                if (stickyFill && stickyText) {
                    stickyFill.style.width = `${percentage}%`;
                    stickyText.textContent = `${percentage}%`;
                }

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

                    progressFill.style.background = "linear-gradient(90deg, #0288d1, #4fc3f7, #e1f5fe)";
                    progressFill.style.boxShadow = "0 0 10px #4fc3f7, 0 0 20px #4fc3f7";
                    progressText.style.color = "#4fc3f7";
                    progressText.style.textShadow = "0 0 10px rgba(79, 195, 247, 0.6)";

                    if (stickyFill && stickyText) {
                        stickyFill.style.background = "linear-gradient(90deg, #0288d1, #4fc3f7, #e1f5fe)";
                        stickyFill.style.boxShadow = "0 0 10px #4fc3f7";
                        stickyText.style.color = "#4fc3f7";
                        stickyText.style.textShadow = "0 0 5px rgba(79, 195, 247, 0.5)";
                    }
                } else {
                    progressMessage.textContent = "¡Felicidades, Gran Maestro! Has completado todo el canon.";

                    progressFill.style.background = "linear-gradient(90deg, #2e7d32, #66bb6a, #c8e6c9)";
                    progressFill.style.boxShadow = "0 0 10px #66bb6a, 0 0 20px #66bb6a";
                    progressText.style.color = "#66bb6a";
                    progressText.style.textShadow = "0 0 10px rgba(102, 187, 106, 0.6)";

                    if (stickyFill && stickyText) {
                        stickyFill.style.background = "linear-gradient(90deg, #2e7d32, #66bb6a, #c8e6c9)";
                        stickyFill.style.boxShadow = "0 0 10px #66bb6a";
                        stickyText.style.color = "#66bb6a";
                        stickyText.style.textShadow = "0 0 5px rgba(102, 187, 106, 0.5)";
                    }
                }
            }
        };

        // Función que limpia todo y carga el progreso del perfil seleccionado
        window.cargarProgresoPerfil = () => {
            const currentProfileKey = 'starWarsProgress_' + window.activeProfileId;
            let savedProgress = JSON.parse(localStorage.getItem(currentProfileKey));

            // Migración: Si tenías progreso de antes, se lo regala al Perfil 1
            if (!savedProgress && window.activeProfileId === 'p1') {
                const oldProgress = JSON.parse(localStorage.getItem('starWarsProgress'));
                if (oldProgress) {
                    savedProgress = oldProgress;
                    localStorage.setItem(currentProfileKey, JSON.stringify(oldProgress));
                } else savedProgress = {};
            } else if (!savedProgress) {
                savedProgress = {};
            }

            // Desmarcamos todo visualmente
            checkboxes.forEach(chk => {
                chk.checked = false;
                window.actualizarVisual(chk);
            });

            // Marcamos lo que este perfil ya vio
            checkboxes.forEach(chk => {
                if (savedProgress[chk.id]) {
                    chk.checked = true;
                    window.actualizarVisual(chk);
                }
            });

            window.actualizarBarraProgreso();
        };

        // Escuchar los clicks en los checkboxes
        checkboxes.forEach(chk => {
            chk.addEventListener('change', (e) => {
                const currentProfileKey = 'starWarsProgress_' + window.activeProfileId;
                let savedProgress = JSON.parse(localStorage.getItem(currentProfileKey)) || {};
                const checked = e.target.checked;
                savedProgress[e.target.id] = checked;

                // Si toco el padre, marco los hijos
                if (e.target.classList.contains('main-tracker')) {
                    const parentId = e.target.id;
                    const childCheckboxes = document.querySelectorAll(`input[data-parent="${parentId}"]`);
                    childCheckboxes.forEach(child => {
                        child.checked = checked;
                        savedProgress[child.id] = checked;
                        window.actualizarVisual(child);
                    });
                }
                // Si toco el hijo, reviso el padre
                else if (e.target.classList.contains('sub-tracker')) {
                    const parentId = e.target.dataset.parent;
                    const parentCheckbox = document.getElementById(parentId);
                    const siblings = Array.from(document.querySelectorAll(`input[data-parent="${parentId}"]`));
                    if (parentCheckbox) {
                        const allChecked = siblings.every(sib => sib.checked);
                        parentCheckbox.checked = allChecked;
                        savedProgress[parentCheckbox.id] = allChecked;
                        window.actualizarVisual(parentCheckbox);
                    }
                }

                localStorage.setItem(currentProfileKey, JSON.stringify(savedProgress));
                window.actualizarVisual(e.target);
                window.actualizarBarraProgreso();
            });
        });

        // Carga la visual al iniciar la app
        window.cargarProgresoPerfil();
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

    // =================================================================
    // 9. RECORDAR POSICIÓN DE SCROLL
    // =================================================================
    // Restaurar la posición de scroll después de renderizar todo
    setTimeout(() => {
        const savedScrollPosition = localStorage.getItem('starWarsScrollPos');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition, 10));
        }
    }, 100); // Pequeño retardo para asegurar que el DOM esté completamente pintado

    // Guardar la posición de scroll antes de que el usuario se vaya o recargue
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('starWarsScrollPos', window.scrollY);
    });

    // También guardar la posición al hacer scroll, pero con un pequeño retraso (debounce)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            localStorage.setItem('starWarsScrollPos', window.scrollY);
        }, 500);
    });
});

// =================================================================
// 12. PWA & SERVICE WORKER
// =================================================================
let deferredPrompt;
const installContainer = document.getElementById('install-pwa-container');
const installButton = document.getElementById('btn-install-pwa');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir que el mini-infobar aparezca automáticamente en móviles
    e.preventDefault();
    // Guardar el evento para dispararlo luego cuando el usuario haga clic
    deferredPrompt = e;

    // Mostrar el contenedor del botón de instalación
    if (installContainer) {
        installContainer.style.display = 'flex';
    }
});

if (installButton) {
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            // Mostrar el prompt nativo de instalación
            deferredPrompt.prompt();
            // Esperar a que el usuario responda
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('El usuario aceptó instalar la PWA');
                if (installContainer) {
                    installContainer.style.display = 'none'; // Ocultar el botón si ya aceptó
                }
            } else {
                console.log('El usuario rechazó la instalación de la PWA');
            }
            // El prompt solo puede usarse una vez, lo limpiamos
            deferredPrompt = null;
        }
    });
}

// Si la app ya fue instalada previamente o el usuario la instala desde el menú del navegador
window.addEventListener('appinstalled', () => {
    if (installContainer) {
        installContainer.style.display = 'none';
    }
    deferredPrompt = null;
    console.log('PWA instalada exitosamente');
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}