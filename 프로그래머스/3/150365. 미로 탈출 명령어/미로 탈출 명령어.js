const mDist = (x, y, r, c) => {
  return Math.abs(x - r) + Math.abs(y - c);
};

const move = (n, m, x, y, r, c) => {
  let dx = [1, 0, 0, -1];
  let dy = [0, -1, 1, 0];

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 1 && nx <= n && ny >= 1 && ny <= m) {
      return i;
    }
  }
};

function solution(n, m, x, y, r, c, k) {
  let minDist = mDist(x, y, r, c);
  let res = k - minDist;
  let alp = ["d", "l", "r", "u"];

  if (minDist % 2 !== k % 2 || res < 0) return "impossible";

  let answer = "";

  while (minDist < k) {
    let temp = move(n, m, x, y, r, c);
    answer += alp[temp];
    if (temp === 0) x++;
    else if (temp === 1) y--;
    else if (temp === 2) y++;
    else x--;

    minDist = mDist(x, y, r, c);
    k--;
  }

  if (x < r) answer += "d".repeat(r - x);
  if (y > c) answer += "l".repeat(y - c);
  if (y < c) answer += "r".repeat(c - y);
  if (x > r) answer += "u".repeat(x - r);

  return answer;
}
