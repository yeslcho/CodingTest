function solution(m, n, startX, startY, balls) {
    const start = [startX,startY];
    const answer = balls.map(p=>{
        const points = getReflectPoint(m,n,start,p);
        const ds = points.map(p=>calculDistence(p[0],p[1]));
        
        return Math.min(...ds);
    });
    
    return answer;
}

function getReflectPoint(m,n,start, end){
    const points = [];
    const [x1,y1] = start;
    const [x2,y2] = end;
    
    //x축 대칭
    if(x1 !== x2 || y1 < y2){
        points.push([[x1,y1],[x2,y2*-1]])
    }
    //y축 대칭
    if(y1 !== y2 || x1 < x2){
        points.push([[x1,y1],[x2*-1,y2]])
    }
    //y=n 대칭
    if(x1 !== x2 || y1 > y2){
        points.push([[x1,y1],[x2,2*n -y2]])
    }
    //x=m 대칭
    if(y1 !== y2 || x1 > x2){
        points.push([[x1,y1],[2*m-x2,y2]])
    }
    
    return points;
}

function calculDistence(start,end){
    const [x1,y1] = start;
    const [x2,y2] = end;
    
    return Math.pow(x1-x2,2) + Math.pow(y1-y2,2);
}
