const isPrime = (number: number): boolean => {
  for (let i = 2; i < number; i++) {
    if ((number % i) === 0) {
      return false;
    }
  }

  return (number > 1);
};

const fibonacci = (num) => {
  if (num <= 1)return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
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
