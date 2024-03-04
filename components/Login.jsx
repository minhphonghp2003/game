import React from 'react'

function Login() {
    return (


        <div className="m-auto mt-12 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">

            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 ">Đăng nhập vào đi</h5>
                <div>
                    <label for="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                    <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="abcxyzzz" required />
                </div>
                <div>
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>

                <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">⚔️Chiến thôi⚔️</button>
                {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Chưa có tài khoản thì<a href="#" className="text-blue-700 hover:underline dark:text-blue-500"> đăng kí thôi</a>
                </div> */}
            </form>
        </div>

    )
}

export default Login