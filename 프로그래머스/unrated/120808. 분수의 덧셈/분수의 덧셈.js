function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    const denom = numer1 * denom2 + numer2 * denom1; // 분자
    const numer = denom1 * denom2; // 분모
    
    let minNumber;
    if(denom < numer){
        minNumber = denom;
    } else {
        minNumber = numer;
    }
    
    while(true){
        if(denom % minNumber === 0){
            if(numer % minNumber === 0){
                return [denom / minNumber, numer / minNumber];
            }        
        }
        minNumber = minNumber - 1;
    }
    
    
}