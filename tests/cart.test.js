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
});