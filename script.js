'use strict';

const nav = document.querySelector('.nav__header');
const cartProduct = document.querySelectorAll('.conteiner__cart');

const burgerMenu = document.querySelector('.hamburger__list__menu');

const buttonCard = document.querySelectorAll('.show__product ');
const buttonAddToCart = document.querySelectorAll('.btn__add__to__cart');

const buttonPage = document.querySelector('.button__page');

const buttonSlideForm = document.querySelector('.slider__4__button');

const buttonShowQustion = document.querySelectorAll('.btn__plus');
const buttonFormFooter = document.querySelector('.button__form__footer');

const buttonShowProduct = document.querySelectorAll('.show__product');

const cartCounter = document.querySelectorAll('.goods__in__order ');

const showModalCart = document.querySelector('.show__modal__Cart');
const showModal = document.querySelector('.conteiner__show__modal__overlay '); //
const overlay = document.querySelector('.conteiner__overlay');
const modalOrderReg = document.querySelector('.conteiner__order__registretion');

const fiter = document.querySelector('.conteiner__filter');
const slider = document.querySelectorAll('.conteiner__quetion__slide');

const checkSlider = document.querySelectorAll('.input__slide__1');
const checkSlider2 = document.querySelectorAll('.input__slide2');
const alertSlider = document.querySelector('.alertSlide');
const textAreaSlide3 = document.querySelector('.text__area__slide__3');
const formSlide4 = document.querySelector('.form__slide__4');
const inputEmailSlider = document.querySelector('.inputEmailSlider');
const inputNameSlider = document.querySelector('.inputNameSlider');

const userTel = document.querySelector('.input__form__footer__userTel');

const productSize = document.querySelector(
  '.conteiner__show__modal__select__sizi'
);
const productImage = document.querySelector('.show__product__image');
const modalSlider = document.querySelector('.conteiner__All__img__slider');

const buttonNextSlide = document.querySelector('.button__next__show__modal');
const buttonPrevSlide = document.querySelector('.button__prev__show__modal');
const modalWindowSlider = document.querySelector('.slider');

const buttonProductinCart = document.querySelectorAll('.btn__add__to__cart ');

const priceModal = document.querySelector('.resultSum');
const buttonDeleted = document.querySelector('.button__delted__cart__item');
const buttonShowMore = document.querySelector('.button__show__more');
const buttonDelOrderModal = document.querySelector(
  '.modal__button__deleted__card'
);

const minPriceinput = document.querySelector('.input__min');
const maxPriceInput = document.querySelector('.input__max');
const minRangeInput = document.querySelector('.min-range ');
const maxRangeInput = document.querySelector('.max-range ');
const sliderRange = document.querySelector('.slider-range');

const btnOrderModalWindow = document.querySelector(
  '.button__order__show__modal'
);

//закрпеленая панель навигации при прокпучивание
window.addEventListener('scroll', function () {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add('nav__transporent');
  } else {
    nav.classList.remove('nav__transporent');
  }
});

//счетчик корзины
let counter = 0;

let slide = 0;
//cлайдер
const selectedeValuesSlider = {
  interests: [],
  preferences: [],
  comments: '',
  userInfo: {
    userName: [],
    email: [],
  },
};

buttonPage.addEventListener('click', function () {
  if (slide === 0) {
    const checkedBoxes = Array.from(checkSlider).filter(
      (checkbox) => checkbox.checked
    );
    if (checkedBoxes.length > 0) {
      selectedeValuesSlider.interests = checkedBoxes.map(
        (checkbox) => checkbox.id
      );
      showSlide(slide + 1);
      alertSlider.classList.remove('active');
      console.log(selectedeValuesSlider.interests);
    } else {
      alertSlider.classList.add('active');
    }
  } else if (slide === 1) {
    const checkedBoxespreferences = Array.from(checkSlider2).filter(
      (el) => el.checked
    );
    if (checkedBoxespreferences.length > 0) {
      selectedeValuesSlider.preferences = checkedBoxespreferences.map(
        (el) => el.id
      );

      alertSlider.classList.remove('active');
      showSlide(slide + 1);
    } else {
      alertSlider.classList.add('active');
    }
  } else if (slide === 2) {
    selectedeValuesSlider.comments = textAreaSlide3.value;
    showSlide(slide + 1);
  } else if (slide === 3) {
  }

  console.log(selectedeValuesSlider);
});

