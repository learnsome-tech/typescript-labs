// Production TypeScript — lesson m05l03 — Generic Constraints: extends, keyof And Indexed Access
// https://learnsome.tech/courses/typescript-course/watch?lesson=m05l03
// © LearnSome.tech
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
interface DatabaseRecord {
  id: string;
  table: string;
  rowCount: number;
}
const tableMeta: DatabaseRecord = {
  id: "rec-80",
  table: "users",
  rowCount: 1250,
};
const tbl = getProperty(tableMeta, "table");
const count = getProperty(tableMeta, "rowCount");
console.log(`Table: ${tbl}, Rows: ${count}`);
