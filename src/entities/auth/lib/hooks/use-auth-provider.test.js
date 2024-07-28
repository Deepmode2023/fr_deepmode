import { expect } from "@jest/globals";
import { useAuthProvider } from "./use-auth-provider";
import { renderHook } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { authRedirect } from "../utils/auth";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("../utils/auth", () => ({
  authRedirect: jest.fn(),
}));

jest.mock("react", () => {
  const originalModule = jest.requireActual("react");

  return {
    __esModule: true,
    ...originalModule,
    useEffect: jest.fn((fn, deps) => {
      fn();
    }),
  };
});

describe("Checking the useAuthProvider to see if the hook is working correctly ", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  test("& ... render hook with pathname='/' and rerender with pathname = '/test' ", () => {
    usePathname.mockReturnValueOnce("/").mockReturnValueOnce("/test");
    const { rerender } = renderHook(() => useAuthProvider());

    expect(usePathname.mock.results[0].value).toBe("/");
    expect(authRedirect).toHaveBeenCalledWith("/");

    rerender();

    expect(usePathname.mock.results[1].value).toBe("/test");
    expect(authRedirect).toHaveBeenCalledWith("/test");
  });
});
