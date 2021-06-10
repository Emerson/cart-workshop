import LocalStorage from "../../src/storage/local";

describe("LocalStorage", ()=> {

  beforeEach(() => {
    new LocalStorage().clear();
  });

  test("exists", async () => {
    let storage = new LocalStorage();
    expect(storage).toBeTruthy();
  });

  test("returns a promise that resolves", async () => {
    let storage = new LocalStorage();
    let items = await storage.items;
    expect(items.length).toEqual(0);
  });

  test("adds items and returns a promise", async () => {
    let storage = new LocalStorage();
    let items = await storage.add({id: "1", quantity: 2, price: 1000});
    expect(items[0].id).toEqual("1");
  });

});