function solution(m, musicinfos) {
    var answer = [];
    
    // 1.주어진 노래들을 객체로 만들어서 배열에 입력받는다.
    let song = [];
    for(let i=0; i<musicinfos.length; i++){
        let start, end, title, code;
        let temp = musicinfos[i].split(',');
        start = temp[0];
        end = temp[1];
        title = temp[2];
        code = temp[3].replace(/(C#)/g,'c')
                      .replace(/(D#)/g,'d')
                      .replace(/(F#)/g,'f')
                      .replace(/(G#)/g,'g')
                      .replace(/(A#)/g,'a');        
        song.push({'start':start, 'end':end, 'title':title, 'code':code});
    }
    
    // 2.노래들의 playTime을 구한다.
    for(let i=0; i<song.length; i++){
        let time = song[i].start.split(':');
        time = time.concat(song[i].end.split(':'))        
        
        let playTime = 60*(time[2] - time[0]) + (time[3] - time[1]);
        song[i].playTime = playTime;
        if(playTime < song[i].code.length){            
            song[i].code = song[i].code.slice(0, playTime);
        }                
        else{
            song[i].code = song[i].code.repeat(playTime / song[i].code.length + 1);
        }
    }        
    // 3. 노래 목록에 주어진 노래가 있는지 찾아본다.
    m = m.replace(/(C#)/g,'c')
         .replace(/(D#)/g,'d')
         .replace(/(F#)/g,'f')
         .replace(/(G#)/g,'g')
         .replace(/(A#)/g,'a');      
    for(let i=0; i<song.length; i++){
        if(song[i].code.includes(m))
            answer.push(song[i])
    }
    // 4. 노래 들을 조건에 맞게 정렬한다.
    answer.sort((a,b) => {
        let A = a.playTime;
        let B = b.playTime;
        if(A>B) return -1;
        else if(A<B) return 1;
        else return 0;
    });
    
    if(answer.length === 0)
        return '(None)';
    return answer[0].title;
}
