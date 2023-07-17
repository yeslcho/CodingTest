function solution(s1, s2) {
    let answer = 0;
    for(let s1Index=0;s1Index<s1.length;s1Index++){
    const s1Item = s1[s1Index];
    for(let i=0;i<s2.length;i++){
        const s2Item = s2[i];
        if(s1Item === s2Item) {
           answer += 1;
        }
    }
        
        }
    return answer;
}