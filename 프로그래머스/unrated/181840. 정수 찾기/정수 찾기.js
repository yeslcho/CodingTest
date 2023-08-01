function solution(num_list, n) {
    let answer = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] === n) {
            answer = 1;
        }
    }
    return answer;
}