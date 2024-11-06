function solution(strArr) {
    var answer = strArr.map((e)=> e.length);
    var result = {};
    for(var i of answer){
        result[i] = (result[i] || 0) + 1;
    }
    return Math.max(...Object.values(result));
}