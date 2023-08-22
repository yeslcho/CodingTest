function solution(my_string) {
    const answer = my_string.toLowerCase();
    const strArray = [...answer];
    return strArray.sort().join('');
}