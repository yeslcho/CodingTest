function Permutation(arr, selectNum) {
  // 중복 순열 구하기
  const result = [];

  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = Permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });

  return result;
}

function solution(users, emoticons) {
  // 시간 복잡도: O(m * n * 4**n)
  const answer = [];
  const permutation = Permutation([10, 20, 30, 40], emoticons.length);
  // 할인율의 중복 순열 구하기

  permutation.forEach((combi) => {
    let service = 0; // 이모티콘 플러스 서비스 가입자
    const costs = Array(users.length).fill(0); 
    // 각 사용자 별 이모티콘에 사용한 비용

    combi.forEach((c, ci) => {
      // 각 할인율 별로
      users.forEach((user, ui) => {
        // 유저의 최소 구매 할인율이 이모티콘 할인율 이하이면 
        // costs배열에 비용을 계산해서 저장
        if (user[0] <= c) 
          costs[ui] += emoticons[ci] * ((100 - c) / 100);
      });
    });

    // costs배열에서 각 원소가 유저의 최대 비용을 넘으면 이모티콘 구매 비용에 더하기
    // 넘지 않으면 이모티콘 플러스 서비스 가입자 증가
    let sum = 0;
    for (let i = 0; i < costs.length; i++) {
      if (costs[i] < users[i][1]) {
        sum += costs[i];
      } else {
        service++;
      }
    }
    answer.push([service, sum]); // 정답배열에 추가
  });

  // 이모티콘 플러스 서비스 가입자 순으로 내림차순
  // 가입자가 같을 경우 이모티콘에 사용한 비용 순으로 내림차순
  // 가장 맨 앞에 있는게 최대값
  return answer.sort((a, b) => {
    if (a[0] > b[0]) return b[0] - a[0];
    else if (a[0] === b[0]) return b[1] - a[1];
  })[0];
}
