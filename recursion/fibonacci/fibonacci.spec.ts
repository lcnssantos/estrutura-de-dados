import { fibonacci } from "./fibonacci";

test("0", () => {
  expect(fibonacci(0)).toBe(0);
});

test("1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("2", () => {
  expect(fibonacci(2)).toBe(1);
});

test("3", () => {
  expect(fibonacci(3)).toBe(2);
});

test("4", () => {
  expect(fibonacci(4)).toBe(3);
});

test("5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("6", () => {
  expect(fibonacci(6)).toBe(8);
});

test("7", () => {
  expect(fibonacci(7)).toBe(13);
});
