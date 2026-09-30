type UnpackElement<T> = T extends (infer E)[] ? E : T;
type UnpackPromise<T> = T extends Promise<infer R> ? R : T;
type ElementOfNums = UnpackElement<number[]>;
type PlainString = UnpackElement<string>;
type ResolvedUser = UnpackPromise<Promise<{ id: string }>>;
function formatElement(
  value: UnpackElement<number[]>
): string {
  return `Element is number: ${value * 2}`;
}
const singleItem: ElementOfNums = 25;
console.log(formatElement(singleItem));
const user: ResolvedUser = { id: "usr-42" };
console.log(`User: ${user.id}`);
