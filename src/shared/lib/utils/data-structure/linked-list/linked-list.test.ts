import { LinkedList } from "./linked-list";
import { expect } from "@jest/globals";

describe("LinkedList basic test", () => {
  let list: LinkedList<number>;
  beforeEach(() => {
    list = new LinkedList();
  });

  afterEach(() => {
    list = new LinkedList();
  });

  test("Add checking for prepend method to our LinkedList", () => {
    list.prepend(20);
    list.prepend(1);
    expect(list.toString((node) => node.value)).toBe("1,20");
  });

  test("Add checking for insert method to our LinkedList", () => {
    list.fromArray([1, 20, 40]);
    list.insert(33, 1);
    expect(list.toString((node) => node.value)).toBe("1,33,20,40");

    list.insert(2, 0);
    expect(list.toString((node) => node.value)).toBe("2,1,33,20,40");
  });

  test("Add checking for insert in empty LinkedList", () => {
    list.insert(33, 5);
    expect(list.toString((node) => node.value)).toBe("33");
  });

  test("Add checking for insert in empty LinkedList", () => {
    list.prepend(1);
    list.insert(33, 2);
    expect(list.toString((node) => node.value)).toBe("1,33");
  });

  test("Add checking for delete method to our LinkedList", () => {
    list.fromArray([1, 20, 40]);
    list.delete(20);
    expect(list.toString((node) => node.value)).toBe("1,40");
  });

  test("Add checking for delete method without data in LinkedList", () => {
    const deleteNode = list.delete(20);
    expect(deleteNode).toBe(null);
    list.fromArray([1, 2, 3]);
    list.delete(1);
    expect(list.head?.value).toBe(2);
    list.delete(3);
    expect(list.tail?.value).toBe(2);
  });

  test("Add checking for find method to our LinkedList", () => {
    expect(list.find(10)).toBe(null);
    list.fromArray([1, 20, 40]);
    const findedElement = list.find(1);
    expect(findedElement?.value).toBe(1);
    const secondFindedElement = list.find(50);
    expect(secondFindedElement).toBe(null);
  });

  test("Add checking for find method and correct working callback func in LinkedList", () => {
    list.fromArray([1, 20, 40]);
    const findedElement = list.find(40, (value) => value === 40);
    expect(findedElement?.value).toBe(40);
  });

  test("Checking correct index displayed", () => {
    list.fromArray([1, 20, 40]);
    expect(list.find(20)?.index).toBe(1);
    expect(list.find(40)?.index).toBe(2);
  });

  test("Checking correct length displayed", () => {
    list.fromArray([1, 20, 40]);
    expect(list.length).toBe(3);
  });

  test("Add checking for deletedTail method and correct working callback func in LinkedList", () => {
    list.prepend(1);
    list.deleteTail();
    expect(list.tail).toBe(null);
    list.fromArray([1, 20, 40]);
    list.deleteTail();
    expect(list.tail?.value).toBe(20);
    expect(list.toString((node) => node.value)).toBe("1,20");
  });

  test("Add checking for deletedHead method and correct working callback func in LinkedList", () => {
    expect(list.deleteHead()).toBe(null);
    list.prepend(1);
    list.deleteHead();
    expect(list.head).toBe(null);
    list.fromArray([1, 20, 40]);
    expect(list.head?.value).toBe(1);
    list.deleteHead();
    expect(list.head?.value).toBe(20);
    expect(list.toString((node) => node.value)).toBe("20,40");
  });

  test("Add checking for deletedHead method and correct working callback func in LinkedList", () => {
    list.fromArray([1, 20, 40]);
    expect(list.head?.value).toBe(1);
    list.deleteHead();
    expect(list.head?.value).toBe(20);
    expect(list.toString((node) => node.value)).toBe("20,40");
  });

  test("Add checking for reverse method in LinkedList", () => {
    list.fromArray([1, 20, 40]);
    expect(list.toString((node) => node.value)).toBe("1,20,40");
    list.reverse();
    expect(list.toString((node) => node.value)).toBe("40,20,1");
  });
});
