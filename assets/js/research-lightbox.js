(function () {
  const selectors = [
    '.taco-figure img',
    '.xray-figure img',
    '.xray-card img'
  ].join(', ');

  function getCaption(img) {
    const figure = img.closest('figure');
    if (figure) {
      const caption = figure.querySelector('figcaption');
      if (caption) return caption.textContent.trim();
    }

    const card = img.closest('.xray-card');
    if (card) {
      const heading = card.querySelector('h3');
      if (heading) return heading.textContent.trim();
    }

    return img.getAttribute('alt') || '';
  }

  function ensureLightbox() {
    let lightbox = document.querySelector('.research-lightbox');
    if (lightbox) return lightbox;

    lightbox = document.createElement('div');
    lightbox.className = 'research-lightbox';
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Expanded research figure');
    lightbox.innerHTML = `
      <div class="research-lightbox__panel">
        <button class="research-lightbox__close" type="button" aria-label="Close expanded image">×</button>
        <img class="research-lightbox__image" alt="">
        <a class="research-lightbox__open-original" href="#" target="_blank" rel="noopener">Open image</a>
        <p class="research-lightbox__caption"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox || event.target.closest('.research-lightbox__close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') closeLightbox();
    });

    return lightbox;
  }

  function openLightbox(img) {
    const lightbox = ensureLightbox();
    const expanded = lightbox.querySelector('.research-lightbox__image');
    const caption = lightbox.querySelector('.research-lightbox__caption');
    const original = lightbox.querySelector('.research-lightbox__open-original');

    expanded.src = img.currentSrc || img.src;
    expanded.alt = img.alt || 'Expanded research figure';
    caption.textContent = getCaption(img);
    original.href = img.currentSrc || img.src;

    lightbox.classList.add('is-open');
    document.body.classList.add('research-lightbox-lock');
    lightbox.querySelector('.research-lightbox__close').focus();
  }

  function closeLightbox() {
    const lightbox = document.querySelector('.research-lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('research-lightbox-lock');
  }

  function init() {
    document.querySelectorAll(selectors).forEach(function (img) {
      if (img.dataset.lightboxReady === 'true') return;
      img.dataset.lightboxReady = 'true';
      img.setAttribute('tabindex', '0');
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'Open image in larger view');
      img.addEventListener('click', function () { openLightbox(img); });
      img.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openLightbox(img);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
