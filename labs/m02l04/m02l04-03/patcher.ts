// Production TypeScript — lesson m02l04 — void, undefined And null: Exact Optional Property Types
// https://learnsome.tech/courses/typescript-course/watch?lesson=m02l04
// © LearnSome.tech
interface UserUpdatePayload {
  bio?: string | null;
}

function patchBio(cur: string | null, p: UserUpdatePayload): string | null {
  if (p.bio === undefined) return cur;
  if (p.bio === null) return null;
  return p.bio;
}

const untouched = patchBio("Engineer", {});
const cleared = patchBio("Engineer", { bio: null });
const updated = patchBio("Engineer", { bio: "Architect" });

console.log(`Untouched: ${untouched}, Cleared: ${cleared}`);
console.log(`Updated: ${updated}`);
