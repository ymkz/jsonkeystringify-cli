type Value = Record<string, string>;

export function jsonkeystringify(value: Value) {
  return Object.keys(value)
    .reduce((prev, next) => `${prev} ${next}`)
    .trim();
}
