


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 1 resolvida"), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 2 resolvida"), 500);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promise 3 resolvida"), 100); //Na promisse race a promise 3 vai ser resolvida primeiro
});



//Promisse all vai logar todas as promises e race vai logar a que for resolvida primeiro

Promise.all([promise1, promise2, promise3]).then((messages) => {
  console.log(messages);
});

Promise.race([promise1, promise2, promise3]).then((message) => {
  console.log(message);
});
