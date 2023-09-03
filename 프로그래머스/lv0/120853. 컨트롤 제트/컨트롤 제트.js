function solution(s) {
    let sum = 0; 
    const splitArray = s.split(' ');
    for(let i=0; i<splitArray.length; i++){
        const item = splitArray[i];
        if(item !== 'Z'){
            sum += Number(item);
        } else {
            sum -= Number(splitArray[i-1]);
        }
    }
    return sum;
}