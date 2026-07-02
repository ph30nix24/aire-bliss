
import React, { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { BsHandbag, BsSliders } from "react-icons/bs";
import Dropdown from "../../admin/components/DropDown"
import { bestproducts } from '../../../utils';
import ProductCard from '../../../components/ProductCard';
import ShopItemCard from './ShopItemCard';
import { FaCheck, FaChevronRight } from 'react-icons/fa6';
import Footer from '../../../components/Footer'
import { FiMinus } from 'react-icons/fi';
import PriceRangeSlider from "../components/PriceRangeSlider"
import { useProduct } from '../hooks/useProducts';
import Loader from '../../../components/Loader';

const DesktopShop = () => {

  const { products, loading} = useProduct()

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
    console.log("click")
    setGenderFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // remove if already selected
        : [...prev, value] // add if not selected
    );
  }

  const [ selectedNotes, setSelectedNote ] = useState([]);

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
    console.log("click")
    setAvailableOpt((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // remove if already selected
        : [...prev, value] // add if not selected
    );
  }

  if(loading) {
    return (
      <div className='w-full h-screen center bg-[#131313]'>
        <Loader />
      </div>
    )
  }

  return (
    <main className='bg-[#131313]'>
      <div className='w-full h-[70vh] center flex-col relative'>
        <img src="./../../../../shop/shopBg.webp" className='size-full object-cover absolute top-0 left-0 z-1' alt="" />
        <div className='size-full absolute z-2 bg-radial-[at_center_top] from-[#131313]/50 to-80% to-[#131313]'></div>

        <h1 className='relative z-5 text-6xl tracking-wider text-[#fbcc32] font-subheading font-bold '>The Massive Collection</h1>
        <p className='relative z-5 text-white/70 mt-8 font-body tracking-widest'>Discover the olfactory masterpieces of the Aire Bliss atelier. A curated <br /> selection of our finest scents, crafted for the discerning connoisseur.</p>
      </div>
      <div className='w-full px-20 pt-20 pb-50 flex gap-10'>

        <div className='w-60'>
          <div className='w-full flex items-center justify-between pb-4 border-yellow-400/10 border-b-2 '>
            <p className='text-primary uppercase font-body text-base tracking-wider  font-medium '>filter</p>
            <BsSliders className='text-yellow-400/80 text-lg' />
          </div>

          <div className='w-full py-10 '>
            <div className='w-full'>
              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium'>category</h1>

              <ul className='w-full mt-5'>
                {categories.map((category, index) => (
                  <li className='flex gap-2 items-center my-3 cursor-pointer' key={index} onClick={() => setCategoryFilter(category.value)}>
                    <div className={`size-4 border-2 ${category.value === categoryFilter ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`} >
                      {category.value === categoryFilter && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body text-white/80 tracking-wider ${category.value === categoryFilter ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label} <span className='text-xs'>({category.quantity})</span></p>
                  </li>
                ))}

              </ul>


              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>Gender</h1>
              <ul className='w-full mt-5'>
                {gender.map((category, index) => (
                  <li className='flex gap-2 items-center my-3 cursor-pointer' key={index} onClick={() => handleGenderFilter(category.value)}>
                    <div className={`size-4 border-2 ${genderFilter.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`} >
                      {genderFilter.includes(category.value) && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body text-white/80 tracking-wider ${genderFilter.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label} <span className='text-xs'>({category.quantity})</span></p>
                  </li>
                ))}

              </ul>



              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>
                Price Range
              </h1>
              <div className='w-full mt-3 pr-5'>
                <PriceRangeSlider />
              </div>


              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>
                Select Note
              </h1>
              <div className='w-full mt-5 flex flex-wrap gap-3 '>
                { notes.map((note, index) => (
                  <p className={`uppercase text-xs font-body font-medium px-3 py-1 border cursor-pointer ${selectedNotes.includes(note) ? 'bg-yellow-400/90 text-[#131313]' : 'text-white/70'} tracking-wider transition-smooth`} onClick={() => handleNoteFilter(note)}>{ note }</p>
                ))}
              </div>


              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>
                Availibility 
              </h1>
              
              <ul className='w-full mt-5'>
                {availability.map((category, index) => (
                  <li className='flex gap-2 items-center my-3 cursor-pointer' key={index} onClick={() => handleAvalibleFilter(category.value)}>
                    <div className={`size-4 border-2 ${availableOpt.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`} >
                      {availableOpt.includes(category.value) && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body text-white/80 tracking-wider ${availableOpt.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label}</p>
                  </li>
                ))}

              </ul>



            </div>
          </div>
        </div>

        


        <div className='w-[calc(100%-280px)] '>
          <div className='w-full flex justify-between items-center border-b-2 border-yellow-400/10 pb-2'>
            <div className='italic font-body text-white/70 font-light text-sm w-fit'>showing 1-14 of 52 products</div>


            <div className='flex w-fit items-center gap-3'>
              <p className='w-fit text-nowrap uppercase font-body text-xs text-white/50'>sort by</p>
              <Dropdown
                options={sortList}
                value={sort}
                additionalCls={`border-none! rounded-none! gap-5! bg-transparent! text-primary! uppercase!`}
              />
            </div>
          </div>
            
          <div className='w-full flex gap-5 flex-wrap py-10'>
            {products.map((product) => (
              <ShopItemCard product={product} width={`w-[23.62%]`} height={`lg:h-[60vh]`} />
            ))}
            {products.map((product) => (
              <ShopItemCard product={product} width={`w-[23.62%]`} height={`lg:h-[60vh]`} />
            ))}
            {products.slice(0, 2).map((product) => (
              <ShopItemCard product={product} width={`w-[23.62%]`} height={`lg:h-[60vh]`} />
            ))}
          </div>

          <div className='w-full flex justify-center text-white gap-2 mt-20'>
            <div className='size-10 border border-yellow-400/90 center bg-yellow-400/90 text-[#222]'>1</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10  center'>2</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10  center '>3</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10  center'>...</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10  center '><FaChevronRight size={12} /></div>
          </div>
        </div>


      </div>

      <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />
    </main>
  )
}

export default DesktopShop