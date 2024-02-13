function solution(progresses, speeds) {
    let answer = [];
    //남은 일수를 담은 배열
    let days = progresses.map((el, index) => Math.ceil((100-el) / speeds[index]));
    let max = days[0];
    let cnt = 0;
    
    for(let i = 0; i < days.length; i++){
        if(days[i] <= max){
            cnt++;
        }else{
            max = days[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    answer.push(cnt);
    
    return answer;
}