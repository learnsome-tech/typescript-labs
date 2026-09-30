function assertDefined<T>(val: T, msg: string): asserts val is NonNullable<T> {
  if (val === null || val === undefined) {
    throw new Error(`Invariant violation: ${msg}`);
  }
}

function processOrder(orderId?: string): string {
  // orderId is string | undefined
  assertDefined(orderId, "Order ID is required");
  // orderId is now narrowed to string for all following lines
  return `Processing order ${orderId.toUpperCase()}`;
}

console.log(processOrder("ord_882"));
