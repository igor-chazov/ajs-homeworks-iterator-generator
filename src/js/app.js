export default function canIterate(iterable) {
  if (iterable === null || iterable === undefined) {
    return false;
  }
  if (iterable[Symbol.iterator]) {
    return true;
  }
  return false;
}
