// Simple example of a function returning a promise

function returnsPromise() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("I never break my promises!");
    } else {
      reject("Sorry, your promise was REJECTED!");
    }
  });
}

returnsPromise()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
