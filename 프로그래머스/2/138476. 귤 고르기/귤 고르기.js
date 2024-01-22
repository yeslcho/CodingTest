function solution(k, tangerine) {
  const obj = {};

  // 같은 종이 몇개가 있는지 확인한다.
  tangerine.forEach((n) => {
    // obj[n] 값이 있으면 1을 더한 값을
    // obj[n] 값이 없으면 1을 넣어준다.
    obj[n] = ++obj[n] || 1;
  });
  // 결과 ex) { '1': 1, '2': 2, '3': 2, '4': 1, '5': 2}

  // 서로 다른 종류의 수의 최솟값을 구하기 위해서는 종류는 상관 없고 값만 필요합니다.
  // Objext.values() 메서드를 통해 값만 추출 한 후
  // sort() 메서드를 이용해 내림차순으로 정렬해줍니다.
  const kind = Object.values(obj).sort((a, b) => b - a);
  // kind = [2, 2, 2, 1, 1]

  let sum = 0;
  let answer = 0;

  // kind를 하나 씩 체크합니다. 정렬했기에 가장 큰 수부터 체크가 됩니다.
  for (let num of kind) {
    // 한번 for문이 돌 때 마다 answer값에 1을 증가시키고.
    // sum 값에 들어온 값들을 더해줍니다.
    answer++;
    sum += num;

    // sum의 값이 k보다 크거나 같으면 최솟값을 충죽했으므로 for문을 중지시킵니다.
    if (sum >= k) break;
  }

  return answer;
}