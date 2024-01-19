function solution(nums) {
    const hashTable = new Set(); // 중복을 허용하지 않는 Set을 사용하여 폰켓몬 종류 카운트
    
    // 폰켓몬 종류 카운트
    nums.forEach(num => {
        hashTable.add(num);
    });
    
    // 최대로 가질 수 있는 폰켓몬 수는 nums.length / 2
    // 가질 수 있는 폰켓몬 종류의 최대 수는 hashTable의 크기
    const maxTypes = Math.min(hashTable.size, nums.length / 2);
    
    return maxTypes;
}