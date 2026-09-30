interface UserEntity {
  id: string;
  email: string;
  role: "admin" | "member";
  passwordHash: string;
  createdAt: string;
}
type CreateUserDto = Omit<UserEntity, "id" | "createdAt">;
type UpdateUserDto = Partial<Omit<UserEntity, "id">>;
type PublicProfile = Readonly<Pick<UserEntity, "id" | "email">>;
function renderProfile(user: PublicProfile): string {
  return `Profile: ${user.email} (${user.id})`;
}
const profile: PublicProfile = {
  id: "usr-404",
  email: "staff@company.org",
};
console.log(renderProfile(profile));
