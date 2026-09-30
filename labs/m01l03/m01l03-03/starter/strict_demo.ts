function findUser(id: string): string | undefined {
  return id === "1" ? "Morgan" : undefined;
}

const user = findUser("2");
if (user !== undefined) {
  console.log(`Found: ${user.toUpperCase()}`);
} else {
  console.log("User not found");
}
