function solution(spell, dic) {
  const isExist = [];

  dic.forEach((e) => {
    let cnt = 0;
    spell.forEach((i) => {
      if (e.includes(i)) cnt++;
    });

    if (cnt === spell.length) isExist.push(e);
  });
  return isExist.length === 0 ? 2 : 1;
}