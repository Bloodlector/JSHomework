const goods = [
  { title: 'Shirt', price: 150, image: src = './img/featureitem1.png' },
  { title: 'Socks', price: 50, image: src = './img/featureitem2.png' },
  { title: 'Jacket', price: 350, image: src = './img/featureitem3.png' },
  { title: 'Shoes', price: 250, image: src = './img/featureitem4.png' },
];

const reformData = (items) => {
  return items.map(({ product_name, ...rest }) => {
    return {
      ...rest,
      product_name: title
    }
  })
}
const GBURL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";
const rqURL = "https://run.mocky.io/v3";
const GOODS_POSTFIX = "/df5b97b0-6e96-42d8-a18b-883b1f29c03e";
const CART_POSTFIX = "/getBasket.json";
const ADD_TO_CART = "/addTobasket.json";
const DELETE_ITEM = "/deleteFromBasket.json";

const service = function (url, postfix, method = "GET") {
  return new Promise((resolve, reject) => {

    fetch(`${url}${postfix}`, {
      method
    }).then((res) => {
      return res.json();
    }).then((data) => {
      resolve(data);
    })
  })
};

class Cart {
  setGoods() {
    return service(rqURL, CART_POSTFIX).then(() => {
      this.goods = data.contents;
    })
  };
};
class cartItem {
  setCount() { }
  render() { }
  deleteFromCart() { }
};

onload = () => {

  Vue.component('search', {
    props: ['search', 'sfilter'],
    template: `
        <input type="text" id='searchInput' class="cart-input" v-on:input="$emit('sfilter')">                 
    `
  });

  Vue.component('search-button', {
    props: ['search', 'sfilter'],
    template: `
    <button class="head-search" v-on:click='$emit("sfilter")'><svg class="search-svg" width="27" height="28"
    viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
    <path
       d="M19.0596 17.6259C20.6713 15.8658 21.6282 13.6048 21.7698 11.2225C21.9113 8.84018 21.2288 6.48173 19.8369 4.54318C18.445 2.60463 16.4285 1.20404 14.126 0.576619C11.8234 -0.0508009 9.3751 0.13316 7.19217 1.09761C5.00923 2.06205 3.22463 3.74825 2.13804 5.87302C1.05145 7.9978 0.729054 10.4318 1.225 12.7661C1.72094 15.1005 3.00501 17.1932 4.86158 18.6927C6.71814 20.1922 9.03413 21.0072 11.4206 21.0009C13.673 21.004 15.8645 20.27 17.6606 18.9109L25.4086 26.7179C25.4941 26.807 25.5965 26.8781 25.7099 26.927C25.8232 26.9759 25.9452 27.0017 26.0686 27.0029C26.1923 27.0033 26.3148 26.9782 26.4283 26.9292C26.5419 26.8801 26.6441 26.8082 26.7286 26.7179C26.9025 26.537 26.9997 26.2958 26.9997 26.0449C26.9997 25.794 26.9025 25.5528 26.7286 25.3719L19.0596 17.6259ZM2.88662 10.5009C2.89946 8.81563 3.41094 7.17187 4.35659 5.77685C5.30224 4.38183 6.63972 3.29801 8.20044 2.662C9.76115 2.02599 11.4752 1.86627 13.1266 2.20298C14.7779 2.53969 16.2926 3.35775 17.4797 4.55404C18.6668 5.75033 19.4732 7.27129 19.7972 8.92519C20.1212 10.5791 19.9483 12.2919 19.3002 13.8476C18.6522 15.4034 17.5581 16.7325 16.1559 17.6674C14.7536 18.6023 13.1059 19.1011 11.4206 19.1009C9.14916 19.0901 6.97482 18.1784 5.37484 16.566C3.77486 14.9537 2.87998 12.7724 2.88662 10.5009Z" />
 </svg></button> 
    `
  });

  Vue.component('overlay', {
    props: ['filter'],
    template: `
    <button class="overlay"><svg class="overlay-svg" width="27" height="25" viewBox="0 0 27 25"
    xmlns="http://www.w3.org/2000/svg">
    <path
       d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" />
 </svg>Добавить в корзину</button>
    `
  });

  Vue.component('goods-item', {
    props: ['item'],
    template: `
    <div class="goods-item">
               <img v-bind:src='item.image' alt="featureitem">
               <div class="product-overlay">
                  <overlay></overlay>
               </div>
               <h3 class="feature-item-h3">{{ item.title }}</h3>
               <p class="feature-item-p1">Known for her sculptural takes on traditional tailoring, Australian
                  arbiter of cool Kym Ellery
                  teams up with Moda Operandi.</p>
               <p class="feature-item-p2">{{ item.price }}</p>               
            </div>
    `
  });

  Vue.component('basket-item', {
    props: ['item'],
    template: `
    <div class="goods-item">
               <img src=# alt="featureitem">
               <div class="product-overlay">
                  <overlay></overlay>
               </div>
               <h3 class="feature-item-h3">{{ item.title }}</h3>
               <p class="feature-item-p1">Known for her sculptural takes on traditional tailoring, Australian
                  arbiter of cool Kym Ellery
                  teams up with Moda Operandi.</p>
               <p class="feature-item-p2">{{ item.price }}</p>               
            </div>
    `
  });

  Vue.component('basket', {
    props: ['close-cart'],
    data: function () {
      return {
        basketGoods: []
      }
    },
    template: `    
    <div class="basket">
       <div class="basketRow basketHeader">
          <div>Название товара</div>
          <div>Количество</div>
          <div>Цена за шт.</div>
          <div>Итого</div>
       </div>
       <basketTotal></basketTotal>
       <button v-on:click='$emit("close-cart")'>Закрыть</button>
        <div>
            <basket-item v-for='item in basketGoods' :item='item'></basket-item>
        </div>
       </div>  
    `,
    mounted() {
      service(GBURL, CART_POSTFIX).then((data) => {
        const result = reformData(data.contents);
        this.basketGoods = result;

      });

    },
  })




  Vue.component('basketTotal', {
    props: ['closeCart'],
    template: `
    <div class="basketTotal">
          Товаров в корзине на сумму:
          $<span class="basketTotalValue">0</span>          
    </div>
    `
  });

  const app = new Vue({
    el: '#app',
    data: {
      goods: [],
      filteredGoods: [],
      search: '',
      basketVision: false
    },
    beforeMount() {
      console.log()
    },
    mounted() {
      service(rqURL, GOODS_POSTFIX).then((data) => {
        const result = data;
        this.goods = result;
        this.filteredGoods = result;
      });

    },
    methods: {
      filter() {
        this.filteredGoods = this.goods.filter(({ title }) => {
          return new RegExp(this.search, 'i').test(title);
        });
      },
      showCart() {
        this.basketVision = true;
      },
      closeCart() {
        this.basketVision = false;
      }

    }
  })

}
// const basket = {};

