function solution(strlist) {
    const answer = [];
    for(let i=0;i<strlist.length;i++) {
        const item = strlist[i];
        answer.push(item.length);
    }
    return answer;
}