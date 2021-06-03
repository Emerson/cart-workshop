import MemoryStorage from '../src/memory-storage';

describe("MemoryStorage", ()=> {

  test("exists", async () => {
    let storage = new MemoryStorage();
    expect(storage).toBeTruthy();
  });

  test("returns a promise that resolves", async () => {
    let storage = new MemoryStorage();
    let items = await storage.items;
    expect(items.length).toEqual(0);
  });
});