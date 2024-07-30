const getInfo = (edges) => { 
    const info = edges.reduce((map, key) => {
    if (!map.has(key[0])) {
        map.set(key[0], [1, 0]);
    } else {
        const [give, receive] = map.get(key[0]);
        map.set(key[0], [give+1, receive]);
    }
    if(!map.has(key[1])){
        map.set(key[1], [0, 1]);
    } else {
        const [give, receive] = map.get(key[1]);
        map.set(key[1], [give, receive+1]);
    }
    return map;
}, new Map());
    return info;
}

const chkInfo = (info) => {
    const res = new Array(4).fill(0); 
    for(const [key, io] of info){ 
        const [give, receive] = io;  
        if( 2 <= give && receive == 0) { 
            res[0] = key;
        } else if(give == 0) {
            //막대그래프 최상단은 give == 0
            res[2]++;
        } else if(give >= 2 && receive >= 2){
            res[3]++;
        }  
    }       
    // 도넛은 사이클이 이루어진다는 것 밖에 없기 때문에 개수 계산으로 판별할 수 없다. 
    // 생성 정점은 기존에 존재하던 모든 그래프에 간선을 하나 씩 연결한다.
    // 따라서, 생성 정점의 간선 개수에서 막대, 8자 그래프 개수를 빼면 도넛 그래프 개수가 나온다.
    res[1] = info.get(res[0])[0] - res[2] - res[3];
    return res;
}

const solution = (edges) => {
    const mapInfo = getInfo(edges);
    const answer = chkInfo(mapInfo);
    return answer;
}