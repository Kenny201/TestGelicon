const db_product = {
    product_1: {
        images: './images/select__item-img01.png',
        alt: '  Продукт 1',
        title: 'Продукт 1',
        price: '1200',
    },
    product_2: {
        images: './images/select__item-img02.png',
        alt: '  Продукт 2',
        title: 'Продукт 2',
        price: '1400',
    },
    product_3: {
        images: './images/select__item-img03.png',
        alt: '  Продукт 3',
        title: 'Продукт 3',
        price: '1600',
    },
    product_4: {
        images: './images/select__item-img04.png',
        alt: '  Продукт 4',
        title: 'Продукт 4',
        price: '1200',
    },
    product_5: {
        images: './images/select__item-img02.png',
        alt: '  Продукт 5',
        title: 'Продукт 5',
        price: '1400',
    },
    product_6: {
        images: './images/select__item-img01.png',
        alt: 'Продукт 6',
        title: 'Продукт 6',
        price: '1600',
    }
};

const products = document.querySelector(".products");

const createItems = () => {
    const item = Object.values(db_product)
    .map(( {images, alt, title, price}, index) => (
        `
        <div class = ".products__item .item">
                <div class = ".item__img">
                    <img src="${images}" alt="${alt}">
                </div>
                <div class = ".item__title">
                    ${title}
                </div>
                <div class = ".item__price">
                    ${Number(price).toLocaleString()}
                </div>
                <button data-id="${index}" class="item__button" /> Добавить в корзину </button>

        </div> 
        `
    )).join('')
    products.innerHTML = item
}
createItems();

const buttons = [...document.querySelectorAll(".item__button")],
generalPrice = document.querySelector('.general-price');

const createPrice = () => {
let price = 0;
let elements = buttons.forEach(function(item) { 
  item.addEventListener('click', function() {
    item.disabled = true;
  	let priceText = item.parentElement.querySelector(".item__price").innerText;
   	let priceNum = parseInt(priceText.replace(/\s+/g, ''),10);
    generalPrice.innerText = price += priceNum;
    console.log(aNum);
    });
});
};
createPrice();
