let n = 100;

function Array() {
    var a = [];
    for (var i = 1; i <= n; i++) {
        a.push(i);
    }
    return a;
}

const add = (a, b) =>
a + b;

var sum1 = n * (n + 1) * (2 * n + 1) / 6;
var sum2 = Math.pow(Array().reduce(add), 2);

console.log(sum2 - sum1);