import { decorate, observable } from "mobx";

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

  removeItemToCart(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  checkoutCart() {
    this.items = null;
    alert("Thank you for shopping with us!");
  }
}

decorate(CartStore, {
  items: observable
});

export default new CartStore();
