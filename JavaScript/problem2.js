function fibonacci() {
    let evenSum = [];
    let a = 0, b = 1, temp;

    while (b < 4000000) {
        temp = a;
        a = a + b;
        b = temp;

        if (b % 2 === 0) evenSum.push(b);
    }


    return evenSum;
}

const add = (a, b) =>
    a + b;

const sum = fibonacci().reduce(add);


console.log(sum);