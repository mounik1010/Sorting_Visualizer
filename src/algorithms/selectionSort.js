import { sleep } from "../utilities/sleep";

export async function selectionsort(
  array,
  setArray,
  setComparing,
  setSorted,
  speed
) {
  let arr = [...array];

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      setComparing([min, j]);
      await sleep(speed);

      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      setArray([...arr]);
      await sleep(speed);
    }

    setComparing([]);
    setSorted((prev) => [...prev, i]);
  }

  setSorted(Array.from({ length: arr.length }, (_, i) => i));
}