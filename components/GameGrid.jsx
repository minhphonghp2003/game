import React from 'react'
import GameItem from './GameItem';
async function GameGrid() {
    let allGames = await (await fetch("https://657470c9f941bda3f2afc286.mockapi.io/allgame", { cache: "no-store" })).json()
    return (
        <div className='m-auto justify-items-center w-[90%] gap-5 grid grid-cols-4'>
            {allGames && allGames.map(g => {
                return <GameItem id={g.id} image={g.image} name={g.name} key={g.id} />
            })}
        </div>
    )
}

export default GameGrid