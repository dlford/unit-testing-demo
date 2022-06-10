export default function add(...args) {
  let result = 0;

  for (const arg of args) {
    if (typeof arg === "number" && !isNaN(arg)) {
      result += arg;
    }
  }

  return result;
}
