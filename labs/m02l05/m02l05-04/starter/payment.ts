type PaymentMethod = "card" | "bank_transfer" | "apple_pay";

function assertNever(x: never): never {
  throw new Error(`Unhandled union variant: ${JSON.stringify(x)}`);
}

function processPayment(method: PaymentMethod): string {
  switch (method) {
    case "card":
      return "Processing credit card gateway";
    case "bank_transfer":
      return "Initiating automated clearing house transfer";
    case "apple_pay":
      return "Authorizing biometric device token";
    default:
      return assertNever(method);
  }
}

console.log(processPayment("card"));
console.log(processPayment("apple_pay"));
