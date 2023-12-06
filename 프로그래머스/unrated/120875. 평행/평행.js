function solution(dots) {
    // 직선의 기울기 (y1 - y2) / (x1 - x2)
    // 점을 잇는 경우의 수는 3개
    // 세 개면 다 하는게 빠를 것 같음
    let answer = 0;
    
    let a = Math.abs(dots[0][1] - dots[1][1]) / Math.abs(dots[0][0] - dots[1][0]);
    let b = Math.abs(dots[2][1] - dots[3][1]) / Math.abs(dots[2][0] - dots[3][0]);
    
    if (a - b === 0) {
        answer = 1;
    }
    
    let c = Math.abs(dots[0][1] - dots[2][1]) / Math.abs(dots[0][0] - dots[2][0]);
    let d = Math.abs(dots[1][1] - dots[3][1]) / Math.abs(dots[1][0] - dots[3][0]);
    
    if (c - d === 0) {
        answer = 1;
    }
    
    let e = Math.abs(dots[0][1] - dots[3][1]) / Math.abs(dots[0][0] - dots[3][0]);
    let f = Math.abs(dots[1][1] - dots[2][1]) / Math.abs(dots[1][0] - dots[2][0]);
    
    if (e - f === 0) {
        answer = 1;
    }
    
    return answer;
}