export default class Cart {
  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  get total() {
    return this.items.reduce((accumulator, item) => {
      return accumulator + (item.price * item.quantity);
    }, 0);
  }

  addItem(item) {
    this._items.push(item);
  }
}