function solution(s) {
    const stack = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(char);
        } else { // char === ')'
            if (stack.length === 0) {
                return false; // 스택이 비어있으면 false
            }
            stack.pop();
        }
    }

    return stack.length === 0; // 스택이 비어있으면 true, 아니면 false
}