import React from 'react'

const Featured = () => {
  return (
    <section className='min-h-screen! '>
      {/* <div className="w-full h-screen bg-linear-to-tl from-45% to-[#fcedd2] from-[#f9e3f9] px-20 py-20">
        <div className='size-full bg-black/10 backdrop-blur-xs relative flex gap-5'>
          <div className='w-1/2 h-full center'>
            <img src="./featured-products/smoke-whisky.png" className='w-7/10 ' alt="" />
          </div>
          <div className='w-1/2 h-full py-15'>
            <h1 className='text-[78px] text-[#333] font-heading'>
              Smoke Whisky
            </h1>
          </div>
        </div>
      </div> */}
      <div className='w-full h-screen bg-linear-to-tl from-45% to-[#fcedd2] from-[#f9e3f9] px-20 py-20'>
        <h1 className='font-heading text-5xl capitalize text-[#222] font-medium'>
          Discover our <span className='text-gradient'>
            bestsellers
          </span>
        </h1>
        <div className='w-full h-fit py-5 '>
        </div>
      </div>
    </section>
  )
}

export default Featured