buttonSlideForm.addEventListener('click', function (e) {
  e.preventDefault();

  const valueName = inputNameSlider.value.trim();
  const valueEmail = inputEmailSlider.value.trim();

  let isValid = true;

  if (!valueName) {
    inputNameSlider.classList.add('error');
    isValid = false;
  } else {
    inputNameSlider.classList.remove('error');
  }
  if (!valueEmail) {
    inputEmailSlider.classList.add('error');
    isValid = false;
  } else if (!validateEmail(valueEmail)) {
    inputEmailSlider.classList.add('error');
    isValid = false;
  } else {
    inputEmailSlider.classList.remove('error');
  }
  if (isValid) {
    selectedeValuesSlider.userInfo = {
      userName: valueName,
      email: valueEmail,
    };
    inputEmailSlider.classList.remove('error');
    inputNameSlider.classList.remove('error');
    setTimeout(() => showSlide(slide + 1), 5000);
    document.querySelector('.slide__4__img__2').classList.add('active');

    inputEmailSlider.value = '';
    inputNameSlider.value = '';
  }

  console.log(selectedeValuesSlider);
});
function validateEmail(email) {
  const val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return val.test(email);
}

function showSlide(n) {
  slider.forEach((slide) => slide.classList.remove('active'));
  slide = (n + slider.length) % slider.length;
  slider[slide].classList.add('active');
  const spanPage = document.querySelector('.span__page');

  if (slide < 3) {
    spanPage.textContent = slide + 1;
  }
  if (slide === 3) {
    document.querySelector('.conteiner__page').classList.add('opacity');
  } else {
    document.querySelector('.conteiner__page').classList.remove('opacity');
  }
}
/*Часто задаваемые вопросы  */

buttonShowQustion.forEach((el, index) =>
  el.addEventListener('click', function () {
    el.classList.toggle('active');

    const qustion = document.querySelectorAll('.conteiner__show__text');
    qustion[index].classList.toggle('hidden');
  })
);

document
  .querySelectorAll('.questions__number')
  .forEach((el, index) => (el.textContent = index + 1));

/*Форма расположенная в футере  */
document
  .querySelector('.modal__window__quation')
  .addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const button = this.querySelector('button');
    const formData = new FormData(this);
    console.log(formData);
    const formTelUser = formData.get('phone');
    const formNameUser = formData.get('name');
    const originalText = 'Отправить';

    const message = `Новая заявка! \n Имя ${formNameUser} \n телефон: ${formTelUser}`;
    console.log(message);
    button.textContent = 'Отправка...';
    button.disabled = true;

    const botToken = '';
    const CHAT__ID = '';
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },

          body: JSON.stringify({
            chat_id: CHAT__ID,
            text: message,
          }),
        }
      );
      const result = await response.json();
      if (result.ok) {
        button.textContent = 'Отправлено!';
        setTimeout(() => {
          form.reset();
          button.textContent = originalText;
          button.disabled = false;
        }, 4000);
      } else {
        throw new Error('Ошибка Telegram API');
      }
    } catch (error) {
      console.error(error);
      button.textContent = 'Ошибка!';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 4000);
    }
  });

const conteinerProduct = document.querySelector('.conteiner__card__tovar');
const productCard = document.querySelector('.card__tovar');

/*Получени карточки товара   */
let productsData = [];
let productMap = {};
/* Актуальные цены пр фильтрации  */
let currentMinPrice = 0;
let currentMaxPrice = 10000;

const loadProduct = async function () {
  try {
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error('Error loading product');
    }
    productsData = await response.json();
    // productMap = {};

    if (!Array.isArray(productsData)) {
      throw new Error('Invalid products data format');
    }
    productsData.forEach((el) => (productMap[el.id] = el));

    // filteredProducts = productsData;
    displayProducts(5);

    // Иницилизация ползунка после загрузки
    initializePriceSlider();
  } catch (error) {
    console.error('Error', error);
    conteinerProduct.innerHTML = '<p>Не удалось загрузить товары</p>';
  }
};
function initializePriceSlider() {
  const maxProductPrice = Math.max(...productsData.map((el) => el.price));
  minRangeInput.max = maxProductPrice;
  maxRangeInput.max = maxProductPrice;
  maxRangeInput.value = maxProductPrice;

  maxPriceInput.max = maxProductPrice;
  maxPriceInput.value = maxProductPrice;

  currentMaxPrice = maxProductPrice;

  updateSliderVisual();
}

