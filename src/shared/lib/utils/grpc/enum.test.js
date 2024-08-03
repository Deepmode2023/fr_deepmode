import { enumHelpers } from "./enum";
import { expect } from "@jest/globals";

const enumObj = { CONTINUE: 0, END: 1 };

describe("enumHelpers with normaly behavior", () => {
  test("... & with number posibleKey", () => {
    expect(enumHelpers(enumObj, 0)).toBe("CONTINUE");
  });

  test("... & with string posibleKey", () => {
    expect(enumHelpers(enumObj, "CONTINUE")).toBe(0);
  });

  test("... & with non-existing number posibleKey", () => {
    expect(() => enumHelpers(enumObj, 3)).toThrowError();
  });

  test("... & with non-existing string posibleKey", () => {
    expect(() => enumHelpers(enumObj, "NON-EXISITING")).toThrowError();
  });
});
