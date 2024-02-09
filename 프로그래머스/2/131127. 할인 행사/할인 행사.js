function solution(want, number, discount) {
  let count = 0;
  
  // 시작값을 기준으로 10개씩 자르기
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);
	
    // 원하는 제품의 원하는 개수와 일치하는지 확인
    let flag = true;
    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    // 원하는 제품들이 목표 수량만큼 존재하는 경우
    if (flag) count += 1;
  }
  return count;
}