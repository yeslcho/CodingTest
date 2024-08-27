function solution(s)
{
    let answer = 1;
    const lenS = s.length;
    // 홀수 펠린드롬
    for (let i = 1; i < lenS; i++) {
        let [l, r] = [i-1, i+1];
        let currentLength = 1;
        while (0 <= l && r < lenS) {
            if (s[l] == s[r]) {
                currentLength += 2;
                l -= 1;
                r += 1;
            } else {
                break;
            };
        };
        if (currentLength > answer) {
            answer = currentLength;
        };
    };
    
    // 짝수 펠린드롬
    for (let j = 0; j < lenS-1; j++) {
        let [l, r] = [j, j+1];
        let currentLength = 0;
        while (0 <= l && r < lenS) {
            if (s[l] == s[r]) {
                currentLength += 2;
                l -= 1;
                r += 1;
            } else {
                break;
            };
        };
        if (currentLength > answer) {
            answer = currentLength;
        };
    };
    
    return answer;
}