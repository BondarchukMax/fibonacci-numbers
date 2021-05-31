const isPrime = (number: number): boolean => {
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      return false;
    }
  }

  return (number > 1);
};

const fibonacci = (number: number): number => {
  if (number <= 1) {
    return number;
  }

  let current = 1;
  let next = 1;
  for (let i = 3; i <= number; i++) {
    let calculateSum = current + next;
    current = next;
    next = calculateSum;
  }

  return next;
};

const nextPrimeFibonacci = (number: number): number => {
  let l = 1;

  while (true) {
    const fib: number = fibonacci(l);
    if (fib > number) {
      if (isPrime(fib)) {
        return fib;
      } else {
        l++;
      }
    } else {
      l++;
    }
  }
};

const result = nextPrimeFibonacci(3);
console.log(result);
