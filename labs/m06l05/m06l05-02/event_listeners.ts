// Production TypeScript — lesson m06l05 — Mapped Types, Key Remapping With as And Template Literals
// https://learnsome.tech/courses/typescript-course/watch?lesson=m06l05
// © LearnSome.tech
interface UserState {
  username: string;
  email: string;
}
type EventListeners<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (
    newValue: T[K]
  ) => void;
};
type UserEvents = EventListeners<UserState>;
const handlers: UserEvents = {
  onUsernameChange: (name) => {
    console.log(`Username updated to: ${name}`);
  },
  onEmailChange: (email) => {
    console.log(`Email updated to: ${email}`);
  },
};
handlers.onUsernameChange("octocat");
handlers.onEmailChange("octo@github.com");
