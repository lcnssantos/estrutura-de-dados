import { InvalidValidatorInput, validator } from "./validator";

describe("INVALID", () => {
  test("DEF", () => {
    expect(() => validator("DEF")).toThrow(new InvalidValidatorInput());
  });

  test("ABBA", () => {
    expect(() => validator("ABBA")).toThrow(new InvalidValidatorInput());
  });

  test("ABEBA", () => {
    expect(() => validator("ABEBA")).toThrow(new InvalidValidatorInput());
  });

  test("ABCEBA", () => {
    expect(() => validator("ABCEBA")).toThrow(new InvalidValidatorInput());
  });
});

test("ABCBA", () => {
  expect(validator("ABCBA")).toBe(true);
});

test("ABABBACABBABA", () => {
  expect(validator("ABABBACABBABA")).toBe(true);
});

test("ABCAB", () => {
  expect(validator("ABCAB")).toBe(false);
});

test("ABABBACBABBABAA", () => {
  expect(validator("ABABBACBABBABAA")).toBe(false);
});
