import Storage from './storage';

export default class MemoryStorage extends Storage {

  constructor() {
    super(...arguments);
    this._items = [];
  }

  get items() {
    return Promise.resolve(this._items);
  }

  add(item) {
    this._items.push(item);
    return Promise.resolve(this._items);
  }

  clear() {
    this._items = [];
    return Promise.resolve(this._items);
  }

}