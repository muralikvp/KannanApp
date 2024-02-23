/// <reference lib="webworker" />


const isPrime = (n: number) => {
  for (let i = 2; i <= n / 2; i++) {
    if (n % i === 0) {
      return false;
    }
  };
  return true;
};
const generatePrime = (num: number) => {
  const arr = [];
  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    };
    i = i === 2 ? i + 1 : i + 2;
  };
  return arr;
};

addEventListener('message', ({ data }) => {

  const response = { prime: generatePrime(data) };

  postMessage(response);
});
