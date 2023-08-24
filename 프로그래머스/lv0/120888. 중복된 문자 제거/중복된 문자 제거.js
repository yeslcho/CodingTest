function solution(my_string) {
    var result = '';
    for(let i=0; i<my_string.length; i++){
        const item = my_string[i];
        
        let existed = false;
        for(let j=0; j<result.length; j++){
            if(item === result[j]){
                existed = true;
                break;
            }
        }
        if(!existed){
            result += item;
        }
    }
    return result;
}