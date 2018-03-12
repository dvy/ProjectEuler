const triples = () => {
    for (let i = 1; i < 1000 ; i++) {
        for (let j = 1; j < 1000; j++) {
            for (let k = 1; k < 1000; k ++) {
                if (i + j + k === 1000 && i < j && j < k && Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)) {
                    return i * j * k;
                }
            }
        }
    }
};

console.log(triples());