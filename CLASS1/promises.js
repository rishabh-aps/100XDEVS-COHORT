function promisifiedMyOwnSetTimeOut(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}

const ans = promisifiedMyOwnSetTimeOut(1000);
ans.then(function () {
  console.log("Timeout is done.");
});
console.log(ans);

// myOwnsetTimeout(function () {
//   console.log("After SetTimeOut");
// }, 1000);

// function myOwnsetTimeout(callback, duration) {
//   setTimeout(callback, duration);
// }
