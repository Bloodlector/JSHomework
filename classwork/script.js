const goods = [
  { title: 'Shirt', price: 150, image: src = './img/featureitem1.png' },
  { title: 'Socks', price: 50, image: src = './img/featureitem2.png' },
  { title: 'Jacket', price: 350, image: src = './img/featureitem3.png' },
  { title: 'Shoes', price: 250, image: src = './img/featureitem4.png' },
];

const reformData = (items) => {
  return items.map(({ title, ...rest }) => {
    return {
      ...rest,
      title: title
    }
  })
}
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
      this.goods = reformData(data.contents);
    })
  };

  openCart() { }
  closeCart() { }


}
class cartItem {
  setCount() { }
  render() { }
  deleteFromCart() { }
}

onload = () => {
  const app = new Vue({
    el: '#app',
    data: {
      goods: goods,
      filteredGoods: goods,
      search: '',
      basketVision: false
    },
    beforeMount() {
      console.log()
    },
    mounted() {
      service(rqURL, GOODS_POSTFIX).then((data) => {
        const result = reformData(data);
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
