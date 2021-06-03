import makeServer from "../server";
import MemoryStorage from '../src/memory-storage';
import Cart from '../src/cart';

let server;

describe("Cart", ()=> {

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  describe("Cart - MemoryStorage", () => {
    test("tests run", async () => {
      let cart = new Cart(new MemoryStorage());
      expect(cart).toBeTruthy();
    });
  
    test("items is empty by default", async () => {
      let cart = new Cart(new MemoryStorage());
      let items = await cart.items;
      expect(items.length).toBe(0);
    });
  
    test("addItem adds an item", async () => {
      let cart = new Cart(new MemoryStorage());
      let items = await cart.addItem({id: "1", quantity: 2, price: 1000});
      expect(items[0].id).toEqual("1");
    });
  
    test("total returns", async () => {
      let cart = new Cart(new MemoryStorage());
      await cart.addItem({id: "1", quantity: 2, price: 1000});
      await cart.addItem({id: "2", quantity: 3, price: 1000});
      let total = await cart.total;
      expect(total).toBe(5000);
    });
  });
});