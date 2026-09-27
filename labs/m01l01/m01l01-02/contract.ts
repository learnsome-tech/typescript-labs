// Production TypeScript — lesson m01l01 — Why TypeScript: Contracts, Erased Types And Soundness
// https://learnsome.tech/courses/typescript-course/watch?lesson=m01l01
// © LearnSome.tech
interface User {
  id: string;
  email: string;
  isActive: boolean;
}

function sendWelcome(user: User): string {
  return `Sending welcome email to ${user.email}`;
}

const newUser = { id: "usr_100", email: "alex@example.com", isActive: true };
console.log(sendWelcome(newUser));
