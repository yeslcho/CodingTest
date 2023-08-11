function solution(n) {
    for(let i=1; i<=1000000; i++){
        if(i*i === n){
            return 1;
        }
        if(i*i > n){
            return 2;
        }
    }
}