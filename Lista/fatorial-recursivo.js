leia = require('prompt-sync')()

function calculateE(n) {
  let e = 1;
  for (let i = 1; i < n; i++) {
    e += 1 / factorial(i);
  }
  return e;
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const n = leia("Digite o número de termos da série para aproximar e: ");
console.log(`O valor aproximado de e com ${n} termos é ${calculateE(n)}`);