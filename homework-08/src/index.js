const galleryItems = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];
  
  const ulRef = document.querySelector(".js-gallery");
  const lightboxRef = document.querySelector(".js-lightbox");
  const buttonBtn = document.querySelector(".lightbox__button");
  const imgRef = document.querySelector(".lightbox__image");
  const backdropeRef = document.querySelector(".lightbox__overlay");
  
  galleryItems.map((item) => {
    ulRef.insertAdjacentHTML(
      "afterbegin",
      `<li class="gallery__item">
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
  </li>`
    );
  });
  
  function closeModal() {
    lightboxRef.classList.remove("is-open");
    imgRef.src = "";
  }
  
  // Ссылка на картинку для модалки
  let dataSource;
  
  // Ссылка элемент картинки
  let eTarget;
  
  // Слушатель для открытия модалки
  ulRef.addEventListener("click", (e) => {
    e.preventDefault();
    imgRef.src = e.target.dataset.source;
    lightboxRef.classList.add("is-open");
    dataSource = e.target.dataset.source;
    eTarget = e.target;
  });
  buttonBtn.addEventListener("click", (e) => {
    closeModal();
  });
  
  // Слушатель для закрытия модалки
  backdropeRef.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  });
  
  window.addEventListener("keydown", (e) => {
    // Закрытие модалки по ESC
    if (e.keyCode === 27) {
      closeModal();
      return;
    }
  
    // Переключаем на следующую картинку
    if (lightboxRef.classList.contains("is-open")) {
      if (e.keyCode === 39) {
        // Если нет следующего елемента выходим
        if (!eTarget.parentNode.parentNode.nextSibling) return;
  
        // Ссылка на следующую картинку
        let link =
          eTarget.parentNode.parentNode.nextSibling.firstElementChild.href;
  
        imgRef.src = link;
  
        // Перезаписываем ссылку на текущий элемент
        eTarget =
          eTarget.parentNode.parentNode.nextSibling.firstElementChild
            .firstElementChild;
      }
  
      // Переключаем на предыдущую картинку
      if (e.keyCode === 37) {
        // Если нет предыдущего елемента выходим
        if (!eTarget.parentNode.parentNode.previousSibling) return;
  
        // Ссылка на предыдущую картинку
        let link =
          eTarget.parentNode.parentNode.previousSibling.firstElementChild.href;
  
        imgRef.src = link;
  
        // Перезаписываем ссылку на текущий элемент
        eTarget =
          eTarget.parentNode.parentNode.previousSibling.firstElementChild
            .firstElementChild;
      }
    }
  });
  