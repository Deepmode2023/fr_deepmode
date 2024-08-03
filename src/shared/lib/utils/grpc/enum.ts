function enumHelpers(
  enumObj: Record<string, number>,
  posibleKey: string | number
): string | number {
  let value: string | number | undefined;
  if (typeof posibleKey === "string") {
    value = enumObj[posibleKey];
  }

  if (typeof posibleKey === "number") {
    const reversedObj = Object.entries(enumObj).reduce(
      (acc, [key, value]) => ({ ...acc, [value]: key }),
      {} as Record<number, string>
    );

    value = reversedObj[posibleKey];
  }

  if (value === undefined) {
    throw new Error("Non-existing posibleKey!");
  }

  return value;
}
type GetterKeyType<T> = keyof T | T[keyof T];

const streamConditionEnumObj = {
  CONTINUE: 0,
  CLOSE: 1,
} as const;
const streamConditionEnum = (
  key: GetterKeyType<typeof streamConditionEnumObj>
) => {
  return enumHelpers(streamConditionEnumObj, key);
};

const stateSessionEnumObj = { REFUSE: 0, EXTENDING: 1, ME: 2 } as const;
const stateSessionEnum = (key: GetterKeyType<typeof stateSessionEnumObj>) => {
  return enumHelpers(stateSessionEnumObj, key);
};

export { enumHelpers, streamConditionEnum, stateSessionEnum };
