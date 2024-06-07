function solution(n, k) {
    var answer = [];
    var factorialArr = new Array(n+1);
    factorialArr[0] = 1;
    for(var i = 1;i<=n;i++){
        factorialArr[i] = factorialArr[i-1] * i;
    }
    

    var elementArr = [];
    for(var i = 1;i<n+1;i++){
        elementArr.push(i);
    }

    while(elementArr.length!==0){
        n--;
        answer.push(elementArr[Math.ceil(k/factorialArr[n])-1]);
        elementArr.splice(Math.ceil(k/factorialArr[n])-1,1);
        k = k - (Math.ceil(k/factorialArr[n]) -1)  * factorialArr[n];
    }
    return answer;
}