function solution(phone_book) {
    phone_book.sort(); // 전화번호를 정렬합니다.

    const hashTable = new Set(phone_book); // 해시 테이블 생성

    for (let phone of phone_book) {
        let temp = "";
        for (let number of phone) {
            temp += number; // 번호의 각 자릿수를 추가하면서
            if (temp !== phone && hashTable.has(temp)) {
                // 현재 번호가 아니면서 해시 테이블에 존재한다면 접두사가 있는 것입니다.
                return false;
            }
        }
    }
    return true; // 모든 번호를 확인 후 접두사가 없으면 true 반환
}