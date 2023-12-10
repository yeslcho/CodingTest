function solution(n) {
    var answer = 0;
    
    n=String(n)
    n=n.split('')
    n=n.sort((a,b)=>b-a).join('')
    n=Number(n)
    
    return n;
}