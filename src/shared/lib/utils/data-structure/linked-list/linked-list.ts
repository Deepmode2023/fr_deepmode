import { LinkedNode } from "./linked-node";
import { Comparator, CompareFunctionType } from "../comparator";

export type ToStringCallback<TValue> = (node: LinkedNode<TValue>) => TValue;

export class LinkedList<TValue> {
  head: LinkedNode<TValue> | null;
  tail: LinkedNode<TValue> | null;
  length: number = 0;
  compareFunction: Comparator<TValue>;
  constructor(compareFunction?: CompareFunctionType<TValue>) {
    this.head = null;
    this.tail = null;

    this.compareFunction = new Comparator<TValue>(compareFunction);
  }

  prepend(value: TValue) {
    this.length++;
    const index = this.length > 0 ? this.length - 1 : 0;
    const newNode = new LinkedNode(value, this.head, index);
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  append(value: TValue) {
    this.length++;
    const index = this.length > 0 ? this.length - 1 : 0;
    const newNode = new LinkedNode(value, null, index);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    if (this.tail) {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }

    return this;
  }

  insert(value: TValue, rawIndex: number) {
    const index = rawIndex < 0 ? 0 : rawIndex;
    this.length++;
    if (index === 0) {
      this.prepend(value);
    } else {
      let count = 1;
      let currentNode = this.head;
      const newNode = new LinkedNode(value, null, index);
      while (currentNode) {
        if (this.compareFunction.equal(count, index)) break;

        currentNode = currentNode.nextNode;
        count += 1;
      }

      if (currentNode) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      } else {
        if (this.tail) {
          this.tail.nextNode = newNode;
          this.tail = newNode;
        } else {
          this.head = newNode;
          this.tail = newNode;
        }
      }
    }

    return this;
  }

  delete(value: TValue) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    while (this.head && this.compareFunction.equal(this.head.value, value)) {
      this.length--;
      deletedNode = this.head;
      this.head = this.head.nextNode;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode?.nextNode) {
        if (this.compareFunction.equal(currentNode.nextNode.value, value)) {
          this.length--;
          deletedNode = currentNode.nextNode;
          currentNode.nextNode = currentNode.nextNode.nextNode;
          if (currentNode.nextNode) {
            currentNode.nextNode.index = this.length - 1;
          }
        } else {
          currentNode = currentNode.nextNode;
        }
      }
    }

    if (this.compareFunction.equal(this.tail?.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  find(value: TValue, callback?: (value: TValue) => boolean) {
    if (!this.head) {
      return null;
    }

    let currentNode: LinkedNode<TValue> | null = this.head;

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode;
      }

      if (value && this.compareFunction.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.nextNode;
    }

    return null;
  }

  deleteTail() {
    const deletedTail = this.tail;

    if (this.compareFunction.equal(this.head?.value, this.tail?.value)) {
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    let currentNode = this.head;

    while (currentNode?.nextNode) {
      if (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode;
      } else {
        currentNode.nextNode = null;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  deleteHead() {
    if (!this.head) {
      return null;
    }
    const deleteHead = this.head;

    if (this.head.nextNode) {
      this.head = deleteHead.nextNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deleteHead;
  }

  fromArray(values: TValue[]) {
    values.forEach((value) => this.append(value));
    return this;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.nextNode;
    }

    return nodes;
  }

  toString(callback: ToStringCallback<TValue>): string {
    return this.toArray()
      .map((node) => {
        const returnNode = callback(node);
        return JSON.stringify(returnNode);
      })
      .join(",");
  }

  reverse() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.nextNode;
      currentNode.nextNode = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
