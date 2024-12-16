function solution(a) {
  let answer = 1;
  let m1_idx = 0;   let m2_idx = a.length - 1;
  let m1 = a[m1_idx];   let m2 = a[m2_idx];
  
  while(m1_idx < m2_idx) {
    if(m1 > m2) {
      if(m1 > a[++m1_idx]) {
        answer++;
        m1 = a[m1_idx];
      }
    } 
    if(m1 < m2) {
      if(m2 > a[--m2_idx]) {
        answer++;
        m2 = a[m2_idx];
      }
    }
  }

  return answer;
}