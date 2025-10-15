// ========== Menu Toggle ==========
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const iconSidebar = document.getElementById('iconSidebar');

// Open menu
menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Close menu
menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeAllSubmenus();
});

// Close menu when clicking outside
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        closeAllSubmenus();
    }
});

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        closeAllSubmenus();
    }
});

// ========== Dropdown Menu Functionality ==========
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const submenu = this.parentElement.querySelector('.submenu');
        const isActive = this.classList.contains('active');
        
        // Cerrar otros submenús del mismo nivel
        const parentMenu = this.closest('.menu-nav');
        if (parentMenu) {
            parentMenu.querySelectorAll('.dropdown-toggle').forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.classList.remove('active');
                    const otherSubmenu = otherToggle.parentElement.querySelector('.submenu');
                    if (otherSubmenu) {
                        otherSubmenu.classList.remove('active');
                    }
                }
            });
        }
        
        // Toggle el submenu actual
        if (isActive) {
            this.classList.remove('active');
            submenu.classList.remove('active');
        } else {
            this.classList.add('active');
            submenu.classList.add('active');
        }
    });
});

// ========== Nested Submenu (Eventos Académicos) ==========
const submenuToggles = document.querySelectorAll('.submenu-item-toggle');

submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const submenuLevel2 = this.parentElement.querySelector('.submenu-level-2');
        const isActive = this.classList.contains('active');
        
        if (isActive) {
            this.classList.remove('active');
            submenuLevel2.classList.remove('active');
        } else {
            this.classList.add('active');
            submenuLevel2.classList.add('active');
        }
    });
});

// Cerrar menú al hacer click en un enlace
const menuLinks = document.querySelectorAll('.menu-nav a, .submenu a, .submenu-level-2 a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        closeAllSubmenus();
    });
});

// Función para cerrar todos los submenús
function closeAllSubmenus() {
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
    document.querySelectorAll('.submenu').forEach(submenu => {
        submenu.classList.remove('active');
    });
    document.querySelectorAll('.submenu-item-toggle').forEach(toggle => {
        toggle.classList.remove('active');
    });
    document.querySelectorAll('.submenu-level-2').forEach(submenu => {
        submenu.classList.remove('active');
    });
}

// ----------------------------------------------------------------------
// ========== Sidebar Active State (CORREGIDO PARA REDIRECCIÓN) ==========
// ----------------------------------------------------------------------

// Si tus íconos en el HTML son etiquetas <a> y tienen una ruta (ej. href="mision.html"), 
// el navegador se encargará de la redirección.
const sidebarIcons = document.querySelectorAll('.sidebar-icon-item');

sidebarIcons.forEach(icon => {
    icon.addEventListener('click', function(e) {
        
        // 🚨 ELIMINAMOS e.preventDefault(); para permitir la navegación por defecto del enlace.
        
        // Remove active from all
        sidebarIcons.forEach(i => i.classList.remove('active'));
        
        // Add active to clicked
        this.classList.add('active');
        
        // Opcional: Si quieres asegurar la redirección con JS:
        const target = this.getAttribute('href');
        if (target && target !== '#') {
            window.location.href = target;
        }
        
        // Si el ícono es un <a>, con la eliminación de e.preventDefault() ya debería funcionar.
    });
});

// ----------------------------------------------------------------------
// 🚨 NOTA: Se ha eliminado la función 'updateActiveSection' y el listener de 'scroll' 
// asociado, ya que estaban diseñados para un 'smooth scroll' a secciones internas 
// de una misma página, lo cual entra en conflicto con tu necesidad de redireccionar 
// a archivos HTML externos.
// ----------------------------------------------------------------------


// ========== AOS Animation Observer ==========
const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });
    
    elements.forEach(element => observer.observe(element));
};

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// ========== Counter Animation for Numbers ==========
const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// ========== Parallax Effect on Hero ==========
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        hero.style.backgroundPositionY = `${parallax}px`;
    }
});

// ========== Mobile Sidebar Toggle ==========
if (window.innerWidth <= 480) {
    // Nota: El 'click' de menuToggle ahora ya no solo abre el menú, sino que
    // también abre el sidebar, dependiendo de tu diseño CSS.
    menuToggle.addEventListener('click', () => {
        iconSidebar.classList.toggle('mobile-open');
    });
}

// ========== Smooth Reveal on Load ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== Card Hover Sound Effect (Optional) ==========
const cards = document.querySelectorAll('.feature-card, .volunteer-card, .news-card, .project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
});

console.log('✨ DRSU - Responsabilidad Social Universitaria ✨');
console.log('💙 Sistema cargado correctamente');

// ========== News Card and Diagram Animation (AOS alternative/addition) ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); // Dejar de observar una vez que anima
        }
    });
}, observerOptions);

// Animate news cards
document.querySelectorAll('.news-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ${index * 0.1}s, transform 0.6s ${index * 0.1}s`;
    observer.observe(card);
});

// Animate diagram
const diagram = document.querySelector('.rsu-diagram');
if (diagram) {
    diagram.style.opacity = '0';
    diagram.style.transform = 'scale(0.95)';
    diagram.style.transition = 'opacity 0.8s, transform 0.8s';
    observer.observe(diagram);
}

// Videos.js - Interactividad para la sección de Videos

document.addEventListener('DOMContentLoaded', function() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const videoMeta = document.querySelector('.video-meta');

    // Función para cambiar el video
    function changeVideo(item) {
        // Remover clase active de todos los items
        playlistItems.forEach(i => i.classList.remove('active'));
        
        // Agregar clase active al item seleccionado
        item.classList.add('active');
        
        // Obtener datos del video
        const videoUrl = item.getAttribute('data-video-url');
        const title = item.getAttribute('data-title');
        const description = item.getAttribute('data-description');
        const views = item.getAttribute('data-views');
        const date = item.getAttribute('data-date');
        
        // Actualizar el iframe
        mainVideo.src = videoUrl;
        
        // Actualizar información del video
        videoTitle.textContent = title;
        videoDescription.textContent = description;
        
        // Actualizar metadata
        videoMeta.innerHTML = `
            <span><i class="fas fa-eye"></i> ${views} vistas</span>
            <span><i class="fas fa-calendar"></i> ${date}</span>
        `;
        
        // Scroll suave al video player
        document.querySelector('.video-player').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    }

    // Event listener para cada item de la playlist
    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            changeVideo(this);
        });
        
        // Efecto hover mejorado
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(7, 26, 64, 0.03)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = '';
            }
        });
    });

    // Observador para animaciones al scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos
    document.querySelectorAll('.video-player-wrapper, .video-playlist').forEach(element => {
        observer.observe(element);
    });

    // Animación de conteo de vistas (opcional)
    function animateNumber(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 20);
    }
});

// Presentaciones.js - Interactividad para la sección de Presentaciones

