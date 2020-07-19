// with thanks https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

const withConstructor = constructor => o => ({
    __proto__: {
      constructor
    },
    ...o
  });

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const swap = ([a, b]) => [b, a];

