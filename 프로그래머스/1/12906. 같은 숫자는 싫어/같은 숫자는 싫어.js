function solution(arr) {
    // 스택을 초기화합니다.
    const stack = [];
    
    // 주어진 배열을 순차적으로 탐색합니다.
    for (let num of arr) {
        // 스택이 비어있지 않고, 스택의 마지막 원소가 현재 숫자와 같지 않다면
        // 스택에 현재 숫자를 추가합니다.
        if (stack.length === 0 || stack[stack.length - 1] !== num) {
            stack.push(num);
        }
    }
    
    // 스택에 남아있는 원소가 결과입니다.
    return stack;
}