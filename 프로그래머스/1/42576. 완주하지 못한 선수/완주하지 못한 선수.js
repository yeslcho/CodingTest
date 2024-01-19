function solution(participant, completion) {
    const hashTable = {};
    
    // 참가자 이름을 키로 하여 해시 테이블 생성
    participant.forEach(p => {
        hashTable[p] = (hashTable[p] || 0) + 1;
    });
    
    // 완주한 선수의 이름을 키로 하여 해시 테이블 업데이트
    completion.forEach(c => {
        hashTable[c] -= 1;
    });
    
    // 해시 테이블을 순회하여 완주하지 못한 선수 찾기
    for (let p in hashTable) {
        if (hashTable[p] > 0) {
            return p;
        }
    }
}