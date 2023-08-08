function solution(num_str) {
   const a = num_str.split('')
   const b = a.map(Number)

   return b.reduce((c,d)=>c+d, 0)
}