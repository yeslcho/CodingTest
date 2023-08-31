const obj = {}

function solution(s) {
    var answer = [];
    for(let i=0; i<s.length; i++){
        const item = s[i];
        if(obj[item]){
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    }
    const objArray = Object.entries(obj);
    for(let i=0; i<objArray.length; i++){
        const item = objArray[i];
        if(item[1] === 1){
            answer.push(item[0]);
        }
    }
    const sortedArray = answer.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));

    return sortedArray.join('');
}