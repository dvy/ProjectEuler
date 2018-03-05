let n = 25;

let number = 0;
let found = false;
while (!found) {
    number += 1;
    for (let i = 1; i <= n; i++) {
        if (number % i !== 0) {
            break;
        }
        if (number % i === 0 && i === n) {
            found = true;
            break;
        }
    }
}

console.log(number);