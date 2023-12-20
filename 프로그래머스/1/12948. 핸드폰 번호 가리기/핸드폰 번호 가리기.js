function solution(phone_number) {
    
    const newArr = new Array(phone_number.length-4).fill('*')
    let newNum = phone_number.slice(-4);
    newArr.push(newNum)
    
    return newArr.join('');
}