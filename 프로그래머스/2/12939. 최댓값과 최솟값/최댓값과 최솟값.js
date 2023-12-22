function solution(s) {
    var answer = '';
    var list = s.split(' ');    
    var max = Math.max(...list);
    var min = Math.min(...list);
    answer = min + " " + max;
    return answer;
}