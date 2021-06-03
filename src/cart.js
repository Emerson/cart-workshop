import { MemoryStorage } from './memory-storage'
export default class Cart {
  constructor(storage) {
    this.items = [];
    this.total = 0;
  }

  addItem(cartObject) {
    this.items.push(cartObject);
    this.total = this._calculateTotal();
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