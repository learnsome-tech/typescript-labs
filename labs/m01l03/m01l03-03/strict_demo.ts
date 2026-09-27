// Production TypeScript — lesson m01l03 — tsconfig.json: target, lib, strict And NodeNext
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l03
// © LearnSome.tech
function findUser(id: string): string | undefined {
  return id === "1" ? "Morgan" : undefined;
}

const user = findUser("2");
if (user !== undefined) {
  console.log(`Found: ${user.toUpperCase()}`);
} else {
  console.log("User not found");
}
