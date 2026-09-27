// Production TypeScript — lesson m07l03 — The satisfies Operator: Safe Validation Without Widening
// https://learnsome.tech/courses/typescript-course/watch?lesson=m07l03
// © LearnSome.tech
type ColorToken = string | [number, number, number];
interface ThemeConfig {
  primary: ColorToken;
  secondary: ColorToken;
  accent: ColorToken;
}
const theme = {
  primary: "#3b82f6",
  secondary: [16, 185, 129],
  accent: "amber",
} satisfies ThemeConfig;
const hex = theme.primary.toUpperCase();
const rgb = theme.secondary.map((c) => c * 2);
console.log(`Primary hex: ${hex}`);
console.log(`Doubled RGB: ${rgb.join(", ")}`);
