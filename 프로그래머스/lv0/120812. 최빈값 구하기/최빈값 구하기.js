function solution(array) {
    // sort()는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
    let soltedArray = array.sort((a,b) => a-b)
    
    // 차례대로 원소를 확인하여 갯수를 확인
    let choi = -1;         // 최빈값
    let choiRepeatCnt = 0; // 최빈값이 될때 몇번 반복해서 된건지
    let repeatCnt = 0;     // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNumber = 0;  // 이전 숫자
    let isDupChoi = false; // 최빈값 중복 확인
    for (let cnt = 0; cnt < array.length; cnt++){
        // 1. 반복을 세주는 로직
        if(beforeNumber !== array[cnt]){
            repeatCnt = 1;
        } else {
            repeatCnt = repeatCnt + 1;
        }
        // 3. 중복일 때를 확인
        if(repeatCnt === choiRepeatCnt){
            if(choi !== array[cnt]){
                isDupChoi = true;
            }
        }
        // 2. 최빈값의 반복 횟수와 현재 반복 횟수 확인
        if(repeatCnt > choiRepeatCnt){
            choi = array[cnt];
            choiRepeatCnt = repeatCnt;
            isDupChoi = false;
        }
        beforeNumber = array[cnt];
    }
    if(isDupChoi) return -1;
    return choi;
}