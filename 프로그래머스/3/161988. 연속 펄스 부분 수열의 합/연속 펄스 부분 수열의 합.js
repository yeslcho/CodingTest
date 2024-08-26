function solution(sequence) {
    var answer = 0;
    // 1) 1, -1로 시작하는 펄스에 따른 값을 저장(Memoization)한다.
    const pSeq = [];  // 1부터 시작
    const mSeq = [];  // -1부터 시작

    // 2) DP 자료구조 방법을 사용하여 최댓값을 구해 저장한다.
    for(let i=0; i<sequence.length; i++) {
        
        // 3) 최초, 짝수, 홀수일 경우에 발생하는 펄스를 곱한다.
        if(i === 0) {
        
            // 4) 최초 값은 펄스 값만 곱하고 저장한다.
            pSeq.push(sequence[i]);
            mSeq.push(-sequence[i]);
        } else if(i%2 === 0) {  
        
            // 5) 최댓값만 구하면 되기 때문에 기존 저장된 값에 더한 값과
            //    처음부터 시작하는 값 중 최댓값을 찾아 저장한다.
            pSeq.push(Math.max(pSeq[i-1] + sequence[i], sequence[i]));
            mSeq.push(Math.max(mSeq[i-1] - sequence[i], -sequence[i]));
        } else {
        
            // 6) 5번과 마찬가지로 최대값을 찾아 저장한다.
            pSeq.push(Math.max(pSeq[i-1] - sequence[i], -sequence[i]));
            mSeq.push(Math.max(mSeq[i-1] + sequence[i], sequence[i]));
        }
        
        // 7) 가장 큰 값을 찾기 때문에 answer에 현재 구한 값의 최댓값을 저장한다.
        answer = Math.max(answer, pSeq[i], mSeq[i]);
    }
 
    return answer;
}