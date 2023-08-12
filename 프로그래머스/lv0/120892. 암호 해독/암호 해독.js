function solution(cipher, code) {
    var answer = '';
    for(let i=code-1; i<cipher.length; i+=code){
        const item = cipher[i];
        answer += item;
    }
    return answer;
}