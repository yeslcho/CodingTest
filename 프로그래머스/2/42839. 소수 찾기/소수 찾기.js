function solution(numbers) {
    const numArr = numbers.split('');
    const numSet = new Set();

    const checkPrime = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const makeCombinations = (arr, str) => {
        if (str.length > 0) numSet.add(parseInt(str));
        if (arr.length === 0) return;
        arr.forEach((e, idx) => {
            const newArr = [...arr];
            newArr.splice(idx, 1);
            makeCombinations(newArr, str + e);
        });
    };

    makeCombinations(numArr, '');

    return Array.from(numSet).filter(checkPrime).length;
}
