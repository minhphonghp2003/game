"use client";
import Filter from "@/components/Filter";
import GameGrid from "@/components/GameGrid";
import HeroCaro from "@/components/HeroCaro";
import TitleDivider from "@/components/TitleDivider";
import { useEffect, useState } from "react";

export default function Home() {
    let [heroItems, setHeroItems] = useState();
    let [filter, setFilter] = useState({
        title: "All games",
        api: "https://655c5d4925b76d9884fd0e77.mockapi.io/posts",
    });
    let fetchHeroIt = async () => {
        setHeroItems(
            await (
                await fetch(
                    "https://655c5d4925b76d9884fd0e77.mockapi.io/posts",
                    {
                        cache: "no-store",
                    }
                )
            ).json()
        );
    };
    useEffect(() => {
        fetchHeroIt();
    }, []);
    return (
        <div>
            <HeroCaro items={heroItems} />
            {/* state */}
            <TitleDivider title={`🎮🕹️ ${filter.title}`} />
            <div className="flex justify-center w-[80%] m-auto">
                <GameGrid gamesApi={filter.api} />
                {/* <Filter /> */}
            </div>
        </div>
    );
}
