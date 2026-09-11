/* ==========================================================================
   MONTE SIÓN AFTER SCHOOL — JavaScript
   Mobile first, accesible, sin dependencias externas
   ========================================================================== */

(function () {
    'use strict';

    /* -----------------------------------------------------------------------
       1. CONFIGURACIÓN CENTRAL
       Editar estos valores para actualizar contacto, redes y datos generales.
       ----------------------------------------------------------------------- */
    const AFTER_CONFIG = {
        whatsapp: '56930606424',          // Sin +, sin espacios
        phone: '+56978551360',            // Con + para enlaces tel:
        instagram: 'https://www.instagram.com/escuela_montesion',  // URL completa
        facebook: 'https://www.facebook.com/escueladeparvulos.montesion',    // URL completa
        address: 'Labranza, Temuco',
        // Punto de extensión para eventos de conversión (Meta Pixel, Google Ads, etc.)
        onConversion: null
    };

    /* -----------------------------------------------------------------------
       2. UTILIDADES
       ----------------------------------------------------------------------- */
    const $ = (selector, context = document) => context.querySelector(selector);
    const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

    function logConversion(type, label) {
        // Punto único para disparar eventos de conversión.
        // Aquí se puede integrar Meta Pixel, Google Analytics, Google Ads, etc.
        // Ejemplo:
        // if (typeof fbq === 'function') fbq('track', 'Contact', { content_name: type });
        // if (typeof gtag === 'function') gtag('event', type, { event_label: label });
        if (typeof AFTER_CONFIG.onConversion === 'function') {
            AFTER_CONFIG.onConversion(type, label);
        }
        // console.log('[Conversion]', type, label);
    }

    /* -----------------------------------------------------------------------
       3. ACTUALIZAR ENLACES DE CONTACTO SEGÚN CONFIGURACIÓN
       ----------------------------------------------------------------------- */
    function applyConfig() {
        // WhatsApp
        $$('[data-whatsapp]').forEach(el => {
            // El mensaje personalizado ya está en el HTML, pero si se quiere
            // definir aquí, se podría hacer.
            el.href = `https://wa.me/${AFTER_CONFIG.whatsapp}?text=Hola%20necesito%20mas%20informaci%C3%B3n%20sobre%20el%20After%20School`;
        });

        // Teléfono
        $$('[data-phone]').forEach(el => {
            el.href = `tel:${AFTER_CONFIG.phone}`;
        });

        // Instagram
        $$('[data-instagram]').forEach(el => {
            el.href = AFTER_CONFIG.instagram;
        });

        // Facebook (si existiera en el DOM)
        $$('[data-facebook]').forEach(el => {
            el.href = AFTER_CONFIG.facebook;
        });
    }

    /* -----------------------------------------------------------------------
       4. MENÚ MÓVIL
       ----------------------------------------------------------------------- */
    function initMobileMenu() {
        const toggle = $('.header__toggle');
        const nav = $('.header__nav');
        const menuLinks = $$('.header__link');

        if (!toggle || !nav) return;

        // Crear overlay
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        overlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(overlay);

        function openMenu() {
            nav.classList.add('is-open');
            overlay.classList.add('is-visible');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            nav.classList.remove('is-open');
            overlay.classList.remove('is-visible');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            expanded ? closeMenu() : openMenu();
        });

        overlay.addEventListener('click', closeMenu);

        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Cerrar con Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && nav.classList.contains('is-open')) {
                closeMenu();
                toggle.focus();
            }
        });
    }

    /* -----------------------------------------------------------------------
       5. HEADER SCROLL
       ----------------------------------------------------------------------- */
    function initHeaderScroll() {
        const header = $('.header');
        if (!header) return;

        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > 20) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            lastScroll = currentScroll;
        }, { passive: true });
    }

    /* -----------------------------------------------------------------------
       6. REVEAL ON SCROLL (IntersectionObserver)
       ----------------------------------------------------------------------- */
    function initReveal() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const elements = $$('.section__title, .section__subtitle, .intro__card, .trust__card, .activity-card, .schedule-card, .gallery__item, .benefit__item, .location__info, .location__map-placeholder, .cta-final__buttons');
        if (!elements.length) return;

        // Añadir clase reveal
        elements.forEach(el => el.classList.add('reveal'));

        if (!('IntersectionObserver' in window)) {
            // Fallback: mostrar todo
            elements.forEach(el => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(el => observer.observe(el));
    }

    /* -----------------------------------------------------------------------
       7. CARRUSEL DE TESTIMONIOS
       ----------------------------------------------------------------------- */
    function initTestimonials() {
        const track = $('#testimonials-track');
        if (!track) return;

        const cards = $$('.testimonial-card', track);
        if (!cards.length) return;

        const prevBtn = $('[data-carousel-prev]');
        const nextBtn = $('[data-carousel-next]');
        const dotsContainer = $('.testimonials__dots');
        const carousel = $('.testimonials__carousel');

        let currentIndex = 0;
        let autoplayInterval = null;
        let isPaused = false;
        const AUTOPLAY_DELAY = 6000;

        // Calcular cuántas tarjetas mostrar según viewport
        function getVisibleCount() {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        }

        function getTotalSlides() {
            return Math.max(1, cards.length - getVisibleCount() + 1);
        }

        function updateCarousel() {
            const visibleCount = getVisibleCount();
            const cardWidth = 100 / visibleCount;
            const offset = -currentIndex * cardWidth;
            track.style.transform = `translateX(${offset}%)`;

            // Actualizar dots
            if (dotsContainer) {
                dotsContainer.innerHTML = '';
                const totalSlides = getTotalSlides();
                for (let i = 0; i < totalSlides; i++) {
                    const dot = document.createElement('button');
                    dot.className = 'testimonials__dot' + (i === currentIndex ? ' is-active' : '');
                    dot.setAttribute('aria-label', `Ir al testimonio ${i + 1}`);
                    dot.setAttribute('role', 'tab');
                    dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
                    dot.addEventListener('click', () => {
                        currentIndex = i;
                        updateCarousel();
                        pauseAutoplay();
                    });
                    dotsContainer.appendChild(dot);
                }
            }

            // Ajustar ancho de cada tarjeta
            cards.forEach(card => {
                card.style.flex = `0 0 calc(${100 / getVisibleCount()}% - ${1}rem)`;
            });
        }

        function nextSlide() {
            const totalSlides = getTotalSlides();
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            const totalSlides = getTotalSlides();
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        function startAutoplay() {
            if (autoplayInterval) clearInterval(autoplayInterval);
            autoplayInterval = setInterval(() => {
                if (!isPaused) nextSlide();
            }, AUTOPLAY_DELAY);
        }

        function pauseAutoplay() {
            isPaused = true;
            setTimeout(() => { isPaused = false; }, 10000); // Reanudar tras 10s de inactividad
        }

        // Event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                pauseAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                pauseAutoplay();
            });
        }

        // Touch / swipe
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            pauseAutoplay();
        }, { passive: true });

        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? nextSlide() : prevSlide();
            }
        }, { passive: true });

        // Teclado
        carousel.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') {
                nextSlide();
                pauseAutoplay();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
                pauseAutoplay();
            }
        });

        // Pausar al hover
        carousel.addEventListener('mouseenter', () => { isPaused = true; });
        carousel.addEventListener('mouseleave', () => { isPaused = false; });

        // Resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                currentIndex = 0;
                updateCarousel();
            }, 200);
        });

        // Inicializar
        updateCarousel();
        startAutoplay();
    }

    /* -----------------------------------------------------------------------
       8. AÑO ACTUAL EN FOOTER
       ----------------------------------------------------------------------- */
    function initFooterYear() {
        const yearSpan = $('#year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /* -----------------------------------------------------------------------
       9. EVENTOS DE CONVERSIÓN
       ----------------------------------------------------------------------- */
    function initConversionTracking() {
        // WhatsApp
        $$('[data-whatsapp]').forEach(el => {
            el.addEventListener('click', () => {
                logConversion('whatsapp_click', 'WhatsApp');
            });
        });

        // Teléfono
        $$('[data-phone]').forEach(el => {
            el.addEventListener('click', () => {
                logConversion('phone_click', 'Phone');
            });
        });

        // Instagram
        $$('[data-instagram]').forEach(el => {
            el.addEventListener('click', () => {
                logConversion('instagram_click', 'Instagram');
            });
        });

        // Facebook
        $$('[data-facebook]').forEach(el => {
            el.addEventListener('click', () => {
                logConversion('facebook_click', 'Facebook');
            });
        });

        // CTAs genéricos
        $$('[data-cta]').forEach(el => {
            el.addEventListener('click', () => {
                logConversion('cta_click', el.dataset.cta || 'CTA');
            });
        });
    }

    /* -----------------------------------------------------------------------
       10. SMOOTH SCROLL PARA ENLACES INTERNOS
       ----------------------------------------------------------------------- */
    function initSmoothScroll() {
        $$('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const target = $(targetId);
                if (target) {
                    e.preventDefault();
                    const headerOffset = 70;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Actualizar URL sin saltar
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }
                }
            });
        });
    }

    /* -----------------------------------------------------------------------
       11. INICIALIZACIÓN
       ----------------------------------------------------------------------- */
    function init() {
        applyConfig();
        initMobileMenu();
        initHeaderScroll();
        initReveal();
        initTestimonials();
        initFooterYear();
        initConversionTracking();
        initSmoothScroll();
    }

    // Ejecutar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Exponer configuración para uso externo (ej: desde consola o scripts de campaña)
    window.AFTER_CONFIG = AFTER_CONFIG;

})();