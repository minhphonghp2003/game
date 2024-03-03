"use client"
import React, { useEffect, useState } from 'react'
import GameItem from './GameItem';
import Pagination from './Pagination';
function GameGrid({gamesApi}) {
    let [currentPage, setCurrentPage] = useState(1)
    let [totalCount, setTotalCount] = useState(0)
    let [allGames, setGames] = useState()

    let fetchGames = async () => {
        setGames(await (await fetch(gamesApi, { cache: "no-store" })).json())
        setTotalCount(40)
    }
    useEffect(() => {
        fetchGames()
    }, [currentPage])
    return (
        <div className='m-auto justify-items-center w-[100%] gap-5 grid grid-cols-3'>
            {allGames && allGames.map(g => {
                return <GameItem id={g.id} image={g.image} name={g.name} key={g.id} />
            })}
            <Pagination
                onPageChange={setCurrentPage}
                totalCount={totalCount}
                currentPage={currentPage}
                pageSize={12}
                className={"col-span-3 mt-8"}
            />
        </div>
    )
}

export default GameGrid