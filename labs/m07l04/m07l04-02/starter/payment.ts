function logged<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  const name = String(context.name);
  return function (this: This, ...args: Args): Return {
    console.log(`Calling method: ${name}`);
    return target.call(this, ...args);
  };
}
class PaymentService {
  @logged
  process(amount: number): string {
    return `Charged $${amount}`;
  }
}
const service = new PaymentService();
console.log(service.process(150));
