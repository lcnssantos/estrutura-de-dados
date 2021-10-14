import { Stack } from "../../stack";

export class InvalidValidatorInput extends Error {}

export const validator = (input: string) => {
  const validateInput = () => {
    const regex = /(([A]|[B]){1,})[C]([A]|[B]){1,}/;

    if (!input.match(regex)) {
      throw new InvalidValidatorInput();
    }
  };

  validateInput();

  const stack = new Stack<string>();

  const [firstPart, secondPart] = input.split("C");

  if (firstPart.length !== secondPart.length) {
    return false;
  }

  firstPart.split("").forEach((element) => stack.push(element));

  return secondPart.split("").every((element) => element === stack.pop());
};
