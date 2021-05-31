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

const nextPrimeFibonacci = (number) => {
  let r = 0;
  let l = 1;
  while (true) {
    const fib = fibonacci(l);
    console.log('fib', fib, number);
    if (fib > number) {
      if (isPrime(fib)) {
        r = fib;
        break;
      } else {
        l = l + 1;
        console.warn('bumping to ', fib);
      }
    } else {
      l = l + 1;
      console.warn('bumping to', fib);
    }
  }
  console.warn('Next prime fib ', r);
}

nextPrimeFibonacci(20);
