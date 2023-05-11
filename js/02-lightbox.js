// импортируем массив с данными для галереи из внешнего модуля
import { galleryItems } from "./gallery-items.js";

// выводим содержимое массива в консоль для проверки

console.log(galleryItems);

// получаем элемент контейнера галереи и генерируем разметку карточек с изображениями

const imageContainer = document.querySelector(".gallery");
const cardsMarkup = createImageCardsMarkup(galleryItems);

// добавляем разметку карточек в контейнер галереи
imageContainer.insertAdjacentHTML("beforeend", cardsMarkup);

// функция для генерации разметки карточек изображений
function createImageCardsMarkup(Items) {
  return Items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  }).join("");
}

// Далее код инициализирует объект SimpleLightbox и связывает его с изображениями, используя селектор '.gallery a', и присваивает ему параметры.
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
