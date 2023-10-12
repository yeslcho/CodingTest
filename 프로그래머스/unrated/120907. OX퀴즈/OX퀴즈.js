function solution(quiz) {
    var answer = [];
    for(let i=0; i<quiz.length; i++){
        const item = quiz[i];
        const itemArr = item.split(' ');
        const firstNum = Number(itemArr[0]);
        const op = itemArr[1];
        const secondNum = Number(itemArr[2]);
        const result = Number(itemArr[4]);
        if(op === '+'){
            if(firstNum + secondNum === result){
                answer.push("O");
            } else {
                answer.push("X");
            }
        } else {
            if(firstNum - secondNum === result){
                answer.push("O");
            } else {
                answer.push("X");
            }
        }
    }
    return answer;
}