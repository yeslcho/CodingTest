function solution(line) {
  // 두 직선의 교점 낳을 배열
  const points = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];
	
      const adbc = a * d - b * c;
	  // 나머지가 0이 아닌경우는 소수이기때문에 조건설정
      if (
        ((b * f - e * d) / adbc) % 1 === 0 &&
        ((e * c - a * f) / adbc) % 1 === 0
      ) {
        // 좌표를 points에 넣어줌
        points.push([(b * f - e * d) / adbc, (e * c - a * f) / adbc]);
      }
    }
  }

  // 평면을 그려줌
  // 최소 최댓값 설정해주고
  let minX = Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  let maxX = -Infinity;

  for (let [x, y] of points) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }

  // 좌표 x,y값 구하기
  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  const star = Array.from(Array(height), () => Array(width).fill("."));

  // 배열은 0부터 시작하니깐 maxY, minX를 사용해서 좌표값 배열에 맞게 계산
  for (let [x, y] of points) {
    star[maxY - y][x - minX] = "*";
  }

  return star.map((a) => a.join(""));
}