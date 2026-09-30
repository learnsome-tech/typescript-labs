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
