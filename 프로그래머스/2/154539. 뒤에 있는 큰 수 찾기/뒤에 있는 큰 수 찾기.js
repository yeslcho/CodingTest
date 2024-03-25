function solution(numbers) {
    var answer = [];
    var stack = []; // 가장 가까이 있는 큰수를 찾기 위해 비교 스택 생성
 
    // 1) numbers 길이 만큼 반복, 뒤에서 부터 비교
    while (numbers.length) {
        
        // 2) stack에 담긴 값이 없다 = 현재 자신이 제일 크다
        if(!stack.length) {            
            answer.push(-1);
            
            // 3) 현재 자신의 숫자를 stack에 담고 numbers에서 제거한다.
            stack.push(numbers.pop());
        } else {
            // 4) stack에 담긴 값이 있을 경우, stack의 값과 비교하여 가장 가까이 있는 큰수 찾기
            if(stack[stack.length-1] > numbers[numbers.length-1]) {
                // 5) stack에서 큰수를 찾은 경우, answer에 해당 값을 담는다.
                answer.push(stack[stack.length-1]);                   
                
                // 6) 현재 자신의 숫자를 stack에 담고 numbers에서 제거한다.
                stack.push(numbers.pop());
            } else {
                /* 
                    7) 가장 가까이 있는 큰 수를 찾는 것이기 때문에 최근 저장한 stack의 값이 현재 자신보다
                     작다면 해당 stack 값은 버린다. 어차피 현재 값보다 작기 때문에 비교 대상에서 제외된다. 
                */
                stack.pop();
            }
        }
    }
 
    return answer.reverse();
}