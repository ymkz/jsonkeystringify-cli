export function jsonkeystringify(value: any) {
  return Object.keys(value)
    .reduce((prev, next) => `${prev} ${next}`)
    .trim();
}
