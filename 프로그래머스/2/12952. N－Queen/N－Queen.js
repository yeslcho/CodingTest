function solution(n) {
  let answer = 0;
  const NOT_VISITED = 100;
  const status = Array(n).fill(NOT_VISITED);

  const isAvailable = (status, row, col) => {
    if (status[col] !== NOT_VISITED) return false;
    for (let idx = 0; idx < status.length; idx++) {
      if (Math.abs((row - status[idx]) / (col - idx)) === 1) {
        return false;
      }
    }
    return true;
  };

  const dfs = (n, row, status) => {
    if (row === n) {
      answer += 1;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isAvailable(status, row, col)) {
        status[col] = row;
        dfs(n, row + 1, status);
        status[col] = NOT_VISITED;
      }
    }
  };

  dfs(n, 0, status);

  return answer;
}