document.addEventListener('DOMContentLoaded', function() {
    const previewButtons = document.querySelectorAll('.btn-preview');
    const downloadButtons = document.querySelectorAll('.btn-download');
    const presentationCards = document.querySelectorAll('.presentation-card');

    // Función para vista previa
    previewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.presentation-card');
            const title = card.querySelector('h3').textContent;
            
            // Aquí puedes agregar lógica para abrir un modal o visor de PDF
            console.log('Vista previa de:', title);
            
            // Efecto visual
            this.innerHTML = '<i class="fas fa-check"></i> Abriendo...';
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-eye"></i> Vista previa';
            }, 1500);
        });
    });

    // Función para descargar
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.presentation-card');
            const title = card.querySelector('h3').textContent;
            const downloads = card.querySelector('.presentation-meta span:nth-child(2)');
            
            // Agregar clase de descarga
            this.classList.add('downloading');
            this.innerHTML = '<i class="fas fa-spinner"></i> Descargando...';
            
            // Simular descarga
            setTimeout(() => {
                this.classList.remove('downloading');
                this.innerHTML = '<i class="fas fa-check"></i> Descargado';
                
                // Incrementar contador de descargas
                if (downloads) {
                    const currentDownloads = parseInt(downloads.textContent.match(/[\d,]+/)[0].replace(',', ''));
                    downloads.innerHTML = `<i class="fas fa-download"></i> ${(currentDownloads + 1).toLocaleString()} descargas`;
                }
                
                // Restaurar botón
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-download"></i> Descargar';
                }, 2000);
            }, 1500);
            
            console.log('Descargando:', title);
        });
    });

    // Animación al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    presentationCards.forEach(card => {
        observer.observe(card);
    });

    // Efecto hover para tags
    const tags = document.querySelectorAll('.tag-pill');
    tags.forEach(tag => {
        tag.addEventListener('click', function(e) {
            e.preventDefault();
            const tagText = this.textContent;
            console.log('Filtrar por tag:', tagText);
            // Aquí puedes agregar lógica de filtrado
        });
    });

    // Animación de icono al pasar el mouse
    const presentationIcons = document.querySelectorAll('.presentation-icon');
    presentationIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(-10deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Efecto de contador de descargas (animación)
    function animateCounter(element) {
        const target = parseInt(element.textContent.match(/[\d,]+/)[0].replace(',', ''));
        let current = 0;
        const increment = Math.ceil(target / 50);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = element.textContent.replace(/[\d,]+/, target.toLocaleString());
                clearInterval(timer);
            } else {
                element.textContent = element.textContent.replace(/[\d,]+/, current.toLocaleString());
            }
        }, 20);
    }
});



// ========================================================
// ========== NOTICIAS SYSTEM - COMPLETE ==========
// ========================================================

