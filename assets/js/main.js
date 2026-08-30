/**
 * ============================================================
 * MAIN.JS — Escuela de Párvulos Monte Sión
 * Vanilla JS, sin dependencias externas.
 * Módulos: init, loadConfig, icons, updateContactLinks,
 * renderLevels, renderSchedule, renderGallery,
 * initMobileMenu, initSmoothScroll, initFloatingButtons,
 * initGallery, initLightbox, initScrollAnimations, initSEO
 * ============================================================
 */

(function () {
  "use strict";

  /* ------------------------------------------------------------
   * Small inline icon set (stroke-based, single style, reused
   * across value/skill/method icon keys defined in config.js)
   * ---------------------------------------------------------- */
  const ICONS = {
    sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21V11"/><path d="M12 11C12 6 8 4 4 4c0 4 2 8 8 8Z"/><path d="M12 11c0-4 4-6 8-6 0 4-2 7-8 7Z"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z"/><path d="M6 18C10 14 14 10 20 4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 20s-7-4.4-9.4-9C1 7.4 3 4 6.5 4c2 0 3.4 1 5.5 3 2.1-2 3.5-3 5.5-3C21 4 23 7.4 21.4 11c-2.4 4.6-9.4 9-9.4 9Z"/></svg>',
    "heart-hand": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 13l4-2 5 2 5-2 4 2"/><path d="M12 20s-4-2.4-6-5" /><circle cx="12" cy="7" r="3"/></svg>',
    "check-shield": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
    hands: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 12V6a2 2 0 0 1 4 0"/><path d="M11 6v7"/><path d="M15 13V7a2 2 0 0 1 4 0v6"/><path d="M4 13c0 4 3 7 8 7s8-3 8-7"/></svg>',
    "hands-heart": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="3"/><path d="M4 20c0-3 3.5-5 8-5s8 2 8 5"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3"/><path d="M2 20c0-3.3 3-6 7-6s7 2.7 7 6"/><path d="M16 5.5c1.7.4 3 2 3 3.9 0 1.6-.9 3-2.2 3.6"/><path d="M18 14.3c2.4.6 4 2.5 4 4.7"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7Z" fill="currentColor" stroke="none"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2Z"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 0 4 23V5.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5A2.5 2.5 0 0 1 20 23V5.5Z"/></svg>',
    shapes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="7" cy="7" r="4"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><path d="M6 21l4-7H2l4 7Z"/></svg>',
    hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12V5a1.5 1.5 0 0 1 3 0v6"/><path d="M11 11V4a1.5 1.5 0 0 1 3 0v7"/><path d="M14 11V6a1.5 1.5 0 0 1 3 0v7"/><path d="M6 13v2c0 4 3 7 7 7s6-3 6-6v-3"/></svg>',
    run: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="14" cy="4.5" r="1.7"/><path d="M6 20l3.5-4 2-2.5-1-4 4 1 2.5 3.5L21 16"/><path d="M9 14l-4 2"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    smile: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M8 14c1.2 1.3 2.5 2 4 2s2.8-.7 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5.5h16v10H9l-4 3.5v-3.5H4v-10Z"/></svg>',
    lightbulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></svg>',
    path: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M5 8c0 6 14 2 14 8" stroke-dasharray="2 3"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"/><circle cx="12" cy="9" r="2.5"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.2C15.9 4.1 14.9 4 13.8 4c-2.5 0-4.1 1.5-4.1 4.2v2.2H7v3h2.7V21h3.8Z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    "chevron-left": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 6l-6 6 6 6"/></svg>',
    "chevron-right": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || ICONS.sprout;
  }

  /* ------------------------------------------------------------
   * loadConfig — reads the global CONFIG object from config.js
   * ---------------------------------------------------------- */
  function loadConfig() {
    if (typeof CONFIG === "undefined") {
      console.error("CONFIG no está definido. Verifica que config.js se cargue antes de main.js.");
      return null;
    }
    return CONFIG;
  }

  /* ------------------------------------------------------------
   * buildWhatsAppUrl / buildMapsUrl — pure helpers
   * ---------------------------------------------------------- */
  function buildWhatsAppUrl(config) {
    const number = (config.whatsappNumber || "").replace(/\D/g, "");
    const text = encodeURIComponent(config.whatsappMessage || "");
    return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
  }

  function buildMapsUrl(config) {
    const loc = config.location || {};
    if (loc.mapsUrl) return loc.mapsUrl;
    if (loc.latitude && loc.longitude) {
      return `https://www.google.com/maps/search/?api=1&query=${loc.latitude},${loc.longitude}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.addressText || "")}`;
  }

  /* ------------------------------------------------------------
   * updateContactLinks — single source of truth for every
   * WhatsApp / Facebook / Instagram / Maps link on the page
   * ---------------------------------------------------------- */
  function updateContactLinks(config) {
    const waUrl = buildWhatsAppUrl(config);
    const fbUrl = config.facebookUrl || "https://www.facebook.com/";
    const igUrl = config.instagramUrl || "https://www.instagram.com/";
    const mapsUrl = buildMapsUrl(config);

    document.querySelectorAll("[data-whatsapp-link]").forEach((el) => (el.href = waUrl));
    document.querySelectorAll("[data-facebook-link]").forEach((el) => (el.href = fbUrl));
    document.querySelectorAll("[data-instagram-link]").forEach((el) => (el.href = igUrl));
    document.querySelectorAll("[data-maps-link]").forEach((el) => (el.href = mapsUrl));

    // Ocultar Instagram si no está configurado
    if (!config.instagramUrl) {
      document.querySelectorAll("[data-instagram-link]").forEach((el) => {
        el.style.display = "none";
        el.setAttribute("aria-disabled", "true");
        el.title = "Enlace de Instagram pendiente de configurar";
      });
    }

    // Maneja el estado cuando Facebook no está configurado
    if (!config.facebookUrl) {
      document.querySelectorAll("[data-facebook-link]").forEach((el) => {
        el.setAttribute("aria-disabled", "true");
        el.title = "Enlace de Facebook pendiente de configurar";
      });
    }
  }

  /* ------------------------------------------------------------
   * applyBrand — school name, logo, enrollment text, SEO fields
   * ---------------------------------------------------------- */
  function applyBrand(config) {
    document.querySelectorAll("[data-field='schoolName']").forEach((el) => (el.textContent = config.schoolName));
    document.querySelectorAll("[data-field='addressText']").forEach((el) => (el.textContent = config.addressText));
    document.querySelectorAll("[data-field='enrollmentBadge']").forEach((el) => (el.textContent = config.enrollment.shortBadge));
    document.querySelectorAll("[data-field='enrollmentTitle']").forEach((el) => (el.textContent = config.enrollment.title));
    document.querySelectorAll("[data-field='enrollmentDescription']").forEach((el) => (el.textContent = config.enrollment.description));

    document.querySelectorAll("[data-field='logoSrc']").forEach((el) => (el.src = config.logo.src));
    document.querySelectorAll("[data-field='logoAlt']").forEach((el) => (el.alt = config.logo.alt));

    const year = new Date().getFullYear();
    document.querySelectorAll("[data-field='year']").forEach((el) => (el.textContent = year));

    document.title = config.seo.title;
    setMeta("description", config.seo.description);
    setMeta("og:title", config.seo.title, true);
    setMeta("og:description", config.seo.description, true);
    setMeta("og:image", config.seo.ogImage, true);
    setMeta("twitter:title", config.seo.title);
    setMeta("twitter:description", config.seo.description);

    renderJsonLd(config);
  }

  function setMeta(name, content, isProperty) {
    if (!content) return;
    const attr = isProperty ? "property" : "name";
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function renderJsonLd(config) {
    const loc = config.location || {};
    const data = {
      "@context": "https://schema.org",
      "@type": "PreschoolEducation",
      name: config.schoolName,
      address: {
        "@type": "PostalAddress",
        addressLocality: config.city,
        addressRegion: config.region,
        addressCountry: "CL",
      },
    };
    if (loc.latitude && loc.longitude) {
      data.geo = { "@type": "GeoCoordinates", latitude: loc.latitude, longitude: loc.longitude };
    }
    if (config.facebookUrl) data.sameAs = [config.facebookUrl];
    if (config.instagramUrl) {
      data.sameAs = data.sameAs || [];
      data.sameAs.push(config.instagramUrl);
    }
    if (config.seo.canonicalUrl) data.url = config.seo.canonicalUrl;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data, null, 2);
    document.head.appendChild(script);
  }

  /* ------------------------------------------------------------
   * renderLevels
   * ---------------------------------------------------------- */
  function renderLevels(config) {
    const container = document.querySelector("[data-levels]");
    if (!container) return;
    container.innerHTML = config.levels
      .map(
        (level) => `
      <article class="level-card" data-reveal>
        <div class="level-media">
          <img src="${level.image}" alt="${level.name} — Escuela de Párvulos Monte Sión" loading="lazy" decoding="async">
        </div>
        <div class="level-body">
          <span class="badge">Nivel</span>
          <h3>${level.name}</h3>
          <p>${level.description}</p>
          ${level.age ? `<p class="level-age">${level.age}</p>` : ""}
        </div>
      </article>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderSchedule — hides empty blocks instead of showing gaps
   * ---------------------------------------------------------- */
  function renderSchedule(config) {
    const container = document.querySelector("[data-schedule]");
    if (!container) return;
    const days = config.schedule && config.schedule.mondayToFriday;
    if (!days) { container.closest("[data-schedule-wrapper]")?.remove(); return; }

    const blocks = [days.morning, days.afternoon].filter((b) => b && b.start && b.end);

    if (blocks.length === 0) {
      container.innerHTML = `<p class="text-light">Horario disponible próximamente. Consulta directamente por WhatsApp.</p>`;
      return;
    }

    container.innerHTML = blocks
      .map(
        (b) => `
      <li>
        ${icon("clock")}
        <div><strong>${b.label}</strong><span class="detail">${b.start} – ${b.end} hrs</span></div>
      </li>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderValues
   * ---------------------------------------------------------- */
  function renderValues(config) {
    const container = document.querySelector("[data-values]");
    if (!container) return;
    container.innerHTML = config.values
      .map(
        (v) => `
      <li class="value-chip" data-reveal>
        <span class="icon-badge">${icon(v.icon)}</span>
        <span>${v.name}</span>
      </li>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderMethodology
   * ---------------------------------------------------------- */
  function renderMethodology(config) {
    const container = document.querySelector("[data-methodology]");
    if (!container) return;
    container.innerHTML = config.methodology
      .map(
        (m) => `
      <div class="method-card" data-reveal>
        <span class="icon-badge">${icon(m.icon)}</span>
        <div>
          <h3>${m.title}</h3>
          <p>${m.description}</p>
        </div>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderSkills — the 12 "preparación para básica" cards
   * ---------------------------------------------------------- */
  function renderSkills(config) {
    const container = document.querySelector("[data-skills]");
    if (!container) return;
    const items = config.transitionSkills.slice(0, 12);
    container.innerHTML = items
      .map(
        (s) => `
      <div class="skill-card" data-reveal>
        <span class="icon-badge">${icon(s.icon)}</span>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderFacilities
   * ---------------------------------------------------------- */
  function renderFacilities(config) {
    const container = document.querySelector("[data-facilities]");
    if (!container) return;
    container.innerHTML = config.facilities
      .map(
        (f) => `
      <div class="facility-card" data-reveal>
        <img src="${f.image}" alt="${f.name} — Escuela de Párvulos Monte Sión" loading="lazy" decoding="async">
        <div class="facility-label">
          <strong>${f.name}</strong>
          <span>${f.description}</span>
        </div>
      </div>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderGallery — max 10 items enforced here too
   * ---------------------------------------------------------- */
  function renderGallery(config) {
    const container = document.querySelector("[data-gallery]");
    if (!container) return;
    const items = config.gallery.slice(0, 10);
    container.innerHTML = items
      .map(
        (g, i) => `
      <button type="button" class="gallery-item" data-index="${i}" aria-label="Ampliar fotografía: ${g.alt}">
        <img src="${g.image}" alt="${g.alt}" loading="lazy" decoding="async">
      </button>`
      )
      .join("");
  }

  /* ------------------------------------------------------------
   * renderTestimonials — Carrusel automático
   * ---------------------------------------------------------- */
  function renderTestimonials(config) {
    const container = document.querySelector("[data-testimonials]");
    if (!container) return;
    
    const testimonials = config.testimonials || [];
    if (testimonials.length === 0) {
      container.innerHTML = `<p class="text-light">Próximamente testimonios de nuestras familias.</p>`;
      return;
    }

    // Limpiar container
    container.innerHTML = '';

    // Crear el track de slides
    const track = document.createElement("div");
    track.className = "testimonials-track";
    track.setAttribute("role", "list");

    testimonials.forEach((t, i) => {
      const slide = document.createElement("div");
      slide.className = "testimonial-slide";
      slide.setAttribute("role", "listitem");
      slide.setAttribute("aria-label", `Testimonio ${i + 1} de ${testimonials.length}`);
      slide.innerHTML = `
        <blockquote>${t.text}</blockquote>
        <cite class="author">${t.author}</cite>
        <span class="relation">${t.relation}</span>
      `;
      track.appendChild(slide);
    });

    // Crear dots de navegación
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "testimonials-dots";
    dotsContainer.setAttribute("role", "tablist");

    testimonials.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ver testimonio ${i + 1}`);
      dot.dataset.index = i;
      if (i === 0) dot.classList.add("is-active");
      dotsContainer.appendChild(dot);
    });

    container.appendChild(track);
    container.appendChild(dotsContainer);

    // Estado del carrusel
    let currentIndex = 0;
    const total = testimonials.length;
    let intervalId = null;
    let isPaused = false;

    // Función para actualizar posición
    function goToSlide(index) {
      currentIndex = (index + total) % total;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Actualizar dots
      const dots = dotsContainer.querySelectorAll("button");
      dots.forEach((dot, i) => {
        dot.classList.toggle("is-active", i === currentIndex);
        dot.setAttribute("aria-selected", i === currentIndex);
      });
    }

    // Siguiente slide
    function nextSlide() {
      if (!isPaused) goToSlide(currentIndex + 1);
    }

    // Evento clicks en dots
    dotsContainer.addEventListener("click", (e) => {
      const dot = e.target.closest("button");
      if (!dot) return;
      const index = Number(dot.dataset.index);
      if (!isNaN(index)) {
        isPaused = true;
        goToSlide(index);
        clearInterval(intervalId);
        setTimeout(() => {
          isPaused = false;
          startAutoPlay();
        }, 8000);
      }
    });

    // Auto-play con pausa al hover/touch
    function startAutoPlay() {
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 5000);
    }

    container.addEventListener("mouseenter", () => { isPaused = true; });
    container.addEventListener("mouseleave", () => { 
      isPaused = false; 
      clearInterval(intervalId);
      startAutoPlay();
    });

    container.addEventListener("touchstart", () => { isPaused = true; });
    container.addEventListener("touchend", () => { 
      setTimeout(() => {
        isPaused = false;
        clearInterval(intervalId);
        startAutoPlay();
      }, 3000);
    });

    startAutoPlay();
    goToSlide(0);
  }

  /* ------------------------------------------------------------
   * renderPhones — muestra los teléfonos en el footer y ubicación
   * ---------------------------------------------------------- */
  function renderPhones(config) {
    const phones = config.phones || [];
    const phoneContainers = document.querySelectorAll("[data-phones]");
    
    phoneContainers.forEach(container => {
      container.innerHTML = phones.map(p => 
        `<a href="${p.isWhatsApp ? `https://wa.me/${p.number.replace(/\D/g, '')}` : `tel:${p.number.replace(/\s/g, '')}`}" 
            ${p.isWhatsApp ? 'target="_blank" rel="noopener"' : ''}
            style="display:inline-block; margin:0 0.25rem;">
            ${p.number}
            ${p.isWhatsApp ? '📱' : ''}
          </a>`
      ).join('<span style="color: var(--color-border);"> · </span>');
    });
  }

  /* ------------------------------------------------------------
   * initMobileMenu — (mantenido por compatibilidad, pero oculto en CSS)
   * ---------------------------------------------------------- */
  function initMobileMenu() {
    const toggle = document.querySelector("[data-menu-toggle]");
    const nav = document.querySelector("[data-mobile-nav]");
    if (!toggle || !nav) return;

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }
    function openMenu() {
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
      document.body.classList.add("menu-open");
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      isOpen ? closeMenu() : openMenu();
    });

    nav.addEventListener("click", (e) => {
      if (e.target.matches("a")) closeMenu();
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-open")) closeMenu();
    });
  }

  /* ------------------------------------------------------------
   * initSmoothScroll — for in-page anchor links
   * ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ------------------------------------------------------------
   * initFloatingButtons — oculta botones sin URL configurada
   * ---------------------------------------------------------- */
  function initFloatingButtons(config) {
    if (!config.facebookUrl) {
      document.querySelectorAll(".fab-facebook").forEach((el) => (el.style.display = "none"));
      document.querySelectorAll(".btn-facebook").forEach((el) => (el.style.display = "none"));
    }
    
    if (!config.instagramUrl) {
      document.querySelectorAll(".fab-instagram").forEach((el) => (el.style.display = "none"));
      document.querySelectorAll(".btn-instagram").forEach((el) => (el.style.display = "none"));
    }
  }

  /* ------------------------------------------------------------
   * initGallery — wires gallery buttons to open the lightbox
   * ---------------------------------------------------------- */
  let lightboxState = { items: [], index: 0 };

  function initGallery() {
    const container = document.querySelector("[data-gallery]");
    if (!container) return;
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".gallery-item");
      if (!btn) return;
      const index = Number(btn.dataset.index);
      openLightbox(index);
    });
  }

  /* ------------------------------------------------------------
   * initLightbox
   * ---------------------------------------------------------- */
  function initLightbox(config) {
    lightboxState.items = config.gallery.slice(0, 10);

    const lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;
    const closeBtn = lightbox.querySelector("[data-lightbox-close]");
    const prevBtn = lightbox.querySelector("[data-lightbox-prev]");
    const nextBtn = lightbox.querySelector("[data-lightbox-next]");

    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => stepLightbox(-1));
    nextBtn.addEventListener("click", () => stepLightbox(1));

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });

    let touchStartX = null;
    lightbox.addEventListener("touchstart", (e) => (touchStartX = e.touches[0].clientX), { passive: true });
    lightbox.addEventListener(
      "touchend",
      (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) stepLightbox(dx > 0 ? -1 : 1);
        touchStartX = null;
      },
      { passive: true }
    );
  }

  function openLightbox(index) {
    lightboxState.index = index;
    renderLightboxImage();
    const lightbox = document.querySelector("[data-lightbox]");
    lightbox.classList.add("is-open");
    document.body.classList.add("menu-open");
    lightbox.querySelector("[data-lightbox-close]").focus();
  }

  function closeLightbox() {
    const lightbox = document.querySelector("[data-lightbox]");
    lightbox.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  }

  function stepLightbox(delta) {
    const total = lightboxState.items.length;
    lightboxState.index = (lightboxState.index + delta + total) % total;
    renderLightboxImage();
  }

  function renderLightboxImage() {
    const item = lightboxState.items[lightboxState.index];
    const img = document.querySelector("[data-lightbox-image]");
    const caption = document.querySelector("[data-lightbox-caption]");
    img.src = item.image;
    img.alt = item.alt;
    caption.textContent = item.alt;
  }

  /* ------------------------------------------------------------
   * initScrollAnimations — IntersectionObserver reveal
   * ---------------------------------------------------------- */
  function initScrollAnimations() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ------------------------------------------------------------
   * INIT — entry point
   * ---------------------------------------------------------- */
  function init() {
    const config = loadConfig();
    if (!config) return;

    document.documentElement.lang = "es";

    updateContactLinks(config);
    renderLevels(config);
    renderSchedule(config);
    renderValues(config);
    renderMethodology(config);
    renderSkills(config);
    renderFacilities(config);
    renderGallery(config);
    renderTestimonials(config);
    renderPhones(config);
    applyBrand(config);

    initMobileMenu();
    initSmoothScroll();
    initFloatingButtons(config);
    initGallery();
    initLightbox(config);
    initScrollAnimations();
  }

  // Iniciar cuando el DOM esté listo
  document.addEventListener("DOMContentLoaded", init);

})();