function check(num){
    // 5이하로 떨어졌을때 11011이기 => 2만 제외하고 true리턴
  if (num < 5 && num != 2) return true;
    // 5개 중에 2번째 값은 0이기 때문에 false리턴
  if ((num - 2) % 5 === 0) return false;

    //만약 5를 넘고, 2번째 값이 아니라면 5를 나눠서 진행
  return check(Math.floor(num / 5));
}


function solution(n, l, r) {
    var answer = 0;
    for(var i = l-1; i<r;i++){
      if(check(i)){
        answer++;
      }
    }
    return answer;
}