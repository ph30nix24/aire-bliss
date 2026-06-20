import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { BsSliders } from "react-icons/bs";
import Dropdown from "../../admin/components/DropDown"
import { bestproducts } from '../../../utils';
import ShopItemCard from './ShopItemCard';
import { FaCheck, FaChevronRight } from 'react-icons/fa6';
import Footer from '../../../components/Footer'
import { FiMinus } from 'react-icons/fi';
import PriceRangeSlider from "../components/PriceRangeSlider"
import { useWindowScroll } from "react-use"

const MobileShop = () => {

    const [sort, setSort] = useState('featured')
    

    const sortList = [
        { label: 'Featured', value: 'featured' },
        { label: 'New Arrival', value: 'new-arrival' },
        { label: 'Low to High', value: 'low-to-high' },
        { label: 'High to Low', value: 'high-to-low' },
    ]


    const [categoryFilter, setCategoryFilter] = useState('perfumes')

    const categories = [
        { label: 'Attars', value: 'attars', quantity: 12 },
        { label: 'Perfumes', value: 'perfumes', quantity: 52 },
        { label: 'Room Fragrances', value: 'room-fragrances', quantity: 18 }
    ]

    const [genderFilter, setGenderFilter] = useState([]);



    const gender = [
        { label: 'Men', value: 'men', quantity: 24 },
        { label: 'Women', value: 'women', quantity: 32 },
        { label: 'Unisex', value: 'unisex', quantity: 18 }
    ]

    const handleGenderFilter = (value) => {
        setGenderFilter((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value) // remove if already selected
                : [...prev, value] // add if not selected
        );
    }

    const [selectedNotes, setSelectedNote] = useState([]);

    const handleNoteFilter = (value) => {
        console.log("click")
        setSelectedNote((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value) // remove if already selected
                : [...prev, value] // add if not selected
        );
    }

    const notes = ["floral", "woody", "oriental", "fresh"]


    const [availableOpt, setAvailableOpt] = useState([])

    const availability = [
        { label: 'In Stock', value: 'in-stock' },
        { label: 'Out of Stock', value: 'out-of-stock' },
    ]

    const handleAvalibleFilter = (value) => {
        setAvailableOpt((prev) =>
            prev.includes(value)
                ? prev.filter((item) => item !== value) // remove if already selected
                : [...prev, value] // add if not selected
        );
    }


    return (
        <main className='w-full min-h-screen relative bg-[#131313] overflow-visible'>


            {/* main section */}
            <div className='w-full h-[75vh] relative'>
                <img src="./../../../../shop/shopMobBg.webp" className='absolute size-full object-cover Z-1' alt="" />

                <div className='size-full absolute bg-radial-[at_center_top] from-[#131313]/40 to-[#131313] to-76% Z-3'></div>

                <div className='w-full h-full flex relative z-5 justify-end flex-col items-center pb-10'>
                    <h1 className='relative z-5 text-center text-4xl tracking-wider text-[#fbcc32] font-subheading font-bold '>The Massive Collection</h1>
                    <p className='relative z-5 text-white/70 mt-3 font-body tracking-widest text-sm px-5 text-center'>Discover the olfactory masterpieces of the Aire Bliss atelier. A curated  selection of our finest scents, crafted for the discerning connoisseur.</p>
                </div>
            </div>

            {/* shop section */}
            <div className='w-full py-20 px-5 relative'>

                <div className='w-full flex justify-between items-center border-b-2 border-yellow-400/10 pb-2'>
                    <div className='italic font-body text-white/70 font-light text-xs w-fit'>showing 1-14 of 52 products</div>


                    <div className='flex w-fit items-center gap-1'>
                        <p className='w-fit text-nowrap uppercase font-body text-[10px] text-white/50'>sort by</p>
                        <Dropdown
                            options={sortList}
                            value={sort}
                            additionalCls={`border-none! rounded-none! gap-2! bg-transparent! text-primary! uppercase!`}
                        />
                    </div>
                </div>

                <div className='w-full flex gap-3 justify-center flex-wrap py-5'>
                    {bestproducts.map((product, idx) => (
                        <ShopItemCard key={`a-${product.id ?? idx}`} product={product} width={`w-[48%]`} />
                    ))}
                    {bestproducts.slice(0, 4).map((product, idx) => (
                        <ShopItemCard key={`b-${product.id ?? idx}`} product={product} width={`w-[48%]`} />
                    ))}
                </div>

                {/* sticky filter trigger — pinned within this section only,
                    moved below the grid in DOM so it doesn't sit empty at the top */}
                <div className='sticky bottom-6 flex justify-end pr-6 z-40 pointer-events-none'>
                    <button className='pointer-events-auto flex items-center font-body text-primary gap-3 uppercase tracking-widest font-medium px-4 py-1 border bg-[#131313]/50 backdrop-blur-sm'>
                        <BsSliders className='size-3' />
                        <span className='text-sm'>filter</span>
                    </button>
                </div>

                <div className='w-full flex justify-center text-white gap-2 mt-20'>
                    <div className='size-7 pb-2 border-b-2 border-yellow-400/90 center bg-transparent text-yellow-400/90 font-heading'>01</div>
                    <div className='size-7 pb-2 border-none border-yellow-400/90 center bg-transparent text-white/90 font-heading'>02</div>
                    <div className='size-7 pb-2 border-none border-yellow-400/90 center bg-transparent text-white/90 font-heading'>03</div>

                    <div className='size-7 text-white/90 center'>...</div>
                    <div className='size-7 pb-2 text-yellow-400/90 center '><FaChevronRight size={12} /></div>
                </div>

            </div>
            
            {/* footer */}
            <Footer />
        </main>
    )
}

export default MobileShop