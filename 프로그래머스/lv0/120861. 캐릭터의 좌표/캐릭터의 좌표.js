function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    const boardXSize = Math.floor(board[0] / 2);
    const boardYSize = Math.floor(board[1] / 2);
    for(let i=0; i<keyinput.length; i++){
        const item = keyinput[i];
        if(item === 'left' && x > -boardXSize){
            x--;
        }
        if(item === 'right' && x < boardXSize){
            x++;
        }
        if(item === 'up' && y < boardYSize){
            y++;
        }
        if(item === 'down' && y > -boardYSize){
            y--;
        }
    }
    return [x,y];
}