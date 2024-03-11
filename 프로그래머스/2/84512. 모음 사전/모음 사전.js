function solution(word) {
  let ans = 0;
  let alpha = ["A", "E", "I", "O", "U"];
  let count = 0;
  let flg = false;

  const DFS = (str) => {
    if (str.length > 5 || flg) return;

    if (str === word) {
      ans = count;
      flg = true;
      return;
    }

    count += 1;

    for (let i = 0; i < 5; i++) {
      DFS(str + alpha[i]);
    }
  };

  DFS("");

  return ans;
}