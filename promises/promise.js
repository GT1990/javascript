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

function handleResolve(value) {
  console.log("RESOLVED: ", value);
}
function handleRejection(rej) {
  console.log("REJECTED: ", rej);
}

returnsPromise()
  .then(handleResolve, handleRejection)
  .catch((err) => {
    console.log(err);
  });
