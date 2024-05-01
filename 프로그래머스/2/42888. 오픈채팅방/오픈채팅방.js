function solution(record) {
  const answer = [];
  const userInfo = {};
  //userInfo를 {} 객체로 생성하여 이름과 값 쌍을로 구성

  for (let i = 0; i < record.length; i++) {
    const [command, uid, nickname] = record[i].split(" ");
	//배열을 구조 분해 하여 요소를 각각 개별적인 변수로 접근
    
    if (command === "Enter") {
      userInfo[uid] = nickname;
      answer.push(`${uid}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      answer.push(`${uid}님이 나갔습니다.`);
    } else if (command === "Change") {
      userInfo[uid] = nickname;
    }
  }

  // answer 배열에 있는 메시지 중 유저 아이디를 최신 닉네임으로 변경
  for (let i = 0; i < answer.length; i++) {
    const uid = answer[i].split("님이")[0];
    answer[i] = answer[i].replace(uid, userInfo[uid]);
  }

  return answer;
}