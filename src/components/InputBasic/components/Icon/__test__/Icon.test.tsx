import { expect, jest } from "@jest/globals";
import {
  render,
  RenderResult,
  waitFor,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Icon } from "../Icon";
import { CheckSvg, WarningSvg } from "@/assets/icons";
import { ID_TESTING } from "@/components/InputBasic/constants";

describe("", () => {
  const mockCallable = jest.fn();
  const TestComponentIcon = <svg></svg>;
  let componentRender: RenderResult;
  const props = {
    icon: null,
    isValid: true,
    color: "red",
    callbackIconClick: mockCallable,
    validateIcon: true,
  };

  beforeEach(() => {
    componentRender = render(<Icon {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Check validationIcon with false", async () => {
    componentRender.rerender(<Icon {...{ ...props, validateIcon: false }} />);

    expect(componentRender.findByTestId(ID_TESTING.icon)).not.toContain(
      <CheckSvg />
    );
    expect(componentRender.findByTestId(ID_TESTING.icon)).not.toContain(
      <WarningSvg />
    );
  });

  test("Check on the callbackIconClick function", async () => {
    fireEvent.click(componentRender.getByTestId(ID_TESTING.icon));
    expect(mockCallable).not.toHaveBeenCalled();

    await waitFor(() => {
      componentRender.rerender(
        <Icon {...{ ...props, icon: TestComponentIcon, validateIcon: false }} />
      );
    });

    fireEvent.click(componentRender.getByTestId(ID_TESTING.icon));
    expect(mockCallable).toHaveBeenCalled();
  });

  test("Check with null icon", async () => {
    await waitFor(() => {
      componentRender.rerender(<Icon {...{ ...props, validateIcon: false }} />);
    });
    expect(componentRender.queryByTestId(ID_TESTING.icon)).toBeNull();
  });
});
