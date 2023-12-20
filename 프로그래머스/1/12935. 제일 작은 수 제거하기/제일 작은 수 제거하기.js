function solution(arr) {
    
    
    var answer = [];
 
    
    if (arr.length<=1){
        return [-1];

    }else{
        
        arr.splice(arr.indexOf(Math.min(...arr)),1);
        answer =  arr;
    }   
    
    return answer
}