function solution(n, k) {
    const result = []
    
    Array(n).fill(0).forEach((v, i) => {
        if((i+1) % k === 0) result.push(i+1)
    })
    
    return result
}