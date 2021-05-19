# Cart Workshop

The goal of this workshop is to teach and reinforce the following concepts:

1. General class structure and syntax in JavaScript
2. The Dependency Injection Principle _(The `D` of the `SOLID` principles)_
3. Test driven development using Jest
4. General object oriented design principles

## Running the Tests

```
npm install
npm run test:watch
```


## Iteration 1

We are going to build a basic e-commerce cart system in JavaScript. The initial implementation will be naive and should have the following public API:

```js
cart.addItem({id: "1", quantity: 2, price: 1000});
cart.items
// => [{id: "1", quantity: 2, price: 1000}]

cart.total
// => 2000

cart.items
// => [];

cart.total
// => 0
```


## Iteration 2

Oh no! Users are losing the contents of their cart after refreshing the browser! Let's find a way to persist the contents of their cart to localStorage. But wait, if the user has disabled `localStorage` or their browser does not support it we should be able to fallback to the first implementation.

```js
cart.addItem({id: "1", quantity: 2, price: 1000});
cart.items
// => [{id: "1", quantity: 2, price: 1000}]

// ... Refresh the browser!

cart.items
// => [{id: "1", quantity: 2, price: 1000}]
```


## Iteration 3

Oh no! Some users are complaining that they want their cart to be linked to their account! There is a simple API setup to persist a users cart items. If the user is not logged in than we should fall back to our local storage 

```
GET /items
=> [{}, {}, {}, ...]

POST /items
=> [{}, {}, {}, ...]

DELETE /items/:id
=> [{}, {}, {}, ...]
```