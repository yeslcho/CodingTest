function solution(priorities, location) {
    var answer = 0;
    var queue = priorities.map((priority, index) => ({
        index: index,
        priority: priority
    }));

    while (true) {
        var current = queue.shift();
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current);
        } else {
            answer++;
            if (current.index === location) {
                return answer;
            }
        }
    }
}