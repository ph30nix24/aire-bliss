
import React, { useState } from 'react'
import { useSearchParams } from 'react-router'
import Navbar from '../../../components/Navbar'
import { BsHandbag, BsSliders } from "react-icons/bs";
import Dropdown from "../../admin/components/DropDown"
import ProductCard from '../../../components/ProductCard';
import ShopItemCard from './ShopItemCard';
import { FaCheck, FaChevronRight } from 'react-icons/fa6';
import Footer from '../../../components/Footer'
import { FiMinus } from 'react-icons/fi';
import PriceRangeSlider from "../components/PriceRangeSlider"
import { useProduct } from '../hooks/useProducts';
import Loader from '../../../components/Loader';

const PRICE_MIN = 80;
const PRICE_MAX = 1500;

const CATEGORY_MAP = {
  'attars':          'attar',
  'perfumes':        'perfume',
  'room-fragrances': 'room-fragrance',
}

const GENDER_MAP = {
  'men':    'male',
  'women':  'female',
  'unisex': 'unisex',
}

const DesktopShop = () => {

  const { products, loading } = useProduct()

  const [searchParams] = useSearchParams()

  const [sort, setSort] = useState('featured')

  const sortList = [
    { label: 'Featured', value: 'featured' },
    { label: 'New Arrival', value: 'new-arrival' },
    { label: 'Low to High', value: 'low-to-high' },
    { label: 'High to Low', value: 'high-to-low' },
  ]
  const urlGender = searchParams.get('gender')
  const [categoryFilter, setCategoryFilter] = useState(() => {
    if(urlGender === 'room-fragrances'){
      return 'room-fragrances'
    }
    return null
  })

  const categories = [
    { label: 'Attars', value: 'attars', quantity: 12 },
    { label: 'Perfumes', value: 'perfumes', quantity: 52 },
    { label: 'Room Fragrances', value: 'room-fragrances', quantity: 18 }
  ]

  const [genderFilter, setGenderFilter] = useState(() =>
    urlGender && urlGender !== "room-fragrances" ? [urlGender] : []
  )

  const gender = [
    { label: 'Men', value: 'men', quantity: 24 },
    { label: 'Women', value: 'women', quantity: 32 },
    { label: 'Unisex', value: 'unisex', quantity: 18 }
  ]

  const handleGenderFilter = (value) => {
    setGenderFilter((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  }

  const [selectedNotes, setSelectedNote] = useState([])

  const handleNoteFilter = (value) => {
    setSelectedNote((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  }

  const notes = ["floral", "woody", "oriental", "fresh"]

  const [priceMin, setPriceMin] = useState(PRICE_MIN)
  const [priceMax, setPriceMax] = useState(PRICE_MAX)

  const [availableOpt, setAvailableOpt] = useState([])

  const availability = [
    { label: 'In Stock', value: 'in-stock' },
    { label: 'Out of Stock', value: 'out-of-stock' },
  ]

  const handleAvalibleFilter = (value) => {
    setAvailableOpt((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    )
  }

  const getFilteredProducts = (items) => {
    let result = [...items]

    if (categoryFilter) {
      const dbCat = CATEGORY_MAP[categoryFilter]
      result = result.filter(p => p.category === dbCat)
    }

    if (genderFilter.length > 0) {
      const dbGenders = genderFilter.map(g => GENDER_MAP[g])
      result = result.filter(p => dbGenders.includes(p.gender))
    }

    result = result.filter(p => {
      const effective = p.price - (p.discount || 0)
      return effective >= priceMin && effective <= priceMax
    })

    if (selectedNotes.length > 0) {
      result = result.filter(p =>
        p.fragranceNotes?.some(note => selectedNotes.includes(note.toLowerCase()))
      )
    }

    if (availableOpt.length > 0) {
      result = result.filter(p => {
        const inStock = p.stock > 0
        if (availableOpt.includes('in-stock') && availableOpt.includes('out-of-stock')) return true
        if (availableOpt.includes('in-stock')) return inStock
        if (availableOpt.includes('out-of-stock')) return !inStock
        return true
      })
    }

    return result
  }

  const getSortedProducts = (items) => {
    const sorted = [...items]
    switch (sort) {
      case 'new-arrival':
        return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      case 'low-to-high':
        return sorted.sort((a, b) => (a.price - (a.discount || 0)) - (b.price - (b.discount || 0)))
      case 'high-to-low':
        return sorted.sort((a, b) => (b.price - (b.discount || 0)) - (a.price - (a.discount || 0)))
      case 'featured':
      default:
        return sorted
    }
  }

  const displayedProducts = getSortedProducts(getFilteredProducts(products))

  const handleClearFilters = () => {
    setCategoryFilter(null)
    setGenderFilter([])
    setSelectedNote([])
    setAvailableOpt([])
    setPriceMin(PRICE_MIN)
    setPriceMax(PRICE_MAX)
  }

  if (loading) {
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
          <div className='w-full flex items-center justify-between pb-4 border-yellow-400/10 border-b-2'>
            <p className='text-primary uppercase font-body text-base tracking-wider font-medium'>filter</p>
            <BsSliders className='text-yellow-400/80 text-lg' />
          </div>

          <div className='w-full py-10'>
            <div className='w-full'>

              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium'>category</h1>
              <ul className='w-full mt-5'>
                {categories.map((category, index) => (
                  <li
                    className='flex gap-2 items-center my-3 cursor-pointer'
                    key={index}
                    onClick={() => setCategoryFilter(prev => prev === category.value ? null : category.value)}
                  >
                    <div className={`size-4 border-2 ${category.value === categoryFilter ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`}>
                      {category.value === categoryFilter && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body tracking-wider ${category.value === categoryFilter ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label} <span className='text-xs'>({category.quantity})</span>
                    </p>
                  </li>
                ))}
              </ul>

              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>Gender</h1>
              <ul className='w-full mt-5'>
                {gender.map((category, index) => (
                  <li
                    className='flex gap-2 items-center my-3 cursor-pointer'
                    key={index}
                    onClick={() => handleGenderFilter(category.value)}
                  >
                    <div className={`size-4 border-2 ${genderFilter.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`}>
                      {genderFilter.includes(category.value) && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body tracking-wider ${genderFilter.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label} <span className='text-xs'>({category.quantity})</span>
                    </p>
                  </li>
                ))}
              </ul>

              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>Price Range</h1>
              <div className='w-full mt-3 pr-5'>
                <PriceRangeSlider
                  minVal={priceMin}
                  maxVal={priceMax}
                  onMinChange={setPriceMin}
                  onMaxChange={setPriceMax}
                />
              </div>

              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>Select Note</h1>
              <div className='w-full mt-5 flex flex-wrap gap-3'>
                {notes.map((note, index) => (
                  <p
                    key={index}
                    className={`uppercase text-xs font-body font-medium px-3 py-1 border cursor-pointer ${selectedNotes.includes(note) ? 'bg-yellow-400/90 text-[#131313]' : 'text-white/70'} tracking-wider transition-smooth`}
                    onClick={() => handleNoteFilter(note)}
                  >
                    {note}
                  </p>
                ))}
              </div>

              <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mt-10'>Availibility</h1>
              <ul className='w-full mt-5'>
                {availability.map((category, index) => (
                  <li
                    className='flex gap-2 items-center my-3 cursor-pointer'
                    key={index}
                    onClick={() => handleAvalibleFilter(category.value)}
                  >
                    <div className={`size-4 border-2 ${availableOpt.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white`}>
                      {availableOpt.includes(category.value) && <FaCheck className='size-2' />}
                    </div>
                    <p className={`text-sm font-body tracking-wider ${availableOpt.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                      {category.label}
                    </p>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>

        <div className='w-[calc(100%-280px)]'>
          <div className='w-full flex justify-between items-center border-b-2 border-yellow-400/10 pb-2'>
            <div className='italic font-body text-white/70 font-light text-sm w-fit'>
              showing {displayedProducts.length} of {products.length} products
            </div>
            <div className='flex w-fit items-center gap-3'>
              <p className='w-fit text-nowrap uppercase font-body text-xs text-white/50'>sort by</p>
              <Dropdown
                options={sortList}
                value={sortList.find(o => o.value === sort)?.label}
                onChange={setSort}
                additionalCls={`border-none! rounded-none! gap-5! bg-transparent! text-primary! uppercase!`}
              />
            </div>
          </div>

          <div className='w-full flex gap-5 flex-wrap py-10'>
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product, index) => (
                <ShopItemCard
                  key={product._id || index}
                  product={product}
                  width={`w-[23.62%]`}
                  height={`lg:h-[60vh]`}
                />
              ))
            ) : (
              <div className='w-full py-20 center flex-col gap-4'>
                <p className='text-white/40 font-body text-sm tracking-widest uppercase'>No products match your filters</p>
                <button
                  onClick={handleClearFilters}
                  className='text-yellow-400/80 font-body text-xs tracking-widest uppercase border border-yellow-400/20 px-4 py-2 hover:bg-yellow-400/10 transition-colors cursor-pointer'
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* <div className='w-full flex justify-center text-white gap-2 mt-20'>
            <div className='size-10 border border-yellow-400/90 center bg-yellow-400/90 text-[#222]'>1</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10 center'>2</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10 center'>3</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10 center'>...</div>
            <div className='size-10 border-2 text-white/60 border-[#777]/10 center'><FaChevronRight size={12} /></div>
          </div> */}
        </div>

      </div>

      <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />
    </main>
  )
}

export default DesktopShop
