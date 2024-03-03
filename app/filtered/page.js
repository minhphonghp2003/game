import GameGrid from "@/components/GameGrid";
import TitleDivider from "@/components/TitleDivider";
import React from "react";

function FilteredGames({ gamesApi, filterText }) {
    return (
        <div>
            <TitleDivider title={filterText} />
            <GameGrid gamesApi={gamesApi} />
        </div>
    );
}

export default FilteredGames;
