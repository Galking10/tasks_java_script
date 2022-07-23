const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const ulRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const buttonBtn = document.querySelector('.lightbox__button')
const imgRef = document.querySelector('.lightbox__image')
const backdropeRef = document.querySelector('.lightbox__overlay')

ulRef.insertAdjacentHTML('afterbegin', `<li class="gallery__item">
<a
  class="gallery__link"
  href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
>
  <img
    class="gallery__image"
    src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
    data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
    alt="Tulips"
  />
</a>
</li>`);

galleryItems.map((item)=>{
    ulRef.insertAdjacentHTML('afterbegin', `<li class="gallery__item">
<a
  class="gallery__link"
  href=${item.original}
>
  <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt="Tulips"
  />
</a>
</li>`);
})

function closeModal (){
    lightboxRef.classList.remove('is-open')
    imgRef.src = ''
}

let dataSource 
let eTarget

ulRef.addEventListener('click', (e)=>{
    e.preventDefault()
    imgRef.src = e.target.dataset.source
    lightboxRef.classList.add('is-open')
    dataSource = e.target.dataset.source
    eTarget = e.target
})
buttonBtn.addEventListener('click', (e)=>{
    closeModal ()

})

backdropeRef.addEventListener('click', (e)=>{
if(e.target === e.currentTarget){
    closeModal ()
}
})

window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 27){
        closeModal ()
        return
    }

    if(lightboxRef.classList.contains('is-open')){
        if(e.keyCode === 39){
           let link = eTarget.parentNode.parentNode.nextSibling.firstElementChild.href
           
           imgRef.src = link
           eTarget = eTarget.parentNode.parentNode.nextSibling
           console.log(eTarget)
        }
        if(e.keyCode === 37){

        }
    }


})


