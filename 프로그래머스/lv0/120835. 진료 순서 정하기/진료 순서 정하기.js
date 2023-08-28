function solution(emergency) {
    let newEmergency = [];
    for(let i=0; i<emergency.length; i++){
        newEmergency.push({value: emergency[i], index: i})
    }
    newEmergency.sort((a,b) => b.value-a.value)
    var answer = new Array(emergency.length);
    
    for(let j=0; j<newEmergency.length; j++){
        let item = newEmergency[j];
        answer[item.index] = j + 1;
    }
    
    return answer;
}