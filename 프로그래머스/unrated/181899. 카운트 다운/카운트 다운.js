function solution(start, end) {
    const arr = [];
    const flag = start - end + 1;
    for (let i = start; i>=end; i --) {
        arr.push(i)
    }
    return arr;
}
