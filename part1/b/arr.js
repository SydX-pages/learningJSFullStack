const t = [1, -1, 3];
t.push(5);
/*
console.log(t.length);
console.log(t[1]);

console.log("\n");

t.forEach((value) => {
  console.log(value);
});

console.log("\n");
*/
//concat
const t2 = t.concat(6);
console.log("t:", t);
console.log("t2:", t2);

//map
const m1 = t.map((value) => value * 2);
console.log("m1:", m1);

const m2 = t.map((value) => "<li>" + value + "</li>");
console.log("m2:", m2);

//解构赋值
const [first, second, ...rest] = t;
console.log(" first:", first, "\n", "second:", second, "\n", "rest:", rest);
