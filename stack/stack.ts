export class Stack<T> {
  private data: Array<T>;

  constructor() {
    this.data = [];
  }

  push(data: T) {
    this.data.push(data);
  }

  pop(): T {
    const data = this.data.pop();

    if (!data) {
      throw new StackUnderflowException();
    }

    return data;
  }

  get size() {
    return this.data.length;
  }

  get top() {
    const data = this.pop();
    this.push(data);
    return data;
  }
}

export class StackUnderflowException extends Error {}
