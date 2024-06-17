function solution(data, col, row_begin, row_end) {
    return data
        .sort((a, b) => a[col - 1] === b[col - 1]
            ? b[0] - a[0]
            : a[col - 1] - b[col - 1]
        )
        .slice(row_begin - 1, row_end)
        .map((row, index) => row.reduce((acc, v) => acc + v % (index + row_begin), 0))
        .reduce((acc, si) => acc ^ si);
}