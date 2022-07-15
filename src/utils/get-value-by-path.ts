export function getValueByPath(
  obj: Record<string, unknown>,
  path: string
): unknown | undefined {
  const paths = path.split(".");

  return paths.reduce((prev: Record<string, unknown> | unknown | null, curr: string) => {
    if (typeof prev === "object" && prev !== null) {
      return (prev as Record<string, unknown>)[curr];
    }
  }, obj);
}
