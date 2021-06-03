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

  test("expect empty array on cart.items", async () => {
    let cart = new Cart();
    expect(cart.items).toEqual([]);
  });

  test("expect cart.total to be 0", async () => {
    let cart = new Cart();
    expect(cart.total).toBe(0);
  });

  test("add item method exists", async () => {
    let cart = new Cart();
    expect(cart.addItem).toBeTruthy();
  });

  // test("should throw error for invalid object", async () => {
  //   let cart = new Cart();
  //   expect(() => cart.addItem()).toThrow(Error);
  // });

  test("update item object", async () => {
    let cart = new Cart();
    cart.addItem({id: "1", quantity: 2, price: 1000});
    expect(cart.items).toEqual([{id: "1", quantity: 2, price: 1000}]);
  });

  test("calculating cart total", async () => {
    let cart = new Cart();
    cart.addItem({id: "1", quantity: 2, price: 1000});
    expect(cart.total).toEqual(2000);
  });
});