loadProduct();

const cloneProductCard = function (product) {
  const productHTML = `
        <article class="card__tovar">
                <img
                  class="imageProduct"
                  loading="lazy"
                  src="${product.imageUrl}"
                  alt="sneak"
                />
                <p class="nameProduct">${product.name}</p>
                <span class="priceProduct">${product.price}</span>
                <div class="conteiner__button__card">
                  <button data-id = "${product.id}"
                    aria-label="показать товар "
                    class="show__product btn button__card"
                  >
                    <img
                      loading="lazy"
                      src="/image/image__section__1/button__section__1/Смотреть товар.png"
                      alt="покозать товар"
                    />
                  </button>
                  <button data-id = "${product.id}"
                    aria-label="Добавить в корзину"
                    class="btn__add__to__cart btn button__card"
                  >
                    <img
                      loading="lazy"
                      src="/image/image__section__1/button__section__1/Добавить в корзину.png"
                      alt="add__in__cart"
                    />
                  </button>
                </div>
              </article>
    `;
  conteinerProduct.insertAdjacentHTML('beforeend', productHTML);
};

const displayProducts = function (limit = null) {
  conteinerProduct.innerHTML = ' ';

  const productsShow1 = limit ? productsData.slice(0, limit) : productsData;

  productsShow1.forEach((el) => cloneProductCard(el));

  if (limit && productsData.length > limit) {
    buttonShowMore.style.display = 'block';
  } else {
    buttonShowMore.style.display = 'none';
  }
};

function showProduct(selector, id) {
  return (document.querySelector(selector).textContent = id);
}

/*работа с модальным окном при просмотре товара  */
function showProductSize(size, selector) {
  const productSize = ` <label class="conteiner__select__size">
                        <input class="input__checked" type="checkbox" name="size" value="${size}" />
                        <span>${size}</span>
                      </label>`;
  document
    // .querySelector('.conteiner__show__modal__select__sizi')
    .querySelector(selector)
    .insertAdjacentHTML('beforeend', productSize);
}

let buttonOpen = 0;

function sliderModal(slide, selector) {
  const imageSlide = `          <img
  class="sliderModalWindow"

                        id="imagetest"
                        loading="lazy"
                        src="${slide}"
                        alt="sneakBoots"
                      />`;
  selector.insertAdjacentHTML('beforeend', imageSlide);
}

function imageSliderModalWindow(par) {
  productMap[buttonOpen].imageSlider.forEach((el) => sliderModal(el, par));
}
let indexSlide = 0;
let selectedSize = [];
// document.addEventListener('click', async function (e) {
//   let currentProduct = {};
//   if (e.target.closest('.show__product')) {
//     resetModal();
//     const parent = document.querySelector('.conteiner__All__img__slider');
//     buttonOpen = e.target.closest('.show__product').dataset.id;
//     console.log(buttonOpen);
//     console.log(productMap[buttonOpen]);
//     currentProduct = productMap[buttonOpen];
//     console.log('Helllo ', currentProduct);

//     showProduct('.article__product', productMap[buttonOpen].article);
//     showProduct('.title__product__show__modal', productMap[buttonOpen].name);
//     showProduct('.new__price', productMap[buttonOpen].price);

//     productImage.src = productMap[buttonOpen].imageUrl;

//     productMap[buttonOpen].size.forEach((el) =>
//       showProductSize(el, '.conteiner__show__modal__select__sizi')
//     );
//     imageSliderModalWindow(modalSlider);

//     document
//       .querySelector('.conteiner__show__modal__overlay')
//       .classList.add('active');

//     parent.addEventListener('click', function (e) {
//       const currentSlide = e.target;
//       productImage.src = currentSlide.src;
//       console.log(currentSlide);
//       const sliderModalWindow = document.querySelectorAll('.sliderModalWindow');
//       console.log(sliderModalWindow);

//       sliderModalWindow.forEach((el, index) => {
//         el.classList.remove('active');
//         if (el.src === currentSlide.src) {
//           console.log(el, index);
//           indexSlide = index;
//         }
//       });
//       currentSlide.classList.add('active');
//     });
//   }
// });

