export default class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(cartObject) {
    if (!this._validateCartObject(cartObject)) {
      throw new Error('invalid cart object');
    } else {
      this.items.push(cartObject);
      this.total = this._calculateTotal();
    }
  }
  _validateCartObject(object) {
    return true;
  }

  _calculateTotal() {
    let total = 0;
    this.items.forEach(item => {
      total += item.price * item.quantity
    });
    return total;
  }
}

//cart.addItem({id: "1", quantity: 2, price: 1000});