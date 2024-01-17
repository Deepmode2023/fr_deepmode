import { mergeCls } from "../cls";
import { expect } from "@jest/globals";

describe("Describe mergeCls function ", () => {
  const mergeList = ["cls1", "cls2", undefined, null];
  const anotherMergeList = ["cls3"];
  const styles = { container: "cls1", __chech: "hashed" };

  test("Checked returned class string with two array", () => {
    expect(mergeCls(...mergeList, ...anotherMergeList)).toBe("cls1 cls2 cls3");
  });

  test("Checked when we pass just one class", () => {
    expect(mergeCls("just-string-class")).toBe("just-string-class");
  });

  test("Checked when we pass undefined or null or false", () => {
    expect(mergeCls(undefined)).toBe("");
    expect(mergeCls(null)).toBe("");
    expect(mergeCls(false)).toBe("");
  });

  test("Checked when we pass array without spread operators", () => {
    expect(mergeCls(["cls1", "cls2"])).toBe("cls1 cls2");
  });

  test("Checked when we pass styles object", () => {
    expect(mergeCls(styles)).toBe("container");
  });
});