// Вместо этого используем делегирование событий
document.addEventListener('click', function (e) {
  //бургер
  if (e.target.closest('.hamburger_button')) {
    console.log('burgerClick');
    const buttonHumburger = e.target.closest('.hamburger_button');
    buttonHumburger.classList.toggle('open');
    if (buttonHumburger.classList.contains('open')) {
      // burgerMenu.classList.toggle('active');
      // document.body.classList.toggle('no-scroll'); // прокрутка страницы
      burgerMenu.classList.add('active');
      document.body.classList.add('no-scroll'); // прокрутка страницы
    } else {
      burgerMenu.classList.remove('active');
      document.body.classList.remove('no-scroll'); // прокрутка страницы}
    }
  }
  //overlay
  if (e.target.closest('.conteiner__overlay')) {
    const overlay = e.target.closest('.conteiner__overlay');
    if (e.target === overlay) {
      overlay.classList.remove('active');

      document.body.classList.remove('no-scroll');
      showModalCart.classList.remove('active');
      modalOrderReg.classList.remove('active');
    }
  }
  //показать весь список карточек
  if (e.target.closest('.button__show__more')) {
    if (buttonShowMore.classList.contains('active')) {
      displayProducts(5);
      buttonShowMore.textContent = 'Показать еще ';
      buttonShowMore.classList.remove('active');
    } else {
      displayProducts(productsData.length);
      buttonShowMore.textContent = 'Скрыть';
      buttonShowMore.classList.add('active');
    }
  }

  // Обработка кнопки "Заказать"
  if (e.target.closest('.button__order__show__modal')) {
    const checkInputSelSize = document.querySelectorAll('.input__checked');
    let hasSelectedSize = false;

    checkInputSelSize.forEach((el) => {
      if (el.checked) {
        hasSelectedSize = true;
        selectedSize.push(el.value);
        console.log('click checked');
        console.log(selectedSize);
      }
    });

    if (hasSelectedSize) {
      console.log(buttonOpen);
      console.log(productMap[buttonOpen].price);
      arrayCartCounter.push({
        id: productMap[buttonOpen].id,
        size: selectedSize,
        price: productMap[buttonOpen].price,
      });

      // Закрываем модальное окно после добавления
      resetModal();
      modalSlider.innerHTML = '';
      productSize.innerHTML = '';
      showModal.classList.remove('active');
      document.body.classList.remove('no-scroll');
      numberItemsInCart();
    }
  }

  //показать фильтры
  if (e.target.closest('.button__span__close__open__filter')) {
    const openButtonFilter = e.target.closest(
      '.button__span__close__open__filter'
    );
    fiter.classList.toggle('active');
    if (fiter.classList.contains('active')) {
      openButtonFilter.textContent = 'скрыть фильтры ';
    } else {
      openButtonFilter.textContent = 'показать  фильтры ';
    }
  }

  if (e.target.closest('.btn__add__to__cart ')) {
    buttonInCart = e.target.closest('.btn__add__to__cart ').dataset.id;
    // buttonInCart = Number(e.target.closest('.btn__add__to__cart ').dataset.id);
    // console.log(buttonInCart);

    if (productMap[buttonInCart]) {
      arrayCartCounter.push({
        id: productMap[buttonInCart].id.toString(), //toString()
        size: productMap[buttonInCart].size,
        price: productMap[buttonInCart].price,
      });
    }
    // sumReasultAndcounter(cartCounter);
    numberItemsInCart();
  }

  if (e.target.closest('.show__product')) {
    let currentProduct = {};
    if (e.target.closest('.show__product')) {
      resetModal();
      const parent = document.querySelector('.conteiner__All__img__slider');
      buttonOpen = e.target.closest('.show__product').dataset.id;
      console.log(buttonOpen);
      console.log(productMap[buttonOpen]);
      currentProduct = productMap[buttonOpen];
      console.log('Helllo ', currentProduct);

      showProduct('.article__product', productMap[buttonOpen].article);
      showProduct('.title__product__show__modal', productMap[buttonOpen].name);
      showProduct('.new__price', productMap[buttonOpen].price);

      productImage.src = productMap[buttonOpen].imageUrl;

      productMap[buttonOpen].size.forEach((el) =>
        showProductSize(el, '.conteiner__show__modal__select__sizi')
      );
      imageSliderModalWindow(modalSlider);

      document
        .querySelector('.conteiner__show__modal__overlay')
        .classList.add('active');

      parent.addEventListener('click', function (e) {
        const currentSlide = e.target;
        productImage.src = currentSlide.src;
        console.log(currentSlide);
        const sliderModalWindow =
          document.querySelectorAll('.sliderModalWindow');
        console.log(sliderModalWindow);

        sliderModalWindow.forEach((el, index) => {
          el.classList.remove('active');
          if (el.src === currentSlide.src) {
            console.log(el, index);
            indexSlide = index;
          }
        });
        currentSlide.classList.add('active');
      });
    }

    // const button = e.target.closest('.show__product');
    // const productId = button.dataset.id;

    // if (productMap[productId]) {
    //   showModal.classList.add('active');
    //   document.body.classList.add('no-scroll');

    //   showModal.addEventListener('click', function (e) {
    //     if (e.target === showModal) {
    //       resetModal();
    //       modalSlider.innerHTML = '';
    //       productSize.innerHTML = '';
    //       showModal.classList.remove('active');
    //       document.body.classList.remove('no-scroll');
    //     }
    //   });
    // }
  }

  if (e.target.closest('.conteiner__cart')) {
    modalCart.textContent = '';
    currentPrice = 0;

    overlay.classList.add('active');
    showModalCart.classList.add('active');
    document.body.classList.add('no-scroll');

    arrayCartCounter.forEach((el) => showCartProduct(el.id));

    const showModalInputChecked = document.querySelectorAll(
      '.showModal__InputChecked '
    );

    const itemCart = document.querySelectorAll('.conteiner__item__cart');
    const modalConteiner = document.querySelector(
      '.modal__conteiner__Card__tovar'
    );
    let currentCheck = [];
    let checked = [];
    let conteinerModal = '';
    modalConteiner.addEventListener('change', function (e) {
      console.log(e.target.closest('.conteiner__item__cart'));

      const inputCheck = modalConteiner.querySelectorAll('input:checked');
      checked = [];
      let checkPrice = 0;

      inputCheck.forEach((el) => {
        if (
          e.target.closest('.conteiner__item__cart').dataset.id ==
          el.closest('.conteiner__item__cart').dataset.id
        ) {
          checked.push(el.value);

          conteinerModal = el.closest('.conteiner__item__cart');

          currentCheck = [];
          currentCheck.push({
            id: conteinerModal.dataset.id,
            size: checked,
            price: conteinerModal.dataset.price,
          });

          checkPrice = 0;
          checkPrice += Number(
            currentCheck.map((el) => Number(el.price) * Number(el.size.length))
          );

          conteinerModal.setAttribute('data-checkPrice', checkPrice);
        }
      });
      console.log(itemCart);
      let modalCurrentPrice = 0;
      itemCart.forEach((el) => {
        console.log(el);
        modalCurrentPrice =
          Number(modalCurrentPrice) + Number(el.dataset.checkprice);
        console.log(modalCurrentPrice);
      });
      console.log(checked);
      document.querySelector('.modal__currentPrice ').textContent =
        modalCurrentPrice;
      if (checked.length > 0) {
        console.log(currentCheck);
      }
    });

    sumReasultAndcounter();
  }

  if (e.target.closest('.shopp__cart')) {
    //buttonShopCart.addEventListener('click', function () {
    const conteinerCards = document.querySelectorAll('.conteiner__item__cart');

    let isChecked = false;
    const sizesByProduct = {}; // Объект для группировки размеров по ID товара

    conteinerCards.forEach((conteiner) => {
      const checkboxes = conteiner.querySelectorAll('.input__checked');
      const productId = conteiner.dataset.id;

      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          isChecked = true;
          if (!sizesByProduct[productId]) {
            sizesByProduct[productId] = [];
          }
          sizesByProduct[productId].push(checkbox.value);
        }
      });

      if (isChecked) {
        // Преобразуем объект в массив нужного формата
        currentOrderSize = Object.entries(sizesByProduct).map(
          ([id, sizes, price]) => ({
            id: id,
            sizes: sizes,
            price: productMap[id] ? productMap[id].price : 0,
          })
        );

        console.log(currentOrderSize); // Теперь будет выводить: [{id: "123", sizes: ["39", "41"]}]

        order.innerHTML = '';
        modalOrderReg.classList.add('active');
        showModalCart.classList.remove('active');

        arrayCartCounter.forEach((el) => registrProduct(el.id));
        currentPrice = 0;
        sumReasultAndcounter();
      }

      finalPrice();
    });
  }

  if (e.target.closest('.modal__button__deleted__card')) {
    deletedProduct(
      e,
      '.modal__button__deleted__card',
      '.conteiner_order_registration__card__tovar',
      priceModal,
      cartCounter
    );
    finalPrice();
    console.log('code goods');
  }

  if (e.target.closest('.button__input__checkbox__apply')) {
    productsFilter();

    updateSlider();
  }
  // Остальная логика обработки кликов...

  if (e.target.closest('.button__input__checkbox__reset')) {
    /*Сброс фильтров  */
    //buttonResetFilter.addEventListener('click', function () {
    inputChecked.forEach((checkbox) => (checkbox.checked = false));
    genderCheckbox.forEach((checkbox) => (checkbox.checked = false));

    const maxProductPrice = Math.max(
      ...productsData.map((product) => product.price)
    );
    minRangeInput.value = 0;
    maxRangeInput.value = maxProductPrice;
    minPriceinput.value = 0;
    maxPriceInput.value = maxProductPrice;

    currentMinPrice = 0;
    currentMaxPrice = maxProductPrice;
    currentSizes = [];
    currentGender = [];

    updateSliderVisual();

    displayProducts(5);
    buttonShowMore.style.display = 'block';
    buttonShowMore.textContent = 'Показать еще';
    //});
  }
});

