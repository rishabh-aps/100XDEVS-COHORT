const fs = require("fs");

let a = 1;
console.log(a);

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log("The Data Read From The File Is: ");
  console.log(data);
});

let ans = 0;
for (let i = 0; i <= 100; i++) {
  ans += i;
}

console.log(ans);
