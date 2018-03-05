const num = 100000;
let array = new Array(num).fill(true);


const findPrimes = () => {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (array[i]) {
            let counter = i^2;
            while(counter < num) {
                array[counter] = false;
                counter += i;
            }
        }
    }

    const primeArray = [];
    for (let i = 1; i < num; i++) {
        if (array[i]) {
            primeArray.push(i);
        }
    }

    return primeArray;
};

console.log(findPrimes()[10000]);