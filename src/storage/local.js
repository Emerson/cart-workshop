import Storage from "./storage";
import { LocalStorage as NodeLocalStorage } from "node-localstorage";
let localStorage = new NodeLocalStorage("./tmp/localstorage");

export default class LocalStorage extends Storage {

  constructor() {
    super(...arguments);
    this._initialize();
  }

  get items() {
    return Promise.resolve(this._items);
  }

  add(item) {
    let items = this._items;
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));
    return Promise.resolve(this._items);
  }

  clear() {
    localStorage.setItem("items", JSON.stringify([]));
    return Promise.resolve(this._items);
  }

  _initialize() {
    if (!localStorage.getItem("items")) {
      localStorage.setItem("items", JSON.stringify([]));
    }
  }

  get _items() {
    return JSON.parse(localStorage.getItem("items"));
  }

}