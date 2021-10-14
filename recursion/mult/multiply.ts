export const multiply = (a: number, b: number): number =>
  b === 1 ? a : a + multiply(a, b - 1);
