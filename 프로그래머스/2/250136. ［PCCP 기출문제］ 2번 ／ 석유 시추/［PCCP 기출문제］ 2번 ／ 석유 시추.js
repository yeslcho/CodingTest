function solution(land) {    
    
    let max = 0; // 최대치를 저장할 변수
    
    const n = land.length;
    const m = land[0].length;
  	
  	// 1번 부터 시작해 만나는 석유 덩어리에 번호를 매긴다.
    let oil_index = 1;
    
  	// visited에 실제 크기가 아닌 석유 덩어리 번호를 저장한다.
    const visited= new Array(n).fill().map(_ => new Array(m).fill(0));
  	// 덩어리 번호와 해당 석유 덩어리의 사이즈를 저장하는 map
    const oilMap = new Map();
    
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
  	// 붙어있는 석유를 다 확인하는 BFS
    function bfs(init_x, init_y) {
        let oil = 0;
        const queue = [{x:init_x, y:init_y}];
        
        visited[init_x][init_y] = oil_index;
        
        while(queue.length) {
            const coord = queue.shift();
            let x = coord.x;
            let y = coord.y;
            
            if (land[x][y] === 1) {
                oil++;
            }
            
            for (let i=0; i<4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                
                if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
                
                if (land[nx][ny] === 1) {
                    visited[nx][ny] = oil_index;
                    queue.push({x: nx, y: ny});
                }
            }
        }
        
        oilMap[oil_index++] = oil;
        return oil;
    }
    
  	// 지도를 모두 확인하면서 석유 덩어리의 정보를 만들어 낸다.
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (visited[i][j] === 0 && land[i][j] > 0) bfs(i, j);
        }
    }
    
  	// 인덱스 번호를 set에 담으면서, 중복요소를 만들지 않는다.
    for (let i=0; i<m; i++) {
        let sum = 0;
        const set = new Set();
        for(let j=0; j<n; j++) {
            if (visited[j][i] !== 0) set.add(visited[j][i]);
        }
        set.forEach(item => {
            sum += oilMap[item];
        })
        
        max = sum > max ? sum : max;
    }
    return max
}