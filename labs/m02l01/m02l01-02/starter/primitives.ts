const maxSafe: number = Number.MAX_SAFE_INTEGER;
const largeCount: bigint = 9007199254740993n;

// Symbols are unique identifiers
const internalKey: symbol = Symbol("session_id");
const session = {
  [internalKey]: "sess_xyz",
  username: "Sam"
};

console.log(`Max safe: ${maxSafe}, BigInt: ${largeCount}`);
console.log(`Session owner: ${session.username}`);
