const oneOf = <TProps extends Record<string, any>>(props: Partial<TProps>) => {
  let returnedType = undefined;
  if (props && Object.getPrototypeOf(props).constructor.name === "Object") {
    const keys = Object.keys(props);

    for (const key in props) {
      if (props[key]) {
        returnedType = { [key]: props[key] };
        break;
      }
    }
  }
  if (!returnedType) {
    throw new Error("You don't pass type inside props!");
  }

  return returnedType;
};

const convertKeyToMethodGrpc = (
  key: string,
  replacedChar: String[] = ["_", "-", ",", " "]
): string => {
  if (typeof key !== "string" || key.length === 0) {
    return "";
  }

  let keyMethod = "";
  let upperFlag = false;

  keyMethod = key[0].toUpperCase();
  for (let itter = 1; itter <= key.length - 1; itter++) {
    const currentChar = key[itter];

    if (replacedChar.includes(currentChar)) {
      upperFlag = true;
    } else {
      keyMethod += upperFlag ? currentChar.toUpperCase() : currentChar;
      upperFlag = false;
    }
  }

  return keyMethod;
};

const setterGrpcValue = <TProps extends Record<string, any>, TTypeInstance>(
  props: TProps,
  typeInstance: TTypeInstance
): TTypeInstance => {
  if (props && Object.getPrototypeOf(props).constructor.name === "Object") {
    for (const key in props) {
      const methodKey = convertKeyToMethodGrpc(key);

      /* @ts-ignore */
      if (typeInstance[`get${methodKey}`]) {
        /* @ts-ignore */
        typeInstance[`set${methodKey}`](props[key]);
      }
    }
  }

  return typeInstance;
};

export { oneOf, setterGrpcValue, convertKeyToMethodGrpc };
