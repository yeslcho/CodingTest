function solution(begin, target, words) {
    if (!words.includes(target)) return 0;

    let queue = [[begin, 0]]; // 단어와 현재까지의 단계 수를 포함하는 큐
    while (queue.length > 0) {
        let [currentWord, steps] = queue.shift(); // 큐에서 현재 단어와 단계 수를 가져옴

        if (currentWord === target) return steps; // 현재 단어가 target과 같으면 단계 수 반환

        words.forEach(word => {
            if (isTransformable(currentWord, word)) { // 한 글자만 다른 단어를 찾음
                queue.push([word, steps + 1]); // 큐에 추가하고 단계 수를 1 증가
            }
        });

        words = words.filter(word => word !== currentWord); // 이미 사용된 단어는 제거
    }

    return 0; // 변환할 수 없는 경우
}

// 한 글자만 다른지 확인하는 함수
function isTransformable(currentWord, nextWord) {
    let diffCount = 0;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] !== nextWord[i]) diffCount++;
    }
    return diffCount === 1;
}