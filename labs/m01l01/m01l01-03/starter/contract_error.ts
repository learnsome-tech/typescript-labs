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
