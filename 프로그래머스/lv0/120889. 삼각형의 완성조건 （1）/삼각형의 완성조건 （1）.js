function solution(sides) {
    const sortedSides = sides.sort((a,b) => a - b);
    const sum = sortedSides[0] + sortedSides[1];
    const maxV = sortedSides[2];
    return maxV < sum ? 1 : 2;
}