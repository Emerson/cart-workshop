async function getItems(storage) {
  let items = await storage.items;
  return items;
}

async function calculateTotal(storage) {
  let items = await storage.items;
  return items.reduce((accumulator, item) => {
    return accumulator + (item.price * item.quantity);
  }, 0);
}

export default class Cart {

  constructor(storage) {
    this.storage = storage;
  }

  get items() {
    return getItems(this.storage);
  }

  get total() {
    return calculateTotal(this.storage);
  }

  async addItem(item) {
    let items = await this.storage.add(item);
    return items;
  }

}