import { isNil } from "~/utils/isNil";

export const $ = (template: TemplateStringsArray, ...expressions: unknown[]) => {
  expressions = expressions.filter((e) => !isNil(e));
  const elements = new Set<string>();

  template.forEach((segment, idx) => {
    segment = segment.trim();
    let value = expressions[idx];

    if (value && typeof value === "function") {
      value = value();
    }

    if (value && typeof value !== "string") {
      value = `${value}`;
    }

    elements.add(segment);

    if (value != null) {
      elements.add(value as string);
    }
  });

  return Array.from(elements)
    .join(" ")
    .split("\n")
    .map((s) =>
      s
        .split(" ")
        .filter(Boolean)
        .map((s) => s.trim())
        .join(" ")
        .trim(),
    )
    .join(" ");
};
