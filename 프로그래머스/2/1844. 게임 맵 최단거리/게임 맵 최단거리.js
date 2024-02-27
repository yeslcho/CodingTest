function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const queue = [[0, 0]];

    // 방문한 위치를 표시할 배열 (거리 정보 포함)
    const visited = Array.from(Array(n), () => Array(m).fill(0));
    visited[0][0] = 1; // 시작 지점 방문 표시

    while (queue.length) {
        const [x, y] = queue.shift();

        // 목표 지점에 도달했다면 현재 위치까지의 거리 반환
        if (x === n - 1 && y === m - 1) {
            return visited[x][y];
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 맵 범위 내에 있고, 벽이 아니며, 아직 방문하지 않았다면
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = visited[x][y] + 1; // 거리 갱신
                queue.push([nx, ny]); // 큐에 추가
            }
        }
    }

    // 모든 위치를 탐색했으나 목표 지점에 도달하지 못했다면
    return -1;
}
