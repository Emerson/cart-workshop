export default class MemoryStorage {
  
  addItem(cartObject) {
    this.items.push(cartObject);
    this.total = this._calculateTotal();
  }
  get items() {

  }
}