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
                <img className="w-full h-[40%] rounded-xl" src="https://bcdn.electronicfirst.com/wp-content/uploads/2023/12/29134259/Frostpunk-2.jpg" />
                <div className="p-10">
                    <p className="font-[400] leading-9 my-4 font-sans text-[25px]">
                        Frostpunk 2 Beta
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
                        Revisit the Frostland 30 years after the Great Storm and
                        face a new deadly threat to your City’s future – human
                        nature Build your City on a new scale by creating entire
                        districts with different purposes: industrial,
                        scientific, etc. Ensure that all parts of the City work
                        in unison with each other like cogs of a giant,
                        resource-hungry machine Erect The Council building where
                        you’ll forge laws of the growing metropolis Navigate
                        between different factions and their ideas for the
                        future, try to tame their ambitions as well as
                        unrestrained thirst for power Research technologies that
                        will change the face of your City
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
        </div>
    );
}

export default Game;
