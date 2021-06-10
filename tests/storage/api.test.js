import makeServer from "../../server";
import ApiStorage from "../../src/storage/api";

let server;

describe("ApiStorage", ()=> {

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("exists", async () => {
    let storage = new ApiStorage();
    expect(storage).toBeTruthy();
  });

  test("fetches items from the API", async () => {
    server.db.loadData({
      items: [
        { id: "1", quantity: 1, price: 100 },
        { id: "2", quantity: 1, price: 100 },
        { id: "3", quantity: 1, price: 100 }
      ],
    });
    let storage = new ApiStorage();
    let items = await storage.items;
    expect(items.length).toEqual(3);
  });

  test("persists items to the API", async () => {
    let storage = new ApiStorage();
    let items = await storage.items;
    expect(server.db.items.length).toEqual(0);
    expect(items.length).toEqual(0);
    items = await storage.add({ id: "1", quantity: 1, price: 100 });
    expect(items.length).toEqual(1);
    expect(server.db.items.length).toEqual(1);
  });

  test("clears items", async () => {
    server.db.loadData({
      items: [
        { id: "1", quantity: 1, price: 100 },
        { id: "2", quantity: 1, price: 100 }
      ],
    });
    let storage = new ApiStorage();
    expect(server.db.items.length).toEqual(2);
    let items = await storage.clear();
    expect(items.length).toEqual(0);
    expect(server.db.items.length).toEqual(0);
  });

});