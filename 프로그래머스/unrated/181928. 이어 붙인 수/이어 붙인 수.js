function solution(num_list) {
    let odd = "";
    let even = "";

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even += num_list[i];
        } else {
            odd += num_list[i];
        }
    }

    return parseInt(even) + parseInt(odd);
}