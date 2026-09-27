// Production TypeScript — lesson m01l04 — Type Annotations, Type Inference And Contextual Typing
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l04
// © LearnSome.tech
interface Product {
  name: string;
  price: number;
}

const items: Product[] = [
  { name: "Notebook", price: 15 },
  { name: "Pen", price: 3 },
  { name: "Backpack", price: 50 }
];

// item is contextually typed as Product without manual annotation
const names = items
  .filter((item) => item.price > 10)
  .map((item) => item.name.toUpperCase());

console.log(names.join(", "));
