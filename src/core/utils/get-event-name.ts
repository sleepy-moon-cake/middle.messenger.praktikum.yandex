export function getEventName(...names: string[]): string {
  return names.reduce((name1, name2) => `${name1} ${name2}`);
}
