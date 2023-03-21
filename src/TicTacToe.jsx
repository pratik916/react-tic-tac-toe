import React, { useCallback, useMemo, useState } from 'react'

function TicTacToe() {
  const [lastChar, setLastChar] = useState('O');
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);

  const winner =  useMemo(() => {

    for (let i = 0; i < board.length; i++) {
      if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== null) {
        return board[i][0];
      }

      if (board[0][i] === board[1][i] && board[0][i] === board[2][i] && board[0][i] !== null) {
        return board[0][i];
      }
    }

    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== null) {
      return board[0][0];
    }

    if (board[0][2] === board[1][1] && board[2][0] === board[0][2] && board[2][0] !== null) {
      return board[0][2];
    }

    return null;
  }, [board])

  const resetBoard = useCallback(
    () => {
      setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ])
    },
    [],
  )


  const onCellClick = useCallback(
    (i, j) => {
      if (board[i][j] || winner) {
        return;
      }
      const newBoard = JSON.parse(JSON.stringify(board));
      newBoard[i][j] = lastChar === 'O' ? 'X' : 'O'
      setBoard(newBoard)
      setLastChar(lastChar === 'O' ? 'X' : 'O')
    },
    [lastChar, board, winner],
  )
  return (
    <div>
      {winner && <div>Winner is {winner}</div>}
      {
        board.map((row, i) => <div key={i} className='row'>
          {row.map((c, j) => <div key={`${i}_${j}`} onClick={() => onCellClick(i, j)}>
            {c}
          </div>)}
        </div>)
      }
      <button onClick={resetBoard}>Reset</button>
    </div>
  )
}

export default TicTacToe
