// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryItemsMarkup(galleryItems);


//----Створення розмітки-------------------

function createGalleryItemsMarkup(gallery) {

    const galleryMarkup = gallery.reduce((acc,{preview, original, description}) =>{
      return acc + `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    }, '');
    
    return galleryMarkup;
};

//---галерея SimpleLightbox---------------

const lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay: 250});

