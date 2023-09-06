function solution(my_str, n) {
    const answer = [];
    let tempStr = '';
    for(let i=0; i<my_str.length; i++){
        const item = my_str[i];
        tempStr += item;
        if(i % n === n-1){
            answer.push(tempStr);
            tempStr = '';
        }
    }
    if(tempStr.length > 0){
        answer.push(tempStr);
    }
    return answer;
}
