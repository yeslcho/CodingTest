function solution(stones, k) {
    let str = 1;
    let end = 200000000;
    while(str !== end){
        const mid = Math.floor((str+end)/2)
        let is_foward = true;
        let cnt = 0;
        
        for(let stone of stones){
            if(stone <= mid) cnt++
            else cnt = 0;
            if(cnt >= k){
                is_foward = false;
                break;
            }
        }
        
        if(is_foward) str = mid+1
        else end = mid
    }
    
    return str;
}