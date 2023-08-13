function solution(my_string) {
    var answer = '';
    
    for(let i=0; i<my_string.length; i++){
        const item = my_string[i];
        const isCapital = item < 'a';
        if(isCapital){
            answer += item.toLowerCase();
        } else {
            answer += item.toUpperCase();
        }
    }
    return answer;
}