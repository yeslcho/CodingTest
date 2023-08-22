function solution(num, k) {
    const strNum = String(num);
    for(let i=0; i<strNum.length; i++){
        const item = strNum[i];
        if(item === String(k)){
            return i+1;
        }
    }
    return -1;
}