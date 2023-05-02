import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imageContainer.addEventListener("click", onImageContainerClick);

function createImageCardsMarkup(Items) {
  return Items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onImageContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  console.log(evt.target);
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscClick);
        console.log("onShow", instance);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscClick);
        console.log("onClose", instance);
      },
    }
  );

  instance.show();

  function onEscClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
