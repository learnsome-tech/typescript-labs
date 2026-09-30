type DomainEvent =
  | { type: "REGISTER"; email: string }
  | { type: "PAYMENT"; amount: number }
  | { type: "CANCEL"; reason: string };
function assertNever(x: never): never {
  throw new Error(`Unhandled event: ${JSON.stringify(x)}`);
}
function dispatch(event: DomainEvent): string {
  switch (event.type) {
    case "REGISTER":
      return `Email to ${event.email}`;
    case "PAYMENT":
      return `Booked $${event.amount}`;
    case "CANCEL":
      return `Survey: ${event.reason}`;
    default:
      return assertNever(event);
  }
}
const sample: DomainEvent = { type: "PAYMENT", amount: 49 };
console.log(dispatch(sample));
