// Production TypeScript — lesson m06l03 — Function Utilities: ReturnType, Parameters And Constructor
// https://learnsome.tech/courses/typescript-course/watch?lesson=m06l03
// © LearnSome.tech
function processOrder(orderId: string, priority: boolean): string {
  return `Processed order ${orderId} with priority ${priority}`;
}
type ProcessOrderArgs = Parameters<typeof processOrder>;
type ProcessOrderReturn = ReturnType<typeof processOrder>;
function withMetrics<F extends (...args: any[]) => any>(
  fn: F,
  label: string
): (...args: Parameters<F>) => ReturnType<F> {
  return (...args: Parameters<F>): ReturnType<F> => {
    const start = 100;
    const result = fn(...args);
    const duration = 120 - start;
    console.log(`[${label}] took ${duration}ms`);
    return result;
  };
}
const trackedOrder = withMetrics(processOrder, "order_svc");
console.log(trackedOrder("ord-77", true));
