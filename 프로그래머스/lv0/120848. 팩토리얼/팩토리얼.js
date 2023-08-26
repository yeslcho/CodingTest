const factorial = e => {
    let result = 1;
    for(let i = 1; i<=e; i++){
        result *= i;
    }
    return result
}

function solution(n) {
    for(let i=1; ; i++){
        const result = factorial(i);
        if(n < result){
            return i - 1;
        }
    }
}