function solution(t, p) {
    let result = 0;
    
    for(let i = 0; i < t.length - p.length + 1; i++) {
        let temp = t.slice(i, i + p.length);
        if(temp <= p) {
            result++;
        }
        
    }
    return result;
}