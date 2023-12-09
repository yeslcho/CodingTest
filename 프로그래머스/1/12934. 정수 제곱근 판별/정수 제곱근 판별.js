function solution(n) {
    var answer = 0;
    let sqrt = Math.sqrt(n);
    if (sqrt % 1 !== 0) { // 나머지를 이용해 소숫점 판별, 제곱근이 아닐 경우
        answer = -1;
    } else {
        answer = Math.pow(sqrt+1,2); // 제곱근일 경우
    }
    return answer
}