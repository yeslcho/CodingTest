function solution(common) {
    // 등차수열인지 확인
    const nextNum = common[1]-common[0] === common[2]-common[1]
    if(nextNum) {
        return common[common.length-1]+common[1]-common[0]
    } else {
        return common[common.length-1]*(common[1]/common[0])
    }
}