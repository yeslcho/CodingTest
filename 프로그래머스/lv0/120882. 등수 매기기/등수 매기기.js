function solution(score) {
    let answer = new Array(score.length).fill(1)
    const avg = score.map(score => (score[0]+score[1])/2); 
    for(let i = 0; i < avg.length; i++){
        for(let j = 0; j <avg.length; j++){
            if(avg[i]<avg[j]) answer[i]++;
        }
    }
    return answer;
}