function resetModal() {
  const checkboxes = document.querySelectorAll('.input__checked');
  checkboxes.forEach((checkbox) => (checkbox.checked = false));

  selectedSize = [];
}

/*слайдер в модальном окне при просмотре товара  */

function slideModalWindow(n) {
  const sliderModalWindow = document.querySelectorAll('.sliderModalWindow');
  console.log(sliderModalWindow);

  sliderModalWindow.forEach((el) => {
    el.classList.remove('active');
  });

  indexSlide = n % sliderModalWindow.length;

  sliderModalWindow[indexSlide].classList.add('active');
  console.log(sliderModalWindow[indexSlide]);
  if (sliderModalWindow[indexSlide].classList.contains('active')) {
    console.log('goood');
    const src = sliderModalWindow[indexSlide].src;
    console.log(src);
    document.querySelector('.show__product__image').src = src;
  }
}

buttonNextSlide.addEventListener('click', function () {
  slideModalWindow(indexSlide + 1);
});
buttonPrevSlide.addEventListener('click', function () {
  slideModalWindow(indexSlide - 1);
});
/*Выбор чекбокса в модальном окне и активная кнопка заказать  */

/*Колличество товаров в корзине  */
let buttonInCart = 0;

const modalCart = document.querySelector('.modal__conteiner__Card__tovar');
/*Просмотр корзины и добовление товаров в корзину  */

