function solution(dots) {
    let col = 0;
    let row = 0;
    for(let i=0; i<dots.length-1; i++){
        const [x, y] = dots[i];
        const [nx, ny] = dots[i+1];
        row = Math.max(Math.abs(nx - x), row);
        col = Math.max(Math.abs(ny - y), col);
    }
    
    return row * col;
}