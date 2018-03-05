let n = 600851475143;

let lastFactor = 2;

if (n % 2 === 0) {
    n = n / 2;
    lastFactor = 2;

    while (n % 2 === 0) {
        n = n / 2;
    }
}
else {
        lastFactor = 1;
    }

let factor = 3;
let maxFactor = Math.sqrt(n);
while (n > 1 && factor < maxFactor) {
    if (n % factor === 0) {
        lastFactor = factor;
        n = n / factor;
        while (n % factor === 0) {
            n = n / factor;
        }
    }
    factor += 2;
}

console.log(lastFactor);
