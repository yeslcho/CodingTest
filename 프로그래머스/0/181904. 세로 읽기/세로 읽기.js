function solution(my_string, m, c) {
    const table = []
    let result = ""
    // 표 생성
    for(let i = 0 ; i < Math.floor(my_string.length/m) ; i ++) {
        const row = []
        for(let j = 0 ; j < m ; j ++) {
            const cur = my_string[i*m+j]
            if(j+1 === c) result+= cur
            row.push(cur)
        }
        table.push(row)
    }


    
    return result
}
