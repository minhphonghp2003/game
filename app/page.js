import GameGrid from "@/components/GameGrid";
import Hero from "@/components/Hero";
import HeroCaro from "@/components/HeroCaro";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default async function Home() {
    let heroItems = await (
        await fetch("https://657470c9f941bda3f2afc286.mockapi.io/allgame", {
            cache: "no-store",
        })
    ).json();
    return (
        <div>
            {/* <Hero /> */}
            <HeroCaro items={heroItems} />
            <div className="relative flex py-[5rem] items-center w-[70%] m-auto">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4  text-xl font-bold text-red-500">
                    🎮🕹️GAME MỚI ĐĂNG
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <GameGrid />
            <div class="fixed bottom-4 right-4">
                <a href="/admin">
                    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                        Admin panel
                    </button>
                </a>
            </div>
        </div>
    );
}
