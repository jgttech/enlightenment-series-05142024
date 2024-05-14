export const isNil = (arg: any) =>
  typeof arg !== "boolean" && typeof arg !== "number" && (arg === "" || arg == null);
