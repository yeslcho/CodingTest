function solution(my_string) {
    var answer = 0;
    for(let i=0;i<my_string.length;i++) {
        const item = my_string[i];
    if(Number.isNaN(Number(item))) {
        
        continue;
    }
      answer += Number(item);
    }
    return answer;
}