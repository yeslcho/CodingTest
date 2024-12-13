function solution(n, t, m, timetable) {
    // 계산의 용이함을 위해 모두의 시간을 분단위로 변환
    timetable = timetable.map(a => {
        const [hour,min] = a.split(":")
        return (hour*60)+Number(min)
    })
    // 시간 별 정렬
    timetable.sort((a,b) => a-b)    
    // 시간
    let time = 9*60 // 9시 첫 차
    for(let i = 1 ; i <= n ; i ++) {
        // 탑승 가능한 사람
        const canRide = timetable.filter(a => a <= time).length
        // 막차
        if(i === n) {
            // 타야할 사람이 정원보다 같거나 많은경우 (나는 못타 ㅜㅜ)
            if(canRide >= m) {
                // 탑승하는 마지막 사람보다 1분 빠르게
                time = timetable[m-1]-1
            }
        // 다음차가 남아있다면
        } else {
            // m 보다 더 많은 사람이 탈 수 있어도 m 만큼만 탐
            timetable.splice(0,canRide > m ? m : canRide)
            time+=t
        }
    }
    
    return String(Math.floor(time/60)).padStart(2,'0')+':'+String(Math.floor(time%60)).padStart(2,'0')
}