function solution(num, total){
  const answer = []
  const start = Math.ceil(total / num) - Math.floor(num/2)
  const end = Math.floor(total / num) + Math.floor(num/2)
  for(let i=start; i<=end; i++){
    answer.push(i)
  }
  return answer
}