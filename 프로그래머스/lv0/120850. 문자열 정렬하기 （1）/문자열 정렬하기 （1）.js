function solution(my_string) {
    var answer = [];
    for(let i=0; i<my_string.length; i++){
        const item = Number(my_string[i]);
        if(Number.isNaN(item)){
            continue;
        }
        answer.push(item)
    }
    return answer.sort((a,b) => a-b);
}
