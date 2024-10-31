function solution(num_list) {
    let cnt = 0 // num_list의 원소들이 1이될때까지 카운트할 변수
    for (num of num_list){ // num_list 배열을 반복하고
        let number = num; // number변수 초기값을 num으로 두고
        while (true){ // 무한 반복시작
            if (number === 1){ // number가 1이 되면 반복종료
                break
            }
            if (number % 2 === 0){ // 짝수일 때
                number = number / 2
                cnt += 1 // 카운트 1
            }else{ // 홀수일 때
                number = (number - 1) / 2
                cnt += 1 // 카운트 1
            }
        }
    }
    return cnt
}