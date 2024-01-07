import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Test } from "../Test";

describe("Page", () => {
  it("renders a heading", () => {
    const component = renderer.create(<Test />);

    expect(component).toMatchSnapshot();
  });
});
