// Production TypeScript — lesson m01l01 — Why TypeScript: Contracts, Erased Types And Soundness
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l01
// © LearnSome.tech
interface User {
  id: string;
  email: string;
}

function notify(user: User): void {
  console.log(user.email.toLowerCase());
}

// Error: property email is missing
const broken = { id: "usr_200" };
notify(broken as any);
