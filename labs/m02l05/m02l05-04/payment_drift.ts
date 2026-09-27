// Production TypeScript — lesson m02l05 — never: The Bottom Type And Exhaustive Switch Checking
// https://learnsome.tech/courses/typescript-course/watch?lesson=m02l05
// © LearnSome.tech
// Adding a new variant causes a compile-time failure
type PaymentMethod = "card" | "bank_transfer" | "apple_pay" | "crypto";

function handle(method: PaymentMethod): string {
  switch (method) {
    case "card":
      return "Card";
    case "bank_transfer":
      return "ACH";
    case "apple_pay":
      return "ApplePay";
    default:
      // Error TS2345: Argument of type 'string' is not assignable to 'never'
      // The compiler flags that "crypto" was not handled!
      const exhaustiveCheck: never = method;
      return exhaustiveCheck;
  }
}