function showCartProduct(par) {
  if (!productMap[par]) {
    console.error(`Товар с ID ${par} не найден`);
    return;
  }
  const cartItem = arrayCartCounter.find(
    (item) => item.id.toString() === par.toString()
  );
  // const sizesHTML = cartItem
  //   ? cartItem.size
  //       .map(
  //         (size) => `
  //   <label class="conteiner__select__size">
  //     <input class=" showModal__InputChecked input__checked" type="checkbox" name="size" value="${size}" />
  //     <span>${size}</span>
  //   </label>
  // `
  //       )
  //       .join('')
  //   : '';
  const sizesHTML =
    cartItem && cartItem.size
      ? cartItem.size
          .map(
            (size) => `
        <label class="conteiner__select__size">
          <input class="showModal__InputChecked input__checked" type="checkbox" name="size" value="${size}" />
          <span>${size}</span>
        </label>
      `
          )
          .join('')
      : '';

  const cart = `<div class="conteiner__cards " ">
    <img
      loading="lazy"
      class="img__show__modal__cart"
      src="${productMap[par].imageUrl}"
      alt="Group2"
    />
    <div class="conteiner__item__cart" data-id="${par}" data-price="${productMap[par].price}">
      <div class="conteinerNameAndDeleted"> 
        <h2>${productMap[par].name}</h2>
        <button data-id="${par}"
          aria-label="кнопка корзины"
          class="btn button__delted__cart__item"
        >
          <img
            loading="lazy"
            src="/image/imageshowModal/showmodalCart/btncart.png"
            alt="btnCart"
          />
        </button>
      </div>
      <p><span >${productMap[par].price}</span>P</p>
      <div class="conteiner__sizeShowModal">Размер: ${sizesHTML}</div>
    </div>
  </div>`;

  modalCart.insertAdjacentHTML('beforeend', cart);
}

let currentPrice = 0;
let arrayCartCounter = [];

