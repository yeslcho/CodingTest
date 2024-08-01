function solution(grid) {
  let answer = [];
  let row = grid.length;
  let column = grid[0].length;
  let visited = Array.from(Array(row), () =>
    Array.from(Array(column), () => Array(4).fill(false))
  ); // grid의 row, column, direction을 나타내는 3차원 배열을 만든다.

  let directionX = [1, -1, 0, 0];
  let directionY = [0, 0, 1, -1];

  let possibilities = [
    [0, 3, 2],
    [1, 2, 3],
    [2, 0, 1],
    [3, 1, 0],
  ];
  // 위, 아래, 왼쪽, 오른쪽에서 쏘는 경우를 모두 탐색하고 쏘는 방향에 따라 나오는 좌표를 계산한다.
  // S, L, R순으로 현재 빛의 방향에 따라 다음에 나오는 경우의 수를 정렬한 배열

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      for (let k = 0; k < 4; k++) {
        if (visited[i][j][k]) continue; // 이미 존재했던 사이클이면 continue

        let currentX = i;
        let currentY = j;
        let dir = k;
        let count = 0;

        while (!visited[currentX][currentY][dir]) {
          count++;
          visited[currentX][currentY][dir] = true;
          switch (grid[currentX][currentY]) {
            case "S":
              dir = possibilities[dir][0];
              break;
            case "L":
              dir = possibilities[dir][1];
              break;
            case "R":
              dir = possibilities[dir][2];
              break;
          }
          currentX += directionX[dir];
          currentY += directionY[dir];

          currentX = currentX === row ? 0 : currentX < 0 ? row - 1 : currentX;
          currentY =
            currentY === column ? 0 : currentY < 0 ? column - 1 : currentY;
        }

        answer.push(count);
      }
    }
  }

  return answer.sort((a, b) => a - b); // 모든 경우를 탐색해 나온 answer을 정렬하여 반환
}