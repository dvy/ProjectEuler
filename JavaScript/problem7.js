const num = 1000000;
let array = new Array(num).fill(true);


const findPrimes = () => {
    for (let i = 2; i < Math.sqrt(num); i++) {
        let counter = Math.pow(i, 2);
        if (array[i]) {
            while(counter < num) {
                array[counter] = false;
                counter += i;
            }
        }
    }

    const primeArray = [];
    for (let i = 2; i < num; i++) {
        if (array[i]) {
            primeArray.push(i);
        }
    }

    return primeArray;
};

console.log(findPrimes()[10000]);