function numberItemsInCart() {
  cartCounter.forEach((el) => (el.textContent = arrayCartCounter.length));
}

function sumReasultAndcounter() {
  priceModal.textContent = currentPrice;
  numberItemsInCart();
}

function deletedProduct(e, selector, conteiner) {
  if (e.target.closest(selector)) {
    finalPrice();
    currentPrice = 0;
    const btnDeleted = e.target.closest(selector).dataset.id;
    e.target.closest(conteiner).remove();
    arrayCartCounter.forEach((el, index) => {
      if (el.id.toString() === btnDeleted.toString()) {
        arrayCartCounter.splice(index, 1);
      }
    });
    sumReasultAndcounter();
    numberItemsInCart();
  }
}

/*удаление товаров из корзины  */
document.addEventListener('click', function (e) {
  deletedProduct(
    e,
    '.button__delted__cart__item',
    '.conteiner__cards',
    cartCounter
  );
  finalPrice();
});

/*переход к оформлениею товаров в корзине  */
//Модальное окно оформление заказа
const order = document.querySelector('.product');

let currentOrderSize = [];

// function finalPrice() {
//   let totalPrice = 0;

//   // Подсчитываем общую стоимость всех товаров в корзине
//   arrayCartCounter.forEach((item) => {
//     if (item && item.price) {
//       // Каждый товар учитывается один раз, независимо от количества размеров
//       totalPrice += parseInt(item.price);
//     }
//   });

//   const priceElement = document.querySelector('.resultSum');
//   if (priceElement) {
//     priceElement.textContent = totalPrice;
//   }

//   return totalPrice;
// }
// function finalPrice() {
//   let totalPrice = 0;

//   // Правильный подсчет: учитываем выбранные размеры
//   currentOrderSize.forEach((item) => {
//     if (item && item.price && item.sizes) {
//       // Умножаем цену товара на количество выбранных размеров
//       totalPrice += parseInt(item.price) * item.sizes.length;
//     }
//   });

//   const priceElement = document.querySelector('.resultSum');
//   if (priceElement) {
//     priceElement.textContent = totalPrice;
//   }

//   return totalPrice;
// }
// function finalPrice() {
//   let totalPrice = 0;

//   // Правильный подсчет: учитываем выбранные размеры
//   if (currentOrderSize && Array.isArray(currentOrderSize)) {
//     currentOrderSize.forEach((item) => {
//       if (item && item.price && item.sizes) {
//         // Умножаем цену товара на количество выбранных размеров
//         totalPrice += parseInt(item.price) * item.sizes.length;
//       }
//     });
//   }

//   const priceElement = document.querySelector('.resultSum');
//   if (priceElement) {
//     priceElement.textContent = totalPrice;
//   }

//   return totalPrice;
// }
function finalPrice() {
  let totalPrice = 0;

  if (currentOrderSize && Array.isArray(currentOrderSize)) {
    currentOrderSize.forEach((item) => {
      if (item && item.price && item.sizes && Array.isArray(item.sizes)) {
        totalPrice += parseInt(item.price) * item.sizes.length;
      }
    });
  }

  const priceElement = document.querySelector('.resultSum');
  if (priceElement) {
    priceElement.textContent = totalPrice;
  }

  return totalPrice;
}

function registrProduct(index) {
  const productSizes = currentOrderSize.find(
    (el) => el.id.toString() === index.toString()
  );
  // const productSizes = currentOrderSize.find((el) => el.id == index);

  let sizesHTML = '';
  let quantity = 0; // количество выбранных размеров
  // Формируем HTML для размеров
  if (productSizes && productSizes.sizes.length > 0) {
    sizesHTML = productSizes.sizes.map((item) => `<p>${item}</p>`).join('');
    quantity = productSizes.sizes.length;
    console.log('veryy good');
  }
  const productPrice = productMap[index].price;
  const totalProductPrice = productPrice * quantity;

  const product = `
   <div class = "conteiner_order_registration__card__tovar" data-price = "${productMap[index].price}">
   <img
            loading="lazy"
            src="${productMap[index].imageUrl}"
            alt="sneak2"
          />
          <div class="conteiner__name__and__sum__card__tovar">
            <h3>${productMap[index].name} ${sizesHTML} </h3>
            <h2><span class = "product__Price" data-price = "${productPrice}" data-quantity = "${quantity}">${totalProductPrice}</span>р</h2>
          </div>
          <button data-id = "${index}"
            aria-label="кнопкаудалить"
            class="modal__button__deleted__card"
          >
            Удалить
          </button> </div>`;
  order.insertAdjacentHTML('beforeend', product);
}
/*Удаление товара из модального окна оформления заказа  */

