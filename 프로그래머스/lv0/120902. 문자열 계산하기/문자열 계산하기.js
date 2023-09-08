function solution(my_string) {
    const arr = my_string.split(' ');
    let answer = Number(arr[0]);
    for(let i=1; i<arr.length; i+=2){
        const op = arr[i];
        const num = Number(arr[i+1]);
        if(op === '+'){
            answer += num;
        } else {
            answer -= num;
        }
    }
    return answer;
}