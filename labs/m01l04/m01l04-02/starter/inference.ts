let mutableName = "Avery"; // inferred as string
const immutableName = "Jordan"; // inferred as "Jordan"

function formatGreeting(name: string): string {
  return `Hello, ${name}!`;
}

console.log(formatGreeting(mutableName));
console.log(formatGreeting(immutableName));