/*Имплимитация фильтров по размеру   */
const inputChecked = document.querySelectorAll('.inputCheckbox');
const genderCheckbox = document.querySelectorAll('.input__gender');
const inputMan = document.querySelector('.input__man');
const inputWoman = document.querySelector('.input__wooman');

// Обработчик для мужского чекбокса
inputMan.addEventListener('change', function () {
  if (this.checked) {
    inputWoman.checked = false;
  }
});

// Обработчик для женского чекбокса
inputWoman.addEventListener('change', function () {
  if (this.checked) {
    inputMan.checked = false;
  }
});

let currentSizes = [];
let currentGender = [];
let filteredProducts;

function productsFilter() {
  filteredProducts = [...productsData];
  const selectedCheckboxes = Array.from(inputChecked).filter(
    (el) => el.checked
  );
  const selectedSize = selectedCheckboxes.map((checkbox) => checkbox.value);

  if (selectedSize.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.size.some((size) => selectedSize.includes(size.toString()))
    );
  }
  /*Ползунок прайс  */
  filteredProducts = filteredProducts.filter(
    (product) =>
      product.price >= currentMinPrice && product.price <= currentMaxPrice
  );

  //gender
  const genderSelectedCheckbox = Array.from(genderCheckbox).filter(
    (el) => el.checked
  );

  const genderSelected = genderSelectedCheckbox.map(
    (checkbox) => checkbox.value
  );

  if (genderSelected.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.gender == genderSelected.join()
    );
  }

  currentSizes = selectedSize;
  currentGender = genderSelected;

  displayFilteredeProducts(filteredProducts);
}

function filteredeProductsBySize(selSize) {
  if (selSize.length === 0) {
    console.log('baaad');
  }
  productsFilter();
}

function displayFilteredeProducts(filteredProducts) {
  conteinerProduct.innerHTML = '';

  filteredProducts.forEach((product) => {
    cloneProductCard(product);
  });
  buttonShowMore.style.display = 'none';
}

/*Функция для визуального обновления ползунка без фильтров  */

function updateSliderVisual() {
  const minVal = parseInt(minRangeInput.value);
  const maxVal = parseInt(maxRangeInput.value);

  const minPercent = (minVal / maxRangeInput.max) * 100;
  const maxPercent = (maxVal / maxRangeInput.max) * 100;

  sliderRange.style.left = minPercent + '%';
  sliderRange.style.width = maxPercent - minPercent + '%';
}

function updateSlider() {
  const minVal = parseInt(minRangeInput.value);
  const maxVal = parseInt(maxRangeInput.value);

  minPriceinput.value = minVal;
  maxPriceInput.value = maxVal;

  currentMinPrice = minVal;
  currentMaxPrice = maxVal;

  updateSliderVisual();
  productsFilter();
}
/*Обновление ползунка  */
minRangeInput.addEventListener('input', function () {
  if (parseInt(minRangeInput.value) > parseInt(maxRangeInput.value)) {
    minRangeInput.value = maxRangeInput.value;
  }
  updateSlider();
});
maxRangeInput.addEventListener('input', function () {
  if (parseInt(maxRangeInput.value) < parseInt(minRangeInput.value)) {
    maxRangeInput.value = minRangeInput.value;
  }
  updateSlider();
});
/*Добовление обработчика для прямого ввода  */
minPriceinput.addEventListener('input', function () {
  let value = parseInt(this.value) || 0;
  if (value > parseInt(maxPriceInput.value)) {
    value = parseInt(maxPriceInput.value);
  }
  minRangeInput.value = value;
  updateSlider();
});

maxPriceInput.addEventListener('input', function () {
  let value = parseInt(this.value) || parseInt(maxRangeInput.max);
  if (value < parseInt(minPriceinput.value)) {
    value = parseInt(minPriceinput.value);
  }
  maxRangeInput.value = value;
  updateSlider();
});

/*Сброс фильтров  */

/*Добовление обработчика на чекбоксы  */
inputChecked.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    productsFilter();
  });
});
genderCheckbox.forEach((checkbox) => {
  checkbox.addEventListener('change', function () {
    productsFilter();
  });
});
