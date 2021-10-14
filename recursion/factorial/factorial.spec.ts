import { factorial } from "./factorial";

test("0!", () => {
  expect(factorial(0)).toBe(1);
});

test("1!", () => {
  expect(factorial(1)).toBe(1);
});

test("2!", () => {
  expect(factorial(2)).toBe(2);
});

test("3!", () => {
  expect(factorial(3)).toBe(6);
});

test("9!", () => {
  expect(factorial(9)).toBe(362880);
});
