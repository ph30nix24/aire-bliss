import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { adminHeaderSection } from '../../../utils';
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <main className='w-full h-screen flex bg-black'>
      <SideNavbar />
      <section className='w-[calc(100%_-_240px)]! h-full bg-[#000]/60'>
        <div className='w-full h-fit flex items-center justify-between bg-[black]/60 border-b border-white/10 px-5 py-4'>
          <div>
            <h1 className='text-base font-heading text-white font-medium'>Dashboard</h1>
            <p className='text-white/70 text-xs'>Welcome Back, Akash!</p>
          </div>
          <div className='w-fit flex text-white gap-4 items-center'>
            <form action="">
              <fieldset className='w-fit flex items-center gap-2 py-2 px-4 bg-[white]/10 rounded-md transition-all duration-300 focus-within:bg-[white]/20'>
                <input type="text" className='text-xs text-white/70 focus:w-60 outline-none' name="search" placeholder='Search Here..' id="search-product" />
                <label htmlFor="search-product" className='text-base'><CiSearch /></label>
              </fieldset>
            </form>
            <div className='w-fit flex items-center'>
              <GoBell className='text-lg cursor-pointer' />
              <div className='w-fit px-4 flex ml-4 border-l border-white/10 gap-4 items-center' >
                <div className='text-xs font-body text-white/70'>
                  <p>
                    Admin
                  </p>
                  <p>Akash</p>
                </div>
                <div className='size-10 rounded-full bg-white/10 font-heading center'>A</div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-[calc(100%-73px)]! p-5 '>
          <div className='w-full h-fit flex gap-5'>
            {
              adminHeaderSection.map((item, index) => (
                <div className='w-1/4 h-fit ' key={index}>
                  <div className='w-full h-full p-4 bg-[white]/10 rounded-md flex items-center justify-between'>
                    <div className=''>
                      <p className='text-white/70 text-xs font-body'>{item.name}</p>
                      <p className='text-white font-semibold text-2xl font-body mt-2'>{item.value}</p>
                      <p className='flex gap-2 items-center mt-2'>
                        <FaArrowUp className='text-green-500 text-sm' />
                        <span className='text-xs text-white/70'>12.5% from the last month</span>
                      </p>
                    </div>
                    <div>
                      <div className='size-15 bg-yellow-100/10 rounded-full flex items-center justify-center'>
                        {item.icon && <item.icon className='text-yellow-500/80 text-2xl' />}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='w-full h-[45vh] flex gap-5 mt-5'>
            <div className="w-3/5 h-full bg-[white]/10 rounded-md">
            
            </div>
            <div className="w-2/5 h-full bg-[white]/10 rounded-md px-5 py-2">
                <div className='w-full flex justify-between items-center py-2 border-b border-white/10 text-sm'>
                  <h1 className='text-base font-body text-white'>Recent Orders</h1>
                  <a href="/admin/product" className='text-yellow-400/70 font-body text-sm'>View All</a>
                </div>
                <div className='w-full h-[calc(100%-41px)] '>
                  <div className="w-full h-1/4 border-b border-white/10 py-2 px-5">
                    
                  </div>
                  <div className="w-full h-1/4 border-white/10 border-b py-2 px-5"></div>
                  <div className="w-full h-1/4 border-white/10 border-b py-2 px-5"></div>
                  <div className="w-full h-1/4 py-2 px-5"></div>
                </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default Dashboard