// Production TypeScript — lesson m04l03 — Custom Type Predicates: Functions Returning is Type
// https://learnsome.tech/courses/typescript-course/watch?lesson=m04l03
// © LearnSome.tech
interface Member {
  id: string;
  name: string;
}

// Type predicate: narrows (Member | null) to Member
function isNotNull<T>(val: T | null | undefined): val is T {
  return val !== null && val !== undefined;
}

const rawMembers: (Member | null)[] = [
  { id: "mem_1", name: "Taylor" },
  null,
  { id: "mem_2", name: "Casey" }
];

// filtered is Member[], not (Member | null)[]
const activeMembers: Member[] = rawMembers.filter(isNotNull);
console.log(`Active count: ${activeMembers.length}`);
console.log(`Names: ${activeMembers.map((m) => m.name).join(", ")}`);
