function solution(balls, share) {
    var answer = 0;
    
    const n = balls;
    const m = share;
    
    let one = 1;
    for(let i=n; i>=n-m+1; i--){
        one *= i;
    }
    
    let two = 1;
    for(let i=m; i>=1; i--){
        two *= i;
    }
    
    answer = Math.floor(one / two)
    return answer;
}