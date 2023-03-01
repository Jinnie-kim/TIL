const names: Array<string> = []; // string[] 으로 지정하는 것과 100% 동일하다.

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
