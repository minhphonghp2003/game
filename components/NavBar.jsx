import React from 'react'

function NavBar() {
    return (
        <nav className=" sticky top-0 w-[80%] m-auto rounded-2xl z-10 shadow-2xl bg-white border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/favicon.ico" className="h-8" alt="game" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap font-[cursive]">LegitOne</span>
                </a>

                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <div class="dropdown">
                                <button class="dropbtn">Thể loại</button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="/contact" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Liên hệ</a>
                        </li>
                        <li>

                            <form class="max-w-md mx-auto">
                                <input type="search" id="default-search" class=" inline w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="🔎Search game, thể loại..." required />

                            </form>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar