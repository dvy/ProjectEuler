/* for i < 1000, for j < 1000,

if i * j == palindrome, append to palindrome array

--
How to check if a number is a palindrome.


 */

function reverse(n) {
    let r;
    for(r = 0; n; n = Math.floor(n / 10)) {
        r *= 10;
        r += n % 10;
    }
    return r;
}

const findPalindromes = () => {
    let largestPal = 0;
    for (let i = 100; i < 1000; i++) {
        for (let j = 100; j < 1000; j++) {
            let product = i * j;
            if (product === reverse(product)) {
                if (product > largestPal) {
                    largestPal = product;
                }
            }
        }
  }
  return largestPal;
};

console.log(findPalindromes());