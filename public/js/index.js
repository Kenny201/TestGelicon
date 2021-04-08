"use strict";function _createForOfIteratorHelper(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,t=function(){};return{s:t,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,n=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw n}}}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var db_product={product_1:{alt:"Продукт 1",title:"Продукт 1",images:"./images/bravo-10.png",main:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Aliquam quis rhoncus mi. ",price:"1200"},product_2:{alt:"  Продукт 2",title:"Продукт 2",images:"./images/bravo-20.png",main:" Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. Nunc finibus consequat risus, vel tristique ex dapibus et. Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim.",price:"1400"},product_3:{alt:"  Продукт 3",title:"Продукт 3",images:"./images/bravo-30.png",main:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis rhoncus mi. Duis ultrices augue nunc, sit amet placerat ligula pretium vel. Aenean eget quam ante.  Proin tempus nulla quis erat blandit vehicula.  Aenean eget quam ante. Duis ipsum dui, euismod id tristique id, consectetur vitae enim. ",price:"1600"}},products=document.querySelector(".products__content .row"),createItems=function(){var e=Object.values(db_product).map(function(e,t){var r=e.alt,i=e.title,n=e.images,a=e.main,e=e.price;return'\n        <div class = "product-item_wrap col-sm-10 col-md ">\n        <div class = "product-item ">\n                <div class = "product-item__title">\n                    '.concat(i,'\n                </div>\n                <div class = "product-item__img">\n                    <img src="').concat(n,'" alt="').concat(r,'">\n                </div>\n                <div class="product-item__text">\n                    ').concat(a,'\n                </div>\n                <div class = "product-item__price">\n                    ').concat(Number(e).toLocaleString(),' Руб.\n                </div>\n                <button data-id="').concat(t,'" class="product-item__button " /> Добавить в корзину </button>\n        </div>\n        </div> \n        ')}).join("");products.innerHTML=e};createItems();var buttons=_toConsumableArray(document.querySelectorAll(".product-item__button")),generalPrice=document.querySelector(".price-text__num"),createPrice=function(){var e,r=0,t=_createForOfIteratorHelper(buttons);try{for(t.s();!(e=t.n()).done;)!function(){var t=e.value;t.addEventListener("click",function(){t.disabled=!0,t.innerText="Добавлено";var e=t.parentElement.querySelector(".product-item__price").innerText,e=parseInt(e.replace(/\s+/g,""),10);document.querySelector(".price-text__num").innerText=r+=e})}()}catch(e){t.e(e)}finally{t.f()}};createPrice();