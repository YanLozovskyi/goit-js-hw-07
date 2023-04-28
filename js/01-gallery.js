import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);

imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

imageContainer.addEventListener("click", onImageContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      // const { preview, original, description } = item;
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

  const parent = evt.target.closest(".gallery__link");
  
}
