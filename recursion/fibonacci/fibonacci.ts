export const fibonacci = (number: number): number =>
  [0, 1].includes(number)
    ? number
    : fibonacci(number - 2) + fibonacci(number - 1);
