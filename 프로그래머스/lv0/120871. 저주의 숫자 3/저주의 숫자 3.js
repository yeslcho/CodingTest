function solution(n) {
    let cnt = 0
    for(let i = 1 ; i <= n ; i ++) {
        cnt++
        while(cnt.toString().includes('3') || cnt%3 === 0) {
            cnt++
        }
    }
    return cnt;
}