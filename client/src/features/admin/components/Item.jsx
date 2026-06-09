import React, { useState } from 'react'
import { FaPen } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

const Item = ({ item, key }) => {
    return (
        <div className='w-full h-1/6 border-b border-white/10 px-5 py-3 flex' key={key}>
            <div className='w-3/10 flex items-center gap-2'>
                <div className="size-3.5 border rounded-xs border-white/60"></div>
                <div className='text-xs text-white/70 font-body uppercase ml-3 w-[95%] flex gap-4 items-center'>
                    <img src={item.mainImage} className='size-10 object-scale-down rounded' alt="" />
                    <div>
                        <p className='text-sm'>{item.productName}</p>
                        <p className='mt-1 text-[#fff]/30 text-xs'>SKU: {item.sku}</p>
                    </div>
                </div>
            </div>
            <div className='w-[40%] flex items-center'>
                {/* category */}
                <div className='w-2/5 text-xs text-white/70 font-body uppercase ml-3'>{
                    item.category === "room-fragrance" ? (<span> Room Fragrance </span>) :
                        (<span> {item.gender} Perfume </span>)
                }</div>
                {/* price */}
                <div className='w-1/5 text-xs text-white/70 font-body uppercase ml-3'>
                    <p className=''>&#8377; {item.price - item.discount}</p>
                    <p className='line-through text-white/40 mt-0.5'>&#8377; {item.price}</p>
                </div>

                {/* stocks */}
                <div className={`w-1/5 text-xs ${item.stock >= 20 ? 'text-green-500' : item.stock === 0 ? 'text-red-500' : 'text-yellow-500'} font-body uppercase ml-3 `}>{item.stock}</div>

                {/* status */}
                <div className='w-1/5 text-xs text-white/70 font-body uppercase ml-3'>{
                    item.isActive === false ? (<div className='flex items-center gap-1 text-[10px] px-2 py-1 bg-green-red/20 rounded-full  w-fit '><p className='size-1.5 bg-red-500 rounded-full'></p> Out Of Stock</div>)
                        : (
                            item.stock < 20 ? (<div className='flex items-center gap-1 text-[10px] px-2 py-1 bg-yellow-500/20 rounded-full w-fit '><p className='size-1.5 bg-yellow-500 rounded-full'></p> Low Stock</div>) : (<div className='flex items-center gap-1 text-[10px] px-2 py-1 bg-green-500/20 rounded-full  w-fit '><p className='size-1.5 bg-green-500 rounded-full'></p> Active</div>)
                        )
                }</div>
            </div>
            <div className='w-3/10 flex items-center'>
                {/* featured */}
                <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3'>
                    <button className={`w-10 h-6 rounded-full mt-1 ml-1 relative cursor-pointer ${item.featured === true ? 'bg-yellow-400/90' : 'bg-white/30'}`} >
                        <div className={`absolute right-0 size-5 rounded-full bg-white top-0 translate-y-1/10 transition-all duration-400 ease-in-out  ${item.featured === true ? '-translate-x-1/10' : '-translate-x-9/10'}`}></div>
                    </button>
                </div>
                <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3'>
                    <button className={`w-10 h-6 rounded-full mt-1 ml-1 relative cursor-pointer ${item.bestseller === true ? 'bg-yellow-400/90' : 'bg-white/30'}`} >
                        <div className={`absolute right-0 size-5 rounded-full bg-white top-0 translate-y-1/10 transition-all duration-400 ease-in-out  ${item.bestseller === true ? '-translate-x-1/10' : '-translate-x-9/10'}`}></div>
                    </button>
                </div>
                <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3 flex gap-2'>
                    <button className='p-2 rounded border text-yellow-400 cursor-pointer'><FaPen /></button>
                    <button className='p-2 rounded border text-red-400 cursor-pointer'><FaTrashAlt /></button>
                </div>
            </div>
        </div>
    )
}

export default Item