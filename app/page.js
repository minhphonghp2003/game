import GameGrid from "@/components/GameGrid";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Hero />
            <div className="relative flex py-[5rem] items-center w-[70%] m-auto">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xl font-bold text-red-500">
                    🎮🕹️GAME MỚI ĐĂNG
                </span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <GameGrid />
        </div>
    );
}
