import { expect } from "@jest/globals";
import {
  GetterChunkRouteFromRoutesByPath,
  ExactMatchPathInRouteHelpers,
} from "./routes";

describe("GetterChunkRouteFromRoutesByPath testing simple keys", () => {
  test("with path = null", () => {
    const chunk = GetterChunkRouteFromRoutesByPath(null, false);
    expect(chunk.length).toBe(0);
    expect(chunk).toEqual([]);
  });

  test("with params *path = /report, exactMatch = false", () => {
    const chunk = GetterChunkRouteFromRoutesByPath("/report", false);
    expect(chunk.length).toBe(2);
  });

  test("with params *path = /report, exactMatch = true", () => {
    let chunk = GetterChunkRouteFromRoutesByPath("/report", true);
    expect(chunk.length).toBe(0);

    chunk = GetterChunkRouteFromRoutesByPath("schedule/report", true);
    expect(chunk.length).toBe(1);
    expect(chunk[0]).toEqual({
      name: "schedule_report",
      title: "Activity Report",
      path: "/schedule/report",
      protected: true,
      active: true,
    });
  });
});

describe("ExactMatchPathInRouteHelpers checked correct logic", () => {
  const path = "/some/previlagent/path";
  const matherObject = { path };

  test("With null path parametrs", () => {
    expect(ExactMatchPathInRouteHelpers(matherObject, false, null)).toBe(false);
    expect(ExactMatchPathInRouteHelpers(matherObject, true, null)).toBe(false);
  });

  test("With exactMather == true", () => {
    expect(ExactMatchPathInRouteHelpers(matherObject, true, "/some")).toBe(
      false
    );
    expect(ExactMatchPathInRouteHelpers(matherObject, true, path)).toBe(true);
  });

  test("With exactMather == false", () => {
    expect(ExactMatchPathInRouteHelpers(matherObject, false, "/some")).toBe(
      true
    );
  });
});
