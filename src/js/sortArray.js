export default function sort(arr) {
  return arr.sort((prev, next) => next.health - prev.health);
}
