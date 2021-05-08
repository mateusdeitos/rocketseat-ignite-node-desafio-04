/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const newParam = (
  _in: "path" | "query" | "header",
  name: string,
  type = "string",
  format = "",
  required = false
) => {
  return {
    in: _in,
    name,
    type,
    format,
    required,
  };
};
