function solution(my_strings, parts) {
    var answer = '';
    for(let i=0; i<my_strings.length;i++){
//my_strings의 i번째 요소를 split을 통해 배열로 만들어주고 slice를 통해 parts[i][0]번째에서
//parts[i][1]+1번째까지 잘르고 join('')을 이용해 문자열로 만들어 주고 answer에서 더해준다.
        answer+= my_strings[i].split('').slice(parts[i][0],parts[i][1]+1).join('')
    }
    return answer;
}