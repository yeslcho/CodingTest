function solution(age) {
    var answer = '';
    const stringAge = String(age);
    
    for(let i=0; i<stringAge.length; i++){
        answer += String.fromCharCode(stringAge[i].charCodeAt(0) + 49);
    }
    return answer;
}