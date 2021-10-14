const factorialInterative = (number: number) => {
  let prod = 1;
  while (number > 0) {
    prod *= number;
    number--;
  }
  return prod;
};

const factorialFunctional = (number: number) =>
  Array(number)
    .fill(0)
    .map((value, index) => index)
    .reduce((output, value) => output * (value + 1), 1);

const factorialRecursive = (number: number): number =>
  number <= 1 ? 1 : number * factorialRecursive(number - 1);

export const factorial = factorialRecursive;
