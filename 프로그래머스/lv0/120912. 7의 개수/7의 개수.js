function solution(array) {
    let cnt = 0;
    for(let i=0; i<array.length; i++){
        const item = String(array[i]);
        for(let j=0; j<item.length; j++){
            const v = item[j];
            if(v === '7'){
                cnt++;
            }
        }
    }
    return cnt;
}