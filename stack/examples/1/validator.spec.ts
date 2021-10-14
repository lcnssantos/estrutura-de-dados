import { validator } from "./validator";

describe("VALIDATOR", () => {
  test("(A+B})", () => {
    expect(validator("(A+B})")).toBe(false);
  });

  test("(A+B)", () => {
    expect(validator("(A+B)")).toBe(true);
  });

  test("{[A+B]-[(C-D)]", () => {
    expect(validator("{[A+B]-[(C-D)]")).toBe(false);
  });

  test("(A+B)-{C+D}-[F+G]", () => {
    expect(validator("(A+B)-{C+D}-[F+G]")).toBe(true);
  });

  test("((H)*{([J+K])})", () => {
    expect(validator("((H)*{([J+K])})")).toBe(true);
  });

  test("(((A))))", () => {
    expect(validator("(((A))))")).toBe(false);
  });

  test("]A[", () => {
    expect(validator("]A[")).toBe(false);
  });
});
