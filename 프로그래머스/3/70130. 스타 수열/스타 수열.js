function solution (a) {
  let answer = 0;
  const counts = a.reduce((acc, cur) => {
    acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1];
    return acc;
  }, []).filter(el => el).sort((a, b) => b[1]-a[1]);
  
  for(let i = 0; i < counts.length; i++) {
    if(answer >= counts[i][1]) continue;
    
    let count = 0;
    
    for(let j = 0; j < a.length; j++) {
      if(a[j+1] === undefined) continue;
      if(a[j] === a[j+1]) continue;
      if(a[j] !== counts[i][0] && a[j+1] !== counts[i][0]) continue;
      
      count++;
      j++;
    }
    
    answer = Math.max(answer, count);
  }
  
  return answer * 2;
}