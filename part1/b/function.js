const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

// 一个参数，可以不用括号
// 一句函数体，不用大括号
const square = (p) => p * p;

//不使用箭头
function product(a, b) {
  return a * b;
}

const result = sum(1, 5);
console.log(result);

const res2 = square(3);
console.log(res2);

const res3 = product(3, 4);
console.log(res3);

//函数表达式
const average = function (a, b) {
  return (a + b) / 2;
};

const res = average(2, 5);

console.log(res); //不是一样的吗？？
