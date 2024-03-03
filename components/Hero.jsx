import React from 'react'

function Hero() {
  return (
    <header className="">
      <div className="w-full h-[100vh] bg-center bg-cover bg-[url(/gamejpeg.jpeg)]"
      >
        <div className="flex items-center justify-center w-full h-[100vh] bg-gray-900 bg-opacity-70 py-48">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <span className="text-gray-200 font-semibold uppercase tracking-widest">Welcome back</span>
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100 leading-[20px]">Chào mừng đến với Game Uy Tín hàng đầu số 1 Việt Nam <sup>🇻🇳 </sup> </h2>
                <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300 font-normal text-[1.5rem]">
                  Website chúng tôi cung cấp <span className='font-bold text-red-400'>game crack </span>  dành cho những bạn <span className='font-bold text-red-400'> đ*0 có tiền</span> . Sản phầm của chúng tôi luôn đặt <span className='font-bold text-red-400'>chất lượng lên hàng  </span> đầu nên mọi người cứ thỏa mái tải về mà chơi nhé😘😘
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero