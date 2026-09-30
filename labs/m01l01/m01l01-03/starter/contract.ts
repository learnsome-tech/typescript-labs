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
