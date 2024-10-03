function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0))
    
    return arr.map((a, i) => {
        return a.map((b, bi) => bi === i ? 1 : b)
    })
}
