export default class Storage {

  add() {
    throw new Error("Storage should not implement `add` directly.");
  }

  get items() {
    throw new Error("Storage should not implement `items` directly");
  }

  clear() {
    throw new Error("Storage should not implment `clear` directly");
  }
}
