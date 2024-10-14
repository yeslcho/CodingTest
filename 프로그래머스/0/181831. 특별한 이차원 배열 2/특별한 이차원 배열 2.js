function solution(arr) {
    var answer = 0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i][j]!==arr[j][i]) {
                // break를 사용하려고 했는데 안돼서
                // 둘의 값이 같지 않을경우 return을 사용하여 for문을 끝내버림
               return answer=0
            }
            else {answer=1}
        }
    }
    return answer;
}