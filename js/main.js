let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
let basket = document.querySelector('.basket');
let basketList = document.querySelector('.basket-list');
 function myBasket(){
	basket.classList.toggle('active');
	basket-list.classList.toggle('active');
}
 let products =  [
        {
            image: 'https://i.ibb.co/qk3WZzd/bouquet-cart1.png',
            name: 'Ніжна свіжість: троянди та лілії',
            price: 445
          },
          {
            image: 'https://i.ibb.co/kSqMtYg/bouquet-cart2.png',
            name: 'Сорбет: хризантеми та троянди',
            price: 450
          },
          {
            image: 'https://i.ibb.co/P9mTcQT/bouquet-cart3.png',
            name: 'Yellow Song: соняшники та солідаго',
            price: 455
          },
          {
            image: 'https://i.ibb.co/M8NL0gT/bouquet-cart4.png',
            name: 'Персиковий нектар: лілії та троянди',
            price: 455
          },
          {
            image: 'https://i.ibb.co/LYMJ9mc/bouquet-cart5.png',
            name: 'Аврора: лілії та троянди',
            price: 460
          },
          {
            image: 'https://i.ibb.co/Y7jdbq5/bouquet-cart6.png',
            name: 'Класика кохання: червоні троянди',
            price: 465
          }
    ];
    function createContentTemplate(product) {
        const article = `<div class="cart" id="products">
        <a href="" >
      <img src="${product.image}" >
    </a>
        <a href="" ><span class="cart__info">${product.name}</span></a>
        <span  class="cart__info" >${product.price} грн </span>
        </div>`;
      
        return createFragmentTemplate(article);
      }
      function createFragmentTemplate(str) {
        const template = document.createElement('template');
      
        template.innerHTML = str;
      
        return template.content;
      }
      function appendContent(content) {
        const el = document.getElementById('products_list');
      
        el.appendChild(content);
      }
      
      function init(products) {
        const fragment = document.createDocumentFragment();
      
        products.forEach((product) => {
          fragment.appendChild(createContentTemplate(product));
        });
      
        appendContent(fragment);
      }
      init(products);
      
      