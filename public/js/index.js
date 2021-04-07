const db_product={product_1:{images:"./images/select__item-img01.png",alt:"  Продукт 1",title:"Продукт 1",price:"1200"},product_2:{images:"./images/select__item-img02.png",alt:"  Продукт 2",title:"Продукт 2",price:"1400"},product_3:{images:"./images/select__item-img03.png",alt:"  Продукт 3",title:"Продукт 3",price:"1600"},product_4:{images:"./images/select__item-img04.png",alt:"  Продукт 4",title:"Продукт 4",price:"1200"},product_5:{images:"./images/select__item-img02.png",alt:"  Продукт 5",title:"Продукт 5",price:"1400"},product_6:{images:"./images/select__item-img01.png",alt:"Продукт 6",title:"Продукт 6",price:"1600"}},products=document.querySelector(".products"),createItems=()=>{var t=Object.values(db_product).map(({images:t,alt:e,title:i,price:c},m)=>`
        <div class = ".products__item .item">
                <div class = ".item__img">
                    <img src="${t}" alt="${e}">
                </div>
                <div class = ".item__title">
                    ${i}
                </div>
                <div class = ".item__price">
                    ${Number(c).toLocaleString()}
                </div>
                <button data-id="${m}" class="item__button" /> Добавить в корзину </button>

        </div> 
        `).join("");products.innerHTML=t};createItems();const button=document.querySelector(".item__button"),itemBox=document.querySelectorAll(".products__item "),cartCont=document.querySelector(".general-price");button.addEventListener("click",function(t){console.log(this.closest("item__price"))});