function solution(array, n) {
    var answer = 0;
    let min = 101;
    
    const sortArray = array.sort((a,b) => a-b);
    
    for(let i=0; i<sortArray.length; i++){
        const item = sortArray[i];
        if(min > Math.abs(n - item)){
            min = Math.abs(n-item);
            answer = item;
        }
    }
    return answer;
}