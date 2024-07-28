import { Comparator } from "./comparator";
import { expect } from "@jest/globals";

describe("Comparator test", () => {
  let comparator: Comparator<number>;
  beforeEach(() => {
    comparator = new Comparator<number>();
  });
  test("equal test", () => {
    expect(comparator.equal(2, 2)).toBe(true);
    expect(comparator.equal(2, 1)).toBe(false);
    expect(comparator.equal(2, 3)).toBe(false);
  });

  test("lessThan test", () => {
    expect(comparator.lessThan(2, 2)).toBe(false);
    expect(comparator.lessThan(2, 3)).toBe(true);
  });

  test("greaterThan test", () => {
    expect(comparator.greaterThan(2, 2)).toBe(false);
    expect(comparator.greaterThan(5, 3)).toBe(true);
  });

  test("greaterThanOrEqual test", () => {
    expect(comparator.greaterThanOrEqual(2, 3)).toBe(false);
    expect(comparator.greaterThanOrEqual(2, 2)).toBe(true);
    expect(comparator.greaterThanOrEqual(5, 3)).toBe(true);
  });

  test("lessThanOrEqual test", () => {
    expect(comparator.lessThanOrEqual(2, 2)).toBe(true);
    expect(comparator.lessThanOrEqual(5, 3)).toBe(false);
    expect(comparator.lessThanOrEqual(1, 3)).toBe(true);
  });

  test("reverse test", () => {
    comparator.reverse();
    expect(comparator.lessThan(3, 1)).toBe(true);
    expect(comparator.greaterThan(3, 1)).toBe(false);
  });
});
