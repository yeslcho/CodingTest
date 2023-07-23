function solution(my_string, n) {
    var answer = '';
   let cnt = 0; 
   while(cnt < my_string.length){
       const repeatCharacter = my_string[cnt];
       
       let repeatCnt = 0
       while(repeatCnt < n) {
           answer = answer + repeatCharacter;
           repeatCnt = repeatCnt + 1;
       }
       cnt = cnt + 1;
   }
       return answer
       
   }