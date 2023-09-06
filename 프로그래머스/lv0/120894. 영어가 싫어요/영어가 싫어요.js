const numberStrings = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(numbers) {
    let answer = '';
    for(let i=0; i<numbers.length; ){
        const compareString = numbers[i] + numbers[i+1];
        for(let j=0; j<numberStrings.length; j++){
            const numberString = numberStrings[j];
            const compareNumberString = numberString[0] + numberString[1];
            if(compareString === compareNumberString){
                answer += String(j);
                i += numberString.length;
                break;
            }
        }
    }
    return Number(answer);
}