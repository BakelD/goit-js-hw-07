import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

function renderGalleryItems(galleryItems) {
  const markup = galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join('');

  galleryRef.insertAdjacentHTML('beforeend', markup);
}

function onOpenModal(e) {
  e.preventDefault();
  const image = e.target;

  if (image.tagName !== 'IMG') {
    return;
  }

  const url = image.dataset.source;

  const instance = basicLightbox.create(`<img src="${url}" width="800" height="600">`, {
    onClose: instance => {
      document.body.removeEventListener('keydown', onCloseEsc);
    },
  });

  instance.show();

  document.body.addEventListener('keydown', onCloseEsc);

  function onCloseEsc(e) {
    if (e.code !== 'Escape') {
      return;
    }

    instance.close();
  }
}

galleryRef.addEventListener('click', onOpenModal);

renderGalleryItems(galleryItems);
