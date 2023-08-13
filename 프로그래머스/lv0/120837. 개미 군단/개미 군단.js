function solution(hp) {
    let cnt = 0;
    let arr = [5, 3, 1];
    for(let i=0; i<arr.length; i++) {
        let item = arr[i];
        if(hp >= item) {
        cnt += Math.floor(hp / item);
        hp -= Math.floor(hp / item) * item;
    }
    
    }
    return cnt;
}