function solution(numbers) {
    // 1. 숫자를 문자열로 변환
    var answer = numbers.map(number => number.toString());
    
    // 2. 정렬
    answer.sort((a, b) => (b + a) - (a + b));
    
    // 3. 합치기
    answer = answer.join('');
    
    // 4. 0 처리
    return answer[0] === '0' ? '0' : answer;
}