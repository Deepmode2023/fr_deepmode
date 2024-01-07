export const boundarySSRComponents = (params: Object) => {
  const boundary = `${Math.random().toString(16).substring(2)}`;
  const mapped_field = Object.entries(params);
  const formDataBody =
    `--${boundary}\r\n` +
    mapped_field
      .map(
        ([key, value], index) =>
          `Content-Disposition: form-data; name="${key}"\r\n\r\n${value}\r\n--${boundary}${
            index + 1 === mapped_field.length ? "--" : ""
          }\r\n`
      )
      .join("");

  return { formDataSSR: formDataBody, boundary };
};
