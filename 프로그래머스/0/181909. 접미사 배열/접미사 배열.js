function solution(my_string) {
    let answer = [];
    for(let i = 0; i < my_string.length; i++) {
   answer.push(my_string.substr(i, my_string.length))
        
    } return answer.sort()
}