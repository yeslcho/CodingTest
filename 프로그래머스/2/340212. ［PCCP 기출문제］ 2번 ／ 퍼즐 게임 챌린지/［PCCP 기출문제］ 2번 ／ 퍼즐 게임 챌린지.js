function solution(diffs, times, limit) {
    // 투 포인터 설정
    let left = 1
    let right = 100_001 // Math.max(...diffs) 하면 런타임 에러 뜸
    
    while(left <= right) {
        // 이진 탐색을 위한 mid 선언
        const mid = Math.floor((left + right) / 2)
        if(canSolve(mid)) right = mid - 1 
        else left = mid + 1
    }
    
    // 문제 해결이 가능한 난이도인지 판별
    function canSolve(level) {
        let curTimeSum = 0
        for(let j = 0; j < diffs.length; j++) {
            const prevTime = j > 0 ? times[j - 1] : 0
            const curDiff = diffs[j]
            const curTime = times[j]
            // 내 숙련도로 현재 문제를 깬다면
            if(level >= curDiff) {
                curTimeSum += curTime
            } else {
                // 몇 번 문제를 틀릴지
                const wrongAnsTimes = curDiff - level
                // 소비될 시간
                curTimeSum += (prevTime + curTime) * wrongAnsTimes + curTime
            }
        }
        return curTimeSum <= limit
    }
    
    return left
}