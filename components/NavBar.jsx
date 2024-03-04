import React from 'react'
import Search from './Search'
import Selection from './Selection'
import VisitorCounter from './Visitor'

function NavBar() {
    return (
        <nav className=" sticky top-0  rounded-2xl z-10 shadow-2xl bg-white border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/favicon.ico" className="h-8" alt="game" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap font-[cursive]">LegitOne</span>
                </a>
                {/* <VisitorCounter /> */}

                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <Selection />
                        </li>
                        <li>
                            <Search />
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Về chúng tôi</a>
                        </li>
                        <li>
                            <a href="/admin">
                                <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                                    Admin panel
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar