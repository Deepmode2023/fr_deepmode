import { renderHook, RenderHookResult, waitFor } from "@testing-library/react";
import {
  IStandartValidateValue,
  SPECIAL_VALIDATE,
} from "@/interfaces/validate";
import { expect, jest } from "@jest/globals";
import { StandartValidate } from "@/utils/validateInput";
import { useInputSettings, UseValueType } from "../useInputSettings";
import { EyeSvg, CloseEyeSvg } from "@/assets/icons";
import { COLORS, SIZE_ICONS } from "../constants";

Object.defineProperty(window, "scrollTo", { value: jest.fn() });

describe("Check correct work hooks useInputSettings", () => {
  const onValidInputMock = jest.fn(
    (value: string, type: SPECIAL_VALIDATE): IStandartValidateValue => ({
      isValidate: true,
      message: "some",
    })
  );
  const valueTyping = "Some value typing...";
  let hookInstance: RenderHookResult<
    ReturnType<typeof useInputSettings>,
    UseValueType
  >;

  const params: UseValueType = {
    type: "email",
    onValidateInput: onValidInputMock,
  };

  beforeEach(async () => {
    hookInstance = renderHook((props) =>
      useInputSettings({ ...(props ?? params) })
    );

    await waitFor(() => {
      hookInstance.result.current.setValue(valueTyping);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Check how the value parameter is changed", async () => {
    expect(hookInstance.result.current.value).toBe(valueTyping);
  });

  test("Checking how the touch parameter changes", async () => {
    expect(hookInstance.result.current.touch).toBe(true);

    await waitFor(() => {
      hookInstance.result.current.setValue("");
    });

    expect(hookInstance.result.current.touch).toBe(false);
  });

  test("Checking the validatetion function we passed in", async () => {
    //We have strick mode and 2 render after changes always
    expect(onValidInputMock.mock.calls).toHaveLength(3);
    expect(onValidInputMock).toHaveBeenCalledWith(valueTyping, params.type);
    expect(onValidInputMock.mock.results[1].value).toEqual({
      isValidate: true,
      message: "some",
    });
  });

  test("Checking the correct operation of the StandardValidate function", async () => {
    jest.clearAllMocks();

    const valueInsideHook = hookInstance.result.current.value;
    await waitFor(() => {
      hookInstance.rerender({ ...params, onValidateInput: undefined });
    });
    expect(valueInsideHook).toBe(valueTyping);
    expect(onValidInputMock).not.toHaveBeenCalled();
    expect(hookInstance.result.current.message).toBe(
      StandartValidate(valueInsideHook, params.type).message
    );
  });

  test("Checking the correct color of the display icon with the password type", async () => {
    await waitFor(() => {
      hookInstance.rerender({ onValidateInput: undefined, type: "password" });
    });

    expect(hookInstance.result.current.isValid).toBe(false);
    expect(hookInstance.result.current.iconButton).toEqual(
      <CloseEyeSvg fill={COLORS.error} height={SIZE_ICONS} width={SIZE_ICONS} />
    );

    await waitFor(() => {
      hookInstance.result.current.setValue("Test valid value1");
    });

    expect(hookInstance.result.current.isValid).toBe(true);
    expect(hookInstance.result.current.iconButton).toEqual(
      <CloseEyeSvg
        fill={COLORS.success}
        height={SIZE_ICONS}
        width={SIZE_ICONS}
      />
    );
  });

  test("Checking that the icon is displayed correctly with type password", async () => {
    await waitFor(() => {
      hookInstance.rerender({ onValidateInput: undefined, type: "password" });
    });
    const color = hookInstance.result.current.isValid
      ? COLORS.success
      : COLORS.error;

    expect(hookInstance.result.current.iconButton).toEqual(
      <CloseEyeSvg fill={color} width={SIZE_ICONS} height={SIZE_ICONS} />
    );

    await waitFor(() => {
      hookInstance.result.current.callbackIconClick({});
    });

    expect(hookInstance.result.current.iconButton).toEqual(
      <EyeSvg fill={color} width={SIZE_ICONS} height={SIZE_ICONS} />
    );
  });

  test("useInputSettings snapshot", () => {
    expect(hookInstance).toMatchSnapshot();
  });
});
