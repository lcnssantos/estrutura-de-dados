import { Stack, StackUnderflowException } from "./stack";

describe("STACK", () => {
  let underTest: Stack<string>;

  beforeEach(() => {
    underTest = new Stack();
  });

  test("SHOULD BE EMPTY", () => {
    expect(underTest.size).toBe(0);
  });

  test("PUSH", () => {
    underTest.push("data1");
    expect(underTest.size).toBe(1);
    expect(underTest.top).toBe("data1");
  });

  test("DOUBLE PUSH", () => {
    underTest.push("data1");
    underTest.push("data2");
    expect(underTest.top).toBe("data2");
  });

  test("POP", () => {
    underTest.push("data1");
    underTest.push("data2");

    const data = underTest.pop();

    expect(data).toBe("data2");
    expect(underTest.top).toBe("data1");
  });

  test("UNDERFLOW POP", () => {
    expect(() => underTest.pop()).toThrow(new StackUnderflowException());
  });

  test("UNDERFLOW STACKTOP", () => {
    expect(() => underTest.top).toThrow(new StackUnderflowException());
  });
});
