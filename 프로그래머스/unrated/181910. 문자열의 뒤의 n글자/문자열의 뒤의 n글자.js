function solution(my_string, n) {
    let startIndex = my_string.length - n;
    
    let result = my_string.slice(startIndex);
    
    return result;
}