const noticiasData = [
    {
        id: 1,
        title: "DRSU y Defensa Civil organizan Seminario 'Gestión reactiva del riesgo de desastres'",
        excerpt: "Importante seminario que reúne a expertos en gestión de riesgos y defensa civil para capacitar a la comunidad universitaria en protocolos de emergencia.",
        date: "04 Oct 2025",
        day: "04",
        month: "OCT",
        views: "1,245",
        image: "/images/noticias1.jpg",
        content: `
            <p>La Dirección de Responsabilidad Social Universitaria (DRSU) junto a Defensa Civil llevaron a cabo el seminario "Gestión Reactiva del Riesgo de Desastres", evento que congregó a estudiantes, docentes y personal administrativo de la Universidad Nacional de Piura.</p>
            
            <p>Durante la jornada, expertos en gestión de emergencias compartieron conocimientos fundamentales sobre protocolos de actuación ante situaciones de riesgo, enfatizando la importancia de la preparación y la respuesta coordinada.</p>
            
            <h2>Objetivos del Seminario</h2>
            
            <p>El evento tuvo como principales objetivos fortalecer las capacidades de respuesta de la comunidad universitaria y establecer lineamientos claros de actuación en caso de emergencias.</p>
            
            <ul>
                <li>Fortalecer las capacidades de la comunidad universitaria en gestión de riesgos</li>
                <li>Promover la cultura de prevención y preparación ante desastres</li>
                <li>Establecer protocolos de acción en situaciones de emergencia</li>
                <li>Crear redes de apoyo interinstitucional</li>
            </ul>
            
            <blockquote>
                "La preparación es la clave para minimizar el impacto de los desastres naturales en nuestra comunidad universitaria" - Dra. Sara Chunga Palomino
            </blockquote>
            
            <p>Los participantes destacaron la importancia de este tipo de capacitaciones para estar preparados ante cualquier eventualidad y proteger a la comunidad universitaria.</p>
        `,
        gallery: [
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias1.jpg",
            "/images/noticias2.jpg",
            "/images/noticias3.jpg"
        ]
    },
    {
        id: 2,
        title: "DRSU y Gore unirán esfuerzos por el agua potable en zonas rurales",
        excerpt: "Alianza estratégica para llevar agua potable a comunidades rurales de la región Piura, beneficiando a miles de familias.",
        date: "03 Oct 2025",
        day: "03",
        month: "OCT",
        views: "987",
        image: "/images/noticias2.jpg",
        content: `
            <p>La DRSU de la Universidad Nacional de Piura firmó un importante convenio con el Gobierno Regional para desarrollar proyectos de acceso al agua potable en zonas rurales de la región.</p>
            
            <p>Esta iniciativa busca garantizar el derecho fundamental al agua de comunidades que históricamente han carecido de este servicio básico, mejorando significativamente su calidad de vida.</p>
            
            <h2>Impacto en la Comunidad</h2>
            
            <p>Se estima que más de 5,000 familias serán beneficiadas directamente con la implementación de sistemas de agua potable sostenibles y de bajo costo.</p>
            
            <p>El proyecto incluye capacitación a las comunidades en mantenimiento de sistemas de agua y gestión sostenible del recurso hídrico.</p>
        `,
        gallery: [
            "/images/noticias2.jpg",
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias1.jpg"
        ]
    },
    {
        id: 3,
        title: "DRSU UNP camina contra la Trata de Personas",
        excerpt: "Caminata de concientización que reunió a cientos de estudiantes y docentes en contra de la trata de personas y la explotación.",
        date: "26 Sep 2025",
        day: "26",
        month: "SEP",
        views: "1,532",
        image: "/images/noticias3.jpg",
        content: `
            <p>La comunidad universitaria de la UNP se movilizó en una masiva caminata de concientización contra la trata de personas, encabezada por la DRSU y organizaciones de derechos humanos.</p>
            
            <h2>Compromiso Social</h2>
            
            <p>El evento contó con charlas informativas sobre prevención, identificación de situaciones de riesgo y rutas de denuncia para combatir este flagelo social.</p>
            
            <p>Se distribuyeron más de 2,000 folletos informativos y se realizaron activaciones en redes sociales para amplificar el mensaje de prevención.</p>
        `,
        gallery: [
            "/images/noticias3.jpg",
            "/images/noticias1.jpg",
            "/images/Feria_02-scaled.jpeg"
        ]
    },
    {
        id: 4,
        title: "Ciclo de Conferencias RSU: Proyectos que transforman la sociedad",
        excerpt: "Destacados ponentes nacionales e internacionales compartieron experiencias exitosas de responsabilidad social universitaria.",
        date: "22 Sep 2025",
        day: "22",
        month: "SEP",
        views: "2,103",
        image: "/images/Feria_02-scaled.jpeg",
        content: `
            <p>El Ciclo de Conferencias RSU reunió a expertos de diversas universidades latinoamericanas para compartir proyectos innovadores que están generando impacto social positivo.</p>
            
            <p>Las presentaciones abarcaron temas de sostenibilidad ambiental, inclusión social, desarrollo comunitario y emprendimiento social.</p>
            
            <h2>Proyectos Destacados</h2>
            
            <ol>
                <li>Proyecto de agua potable en comunidades rurales</li>
                <li>Programa de alfabetización digital para adultos mayores</li>
                <li>Iniciativa de huertos urbanos sostenibles</li>
                <li>Red de apoyo psicológico comunitario</li>
            </ol>
        `,
        gallery: [
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias2.jpg",
            "/images/noticias3.jpg"
        ]
    },
    {
        id: 5,
        title: "Formación integral para voluntarios: ¡lengua de señas, seguridad y más!",
        excerpt: "Programa de capacitación integral que prepara a voluntarios en múltiples áreas de servicio comunitario.",
        date: "18 Sep 2025",
        day: "18",
        month: "SEP",
        views: "1,876",
        image: "/images/noticias1.jpg",
        content: `
            <p>La DRSU lanzó un ambicioso programa de capacitación para voluntarios que incluye formación en lengua de señas, primeros auxilios, seguridad y atención a poblaciones vulnerables.</p>
            
            <p>Más de 150 estudiantes se inscribieron en los talleres, demostrando el compromiso de la juventud universitaria con el servicio a la comunidad.</p>
            
            <h2>Áreas de Capacitación</h2>
            
            <p>Los voluntarios reciben certificación en diversas áreas que les permiten brindar un servicio de calidad y profesional a quienes más lo necesitan.</p>
        `,
        gallery: [
            "/images/noticias1.jpg",
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias2.jpg"
        ]
    },
    {
        id: 6,
        title: "¡Proyectos, alegría y compromiso en la Feria RSU!",
        excerpt: "La Feria de Responsabilidad Social Universitaria mostró los mejores proyectos estudiantiles de impacto social.",
        date: "15 Sep 2025",
        day: "15",
        month: "SEP",
        views: "2,456",
        image: "/images/noticias2.jpg",
        content: `
            <p>La Feria RSU se consolidó como el espacio principal para visibilizar los proyectos sociales desarrollados por estudiantes de todas las facultades.</p>
            
            <p>Durante dos días, el campus universitario se llenó de stands, presentaciones y actividades interactivas que mostraron el talento y compromiso social de los futuros profesionales.</p>
            
            <h2>Proyectos Presentados</h2>
            
            <p>Más de 40 proyectos fueron presentados, abarcando temáticas de educación, salud, medio ambiente, tecnología social y desarrollo comunitario.</p>
        `,
        gallery: [
            "/images/noticias2.jpg",
            "/images/noticias3.jpg",
            "/images/Feria_02-scaled.jpeg"
        ]
    },
    {
        id: 7,
        title: "¡Así se vivió nuestro II Encuentro RSU!",
        excerpt: "Segundo encuentro regional de responsabilidad social universitaria que reunió a 15 instituciones de educación superior.",
        date: "10 Sep 2025",
        day: "10",
        month: "SEP",
        views: "1,654",
        image: "/images/noticias3.jpg",
        content: `
            <p>El II Encuentro RSU fue un espacio de diálogo, aprendizaje y construcción de redes entre universidades comprometidas con la responsabilidad social.</p>
            
            <p>Delegaciones de universidades del norte del Perú compartieron experiencias, desafíos y buenas prácticas en la gestión de programas de RSU.</p>
        `,
        gallery: [
            "/images/noticias3.jpg",
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias1.jpg"
        ]
    },
    {
        id: 8,
        title: "Directora DRSU participó del 'II Encuentro Regional de Municipios y Comunidades Saludables'",
        excerpt: "Participación destacada en evento regional sobre promoción de entornos saludables y prevención de enfermedades.",
        date: "05 Sep 2025",
        day: "05",
        month: "SEP",
        views: "1,321",
        image: "/images/Feria_02-scaled.jpeg",
        content: `
            <p>La directora de la DRSU representó a la universidad en el encuentro regional que abordó estrategias para promover estilos de vida saludables en comunidades urbanas y rurales.</p>
            
            <p>El evento contó con la participación de autoridades municipales, organizaciones de salud y representantes de la sociedad civil.</p>
        `,
        gallery: [
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias1.jpg",
            "/images/noticias2.jpg"
        ]
    },
    {
        id: 9,
        title: "DRSU anuncia 'Semana RSU' en conferencia de prensa",
        excerpt: "Lanzamiento oficial de la Semana de la Responsabilidad Social Universitaria con actividades para toda la comunidad.",
        date: "01 Sep 2025",
        day: "01",
        month: "SEP",
        views: "1,987",
        image: "/images/noticias1.jpg",
        content: `
            <p>En conferencia de prensa, la DRSU presentó la programación completa de la Semana RSU, que incluirá conferencias, talleres, ferias y actividades de voluntariado.</p>
            
            <p>El evento promete ser el más grande del año en términos de participación estudiantil y proyección comunitaria.</p>
        `,
        gallery: [
            "/images/noticias1.jpg",
            "/images/noticias3.jpg",
            "/images/Feria_02-scaled.jpeg"
        ]
    },
    {
        id: 10,
        title: "Universidad Saludable: promoviendo el bienestar integral en la UNP",
        excerpt: "Programa integral de promoción de la salud física, mental y emocional en la comunidad universitaria.",
        date: "28 Ago 2025",
        day: "28",
        month: "AGO",
        views: "2,234",
        image: "/images/noticias2.jpg",
        content: `
            <p>La iniciativa Universidad Saludable busca crear un entorno que promueva hábitos de vida saludables entre estudiantes, docentes y trabajadores administrativos.</p>
            
            <p>El programa incluye actividades deportivas, talleres de nutrición, servicios de consejería psicológica y espacios de recreación.</p>
        `,
        gallery: [
            "/images/noticias2.jpg",
            "/images/Feria_02-scaled.jpeg",
            "/images/noticias1.jpg"
        ]
    },
    {
        id: 11,
        title: "Convenio con ONG internacional fortalece proyectos de sostenibilidad",
        excerpt: "Alianza estratégica con organización internacional potenciará iniciativas ambientales en la región.",
        date: "25 Ago 2025",
        day: "25",
        month: "AGO",
        views: "1,567",
        image: "/images/noticias3.jpg",
        content: `<p>La DRSU firmó un importante convenio con una ONG internacional especializada en sostenibilidad ambiental, que permitirá implementar proyectos de conservación y educación ambiental en comunidades de la región Piura.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 12,
        title: "Voluntarios DRSU participan en jornada de limpieza de playas",
        excerpt: "Más de 200 voluntarios se sumaron a la campaña de limpieza de playas del litoral piurano.",
        date: "20 Ago 2025",
        day: "20",
        month: "AGO",
        views: "1,789",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Voluntarios de la DRSU participaron en una masiva jornada de limpieza de playas, recolectando más de 2 toneladas de residuos y promoviendo la conciencia ambiental en la población.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 13,
        title: "Capacitación en primeros auxilios para brigadas voluntarias",
        excerpt: "Formación especializada en atención de emergencias para miembros de brigadas universitarias.",
        date: "15 Ago 2025",
        day: "15",
        month: "AGO",
        views: "1,432",
        image: "/images/noticias1.jpg",
        content: `<p>Las brigadas voluntarias de la UNP recibieron capacitación intensiva en primeros auxilios, RCP y manejo de emergencias, certificada por profesionales de salud.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 14,
        title: "Estudiantes diseñan app para conectar voluntarios con proyectos sociales",
        excerpt: "Innovadora aplicación móvil facilita la conexión entre voluntarios y organizaciones sociales.",
        date: "10 Ago 2025",
        day: "10",
        month: "AGO",
        views: "2,145",
        image: "/images/noticias2.jpg",
        content: `<p>Estudiantes de Ingeniería de Sistemas desarrollaron una aplicación móvil que permite a voluntarios encontrar y participar en proyectos sociales de manera sencilla y eficiente.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 15,
        title: "DRSU recibe reconocimiento regional por impacto en educación inclusiva",
        excerpt: "Premio regional destaca el trabajo de la DRSU en promoción de la educación inclusiva.",
        date: "05 Ago 2025",
        day: "05",
        month: "AGO",
        views: "1,876",
        image: "/images/noticias3.jpg",
        content: `<p>La DRSU fue reconocida por el Gobierno Regional por su destacado trabajo en la promoción de la educación inclusiva y el acceso a la educación superior de poblaciones vulnerables.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 16,
        title: "Taller de huertos urbanos sostenibles en comunidades locales",
        excerpt: "Programa de capacitación en agricultura urbana para la seguridad alimentaria familiar.",
        date: "01 Ago 2025",
        day: "01",
        month: "AGO",
        views: "1,543",
        image: "/images/noticias1.jpg",
        content: `<p>La DRSU implementó talleres de huertos urbanos en comunidades periurbanas, enseñando técnicas de cultivo sostenible que mejoran la alimentación familiar y generan ingresos.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 17,
        title: "Programa de mentoría académica para estudiantes de escasos recursos",
        excerpt: "Estudiantes destacados se convierten en mentores de jóvenes en situación de vulnerabilidad.",
        date: "28 Jul 2025",
        day: "28",
        month: "JUL",
        views: "1,298",
        image: "/images/noticias2.jpg",
        content: `<p>El programa de mentoría académica conecta a estudiantes universitarios destacados con jóvenes de escasos recursos, brindándoles apoyo en su formación y desarrollo personal.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 18,
        title: "Festival cultural por la diversidad e inclusión en la UNP",
        excerpt: "Celebración multicultural que visibiliza la riqueza de la diversidad en nuestra comunidad.",
        date: "22 Jul 2025",
        day: "22",
        month: "JUL",
        views: "2,087",
        image: "/images/noticias3.jpg",
        content: `<p>El Festival de la Diversidad reunió expresiones culturales de diferentes regiones del país, promoviendo el respeto y la valoración de la diversidad cultural en la universidad.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/noticias1.jpg"]
    },
    {
        id: 19,
        title: "Campaña de donación de sangre supera meta establecida",
        excerpt: "Solidaridad universitaria logra recolectar más de 300 unidades de sangre para hospitales regionales.",
        date: "18 Jul 2025",
        day: "18",
        month: "JUL",
        views: "1,765",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>La campaña anual de donación de sangre organizada por la DRSU superó todas las expectativas, recolectando 320 unidades que salvarán vidas en hospitales de la región.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias2.jpg"]
    },
    {
        id: 20,
        title: "Proyecto de biblioteca comunitaria beneficia a niños de zonas rurales",
        excerpt: "Biblioteca móvil lleva libros y programas de lectura a comunidades alejadas.",
        date: "12 Jul 2025",
        day: "12",
        month: "JUL",
        views: "1,432",
        image: "/images/noticias1.jpg",
        content: `<p>La biblioteca comunitaria móvil recorre comunidades rurales llevando el mundo de la lectura a niños que no tienen acceso a libros, fomentando el amor por el aprendizaje.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias3.jpg"]
    },
    // Continuando con más noticias...
    {
        id: 21,
        title: "Taller de emprendimiento social para mujeres rurales",
        excerpt: "Capacitación en emprendimiento empodera a mujeres de comunidades campesinas.",
        date: "08 Jul 2025",
        day: "08",
        month: "JUL",
        views: "1,654",
        image: "/images/noticias2.jpg",
        content: `<p>Mujeres rurales participaron en talleres de emprendimiento social, aprendiendo herramientas para desarrollar negocios sostenibles que mejoren sus condiciones de vida.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias1.jpg"]
    },
    {
        id: 22,
        title: "Estudiantes desarrollan sistema de riego tecnificado de bajo costo",
        excerpt: "Innovación tecnológica al servicio de pequeños agricultores de la región.",
        date: "03 Jul 2025",
        day: "03",
        month: "JUL",
        views: "1,987",
        image: "/images/noticias3.jpg",
        content: `<p>Estudiantes de Ingeniería Agrícola diseñaron un sistema de riego tecnificado accesible para pequeños agricultores, optimizando el uso del agua y aumentando la productividad.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 23,
        title: "Programa de alfabetización digital para adultos mayores",
        excerpt: "Adultos mayores aprenden a usar tecnología para mantenerse conectados con sus familias.",
        date: "28 Jun 2025",
        day: "28",
        month: "JUN",
        views: "1,543",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>El programa de alfabetización digital enseña a adultos mayores a usar smartphones, redes sociales y aplicaciones de comunicación, reduciendo la brecha digital generacional.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 24,
        title: "Campaña de prevención del bullying en instituciones educativas",
        excerpt: "Talleres interactivos promueven la convivencia pacífica en escuelas de Piura.",
        date: "22 Jun 2025",
        day: "22",
        month: "JUN",
        views: "2,234",
        image: "/images/noticias1.jpg",
        content: `<p>Voluntarios de la DRSU visitaron colegios de la región para realizar talleres de prevención del bullying, promoviendo el respeto y la empatía entre estudiantes.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 25,
        title: "Red de apoyo psicológico para estudiantes en tiempos difíciles",
        excerpt: "Servicio gratuito de apoyo emocional para la comunidad universitaria.",
        date: "18 Jun 2025",
        day: "18",
        month: "JUN",
        views: "1,876",
        image: "/images/noticias2.jpg",
        content: `<p>La DRSU lanzó una red de apoyo psicológico que brinda atención gratuita a estudiantes que enfrentan dificultades emocionales, promoviendo la salud mental en la universidad.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 26,
        title: "Proyecto de reciclaje convierte residuos en arte",
        excerpt: "Iniciativa creativa transforma materiales reciclados en obras artísticas.",
        date: "12 Jun 2025",
        day: "12",
        month: "JUN",
        views: "1,432",
        image: "/images/noticias3.jpg",
        content: `<p>Estudiantes de Arte y Diseño crearon una exposición con obras elaboradas completamente con materiales reciclados, promoviendo la economía circular y la conciencia ambiental.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 27,
        title: "Voluntarios restauran espacios públicos en comunidades vulnerables",
        excerpt: "Jornada de trabajo comunitario embellece parques y áreas recreativas.",
        date: "08 Jun 2025",
        day: "08",
        month: "JUN",
        views: "1,654",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Más de 100 voluntarios participaron en la restauración de espacios públicos en comunidades de escasos recursos, pintando paredes, plantando árboles y creando áreas de juego para niños.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 28,
        title: "Seminario internacional sobre Objetivos de Desarrollo Sostenible",
        excerpt: "Expertos internacionales debaten sobre el cumplimiento de la Agenda 2030.",
        date: "03 Jun 2025",
        day: "03",
        month: "JUN",
        views: "2,103",
        image: "/images/noticias1.jpg",
        content: `<p>El seminario internacional sobre ODS reunió a expertos de América Latina para analizar avances, desafíos y estrategias en el cumplimiento de los Objetivos de Desarrollo Sostenible.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 29,
        title: "Programa de becas para estudiantes indígenas",
        excerpt: "Apoyo económico y académico para jóvenes de comunidades nativas.",
        date: "28 May 2025",
        day: "28",
        month: "MAY",
        views: "1,765",
        image: "/images/noticias2.jpg",
        content: `<p>La universidad lanzó un programa de becas integrales para estudiantes de comunidades indígenas, garantizando su acceso y permanencia en la educación superior.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 30,
        title: "Feria de innovación social presenta soluciones a problemas locales",
        excerpt: "Proyectos innovadores abordan desafíos sociales con creatividad y tecnología.",
        date: "22 May 2025",
        day: "22",
        month: "MAY",
        views: "1,987",
        image: "/images/noticias3.jpg",
        content: `<p>La Feria de Innovación Social showcaseó proyectos estudiantiles que ofrecen soluciones creativas a problemas de salud, educación, ambiente y desarrollo comunitario en la región.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 31,
        title: "Campaña de reforestación planta 5,000 árboles en zonas degradadas",
        excerpt: "Acción ambiental masiva contribuye a la recuperación de ecosistemas.",
        date: "18 May 2025",
        day: "18",
        month: "MAY",
        views: "2,456",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Voluntarios, estudiantes y comunidades locales se unieron para plantar 5,000 árboles nativos en zonas degradadas, contribuyendo a la restauración ecológica de la región.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 32,
        title: "Taller de liderazgo social para jóvenes de barrios periféricos",
        excerpt: "Formación de líderes comunitarios comprometidos con el cambio social.",
        date: "12 May 2025",
        day: "12",
        month: "MAY",
        views: "1,543",
        image: "/images/noticias1.jpg",
        content: `<p>Jóvenes de barrios periféricos participaron en talleres de liderazgo que los preparan para convertirse en agentes de cambio en sus comunidades.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 33,
        title: "Proyecto de energía solar ilumina comunidad rural",
        excerpt: "Tecnología sostenible lleva electricidad a zona sin acceso a red eléctrica.",
        date: "08 May 2025",
        day: "08",
        month: "MAY",
        views: "1,876",
        image: "/images/noticias2.jpg",
        content: `<p>Estudiantes de Ingeniería implementaron un sistema de energía solar que proporciona electricidad a una comunidad rural que nunca había tenido acceso a este servicio básico.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 34,
        title: "Red de comedores comunitarios fortalece seguridad alimentaria",
        excerpt: "Iniciativa solidaria garantiza alimentación nutritiva para familias vulnerables.",
        date: "03 May 2025",
        day: "03",
        month: "MAY",
        views: "1,654",
        image: "/images/noticias3.jpg",
        content: `<p>La DRSU apoya la creación de una red de comedores comunitarios que brindan alimentación nutritiva a familias en situación de vulnerabilidad, mejorando su calidad de vida.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 35,
        title: "Estudiantes crean plataforma digital para artesanos locales",
        excerpt: "Tecnología conecta artesanos con mercados nacionales e internacionales.",
        date: "28 Abr 2025",
        day: "28",
        month: "ABR",
        views: "2,087",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Una plataforma digital desarrollada por estudiantes permite a artesanos locales vender sus productos en línea, accediendo a nuevos mercados y mejorando sus ingresos.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 36,
        title: "Programa de deporte inclusivo para personas con discapacidad",
        excerpt: "Actividades deportivas adaptadas promueven la inclusión y el bienestar.",
        date: "22 Abr 2025",
        day: "22",
        month: "ABR",
        views: "1,432",
        image: "/images/noticias1.jpg",
        content: `<p>El programa de deporte inclusivo ofrece actividades físicas adaptadas para personas con discapacidad, promoviendo la integración social y el desarrollo de habilidades.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 37,
        title: "Campaña de salud preventiva llega a comunidades alejadas",
        excerpt: "Brigadas médicas ofrecen atención gratuita en zonas rurales.",
        date: "18 Abr 2025",
        day: "18",
        month: "ABR",
        views: "1,765",
        image: "/images/noticias2.jpg",
        content: `<p>Brigadas médicas conformadas por estudiantes y profesionales de la salud visitaron comunidades alejadas para ofrecer atención preventiva gratuita y educación en salud.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 38,
        title: "Taller de música y arte para niños en situación de calle",
        excerpt: "Expresión artística como herramienta de reinserción social.",
        date: "12 Abr 2025",
        day: "12",
        month: "ABR",
        views: "1,543",
        image: "/images/noticias3.jpg",
        content: `<p>Talleres de música y arte brindan a niños en situación de calle un espacio seguro para expresarse creativamente y desarrollar habilidades que faciliten su reinserción social.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 39,
        title: "Proyecto de viviendas sostenibles para familias damnificadas",
        excerpt: "Arquitectura sostenible ofrece soluciones habitacionales dignas.",
        date: "08 Abr 2025",
        day: "08",
        month: "ABR",
        views: "2,234",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Estudiantes de Arquitectura diseñaron y construyeron viviendas sostenibles de bajo costo para familias afectadas por desastres naturales, utilizando materiales locales y técnicas ecológicas.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 40,
        title: "Red de intercambio de saberes ancestrales",
        excerpt: "Diálogo intergeneracional preserva conocimientos tradicionales.",
        date: "03 Abr 2025",
        day: "03",
        month: "ABR",
        views: "1,654",
        image: "/images/noticias1.jpg",
        content: `<p>La red de intercambio de saberes conecta a adultos mayores portadores de conocimientos ancestrales con jóvenes interesados en preservar y valorar estas tradiciones.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 41,
        title: "Foro sobre derechos humanos y justicia social",
        excerpt: "Debate académico sobre desafíos actuales en materia de derechos humanos.",
        date: "28 Mar 2025",
        day: "28",
        month: "MAR",
        views: "1,987",
        image: "/images/noticias2.jpg",
        content: `<p>El foro reunió a académicos, activistas y autoridades para debatir sobre derechos humanos, justicia social y el rol de la universidad en la defensa de estos principios.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 42,
        title: "Programa de compostaje comunitario reduce residuos orgánicos",
        excerpt: "Gestión sostenible de residuos genera abono natural para huertos urbanos.",
        date: "22 Mar 2025",
        day: "22",
        month: "MAR",
        views: "1,432",
        image: "/images/noticias3.jpg",
        content: `<p>El programa de compostaje comunitario enseña a las familias a transformar residuos orgánicos en abono natural, reduciendo la basura y mejorando los huertos urbanos.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 43,
        title: "Estudiantes diseñan juegos educativos para escuelas rurales",
        excerpt: "Material didáctico innovador mejora el aprendizaje en zonas alejadas.",
        date: "18 Mar 2025",
        day: "18",
        month: "MAR",
        views: "1,876",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Estudiantes de Educación crearon juegos educativos adaptados a la realidad rural, facilitando el aprendizaje de matemáticas, ciencias y lenguaje de manera lúdica.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 44,
        title: "Campaña contra la violencia de género en espacios universitarios",
        excerpt: "Acciones de sensibilización promueven espacios seguros y libres de violencia.",
        date: "12 Mar 2025",
        day: "12",
        month: "MAR",
        views: "2,103",
        image: "/images/noticias1.jpg",
        content: `<p>La campaña contra la violencia de género incluyó talleres, conversatorios y acciones de visibilización para crear una cultura de respeto e igualdad en la universidad.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 45,
        title: "Proyecto de piscicultura beneficia a comunidades amazónicas",
        excerpt: "Acuicultura sostenible genera alimento e ingresos para familias locales.",
        date: "08 Mar 2025",
        day: "08",
        month: "MAR",
        views: "1,543",
        image: "/images/noticias2.jpg",
        content: `<p>El proyecto de piscicultura implementado en comunidades amazónicas mejora la seguridad alimentaria y genera ingresos adicionales para las familias participantes.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 46,
        title: "Taller de periodismo comunitario empodera a líderes locales",
        excerpt: "Capacitación en comunicación fortalece la voz de las comunidades.",
        date: "03 Mar 2025",
        day: "03",
        month: "MAR",
        views: "1,654",
        image: "/images/noticias3.jpg",
        content: `<p>Líderes comunitarios aprendieron técnicas de periodismo para documentar y comunicar las realidades de sus territorios, amplificando sus voces en medios locales.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 47,
        title: "Red de micro bibliotecas en barrios periféricos",
        excerpt: "Pequeños espacios de lectura acercan los libros a la comunidad.",
        date: "28 Feb 2025",
        day: "28",
        month: "FEB",
        views: "1,765",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>La red de micro bibliotecas instaladas en barrios periféricos facilita el acceso a la lectura y promueve la educación en comunidades con limitado acceso a bibliotecas formales.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 48,
        title: "Programa de capacitación en oficios para jóvenes en riesgo",
        excerpt: "Formación técnica ofrece oportunidades de empleo e inserción social.",
        date: "22 Feb 2025",
        day: "22",
        month: "FEB",
        views: "1,987",
        image: "/images/noticias1.jpg",
        content: `<p>Jóvenes en situación de riesgo social reciben capacitación en oficios como carpintería, gastronomía y electricidad, mejorando sus oportunidades de empleo formal.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 49,
        title: "Festival de cine ambiental sensibiliza sobre crisis climática",
        excerpt: "Documentales y cortometrajes generan conciencia sobre el cambio climático.",
        date: "18 Feb 2025",
        day: "18",
        month: "FEB",
        views: "2,234",
        image: "/images/noticias2.jpg",
        content: `<p>El festival de cine ambiental presentó documentales y cortometrajes sobre crisis climática, biodiversidad y sostenibilidad, seguidos de debates con expertos ambientales.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 50,
        title: "Estudiantes implementan sistema de captación de agua de lluvia",
        excerpt: "Tecnología apropiada mejora acceso al agua en zonas semiáridas.",
        date: "12 Feb 2025",
        day: "12",
        month: "FEB",
        views: "1,876",
        image: "/images/noticias3.jpg",
        content: `<p>Un sistema de captación y almacenamiento de agua de lluvia diseñado por estudiantes proporciona agua para consumo y agricultura en comunidades de zonas semiáridas.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    // Continuamos hasta completar 94 noticias
    {
        id: 51,
        title: "Taller de teatro social para adolescentes en conflicto con la ley",
        excerpt: "Arte dramático como herramienta de resiliencia y cambio personal.",
        date: "08 Feb 2025",
        day: "08",
        month: "FEB",
        views: "1,432",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Talleres de teatro social ofrecen a adolescentes en conflicto con la ley un espacio para reflexionar sobre sus experiencias y proyectar cambios positivos en sus vidas.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 52,
        title: "Proyecto de turismo comunitario genera empleo en zona rural",
        excerpt: "Iniciativa turística sostenible beneficia a comunidades campesinas.",
        date: "03 Feb 2025",
        day: "03",
        month: "FEB",
        views: "1,654",
        image: "/images/noticias1.jpg",
        content: `<p>El proyecto de turismo comunitario permite a familias rurales generar ingresos mostrando su cultura, gastronomía y paisajes a visitantes nacionales e internacionales.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 53,
        title: "Red de apoyo para madres adolescentes completa primer año",
        excerpt: "Programa integral apoya a jóvenes madres en su desarrollo personal y académico.",
        date: "28 Ene 2025",
        day: "28",
        month: "ENE",
        views: "1,987",
        image: "/images/noticias2.jpg",
        content: `<p>La red de apoyo para madres adolescentes cumple un año brindando orientación psicológica, apoyo académico y capacitación en crianza positiva a jóvenes madres.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 54,
        title: "Campaña de prevención del dengue en zonas endémicas",
        excerpt: "Educación sanitaria y eliminación de criaderos reducen casos de dengue.",
        date: "22 Ene 2025",
        day: "22",
        month: "ENE",
        views: "2,103",
        image: "/images/noticias3.jpg",
        content: `<p>Voluntarios realizaron una campaña intensiva de prevención del dengue, educando a la población y eliminando criaderos de mosquitos en barrios de alto riesgo.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 55,
        title: "Estudiantes desarrollan filtros de agua de bajo costo",
        excerpt: "Tecnología accesible purifica agua para consumo humano en zonas sin servicios.",
        date: "18 Ene 2025",
        day: "18",
        month: "ENE",
        views: "1,876",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Filtros de agua de bajo costo diseñados por estudiantes de Ingeniería permiten a familias sin acceso a agua potable purificar el agua de manera efectiva y económica.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 56,
        title: "Programa de música y danza rescata tradiciones culturales",
        excerpt: "Talleres preservan expresiones artísticas tradicionales de la región.",
        date: "12 Ene 2025",
        day: "12",
        month: "ENE",
        views: "1,543",
        image: "/images/noticias1.jpg",
        content: `<p>El programa de música y danza tradicional trabaja con maestros artesanos para transmitir a jóvenes las expresiones culturales ancestrales de la región.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 57,
        title: "Feria de emprendimiento social conecta proyectos con inversionistas",
        excerpt: "Encuentro facilita financiamiento para iniciativas de impacto social.",
        date: "08 Ene 2025",
        day: "08",
        month: "ENE",
        views: "2,234",
        image: "/images/noticias2.jpg",
        content: `<p>La feria de emprendimiento social reunió a emprendedores con inversionistas de impacto, facilitando el financiamiento de proyectos que generan valor social y ambiental.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 58,
        title: "Taller de construcción de cocinas mejoradas reduce humo intradomiciliario",
        excerpt: "Tecnología apropiada mejora la salud de familias rurales.",
        date: "03 Ene 2025",
        day: "03",
        month: "ENE",
        views: "1,654",
        image: "/images/noticias3.jpg",
        content: `<p>Cocinas mejoradas construidas en talleres comunitarios reducen dramáticamente la contaminación intradomiciliaria, mejorando la salud respiratoria de las familias.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 59,
        title: "Red de mentores profesionales guía a estudiantes de primera generación",
        excerpt: "Profesionales exitosos inspiran y orientan a jóvenes universitarios.",
        date: "28 Dic 2024",
        day: "28",
        month: "DIC",
        views: "1,765",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>La red de mentores conecta a profesionales exitosos con estudiantes de primera generación universitaria, brindándoles orientación para su desarrollo académico y profesional.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 60,
        title: "Campaña navideña lleva alegría a niños hospitalizados",
        excerpt: "Voluntarios comparten la magia de la navidad con niños en tratamiento médico.",
        date: "22 Dic 2024",
        day: "22",
        month: "DIC",
        views: "2,456",
        image: "/images/noticias1.jpg",
        content: `<p>Voluntarios de la DRSU visitaron hospitales llevando regalos, actividades recreativas y alegría a niños que pasan la navidad en tratamiento médico.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 61,
        title: "Proyecto de bancos de semillas preserva agrobiodiversidad local",
        excerpt: "Conservación de semillas nativas protege patrimonio agrícola regional.",
        date: "18 Dic 2024",
        day: "18",
        month: "DIC",
        views: "1,432",
        image: "/images/noticias2.jpg",
        content: `<p>Bancos de semillas comunitarios preservan variedades nativas de cultivos tradicionales, protegiendo la agrobiodiversidad y la soberanía alimentaria de la región.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 62,
        title: "Taller de costura y confección empodera a mujeres víctimas de violencia",
        excerpt: "Formación técnica facilita independencia económica de mujeres en situación de violencia.",
        date: "12 Dic 2024",
        day: "12",
        month: "DIC",
        views: "1,987",
        image: "/images/noticias3.jpg",
        content: `<p>Mujeres sobrevivientes de violencia reciben capacitación en costura y confección, permitiéndoles generar ingresos propios y fortalecer su autonomía económica.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 63,
        title: "Estudiantes crean podcast sobre historias de superación comunitaria",
        excerpt: "Plataforma digital visibiliza experiencias inspiradoras de la región.",
        date: "08 Dic 2024",
        day: "08",
        month: "DIC",
        views: "1,543",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Un podcast creado por estudiantes de Comunicación documenta historias de superación, resiliencia y transformación social de comunidades de la región.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 64,
        title: "Programa de rehabilitación de animales callejeros",
        excerpt: "Iniciativa de bienestar animal rescata y rehabilita perros y gatos en situación de calle.",
        date: "03 Dic 2024",
        day: "03",
        month: "DIC",
        views: "2,087",
        image: "/images/noticias1.jpg",
        content: `<p>El programa de rehabilitación rescata animales callejeros, proporciona atención veterinaria y busca familias adoptivas responsables, promoviendo el bienestar animal.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 65,
        title: "Foro sobre migración y derechos humanos",
        excerpt: "Debate académico sobre desafíos y oportunidades de la migración en la región.",
        date: "28 Nov 2024",
        day: "28",
        month: "NOV",
        views: "1,654",
        image: "/images/noticias2.jpg",
        content: `<p>El foro reunió a expertos, migrantes y organizaciones civiles para debatir sobre políticas migratorias, integración social y protección de derechos de personas migrantes.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 66,
        title: "Proyecto de acuaponía combina piscicultura y agricultura urbana",
        excerpt: "Sistema integrado produce alimentos de manera sostenible en espacios reducidos.",
        date: "22 Nov 2024",
        day: "22",
        month: "NOV",
        views: "1,876",
        image: "/images/noticias3.jpg",
        content: `<p>Sistemas de acuaponía implementados en escuelas y centros comunitarios demuestran cómo producir peces y vegetales de manera sostenible en espacios urbanos limitados.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 67,
        title: "Campaña de sensibilización sobre autismo en instituciones educativas",
        excerpt: "Educación inclusiva promueve comprensión y apoyo a personas con autismo.",
        date: "18 Nov 2024",
        day: "18",
        month: "NOV",
        views: "1,765",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>La campaña de sensibilización sobre autismo capacita a docentes, estudiantes y familias en estrategias de inclusión y apoyo a personas dentro del espectro autista.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 68,
        title: "Red de economía solidaria fortalece emprendimientos locales",
        excerpt: "Cooperación entre emprendedores genera mercados justos y solidarios.",
        date: "12 Nov 2024",
        day: "12",
        month: "NOV",
        views: "1,432",
        image: "/images/noticias1.jpg",
        content: `<p>La red de economía solidaria conecta a productores, artesanos y consumidores en un sistema de comercio justo que beneficia a todos los participantes de la cadena.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 69,
        title: "Taller de robótica educativa para niños de escasos recursos",
        excerpt: "Tecnología accesible estimula el pensamiento científico en la infancia.",
        date: "08 Nov 2024",
        day: "08",
        month: "NOV",
        views: "2,234",
        image: "/images/noticias2.jpg",
        content: `<p>Talleres de robótica educativa con materiales de bajo costo acercan la tecnología y la ciencia a niños de comunidades con limitado acceso a educación STEM.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 70,
        title: "Programa de justicia restaurativa en escuelas reduce violencia escolar",
        excerpt: "Metodología innovadora transforma conflictos en oportunidades de aprendizaje.",
        date: "03 Nov 2024",
        day: "03",
        month: "NOV",
        views: "1,543",
        image: "/images/noticias3.jpg",
        content: `<p>El programa de justicia restaurativa implementado en escuelas piloto ha logrado reducir significativamente la violencia escolar, promoviendo la resolución pacífica de conflictos.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 71,
        title: "Estudiantes diseñan app de alertas tempranas ante desastres naturales",
        excerpt: "Tecnología móvil puede salvar vidas ante emergencias climáticas.",
        date: "28 Oct 2024",
        day: "28",
        month: "OCT",
        views: "1,987",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>Una aplicación móvil desarrollada por estudiantes envía alertas tempranas sobre riesgos climáticos, permitiendo a comunidades prepararse ante desastres naturales inminentes.</p>`,
        gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    },
    {
        id: 72,
        title: "Festival gastronómico rescata recetas tradicionales de la región",
        excerpt: "Celebración culinaria preserva patrimonio gastronómico local.",
        date: "22 Oct 2024",
        day: "22",
        month: "OCT",
        views: "2,103",
        image: "/images/noticias1.jpg",
        content: `<p>El festival gastronómico reunió a cocineras tradicionales que compartieron recetas ancestrales, promoviendo la valoración del patrimonio culinario regional.</p>`,
        gallery: ["/images/noticias1.jpg", "/images/noticias2.jpg"]
    },
    {
        id: 73,
        title: "Proyecto de bioconstrucción enseña técnicas sostenibles de edificación",
        excerpt: "Arquitectura ecológica con materiales locales reduce impacto ambiental.",
        date: "18 Oct 2024",
        day: "18",
        month: "OCT",
        views: "1,654",
        image: "/images/noticias2.jpg",
        content: `<p>Talleres de bioconstrucción capacitan a comunidades en técnicas de edificación sostenible usando materiales locales como adobe, bambú y materiales reciclados.</p>`,
        gallery: ["/images/noticias2.jpg", "/images/noticias3.jpg"]
    },
    {
        id: 74,
        title: "Red de apoyo para adultos mayores combate soledad y aislamiento",
        excerpt: "Programa de acompañamiento mejora calidad de vida de personas mayores.",
        date: "12 Oct 2024",
        day: "12",
        month: "OCT",
        views: "1,876",
        image: "/images/noticias3.jpg",
        content: `<p>Voluntarios visitan regularmente a adultos mayores en situación de soledad, brindando compañía, apoyo emocional y asistencia en actividades cotidianas.</p>`,
        gallery: ["/images/noticias3.jpg", "/images/Feria_02-scaled.jpeg"]
    },
    {
        id: 75,
        title: "Campaña de donación de útiles escolares beneficia a miles de niños",
        excerpt: "Solidaridad universitaria garantiza materiales educativos para estudiantes en vulnerabilidad.",
        date: "08 Oct 2024",
        day: "08",
        month: "OCT",
        views: "2,456",
        image: "/images/Feria_02-scaled.jpeg",
        content: `<p>La campaña anual de útiles escolares recolectó material educativo para más de 3,000 niños de familias en situación de pobreza, garantizando su retorno a clases.</p>`,
                gallery: ["/images/Feria_02-scaled.jpeg", "/images/noticias1.jpg"]
    }
];

// ========================================================
// ========== LÓGICA PARA RENDERIZAR NOTICIAS ==========
// ========================================================

// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA PARA LA PÁGINA DE LISTADO DE NOTICIAS (noticias.html) ---
    const noticiasGrid = document.getElementById('noticiasGrid');
    if (noticiasGrid) {
        const prevPageBtn = document.getElementById('prevPage');
        const nextPageBtn = document.getElementById('nextPage');
        const paginationNumbers = document.getElementById('paginationNumbers');

        const noticiasPorPagina = 9; // Puedes cambiar este número
        let currentPage = 1;
        const totalPaginas = Math.ceil(noticiasData.length / noticiasPorPagina);

        // Función para mostrar las noticias de la página actual
        function displayNoticias(page) {
            noticiasGrid.innerHTML = ''; // Limpiar el grid antes de añadir nuevas noticias
            currentPage = page;

            const startIndex = (page - 1) * noticiasPorPagina;
            const endIndex = startIndex + noticiasPorPagina;
            const paginatedNoticias = noticiasData.slice(startIndex, endIndex);

            paginatedNoticias.forEach(noticia => {
                const noticiaCard = document.createElement('div');
                noticiaCard.className = 'news-card-item';
                noticiaCard.innerHTML = `
                    <div class="card-image">
                        <a href="noticia-detalle.html?id=${noticia.id}">
                            <img src="${noticia.image}" alt="${noticia.title}">
                        </a>
                        <div class="card-date">
                            <span class="day">${noticia.day}</span>
                            <span class="month">${noticia.month}</span>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">
                            <a href="noticia-detalle.html?id=${noticia.id}">${noticia.title}</a>
                        </h3>
                        <p class="card-excerpt">${noticia.excerpt}</p>
                        <div class="card-meta">
                            <span><i class="fas fa-eye"></i> ${noticia.views} vistas</span>
                        </div>
                    </div>
                `;
                noticiasGrid.appendChild(noticiaCard);
            });
            updatePagination();
        }

        // Función para crear y actualizar los botones de paginación
        function setupPagination() {
            paginationNumbers.innerHTML = '';
            for (let i = 1; i <= totalPaginas; i++) {
                const pageBtn = document.createElement('button');
                pageBtn.className = 'pagination-number';
                pageBtn.textContent = i;
                if (i === currentPage) {
                    pageBtn.classList.add('active');
                }
                pageBtn.addEventListener('click', () => {
                    displayNoticias(i);
                });
                paginationNumbers.appendChild(pageBtn);
            }
        }
        
        // Función para actualizar el estado de los botones
        function updatePagination() {
            // Actualizar estado de botones Prev/Next
            prevPageBtn.disabled = currentPage === 1;
            nextPageBtn.disabled = currentPage === totalPaginas;

            // Actualizar clase 'active' en los números
            document.querySelectorAll('.pagination-number').forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.textContent) === currentPage) {
                    btn.classList.add('active');
                }
            });
        }

        // Event Listeners para los botones de Anterior y Siguiente
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                displayNoticias(currentPage - 1);
            }
        });

        nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPaginas) {
                displayNoticias(currentPage + 1);
            }
        });

        // Carga inicial
        displayNoticias(1);
        setupPagination();
    }

    // --- LÓGICA PARA LA PÁGINA DE DETALLE DE NOTICIA (noticia-detalle.html) ---
    const noticiaDetailContainer = document.querySelector('.noticia-detalle-container');
    if (noticiaDetailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const noticiaId = parseInt(urlParams.get('id'));

        // Encontrar la noticia por su ID
        const noticia = noticiasData.find(n => n.id === noticiaId);

        if (noticia) {
            // Rellenar el contenido principal de la noticia
            document.getElementById('breadcrumbTitle').textContent = noticia.title;
            document.getElementById('noticiaTitle').textContent = noticia.title;
            document.getElementById('noticiaDate').textContent = noticia.date;
            document.getElementById('noticiaViews').textContent = noticia.views;
            document.getElementById('noticiaMainImage').src = noticia.image;
            document.getElementById('noticiaMainImage').alt = noticia.title;
            document.getElementById('noticiaContent').innerHTML = noticia.content;

            // Rellenar la galería de imágenes
            const galleryGrid = document.querySelector('.gallery-grid');
            if (noticia.gallery && noticia.gallery.length > 0) {
                noticia.gallery.forEach(imgUrl => {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'gallery-item';
                    galleryItem.innerHTML = `<img src="${imgUrl}" alt="Galería de ${noticia.title}">`;
                    galleryGrid.appendChild(galleryItem);
                });
            } else {
                 document.getElementById('noticiaGallery').style.display = 'none'; // Ocultar si no hay galería
            }

            // Rellenar noticias relacionadas (3 noticias al azar, excluyendo la actual)
            const relatedNewsList = document.getElementById('relatedNewsList');
            const relatedNoticias = noticiasData
                .filter(n => n.id !== noticiaId) // Excluir la noticia actual
                .sort(() => 0.5 - Math.random()) // Mezclar aleatoriamente
                .slice(0, 3); // Tomar las primeras 3

            relatedNoticias.forEach(rel => {
                const relatedItem = document.createElement('a');
                relatedItem.href = `noticia-detalle.html?id=${rel.id}`;
                relatedItem.className = 'related-news-item';
                relatedItem.innerHTML = `
                    <img src="${rel.image}" alt="${rel.title}">
                    <div class="related-info">
                        <h4>${rel.title}</h4>
                        <span>${rel.date}</span>
                    </div>
                `;
                relatedNewsList.appendChild(relatedItem);
            });
        } else {
            // Si no se encuentra la noticia, mostrar un mensaje
            noticiaDetailContainer.innerHTML = '<h1>Error 404: Noticia no encontrada</h1><p>La noticia que buscas no existe o fue eliminada.</p><a href="noticias.html">Volver a Noticias</a>';
        }
    }
});

// --- FUNCIONES PARA COMPARTIR EN REDES SOCIALES (para noticia-detalle.html) ---
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(document.title);
    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}`, '_blank');
}