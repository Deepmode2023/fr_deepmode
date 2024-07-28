import { cls } from "@/shared";
import { expect } from "@jest/globals";

describe("Describe cls function ", () => {
  const mergeList = ["cls1", "cls2", undefined, null];
  const anotherMergeList = ["cls3"];
  const styles = { container: "cls1", __chech: "hashed" };

  test("Checked returned class string with two array", () => {
    expect(cls(...mergeList, ...anotherMergeList)).toBe("cls1 cls2 cls3");
  });

  test("Checked when we pass just one class", () => {
    expect(cls("just-string-class")).toBe("just-string-class");
  });

  test("Checked when we pass undefined or null or false", () => {
    expect(cls(undefined)).toBe("");
    expect(cls(null)).toBe("");
    expect(cls(false)).toBe("");
  });

  test("Checked when we pass array without spread operators", () => {
    expect(cls(["cls1", "cls2"])).toBe("cls1 cls2");
  });

  test("Checked when we pass styles object", () => {
    expect(cls(styles)).toBe("container");
  });

  test("Snapshot cls", () => {
    expect(cls(styles)).toMatchSnapshot();
  });
});
