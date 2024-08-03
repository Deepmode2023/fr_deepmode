import { expect } from "@jest/globals";
import { authRedirect } from "./auth";
import { redirect } from "next/navigation";
import { GetterChunkRouteFromRoutesByPath } from "@/routes";

jest.mock("@/routes");
jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");

  return {
    __esModule: true,
    ...originalModule,
    redirect: jest.fn((path) => path),
  };
});

describe("authRedirect function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("& ... with default path = '/'  ", () => {
    const chunk = [{ pathname: "/", protected: true }];
    GetterChunkRouteFromRoutesByPath.mockReturnValueOnce(chunk);
    authRedirect("/");
    expect(GetterChunkRouteFromRoutesByPath.mock.results[0].value).toEqual(
      chunk
    );
    expect(redirect).toHaveBeenCalled();
    expect(GetterChunkRouteFromRoutesByPath).toHaveBeenCalledWith("/", true);
  });

  test("& ... with path = '/test' ", () => {
    GetterChunkRouteFromRoutesByPath.mockReturnValueOnce([]);
    authRedirect("/test");
    expect(GetterChunkRouteFromRoutesByPath.mock.results[0].value).toEqual([]);
    expect(redirect).not.toHaveBeenCalled();
  });

  test("& ... with unprotected path = '/unprotected' ", () => {
    const chunk = [{ path: "/unprotected", protected: false }];
    GetterChunkRouteFromRoutesByPath.mockReturnValueOnce(chunk);

    authRedirect(chunk[0].path);
    expect(GetterChunkRouteFromRoutesByPath.mock.results[0].value).toEqual(
      chunk
    );
    expect(redirect).not.toBeCalled();
  });
});
