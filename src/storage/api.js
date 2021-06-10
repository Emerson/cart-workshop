import Storage from "./storage";

async function fetchItems() {
  let items = await fetch("/api/items");
  items = await items.json();
  return items;
}

async function save(item) {
  let items = await fetch("/api/items", {
    method: "POST",
    body: JSON.stringify(item),
  });
  items = await items.json();
  return items;
}

async function clear() {
  let items = await fetch("/api/clear", {
    method: "POST"
  });
  items = await items.json();
  return items;
}

export default class ApiStorage extends Storage {

  add(item) {
    return save(item);
  }

  get items() {
    return fetchItems();
  }

  clear() {
    return clear();
  }

}