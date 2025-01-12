function solution(s) {
  var answer = s.map((v) => {
    const stack = [];
    let str = "";
    for (const right of v) {
      if (stack.length > 1) {
        const mid = stack.pop();
        const left = stack.pop();
        `${left}${mid}${right}` === "110" ? (str += "110") : stack.push(left, mid, right);
      } else {
        stack.push(right);
      }
    }

    const baseStr = stack.join("");
    const zeroIdx = baseStr.lastIndexOf("0") + 1;
    return zeroIdx === -1
      ? str + baseStr
      : baseStr.slice(0, zeroIdx) + str + baseStr.slice(zeroIdx);
  });
  return answer;
}
