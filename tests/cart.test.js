import makeServer from "../server";
import Cart from '../src/cart';

let server;

describe("Cart", ()=> {

  beforeEach(() => {
    server = makeServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  test("tests run", async () => {
    let cart = new Cart();
    expect(cart).toBeTruthy();
  });

  test("items is empty by default", async () => {
    let cart = new Cart();
    expect(cart.items.length).toBe(0);
  });

  test("addItem adds an item", async () => {
    let cart = new Cart();
    cart.addItem({id: "1", quantity: 2, price: 1000});
    expect(cart.items[0].id).toEqual("1");
  });

  test("total returns", async () => {
    let cart = new Cart();
    cart.addItem({id: "1", quantity: 2, price: 1000});
    cart.addItem({id: "2", quantity: 3, price: 1000});
    expect(cart.total).toBe(5000);
  });
});