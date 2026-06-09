import React, { useState } from 'react'
import SideNavbar from '../components/SideNavbar'
import { CiSearch } from 'react-icons/ci'
import { GoBell } from 'react-icons/go'
import { FaAngleLeft, FaAngleRight, FaArrowUp, FaPlus } from "react-icons/fa6";
import { TbPerfume } from 'react-icons/tb';
import { BsBox } from "react-icons/bs";
import { BsClipboard2X } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { PiFunnelThin } from "react-icons/pi";
import { IoSaveOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";
import ProductForm from '../components/ProductForm';
import { useProduct } from '../../shop/hooks/useProducts';
import Loader from '../../../components/Loader';
import Item from '../components/Item';




const Product = () => {
    const { products, loading } = useProduct();
    console.log(products)
    
    const totalPages = products.length/6  || 1;
    console.log(totalPages)
    const [currentPage, setCurrentPage] = useState(0);


    const adminHeaderSection = [
        {
            name: "Total Products",
            value: products?.length || 0,
            icon: TbPerfume
        },
        {
            name: "Active Products",
            value: products?.filter(product => {
                return product.isActive === true;
            }).length || 0,
            icon: BsBox
        },
        {
            name: "Out of Stock",
            value: products?.filter(product => {
                return product.isActive !== true;
            }).length || 0,
            icon: BsClipboard2X
        },
        {
            name: "Draft Products",
            value: 0,
            icon: RiDraftLine
        },
    ]
    const [isAddProductClk, setIsAddProductClk] = useState(false);

    return (
        <main className='flex h-screen! bg-black'>
            <SideNavbar />
            <section className='w-[calc(100%-240px)]! h-full'>
                <div className='w-full h-fit flex items-center justify-between bg-[black]/60 border-b border-white/10 px-5 py-2'>
                    <div className='flex items-center'>
                        <h1 className='text-base font-heading text-white font-medium'>Product</h1>
                    </div>
                    <div className='w-fit flex text-white gap-4 items-center'>
                        <button className={`${isAddProductClk ? 'hidden' : 'flex'} items-center gap-2 py-2 px-4 bg-yellow-400/80 rounded-md transition-all duration-300 hover:bg-yellow-500 text-black cursor-pointer`} onClick={() => setIsAddProductClk(true)}>
                            <span><FaPlus className='text-xs' /></span>
                            <p className='text-xs font-body uppercase'>Add Product</p>
                        </button>
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
                <div className={`${isAddProductClk ? 'translate-x-0' : 'translate-x-full'} absolute bottom-0 left-0 w-full h-[calc(100%-57px)] transition-all duration-300 bg-[black] backdrop-blur-sm z-20`}>

                    {/* add product form */}
                    <ProductForm setIsAddProductClk={setIsAddProductClk} />

                </div>

                <div className='w-full h-fit flex gap-3 p-3 pb-0'>
                    {
                        adminHeaderSection.map((item, index) => (
                            <div className='w-1/4 h-fit ' key={index}>
                                <div className='w-full h-full p-4 bg-[#101012] rounded-md flex items-center justify-between'>
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
                <div className='w-full h-[calc(100%-183px)] p-3 '>
                    <div className='size-full bg-[#101012] rounded-md'>

                        
                        <div className='w-full h-fit flex justify-between items-center px-5 py-4 text-white'>
                            <div className='w-fit flex items-center gap-3'>
                                <div className='flex py-2 px-4 gap-4 items-center border border-white/10 rounded-md'>
                                    <span className='text-xs tracking-wider font-body '>
                                        All Categories
                                    </span>
                                    <FaAngleDown className='text-xs' />
                                </div>
                                <div className='flex py-2 px-4 gap-4 items-center border border-white/10 rounded-md'>
                                    <span className='text-xs tracking-wider font-body '>
                                        All Status
                                    </span>
                                    <FaAngleDown className='text-xs' />
                                </div>
                                <div className='flex py-2 px-4 gap-2 items-center border border-white/10 rounded-md'>
                                    <PiFunnelThin className='text-xs' />
                                    <span className='text-xs tracking-wider font-body '>
                                        Filter
                                    </span>
                                </div>
                            </div>
                            <form action="">
                                <fieldset className='w-fit flex items-center gap-2 py-2 px-5 bg-[white]/10 rounded-md transition-all duration-300 focus-within:bg-[white]/20'>
                                    <input type="text" className='text-xs text-white/70 focus:w-60 outline-none transition-all duration-300' name="search" placeholder='Search Product Here..' id="search-product" />
                                    <label htmlFor="search-product" className='text-base'><CiSearch /></label>
                                </fieldset>
                            </form>
                        </div>
                        
                        <div className='w-full h-[calc(100%-132px)] '>
                            {/* product heading */}
                            <div className='w-full px-5 py-3 h-fit flex bg-[#161618] items-center'>
                                <div className='w-3/10 flex items-center gap-2'>
                                    <div className="size-3.5 border rounded-xs border-white/60"></div>
                                    <div className='text-xs text-white/70 font-body uppercase ml-3 w-[95%]'>Product Name</div>
                                </div>
                                <div className='w-[40%] flex items-center'>
                                    <div className='w-2/5 text-xs text-white/70 font-body uppercase ml-3'>Category</div>
                                    <div className='w-1/5 text-xs text-white/70 font-body uppercase ml-3'>Price</div>
                                    <div className='w-1/5 text-xs text-white/70 font-body uppercase ml-3'>Stock</div>
                                    <div className='w-1/5 text-xs text-white/70 font-body uppercase ml-3'>Status</div>
                                </div>
                                <div className='w-3/10 flex items-center'>
                                    <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3'>featured</div>
                                    <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3'>BestSeller</div>
                                    <div className='w-1/3 text-xs text-white/70 font-body uppercase ml-3'>Actions</div>
                                </div>
                            </div>
                            {/* products */}
                            <div className='w-full h-[calc(100%-40px)] flex flex-col'>
                                {loading ? (
                                    <div className='size-full center'>
                                        <Loader />
                                    </div>
                                ) : (
                                    products?.length > 0 ? (products.slice(0, 6).map((item, index) => (
                                        <Item item={item} key={index} />
                                    ))) : (<p className='size-full center text-white/70 font-body text-sm'>No products found</p>)
                                )}
                            </div>
                        </div>

                        {/* page navigation */}
                        <div className='w-full h-fit flex justify-between items-center px-5 py-4 text-white'>
                            <p className='font-body text-sm'>showing of {(6 * currentPage) + 1} to {(6 * currentPage) + 6} of {products.length} products</p>
                            <div className='w-fit flex gap-3 items-center'>
                                <p className={`text-xs px-5 py-2 border border-white/10 rounded-md font-body tracking-wide `}>6 per page</p>
                                <div className={`size-8 border border-white/10 rounded-md center text-sm font-heading text-white/70 cursor-pointer ${totalPages > 1 && currentPage+1 > 1 ? "flex" : "hidden!"}`}><FaAngleLeft /></div>
                                {Array.from({ length: Math.min(totalPages, 4)}).map((_, index) => (
                                    <div className={`size-8 border border-white/10 rounded-md center text-sm font-heading text-white/70 cursor-pointer ${currentPage === index ? 'bg-yellow-400/60' : ''}`}>{totalPages >= 4 && index === 2 ? (<span>...</span>) : ( <span>{index + 1}</span>)}</div>
                                )
                                )}
                                
                                <div className={`size-8 border border-white/10 rounded-md center text-sm font-heading text-white/70 cursor-pointer ${totalPages >= 1  && currentPage+1 === totalPages ? "hidden!" : "flex"}`}><FaAngleRight /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Product