import Box from "@/components/Box";
import Divider from "@/components/Divider";
import Download from "@/components/Download";
import Info from "@/components/Info";
import Stats from "@/components/Stats";
import Type from "@/components/Type";
import React from "react";

async function Game({ params }) {
    let game = await (
        await fetch("https://657470c9f941bda3f2afc286.mockapi.io/game/1", {
            cache: "no-store",
        })
    ).json();
    return (
        <div className="grid grid-cols-3 gap-8 justify-items-center w-[80%] m-auto ">
            <Box>
                <img className="w-full h-[40%] rounded-xl" src={game.image} />
                <div className="p-10">
                    <p className="font-[400] leading-9 my-4 font-sans text-[25px]">
                        {game.name}
                    </p>
                    <p className="text-[#898f96] font-sans">
                        👨🏻bởi{" "}
                        <span className="text-[#007bff] mr-4">
                            {game.authorName}
                        </span>{" "}
                        🗓️ 30/2/2024
                    </p>
                    <Divider />
                    <p className="font-sans text-[1.1rem] font-[400] leading-[30px]">
                        {game.description}
                    </p>
                </div>
            </Box>
            <div className="flex flex-col gap-8">
                <Box>
                    <Download url={game.url} name={game.name} />
                </Box>
                <Box>
                    <Info author={game.authorName} />
                </Box>
                <Box>
                    <Stats />
                </Box>
                <Box>
                    <Type types={game.type} />
                </Box>
            </div>
            <div class="fixed bottom-4 right-4">
                <a href="/">
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                        Home
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Game;
