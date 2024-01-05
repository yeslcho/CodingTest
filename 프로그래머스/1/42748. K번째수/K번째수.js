function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++){
        let selectedArray = array.slice(commands[i][0] - 1, commands[i][1]);
        
        selectedArray.sort((a,b)=>a-b);
        
        answer.push(selectedArray[commands[i][2] - 1]);
    }
    return answer;
}