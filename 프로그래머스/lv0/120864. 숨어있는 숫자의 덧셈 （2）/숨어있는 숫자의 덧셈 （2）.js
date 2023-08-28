function solution(my_string) {
  let sum = 0;
  let currentNumber = '';
  
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    
    if (!isNaN(char)) {
      currentNumber += char;
    } else {
      if (currentNumber !== '') {
        sum += parseInt(currentNumber);
        currentNumber = ''; 
      }
    }
  }
  if (currentNumber !== '') {
    sum += parseInt(currentNumber);
  }
  
  return sum;
}