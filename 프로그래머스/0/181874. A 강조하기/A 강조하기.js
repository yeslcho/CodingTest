function solution(myString) {
    return myString.replace(/a/g, 'A').replace(/[^A]/g, (match) => match.toLowerCase());
}