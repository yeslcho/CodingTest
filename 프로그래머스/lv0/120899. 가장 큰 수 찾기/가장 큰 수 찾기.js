
function solution(array) {
    let maxValue = -1;
    let maxIndex = -1;
    for(let i=0; i<array.length; i++){
        const item = array[i];
        if(maxValue < item){
            maxValue = item;
            maxIndex = i;
        }
    }
    return [maxValue, maxIndex];
}