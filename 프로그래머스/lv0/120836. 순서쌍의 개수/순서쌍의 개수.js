function solution(n) {
    var answer = 0;
    let cnt = 1;
    while(true) {
        if(cnt > n) {
            break;
        }
        if(n % cnt === 0) {
            answer = answer + 1;
           
        }
        cnt = cnt + 1;
        
    }
    return answer;
}