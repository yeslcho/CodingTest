function solution(numbers, direction) {
    if(direction === "right"){
        const lastItem = numbers.pop();
        numbers.unshift(lastItem);
    } else {
        const firstItem = numbers.shift();
        numbers.push(firstItem);
    }    
    return numbers;
}