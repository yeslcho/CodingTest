function solution(tickets) {
    tickets.sort(); // 티켓을 알파벳 순으로 정렬
    let visited = Array(tickets.length).fill(false); // 방문한 티켓 관리를 위한 배열
    let answer = []; // 결과 경로 저장을 위한 배열

    function dfs(airport, path, count) {
        path.push(airport); // 현재 공항을 경로에 추가

        if (count === tickets.length) { // 모든 티켓을 사용했다면
            answer = path; // 현재 경로를 결과로 설정
            return true;
        }

        for (let i = 0; i < tickets.length; i++) {
            if (!visited[i] && tickets[i][0] === airport) { // 방문하지 않았고, 현재 공항에서 출발하는 티켓이라면
                visited[i] = true; // 티켓을 사용했다고 표시
                if (dfs(tickets[i][1], [...path], count + 1)) return true; // 다음 공항으로 이동
                visited[i] = false; // 백트래킹
            }
        }
    }

    dfs("ICN", [], 0); // "ICN"에서 시작
    return answer;
}
