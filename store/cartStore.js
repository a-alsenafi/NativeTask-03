import { decorate, observable, computed } from "mobx";

class CartStore {
  constructor() {
    this.items = [];
  }

  addItemToCart(item) {
    let similarItem = this.items.find(
      listItem =>
        listItem.drink === item.drink && listItem.option === item.option
    );
    if (similarItem) {
      similarItem.quantity = similarItem.quantity + 1;
    } else {
      item.quantity = 1;
      this.items.push(item);
    }
  }

  get numberOfItems() {
    let quantity = 0;
    this.items.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }

  removeItemToCart(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  checkoutCart() {
    this.items = [];

    alert("Thank you for shopping with us!");
  }
}

decorate(CartStore, {
  items: observable,
  numberOfItems: computed
});

export default new CartStore();
