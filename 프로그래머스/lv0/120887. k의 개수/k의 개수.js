const solution = (i, j, k) => {
  let result = 0;
  for (let num = i; num <= j; num++) {
    const split = String(num).split('');
    for (let num2 = 0; num2 < split.length; num2++) {
      if (split[num2].includes(String(k))) {
        result++;
      }
    }
  }
  return result;
}