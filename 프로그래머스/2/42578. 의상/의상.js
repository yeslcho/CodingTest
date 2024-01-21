function solution(clothes) {
    // 1. 해시 테이블 생성: 각 옷의 종류별로 개수를 카운트
    const clothesMap = new Map();
    for (const [name, type] of clothes) {
        if (!clothesMap.has(type)) {
            clothesMap.set(type, 1); // 해당 종류의 첫 옷인 경우
        } else {
            clothesMap.set(type, clothesMap.get(type) + 1); // 해당 종류의 옷이 이미 있던 경우
        }
    }

    // 2. 조합의 수 계산: 각 종류의 옷 개수 + 1(해당 종류의 옷을 입지 않는 경우)
    let combinationCount = 1;
    for (const count of clothesMap.values()) {
        combinationCount *= (count + 1);
    }

    // 3. 모든 종류의 옷을 입지 않는 경우 제외: -1
    return combinationCount - 1;
}