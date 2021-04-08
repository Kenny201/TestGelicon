const db_product = {
    product_1: {
        alt: 'Продукт 1',
        title: 'Продукт 1',
        images: './images/bravo-10.png',
        main: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi. ',
        price: '1200',
    },
    product_2: {
        alt: '  Продукт 2',
        title: 'Продукт 2',
        images: './images/bravo-20.png',
        main: ' Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.',
        price: '1400',
    },
    product_3: {
        alt: '  Продукт 3',
        title: 'Продукт 3',
        images: './images/bravo-30.png',
        main: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ',
        price: '1600',
    } 
};

const products = document.querySelector(".products-content .row");

const createItems = () => {
    const item = Object.values(db_product)
    .map(( {alt, title, images,main, price}, index) => (
        `
        <div class = "product-item col-sm-10 col-md ">
                <div class = "product-item__title">
                    ${title}
                </div>
                <div class = "product-item__img">
                    <img src="${images}" alt="${alt}">
                </div>
                <div class="product-item__text">
                    ${main}
                </div>
                <div class = "product-item__price">
                    ${Number(price).toLocaleString()} Руб.
                </div>
                <button data-id="${index}" class="product-item__button " /> Добавить в корзину </button>

        </div> 
        `
    )).join('')
    products.innerHTML = item
}
createItems();

const buttons = [...document.querySelectorAll(".product-item__button")],
generalPrice = document.querySelector(".price-text__num");

const createPrice = () => {
let price = 0;
for (let btn of buttons){
  btn.addEventListener('click', function() {
    btn.disabled = true;
    btn.innerText = "Добавлено";
  	let priceText = btn.parentElement.querySelector(".product-item__price").innerText;
   	let priceNum = parseInt (priceText.replace(/\s+/g, ''),10);
    document.querySelector(".price-text__num").innerText = price += priceNum;
    });
}
};
createPrice();