// document.querySelector('goods-list').addEventListener('click', event => {

//   if (!event.target.classList.contains('overlay')) {
//     return;
//   }

//   const featuredItemEl = event.target.closest('.goods-item');
//   const id = +featuredItemEl.dataset.id;
//   const name = featuredItemEl.dataset.name;
//   const price = +featuredItemEl.dataset.price;
//   addToCart(id, name, price);
// });



// const basketTotalValue = document.querySelector('.basketTotalValue');
// function addToCart(id, name, price) {
//   if (!(id in basket)) {
//     basket[id] = { id: id, name: name, price: price, count: 0 };
//   }
//   basket[id].count++;
//   basketCounter.textContent = getTotalBasketCount().toString();
//   basketTotalValue.textContent = getTotalBasketPrice().toFixed(2);
//   renderProductInBasket(id);
// }

// function getTotalBasketCount() {
//   return Object.values(basket).reduce((acc, product) => acc + product.count, 0);
// }

// function getTotalBasketPrice() {
//   return Object
//     .values(basket)
//     .reduce((acc, product) => acc + product.price * product.count, 0);
// }

// function renderProductInBasket(productId) {
//   const basketRowEl = document
//     .querySelector(`.basketRow[data-productId="${productId}"]`);
//   if (!basketRowEl) {
//     renderNewProductInBasket(productId);
//     return;
//   }

//   const product = basket[productId];
//   basketRowEl.querySelector('.productCount').textContent = product.count;
//   basketRowEl
//     .querySelector('.productTotalRow')
//     .textContent = (product.price * product.count).toFixed(2);
// }

// const basketTotal = document.querySelector('.basketTotal');
// function renderNewProductInBasket(productId) {
//   const productRow = `
//     <div class="basketRow" data-productId="${productId}">
//       <div>${basket[productId].name}</div>
//       <div>
//         <span class="productCount">${basket[productId].count}</span> шт.
//       </div>
//       <div>$${basket[productId].price}</div>
//       <div>
//         $<span class="productTotalRow">${(basket[productId].price * basket[productId].count).toFixed(2)}</span>
//       </div>
//     </div>
//     `;
//   basketTotal.insertAdjacentHTML("beforebegin", productRow);
// }