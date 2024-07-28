export class LinkedNode<TValue> {
  value: TValue;
  nextNode: LinkedNode<TValue> | null;
  index: number;
  constructor(
    value: TValue,
    nextNode: LinkedNode<TValue> | null = null,
    index: number = 0
  ) {
    this.value = value;
    this.nextNode = nextNode;
    this.index = index;
  }
}
