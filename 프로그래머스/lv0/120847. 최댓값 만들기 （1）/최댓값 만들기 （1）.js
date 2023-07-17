function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b) => b-a);
    return sortedNumbers[0] * sortedNumbers[1];
}