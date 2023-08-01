function solution(my_string, target) {
    var answer = 0;
    if(my_string.includes(target)) {
        answer = 1;
    }
    else {
        answer = 0;
    }
    return answer;
}