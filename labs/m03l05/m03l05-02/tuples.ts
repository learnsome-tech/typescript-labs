// Production TypeScript — lesson m03l05 — Tuples: Fixed Length, Labeled Elements And Variadic Tuples
// https://learnsome.tech/courses/typescript-course/watch?lesson=m03l05
// © LearnSome.tech
type GeoPoint = [latitude: number, longitude: number];
type QueryTuple = [query: string, ...params: (string | number)[]];

function executeQuery(...args: QueryTuple): void {
  const [sql, ...params] = args;
  console.log(`SQL: ${sql}`);
  console.log(`Params (${params.length}): ${params.join(", ")}`);
}

const location: GeoPoint = [51.5074, -0.1278];
executeQuery(
  "SELECT * FROM sites WHERE lat = ? AND lng = ?",
  location[0],
  location[1]
);
