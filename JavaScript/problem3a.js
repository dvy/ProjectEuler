const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num !== 1;
}

const multiply = (a, b) =>
    a * b;

const largestPrimeFactor = num => {
    let factors = [];
    let curFactor = 2;
    const half = Math.floor(num / 2);

    while (curFactor <= half) {
        if (num % curFactor == 0 && isPrime(curFactor)) {
            factors.push(curFactor);
            //console.log(curFactor);
            if (factors.reduce(multiply) === num) return factors[factors.length - 1];
        }
        curFactor++;
    }
    return factors[factors.length - 1];

};

console.log(largestPrimeFactor(600851475143));