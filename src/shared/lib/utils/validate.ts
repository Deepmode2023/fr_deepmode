export interface IStandartValidateValue {
  isValidate: boolean;
  message: string;
}

export type SPECIAL_VALIDATE = "password" | "email" | "text";

const REGEX_INSTANCE = {
  passoword: new RegExp(/^(?=.*[A-Z])(?=.*\d).+$/),
  email: new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
};

export const StandartValidate = (
  value: string,
  specialValidate?: SPECIAL_VALIDATE
): IStandartValidateValue => {
  let returnedValue = { isValidate: true, message: "" };

  if (value.length < 6) {
    returnedValue = {
      isValidate: false,
      message: "Value must be greater than 6 characters!",
    };
  }

  if (specialValidate === "email" && !REGEX_INSTANCE.email.test(value)) {
    returnedValue = {
      isValidate: false,
      message: "The value must be similar example@gmail.com",
    };
  }

  if (specialValidate === "password" && !REGEX_INSTANCE.passoword.test(value)) {
    returnedValue = {
      isValidate: false,
      message: "The value must contain 1 capital letter and 1 digit",
    };
  }

  return returnedValue;
};

export const prototypeEnumValidate = (
  value: string,
  Enum: { [key: string]: string }
) => {
  let variantSlug = "";
  const isErorr = Object.entries(Enum).reduce((acc, [_, valueEnum]) => {
    variantSlug = variantSlug.concat(" ", valueEnum, ",");
    if (acc) return acc;
    if (valueEnum === value.toUpperCase()) return true;

    return acc;
  }, false);

  if (!isErorr) {
    return {
      isValidate: false,
      message: "You need write similar this case ".concat(variantSlug),
    };
  }

  return { isValidate: true, message: "" };
};

export const validateMaxLength = (value: string, maxLength: number) => {
  if (value.length >= maxLength) {
    return { isValidate: true, message: "" };
  }

  return {
    isValidate: false,
    message: `Value must be greater than or equal to ${maxLength}.`,
  };
};
