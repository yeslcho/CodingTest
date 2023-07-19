function solution(numbers, num1, num2) {
    let cnt = num1;
    let answer = []
    while(cnt <= num2) {
        answer.push(numbers[cnt])
        cnt = cnt + 1
    }
    return answer;
}