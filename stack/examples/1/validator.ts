import { Stack } from "../../stack";

export const validator = (expression: string) => {
  const getPairByClose = (element: string) => {
    return [
      open[close.findIndex((closeElement) => closeElement === element)],
      element,
    ];
  };

  const stack = new Stack<string>();

  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  const inputFiltered = expression
    .split("")
    .filter((input) => [...open, ...close].includes(input));

  const returnValue = inputFiltered.reduce<boolean>((output, input) => {
    if (open.includes(input)) {
      stack.push(input);
      return output;
    }

    try {
      const [openElement] = getPairByClose(input);

      if (openElement !== stack.top) {
        return false;
      }

      stack.pop();
      return output;
    } catch {
      return false;
    }
  }, true);

  return returnValue && stack.size === 0;
};
