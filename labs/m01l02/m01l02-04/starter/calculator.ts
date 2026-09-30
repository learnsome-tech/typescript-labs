export function add(a: number, b: number): number {
  return a + b;
}

export const TAX_RATE = 0.2;
console.log(`Sum: ${add(10, 20)}, Tax: ${TAX_RATE}`);
