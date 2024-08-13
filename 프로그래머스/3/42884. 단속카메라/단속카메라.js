function solution(routes) {
    let answer = 0;        
    let preCamera = -30001;
    
    routes.sort(function(a,b){
                return a[1]-b[1];
                });
    
    routes.map((e)=>{
        if(e[0] > preCamera ){
            answer ++;
            preCamera = e[1];
        }
    })
    
    return answer;
}