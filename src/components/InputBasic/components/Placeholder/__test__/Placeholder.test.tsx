import { render, waitFor, RenderResult, screen } from "@testing-library/react";
import { Placeholder } from "../Placeholder";
import { expect, jest } from "@jest/globals";
import { ID_TESTING } from "@/components/InputBasic/constants";

Object.defineProperty(window, "scrollTo", { value: jest.fn() });

describe("Testing Placeholder components", () => {
  let componentRender: RenderResult;
  const props = {
    color: "grey",
    placeholder: "Some placeholder",
    message: "",
    validateMessage: true,
  };

  beforeEach(() => {
    componentRender = render(<Placeholder {...props} />);
  });

  test("Test without placeholder", () => {
    expect(
      componentRender.getByTestId(ID_TESTING.placeholder).textContent
    ).toBe(props.placeholder);
  });

  test("Test with validation message", async () => {
    expect(
      componentRender.getByTestId(ID_TESTING.placeholder).textContent
    ).toBe(props.placeholder);

    componentRender.rerender(
      <Placeholder {...{ ...props, message: "error message" }} />
    );

    const placeholder = await componentRender.findByTestId(
      ID_TESTING.placeholder
    );
    expect(placeholder.textContent).toBe("error message");
  });

  test("Test with null placeholder", async () => {
    componentRender.rerender(
      <Placeholder {...{ ...props, placeholder: undefined }} />
    );

    await waitFor(() => {
      expect(componentRender.queryByTestId(ID_TESTING.placeholder)).toBeNull();
    });
  });

  test("Test check color displayed message", () => {
    const placeholder = componentRender.getByTestId(ID_TESTING.placeholder);

    expect(placeholder.parentElement).toHaveStyle({
      color: "grey",
    });

    componentRender.rerender(<Placeholder {...{ ...props, color: "red" }} />);

    expect(placeholder.parentElement).toHaveStyle({
      color: "red",
    });
  });

  test("Test with false validateMessage props", () => {
    componentRender.rerender(
      <Placeholder
        {...{ ...props, validateMessage: false, message: "error message" }}
      />
    );

    expect(
      componentRender.getByTestId(ID_TESTING.placeholder)
    ).toHaveTextContent(props.placeholder);
  });
});
