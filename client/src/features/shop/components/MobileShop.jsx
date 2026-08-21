import React, { useState } from 'react'
import { useSearchParams } from 'react-router'
import { BsSliders } from "react-icons/bs";
import Dropdown from "../../admin/components/DropDown"
import ShopItemCard from './ShopItemCard';
import { FaCheck, FaChevronRight, FaTimes } from 'react-icons/fa';
import Footer from '../../../components/Footer'
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

const MobileShop = () => {
    const { products, loading } = useProduct()

    const [searchParams] = useSearchParams()

    // -- Sort ----------------------------------------------
    const [sort, setSort] = useState('featured')

    const sortList = [
        { label: 'Featured', value: 'featured' },
        { label: 'New Arrival', value: 'new-arrival' },
        { label: 'Low to High', value: 'low-to-high' },
        { label: 'High to Low', value: 'high-to-low' },
    ]

    // -- Filters -------------------------------------------
    const [categoryFilter, setCategoryFilter] = useState(() => {
        if (urlGender === 'room-fragrances') {
            return 'room-fragrances'
        }
        return null
    })

    const categories = [
        { label: 'Attars', value: 'attars', quantity: 0 },
        { label: 'Perfumes', value: 'perfumes', quantity: 6 },
        { label: 'Room Fragrances', value: 'room-fragrances', quantity: 0 }
    ]

    // Seed gender filter from URL param (?gender=men | women)
    const urlGender = searchParams.get('gender') // 'men' | 'women' | null
    const [genderFilter, setGenderFilter] = useState(() =>
        urlGender && urlGender === 'room-fragrances' ? [urlGender] : []
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

    // -- Filter drawer -------------------------------------
    const [filterOpen, setFilterOpen] = useState(false)

    const handleClearFilters = () => {
        setCategoryFilter(null)
        setGenderFilter([])
        setSelectedNote([])
        setAvailableOpt([])
        setPriceMin(PRICE_MIN)
        setPriceMax(PRICE_MAX)
    }

    // -- Filter + Sort pipeline ----------------------------
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

    if (loading) {
        return (
            <div className='w-full h-screen center bg-[#131313]'>
                <Loader />
            </div>
        )
    }

    return (
        <main className='w-full min-h-screen relative bg-[#131313] overflow-visible'>

            {/* Hero section */}
            <div className='w-full h-[75vh] relative'>
                <img src="./../../../../shop/shopMobBg.webp" className='absolute size-full object-cover Z-1' alt="" />
                <div className='size-full absolute bg-radial-[at_center_top] from-[#131313]/40 to-[#131313] to-76% Z-3'></div>
                <div className='w-full h-full flex relative z-5 justify-end flex-col items-center pb-10'>
                    <h1 className='relative z-5 text-center text-4xl tracking-wider text-[#fbcc32] font-subheading font-bold'>The Massive Collection</h1>
                    <p className='relative z-5 text-white/70 mt-3 font-body tracking-widest text-sm px-5 text-center'>Discover the olfactory masterpieces of the Aire Bliss atelier. A curated selection of our finest scents, crafted for the discerning connoisseur.</p>
                </div>
            </div>

            {/* Shop section */}
            <div className='w-full py-20 px-5 relative'>

                {/* Sort bar */}
                <div className='w-full flex justify-between items-center border-b-2 border-yellow-400/10 pb-2'>
                    <div className='italic font-body text-white/70 font-light text-xs w-fit'>
                        showing {displayedProducts.length} of {products.length} products
                    </div>
                    <div className='flex w-fit items-center gap-1'>
                        <p className='w-fit text-nowrap uppercase font-body text-[10px] text-white/50'>sort by</p>
                        <Dropdown
                            options={sortList}
                            value={sortList.find(o => o.value === sort)?.label}
                            onChange={setSort}
                            additionalCls={`border-none! rounded-none! gap-2! bg-transparent! text-primary! uppercase!`}
                        />
                    </div>
                </div>

                {/* Product grid */}
                <div className='w-full flex gap-3 justify-start mx-auto flex-wrap py-5'>
                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((product, idx) => (
                            <ShopItemCard key={product._id ?? idx} product={product} width={`w-[48%]`} height={`h-[50vh]!`} />
                        ))
                    ) : (
                        <div className='w-full py-16 center flex-col gap-4'>
                            <p className='text-white/40 font-body text-xs tracking-widest uppercase text-center'>No products match your filters</p>
                            <button
                                onClick={handleClearFilters}
                                className='text-yellow-400/80 font-body text-xs tracking-widest uppercase border border-yellow-400/20 px-4 py-2 hover:bg-yellow-400/10 transition-colors cursor-pointer'
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Sticky filter trigger */}
                <div className='sticky bottom-6 flex justify-end pr-6 z-40 pointer-events-none'>
                    <button
                        onClick={() => setFilterOpen(true)}
                        className='pointer-events-auto flex items-center font-body text-primary gap-3 uppercase tracking-widest font-medium px-4 py-1 border bg-[#131313]/50 backdrop-blur-sm'
                    >
                        <BsSliders className='size-3' />
                        <span className='text-sm'>filter</span>
                    </button>
                </div>

                {/* Pagination */}
                {/* <div className='w-full flex justify-center text-white gap-2 mt-20'>
                    <div className='size-7 pb-2 border-b-2 border-yellow-400/90 center bg-transparent text-yellow-400/90 font-heading'>01</div>
                    <div className='size-7 pb-2 border-none border-yellow-400/90 center bg-transparent text-white/90 font-heading'>02</div>
                    <div className='size-7 pb-2 border-none border-yellow-400/90 center bg-transparent text-white/90 font-heading'>03</div>
                    <div className='size-7 text-white/90 center'>...</div>
                    <div className='size-7 pb-2 text-yellow-400/90 center'><FaChevronRight size={12} /></div>
                </div> */}

            </div>

            {/* Footer */}
            <Footer />

            {/* Filter drawer backdrop */}
            {filterOpen && (
                <div
                    className='fixed inset-0 bg-black/60 z-50 backdrop-blur-sm'
                    onClick={() => setFilterOpen(false)}
                />
            )}

            {/* Filter drawer � slides up from bottom */}
            <div
                className={`fixed bottom-0 left-0 w-full bg-[#181818] z-50 rounded-t-2xl transition-transform duration-300 ${filterOpen ? 'translate-y-0' : 'translate-y-full'} filter-drawer`}
                style={{ maxHeight: '85vh', overflowY: 'auto' }}
            >
                {/* Drawer header */}
                <div className='w-full flex items-center justify-between px-5 py-4 border-b border-yellow-400/10 sticky top-0 bg-[#181818] z-10'>
                    <div className='flex items-center gap-2'>
                        <BsSliders className='text-yellow-400/80' />
                        <p className='text-primary uppercase font-body text-sm tracking-wider font-medium'>filter</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={handleClearFilters}
                            className='text-white/40 font-body text-xs tracking-widest uppercase hover:text-yellow-400/80 transition-colors'
                        >
                            Clear all
                        </button>
                        <button onClick={() => setFilterOpen(false)}>
                            <FaTimes className='text-white/60 text-lg' />
                        </button>
                    </div>
                </div>

                <div className='px-5 py-6 flex flex-col gap-8'>

                    {/* Category */}
                    <div>
                        <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mb-4'>Category</h1>
                        <ul className='w-full flex flex-col gap-3'>
                            {categories.map((category, index) => (
                                <li
                                    className='flex gap-3 items-center cursor-pointer'
                                    key={index}
                                    onClick={() => setCategoryFilter(prev => prev === category.value ? null : category.value)}
                                >
                                    <div className={`size-4 border-2 ${category.value === categoryFilter ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white flex-shrink-0`}>
                                        {category.value === categoryFilter && <FaCheck className='size-2' />}
                                    </div>
                                    <p className={`text-sm font-body tracking-wider ${category.value === categoryFilter ? 'text-yellow-400/90' : 'text-white/80'}`}>
                                        {category.label} <span className='text-xs'>({category.quantity})</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gender */}
                    <div>
                        <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mb-4'>Gender</h1>
                        <ul className='w-full flex flex-col gap-3'>
                            {gender.map((category, index) => (
                                <li
                                    className='flex gap-3 items-center cursor-pointer'
                                    key={index}
                                    onClick={() => handleGenderFilter(category.value)}
                                >
                                    <div className={`size-4 border-2 ${genderFilter.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white flex-shrink-0`}>
                                        {genderFilter.includes(category.value) && <FaCheck className='size-2' />}
                                    </div>
                                    <p className={`text-sm font-body tracking-wider ${genderFilter.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                                        {category.label} <span className='text-xs'>({category.quantity})</span>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mb-2'>Price Range</h1>
                        <div className='pr-4'>
                            <PriceRangeSlider
                                minVal={priceMin}
                                maxVal={priceMax}
                                onMinChange={setPriceMin}
                                onMaxChange={setPriceMax}
                            />
                        </div>
                    </div>

                    {/* Fragrance Notes */}
                    <div>
                        <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mb-4'>Select Note</h1>
                        <div className='flex flex-wrap gap-2'>
                            {notes.map((note, index) => (
                                <p
                                    key={index}
                                    className={`uppercase text-xs font-body font-medium px-3 py-1 border cursor-pointer ${selectedNotes.includes(note) ? 'bg-yellow-400/90 text-[#131313]' : 'text-white/70'} tracking-wider transition-all`}
                                    onClick={() => handleNoteFilter(note)}
                                >
                                    {note}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Availability */}
                    <div>
                        <h1 className='font-body uppercase text-xs tracking-widest text-yellow-100/80 font-medium mb-4'>Availability</h1>
                        <ul className='w-full flex flex-col gap-3'>
                            {availability.map((category, index) => (
                                <li
                                    className='flex gap-3 items-center cursor-pointer'
                                    key={index}
                                    onClick={() => handleAvalibleFilter(category.value)}
                                >
                                    <div className={`size-4 border-2 ${availableOpt.includes(category.value) ? 'bg-yellow-400/90 border-none' : 'border-white/20'} rounded-xs center text-white flex-shrink-0`}>
                                        {availableOpt.includes(category.value) && <FaCheck className='size-2' />}
                                    </div>
                                    <p className={`text-sm font-body tracking-wider ${availableOpt.includes(category.value) ? 'text-yellow-400/90' : 'text-white/80'}`}>
                                        {category.label}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Apply button */}
                    <button
                        onClick={() => setFilterOpen(false)}
                        className='w-full py-3 bg-yellow-400/90 text-[#131313] font-body uppercase tracking-widest text-sm font-semibold mb-4 hover:bg-yellow-400 transition-colors'
                    >
                        Show {displayedProducts.length} Products
                    </button>

                </div>
            </div>

        </main>
    )
}

export default MobileShop
