function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function quad(n) {
  return n * n * n * n;
}

function sumOfSquare(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

function sumOfCubes(a, b) {
  let cube1 = cube(a);
  let cube2 = cube(b);
  return cube1 + cube2;
}

function sumOfSomething(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);
  return val1 + val2;
}

// let ans = sumOfSquare(1, 2);
// console.log(ans);

let ans2 = sumOfSomething(1, 2, quad);
console.log(ans2);
