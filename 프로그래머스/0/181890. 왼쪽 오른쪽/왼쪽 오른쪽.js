function solution(str_list) {
    const index = str_list.findIndex(item => item === 'l' || item === 'r');
    
    // l or r이 없으면 [] 
    if(index === -1){
        return [];
    }
    // l이면 l전에 것을 return
    else if(str_list[index] === 'l') {
        return str_list.slice(0, index);    
    } 
    // r이면 r후의 것을 return
    else {
        return str_list.slice(index + 1);
    }
}