function solution(numbers) {
    var answer = [];
   for(let cnt = 0; cnt < numbers.length; cnt = cnt + 1) {
       answer.push(numbers[cnt] * 2)
   }
    return answer;
}