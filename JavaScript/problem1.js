console.log('hello');

function mult (num) {
    if (num % 3 === 0 || num % 5 === 0) {
        return num;
    }
    else return 0;
}

var nums = 0;
for (var i = 0; i < 1000; i++) {
    nums += mult(i);
}

console.log(nums);