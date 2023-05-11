// импортируем массив с данными для галереи из внешнего модуля
import { galleryItems } from "./gallery-items.js";

// выводим содержимое массива в консоль для проверки
console.log(galleryItems);

// получаем элемент контейнера галереи и генерируем разметку карточек с изображениями
const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);

// добавляем разметку карточек в контейнер галереи
imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);
// добавляем обработчик события клика на контейнер галереи
imageContainer.addEventListener("click", onImageContainerClick);

// функция для генерации разметки карточек изображений
function createImageCardsMarkup(Items) {
  return Items.map(({ preview, original, description }) => {
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
  }).join("");
}

// функция обработки клика на контейнер галереи
function onImageContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  // проверяем, что кликнули именно на изображение в карточке
  if (!isGalleryImageEl) {
    return;
  }
  console.log(evt.target);
  // создаем экземпляр lightbox с выбранным изображением
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      // добавляем обработчик события нажатия на клавишу Esc при открытом lightbox
      onShow: () => {
        window.addEventListener("keydown", onEscClick);
        console.log("onShow", instance);
      },
      // удаляем обработчик события нажатия на клавишу Esc при открытом lightbox
      onClose: () => {
        window.removeEventListener("keydown", onEscClick);
        console.log("onClose", instance);
      },
    }
  );
  
  // открываем lightbox
  instance.show();

  // функция обработки нажатия на клавишу Esc при открытом lightbox
  function onEscClick(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
