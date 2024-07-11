function solution(id_list, report, k) {
  const newRepo = [...new Set(report)]; // report 중복 제거
  const out = []; // 정지 아이디
  const count = Array(id_list.length).fill(0); // 신고수 [0,0,0,0]
  const mail = Array(id_list.length).fill(0); // 메일수 [0,0,0,0]

  for (let r of newRepo) {
    let a = r.split(" ")[0]; // 유저 ID
    let b = r.split(" ")[1]; // 유저가 신고한 ID
    let idxB = id_list.indexOf(b); // id_list에서 신고받은 유저의 index 칮기
    count[idxB] += 1; // 신고받은 유저의 신고수 누적 더하기

    // 신고수가 k개 이상인 경우
    if (count[idxB] >= k) {
      // 정지 리스트에 해당 아아디 추가
      out.push(id_list[idxB])
    }
  }

  // 메일
  newRepo.map((r, idx) => {
    let a = r.split(' ')[0] // 유저 ID
    let b = r.split(' ')[1] // 유저가 신고한 ID

    // 신고한 ID(b)에 정지된 ID가 있는지 확인
    if (out.indexOf(b) >= 0) {
      // 신고한 ID 중에 정지된 ID가 있다면, 
      // 해당 유저(a)의 id_list에서의 인덱스를 구하고
      // mail의 해당 인덱스에 1 더하기
      let idx = id_list.indexOf(a);
      mail[idx] += 1;
    } 

  }) 

  return mail
}
