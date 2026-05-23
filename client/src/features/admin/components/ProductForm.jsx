import React, { useRef, useState } from 'react'
import { IoCloudUploadOutline, IoSaveOutline } from "react-icons/io5";


const ProductForm = ({ setIsAddProductClk }) => {
    const inputRef = useRef(null);
    const [image, setImage] = useState(null);
    const handleClick = () => inputRef.current?.click();
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };
    return (
        <form action="" className='size-full pt-0 px-5 pb-10'>
            <div className='w-full h-[calc(100%-60px)] flex gap-3'>
                <div className='w-1/3 h-full bg-[#111]/70 border border-white/10 rounded-md py-3 px-5'>
                    <h1 className='text-white font-semibold text-base'>Product Image</h1>
                    <p className='text-white/70 text-sm tracking-wide font-body mt-1'>Upload a high-quality image of your product</p>
                    <input
                        ref={inputRef}
                        onChange={handleFileChange}
                        type="file"
                        className="hidden"
                    />
                    <div
                        className="w-full h-fit  rounded-2xl border-2 py-8 flex flex-col items-center border-dashed border-yellow-500/60 cursor-pointer mt-5"
                        onClick={handleClick}
                    >
                        <IoCloudUploadOutline className="size-15 text-yellow-500/80" />
                        <p className="text-base text-white/70 font-body">Drag & drop images here</p>
                        <p className="text-white/70 text-sm font-body">or</p>
                        <button className='text-xs font-body tracking-wide text-white capitalize bg-yellow-400/80 border border-white/20 rounded-md px-8 py-2 flex gap-2 cursor-pointer mt-2 '>
                            <span>save product</span>
                        </button>
                    </div>
                    <p className='text-white font-body text-sm my-3'>Image Preview </p>
                    <div className='w-full flex gap-3'>
                        <div className='size-15 '></div>
                    </div>
                </div>
                {/* details section */}
                <div className='w-2/3 h-full bg-[#111]/70 border border-white/10 rounded-md p-3'>

                </div>
            </div>
            {/* image section */}

            <div className='w-full h-fit px-5 py-3 mt-3 flex items-center justify-between bg-[#111]/70 border border-white/10 rounded-md'>
                <button className='text-xs font-body tracking-wide text-white capitalize bg-[#111]/70 border border-white/20 rounded-md px-8 py-2 cursor-pointer' type='button' onClick={() => setIsAddProductClk(false)}>
                    cancel
                </button>
                <div className='w-fit flex items-center'>
                    <button className='text-xs font-body tracking-wide text-white capitalize bg-yellow-400/80 border border-white/20 rounded-md px-8 py-2 flex gap-2 cursor-pointer' type='submit'>
                        <IoSaveOutline className='text-sm' />
                        <span>save product</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ProductForm