function solution(bandage, health, attacks) {
    const [time, recovery, bonusRecovery] = bandage;
    let curHealth = health;
    
    // 최근 공격 시간
    let curAttack = 0;
    
    // attacks 배열 순환
    for (const [attackTime, damage] of attacks) {
        // 이전 공격 시간과 현재 공격 시간의 차이
        const timeDiff = attackTime - curAttack - 1;
        // 공격 시간 간 차이가 시전 시간보다 길다면 연속 성공으로 추가 회복
        // 공격 시간 차를 시전 시간으로 나누어주고 소수점을 버려주면 연속 성공 횟수 
        const success = Math.floor(timeDiff / time);
        // 총 회복량 계산 후 최신 체력 업데이트
        const totalRecovery = timeDiff * recovery + success * bonusRecovery;
        curHealth += totalRecovery;
        // 최대 체력 이상으로 회복이 불가능하기 때문에 현재 체력에서 총 회복량이 더해진 값이 최대 체력 이상이면 최대 체력이 최신의 체력이 된다
        if (curHealth >= health)
            curHealth = health;
        //공격 받을 시 체력 감소
        curHealth -= damage;
        //만약 현재 체력이 0 이하가 된다면 -1 반환
        if (curHealth <= 0)
            return -1;
        // 현재 공격 시간을 업데이트 해주고 다시 순환 시작
        curAttack = attackTime;
    }
    return curHealth; 
}