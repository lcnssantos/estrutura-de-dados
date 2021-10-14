import { multiply } from "./multiply";

test("2 * 5", () => {
  expect(multiply(2, 5)).toBe(10);
});

test("99 * 99", () => {
  expect(multiply(99, 99)).toBe(9801);
});
