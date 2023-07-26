function solution(arr, k) {
    if (k % 2 === 0) {
        return arr.map(element => element + k);
    } else {
        return arr.map(element => element * k);
    }
}