import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { useWindowScroll } from 'react-use';
import Navbar from '../../../components/Navbar';
import StarRating from '../../home/components/StarRating';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp, FaMinus, FaPlus, FaUser } from 'react-icons/fa6';
import { CiDeliveryTruck, CiLock, CiShoppingCart } from 'react-icons/ci';
import { bestproducts, testimonials } from '../../../utils';
import ShopItemCard from './ShopItemCard';
import Footer from '../../../components/Footer';
import { useMediaQuery } from 'react-responsive';
import { GoHeart } from 'react-icons/go';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { BsBox } from 'react-icons/bs';
import { TbArrowBigRightLine } from "react-icons/tb";
import { useProduct } from '../hooks/useProducts';
import Loader from '../../../components/Loader';

const ProductPage = () => {
  const { id } = useParams();
  const { product, handleSetProduct } = useProduct();
  useEffect(() => {
  if (id) {
    handleSetProduct(id);
  }
}, [id]);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const startX = useRef(0);
  const isDragging = useRef(false);

  const { y: currentY } = useWindowScroll();

  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const ratings = {
    excellent: 1340,
    veryGood: 550,
    good: 140,
    average: 106,
    poor: 44
  }

  const totalRating = ratings.excellent + ratings.veryGood + ratings.good + ratings.average + ratings.poor

  useEffect(() => {
    setIsScrolled(currentY > 30)
  }, [currentY])

  // 2. handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50 && currentIndex < allImages.length - 1)
      setCurrentIndex(i => i + 1);  // swipe left
    else if (diff < -50 && currentIndex > 0)
      setCurrentIndex(i => i - 1);  // swipe right

    isDragging.current = false;
  };

  const [isAdditionalClicked, setSsAdditionalClicked] = useState(false);


  const [current, setCurrent] = useState(0);

  // const product = {
  //   "_id": {
  //     "$oid": "6a24445673dfd9a12256b207"
  //   },
  //   "productName": "Gucci Flora",
  //   "mainImage": "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761679/public/temp/cp99sqbf1fg9oxdsi8wg.webp",
  //   "previewImages": [
  //     "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761680/public/temp/zuqbc20fhryq4hmmsup7.webp",
  //     "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761682/public/temp/riet5ks4ar30mp6bbsk1.webp",
  //     "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761683/public/temp/ltuqomb5qfciseuybnql.webp",
  //     "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761685/public/temp/x5d9iyurxcaehrkm651o.webp",
  //     "https://res.cloudinary.com/dcvrvbfmw/image/upload/v1780761686/public/temp/excqof5xjr1smrpzdi57.webp"
  //   ],
  //   "brand": "Aire Bliss",
  //   "category": "perfume",
  //   "gender": "unisex",
  //   "price": 500,
  //   "discount": 100,
  //   "stock": 20,
  //   "sku": "AB-000002",
  //   "size": "30ml",
  //   "fragranceNotes": [
  //     "Floral",
  //     "Woody",
  //     "Feminine"
  //   ],
  //   "shortDescription": "Experience the elegance of Guccii Flora by Aire Bliss, a graceful floral fragrance crafted for women who love timeless beauty. Delicate blooming flowers blend with soft, fresh notes to create a scent that is feminine, refreshing, and effortlessly sophisticated—perfect.",

  //   "longDescription": `Immerse yourself in the enchanting charm of Guccii Flora by Aire Bliss, a fragrance inspired by blooming gardens and the beauty of nature. Designed for women who embrace elegance and confidence, this perfume opens with a fresh burst of delicate floral notes that instantly uplift your senses. As the fragrance develops, a soft bouquet of romantic blossoms creates a graceful and feminine heart, while warm, subtle base notes provide a smooth and long-lasting finish.\n\nPerfect for both everyday wear and special occasions, Guccii Flora offers a balanced scent that is fresh, floral, and effortlessly sophisticated. Its refined composition makes it an ideal choice for work, brunches, evening gatherings, or romantic dates, leaving a memorable impression wherever you go.\n\nHoused in a beautifully crafted bottle, this fragrance reflects luxury, elegance, and timeless style. With its long-lasting performance and captivating floral aroma, Guccii Flora by Aire Bliss is more than just a perfume—it's an expression of confidence, beauty, and femininity that stays with you throughout the day.`,
  //   "featured": true,
  //   "rating": 4.5,
  //   "bestseller": true,
  //   "ratings": [],
  // }

  

  if(!product) {
    return (
      <div className='w-full h-screen bg-[#131313] center'>
        <Loader />
      </div>
    )
  }

  const allImages = [product.mainImage, ...(product.previewImages ?? [])];
  
  if (isMobile) {
    return (
      <main className='bg-[#131313] relative'>
        <Navbar additional={`lg:py-5! lg:px-35! bg-transparent! border-none ${isScrolled && 'backdrop-blur-md!'} z-50!`} />

        <img src={product?.mainImage} className='absolute w-full h-[95vh] object-cover z-2 opacity-20' alt="" />

        <div className='w-full h-[95vh] bg-radial-[at_center_top] from-[#131313]/80 to-[#131313] absolute to-70% z-4'></div>

        <div className='w-full px-5 pt-20 pb-20 relative z-10'>


          <div className='w-full overflow-x-hidden flex '
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}


          >
            {allImages.map((path, i) => (
              <img src={path} className='w-full rounded transition-smooth' key={i} alt={`preview-image-${i + 1}`} style={{ transform: `translateX(-${currentIndex * 100}%)` }} />
            ))}
          </div>
          <div className='w-full mt-4 center gap-2 '>
            {Array.from({ length: allImages.length }).map(
              (_, i) => (
                <div className={`size-2.5 rounded-full border border-[#777]/40 ${currentIndex === i && "bg-yellow-300"}`} key={i}></div>
              )
            )}
          </div>

          <p className='font-jet pt-5 text-yellow-400 uppercase text-sm '>{product.category}</p>
          <div className='w-full text-white mt-2 border-y-2 py-4 border-yellow-400/10'>
            <h1 className='font-subheading text-6xl font-bold flex items-center pr-15  text-gradient-gold uppercase'>{product.productName}</h1>

            <div className='w-full flex justify-between items-center '>

              <div className='w-fit flex gap-2 items-center pt-4'>
                <h4 className='font-subheading text-3xl font-medium'>₹ {product.price - product.discount}</h4>
                <p className='pt-3 line-through text-white/60 font-jet text-xs'>MRP: ₹ {product.price}</p>
              </div>

              <GoHeart className='size-6 mt-4 text-yellow-400/90 cursor-pointer' />

            </div>



          </div>

          <div className='w-full text-white/80 font-extralight tracking-wide mt-2 font-body text-sm border-b-2 py-4 border-yellow-400/10 '>
            <p>{product.shortDescription}</p>
          </div>

          <div className='w-full text-white/80 font-extralight tracking-wide mt-5 font-body text-sm flex gap-8 justify-between'>
            <h3 className='font-jet text-xs text-white/60 uppercase'>Family</h3>
            <p className='text-white capitalize'>{product?.gender} {product.category}</p>
          </div>
          <div className='w-full text-white/80 font-extralight tracking-wide mt-2 font-body text-sm  flex gap-8 justify-between'>
            <h3 className='font-jet text-xs text-white/60 uppercase'>Longevity </h3>
            <p className='text-white capitalize'>6-8 hours</p>
          </div>

          <div className='w-full h-fit flex items-center justify-between  mt-5 text-white/90 font-jet text-sm'>
            <h3>Addition Details</h3>
            {isAdditionalClicked ? <FaChevronUp className='cursor-pointer' onClick={() => setSsAdditionalClicked(false)} /> : <FaChevronDown className='cursor-pointer' onClick={() => setSsAdditionalClicked(true)} />}
          </div>

          {
            isAdditionalClicked && <div className='w-full text-white/80  tracking-wide mt-4 font-body text-sm  flex gap-8 justify-between'>
              <h3 className='font-jet text-xs text-white/60 uppercase'>Self Life</h3>
              <p className='text-white text-xs capitalize font-extralight'>12 months</p>
            </div>
          }
          {
            isAdditionalClicked && <div className='w-full text-white/80  tracking-wide mt-4 font-body text-sm  flex gap-8 justify-between'>
              <h3 className='font-jet text-xs text-white/60 uppercase'>Flavour</h3>
              <p className='text-white text-xs capitalize font-extralight'>No Flavour</p>
            </div>
          }
          {
            isAdditionalClicked && <div className='w-full text-white/80  tracking-wide mt-4 font-body text-sm  flex gap-8 justify-between'>
              <h3 className='font-jet text-xs text-white/60 uppercase'>Net Quantity</h3>
              <p className='text-white text-xs capitalize font-extralight'>1</p>
            </div>
          }



          <div className='w-full text-white/80 font-extralight tracking-wide mt-2  border-b-2 py-4 pb-8 border-yellow-400/10'>
            <h4 className='text-sm  uppercase font-jet font-medium text-yellow-400/80'>Size</h4>
            <div className='w-full flex gap-3 mt-3'>
              <div className='px-6 py-2 rounded text-xs text-white/70  font-jet border-2 border-yellow-300/80 w-fit bg-[#1D1B15] cursor-pointer'>{product.size}</div>
              <div className='px-6 py-2 rounded text-xs text-white/70  font-jet border border-yellow-400/10 w-fit hover:border-yellow-400/50 cursor-pointer'>50ml</div>
              <div className='px-6 py-2 rounded text-xs text-white/70  font-jet border border-yellow-400/10 w-fit hover:border-yellow-400/50 cursor-pointer'>75ml</div>
            </div>
          </div>


          {/* address modification for later */}
          <div className='w-full text-white/90 font-extralight tracking-wide  mt-2 pt-4 border-b-2 border-yellow-400/10'>
            <p className='font-body text-sm'>Expected Delivery Saturday, 4 July on your preferred address.</p>
            <p className='font-body text-sm'>Deliver to Delhi 110086</p>

            <button className='w-full bg-yellow-300/90 rounded flex gap-4 py-3 center text-[#131313] cursor-pointer hover:bg-yellow-300 mt-5'>
              <CiShoppingCart className='size-5' />
              <span className='text-sm font-jet uppercase font-light'>Add to cart</span>
            </button>
            <button className='w-full bg-orange-400/90 rounded flex gap-4 py-3 center text-[#131313] cursor-pointer hover:bg-yellow-300 mt-3'>
              <span className='text-sm font-jet uppercase font-light'>Buy Now</span>
              <TbArrowBigRightLine className='size-4' />
            </button>

            <button className='text-xs font-jet mt-4 text-yellow-300/90'>Add to Wishlist</button>


            <div className='w-full h-fit pt-5 mb-5'>
              <div className='w-full h-full flex items-center gap-2  py-3'>
                < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                <div className='text-white font-body pr-5'>
                  <h1 className='text-xs uppercase text-white/80 tracking-[0.175em]'>Anticipated Arrival</h1>
                  <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>June 29- 4 July 2026</p>
                </div>
              </div>
              <div className='w-full h-full flex items-center gap-2 py-3'>
                <BsBox className='size-9  text-yellow-500/70 p-2.5 rounded-full bg-[#222]/40 center' />
                <div className='text-white pr-5 font-body '>
                  <h1 className='text-xs uppercase text-white/80 tracking-[0.175em]'>Easy Return</h1>
                  <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>Hassle-free returns within 7 days</p>
                </div>
              </div>
              <div className='w-full h-full flex items-center gap-2 py-3'>
                <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                <div className='text-white pr-5 font-body '>
                  <h1 className='text-xs uppercase text-white/80 tracking-[0.175em]'>Secure Payment</h1>
                  <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
                </div>
              </div>
              <div className='w-full h-full flex items-center gap-2  py-3'>
                <RiCustomerService2Fill className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
                <div className='text-white pr-5 font-body '>
                  <h1 className='text-xs uppercase text-white/80 tracking-[0.175em]'>Customer Support</h1>
                  <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>24/7 dedicated support team</p>
                </div>
              </div>

            </div>
          </div>

          <div className='w-full h-fit  mt-5 text-white/90 font-jet text-sm pb-5 border-b-2 border-yellow-300/10'>
            <h3 className='pb-5'>Product Ratings & Reviews</h3>
            {/* rating */}
            <div className='w-full gap-4 flex justify-between items-center'>
              <div className="w-1/4 pb-2">
                <h3 className='text-5xl font-subheading text-green-400'>4.5*</h3>
                <p className='font-body font-extralight text-xs pr-10 mt-5 leading-normal'>2180 Ratings, 1680 Reviews</p>
              </div>
              <div className="w-3/4 ">
                <div className='text-[10px] mb-3 flex gap-2 items-center justify-between'>
                  <h1>Excellent</h1>
                  <div className='w-40 relative h-0.5 bg-white/30 '>
                    <div className='absolute h-full bg-green-400'
                      style={{ width: `${ratings.excellent / totalRating * 100}%` }}
                    ></div>
                  </div>

                </div>
                <div className='text-[10px] mb-3 flex gap-2 items-center justify-between'>
                  <h1 className='text-nowrap'>Very Good</h1>
                  <div className='w-40 relative h-0.5 bg-white/30 '>
                    <div className=' absolute h-full bg-green-400'
                      style={{ width: `${ratings.veryGood / totalRating * 100}%` }}
                    ></div>
                  </div>

                </div>
                <div className='text-[10px] mb-3 flex gap-2 items-center justify-between'>
                  <h1>Good</h1>
                  <div className='w-40 relative h-0.5 bg-white/30 '>
                    <div className='absolute h-full bg-yellow-400'
                      style={{ width: `${ratings.good / totalRating * 100}%` }}
                    ></div>
                  </div>

                </div>
                <div className='text-[10px] mb-3 flex gap-2 items-center justify-between'>
                  <h1>Average</h1>
                  <div className='w-40 relative h-0.5 bg-white/30 '>
                    <div className='absolute h-full bg-red-400'
                      style={{ width: `${ratings.average / totalRating * 100}%` }}
                    ></div>
                  </div>

                </div>
                <div className='text-xs flex gap-2 items-center justify-between'>
                  <h1>Poor</h1>
                  <div className='w-40 relative h-0.5 bg-white/30 '>
                    <div className='absolute h-full bg-red-400'
                      style={{ width: `${ratings.poor / totalRating * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full py-5 text-white'>
            {testimonials.slice(0, 3).map((review, i) => (
              <div className='w-full py-5 border-b-2 border-yellow-300/10' key={i}>
                <h3 className='flex gap-4 items-center'>
                  <FaUser className='size-3 text-yellow-300/30' />
                  <span className='font-jet text-xs text-yellow-300/80'>{review.name}</span>
                </h3>
                <div className='w-fit '>
                  <StarRating rating={review.stars} />
                </div>
                <p className='text-sm font-body font-extralight pt-1'>{review.feedback}</p>
              </div>
            ))}

            <button className='font-jet text-xs mt-5 text-yellow-300 cursor-pointer'>View all</button>
          </div>

          <div className='w-full pt-15 text-white'>
            <h1 className='uppercase font-subheading tracking-wide text-[5.5vw] lg:text-3xl pb-5'>Recommended Items</h1>
            <div className='w-full flex gap-3 lg:gap-5 max-lg:overflow-x-scroll pb-10'>
              {bestproducts.slice(0, 6).map((product, index) => (
                <ShopItemCard product={product} width={`w-8/10 `} />
              ))}
            </div>
          </div>
        </div>
        <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />
      </main>
    )
  }


  return (
    <main className='bg-[#131313] relative'>
      <Navbar additional={`lg:py-5! lg:px-35! bg-transparent! border-none ${isScrolled && 'backdrop-blur-md!'} z-50!`} />

      <img src={product.mainImage} className='absolute w-full h-[95vh] object-cover z-2 opacity-20' alt="" />
      <div className='w-full h-[95vh] bg-radial-[at_center_top] from-[#131313]/80 to-[#131313] absolute to-70% z-4'></div>


      <div className='w-full px-35 pt-35 pb-20 flex gap-20 relative z-10'>
        <div className="w-3/5">
          <img src={product.mainImage} className='w-full rounded' alt="" />
          <div className='w-full flex gap-4 mt-4'>
            {product.previewImages?.map((img, i) => (
              <img src={img} className='w-[18.2%] shrink-0 rounded' key={i} alt="" />
            ))}
          </div>
        </div>
        <div className='text-white w-2/5 py-20'>
          <div className='flex gap-4 items-center'>
            <div className='text-xs uppercase font-jet px-5 py-1 tracking-[0.175em] text-yellow-400/90 border'>Perfume</div>
            {product.bestseller && <p className='font-jet uppercase text-xs tracking-[0.125em] text-white/80'>best seller</p>}
          </div>

          <h1 className='pt-8 pb-3 text-7xl font-subheading font-bold  capitalize'>{product.productName}</h1>

          <p className='font-jet uppercase text-xs tracking-[0.125em] text-white/60'>By Aire Bliss</p>

          <div className='flex justify-start items-center gap-4 py-1 my-10'><StarRating rating={product.rating} extraClass={`lg:text-3xl!`} /> <p className='font-body uppercase text-base tracking-[0.125em] text-white/80 pt-1'>4.7 <span className='capitalize font-extralight'>(128 reviews)</span></p> </div>

          <div className='w-full flex gap-4 mt-15 items-end '>
            <h3 className='text-[5vw] lg:text-4xl font-subheading text-white/80 tracking-wide font-medium'><span className='font-subheading font-light'>₹</span>{(product.price - product.discount).toFixed(2)}</h3>

            <h3 className='text-[5vw] lg:text-sm font-body text-white/60 tracking-wide font-extralight line-through'><span className='font-subheading font-light'>₹</span> {(product.price).toFixed(2)}</h3>


          </div>

          <p className='font-jet text-sm  text-white/60 my-3' >Inclusive of all taxes</p>

          <h3 className='font-jet uppercase text-sm mt-10  tracking-[0.125em] text-white/60 font-semibold'>size</h3>
          <div className='w-full flex gap-3 mt-3'>
            <div className='px-10 py-2 rounded text-sm text-white/70  font-jet border-2 border-yellow-300/80 w-fit bg-[#1D1B15] cursor-pointer'>{product.size}</div>
            <div className='px-10 py-2 rounded text-sm text-white/70  font-jet border border-yellow-400/10 w-fit hover:border-yellow-400/50 cursor-pointer'>50ml</div>
            <div className='px-10 py-2 rounded text-sm text-white/70  font-jet border border-yellow-400/10 w-fit hover:border-yellow-400/50 cursor-pointer'>75ml</div>
          </div>

          <div className='w-full mt-10 flex gap-5'>
            <div className='py-4 px-5 border border-[#777]/20 flex gap-3 items-center w-fit rounded'>
              <FaMinus className='size-3 hover:text-yellow-400/90 text-white/60 cursor-pointer' />
              <p className='font-jet text-white/80 text-xs px-3'>1</p>
              <FaPlus className='size-3 hover:text-yellow-400/90 text-white/60 cursor-pointer' />
            </div>
            <button className='w-full bg-yellow-300/90 rounded flex gap-4 py-3 center text-[#131313] cursor-pointer hover:bg-yellow-300'>
              <CiShoppingCart className='size-5' />
              <span className='text-sm font-jet uppercase font-light'>Add to cart</span>
            </button>
          </div>

          <div className='w-full flex gap-5 mt-10 pt-5 border-t border-[#777]/20'>
            <div className='w-full h-full flex items-center gap-2  py-3'>
              < CiDeliveryTruck className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
              <div className='text-white font-body pr-5'>
                <h1 className='text-xs uppercase'>Free Shipping</h1>
                <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>On all orders over ₹ 999</p>
              </div>
            </div>
            <div className='w-full h-full flex items-center gap-2 py-3'>
              <CiLock className='size-9  text-yellow-500/70 p-2 rounded-full bg-[#222]/40 center' />
              <div className='text-white pr-5 font-body '>
                <h1 className='text-xs uppercase'>Secure Payment</h1>
                <p className='text-white/80 text-xs mt-1 font-light tracking-wide'>100% secure & trusted payment methods</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className='w-full flex gap-10 items-center px-35 mt-30 pb-20'>
        <div className="w-3/5 p-10 text-white">
          <h1 className='text-5xl italic capitalize font-subheading pb-10'>About This <br /> Fragrance</h1>

          <p className='whitespace-pre-line font-body tracking-wide text-base font-extralight'>{product.longDescription}</p>

          <div className='w-fit flex gap-3 mt-5'>
            {product.fragranceNotes.map((note, i) => (
              <div className='w-fit px-5 rounded-full  border border-white/10 text-white/60 text-xs font-jet py-1 ' key={i}>{note}</div>
            ))}
          </div>
        </div>
        <img src={product.previewImages[0]} className='w-2/5 rounded' alt="" />
      </div>

      <div className='w-full pt-15 px-35 text-white'>
        <h1 className='uppercase font-subheading tracking-wide text-[5.5vw] lg:text-3xl pb-5'>Recommended Items</h1>
        <div className='w-full flex gap-3 lg:gap-5 max-lg:overflow-scroll pb-10'>
          {bestproducts.slice(2, 6).map((product, index) => (
            <ShopItemCard product={product} width={`w-1/4 `} />
          ))}
        </div>
      </div>

      <div className='w-full py-20 px-35 mt-20 text-white/80 relative'>
        <h1 className='text-center font-subheading italic text-6xl pb-20'>
          Customer <br /> Reviews
        </h1>

        <div className='w-full flex h-fit gap-14 pb-40 overflow-x-hidden relative '>
          {testimonials.map((review, i) => (
            <div className={`w-150 p-10 bg-[#181818] shrink-0 h-fit border border-yellow-400/10 ${i % 2 !== 0 && "translate-y-30"} transition-smooth`}
              style={{ transform: `translateX(calc(-${current} * (600px + 56px)))` }}
            >
              <div className='w-fit'><StarRating rating={review.stars} extraClass={`text-3xl!`} /></div>
              <p className='pt-10 font-body italic text-3xl text-white/60 tracking-wide'>"{review.feedback}"</p>

              <h3 className='mt-30 font-jet text-yellow-300/80'>{review.name}</h3>
              <p className='font-jet text-white/60'>{review.place}</p>
            </div>
          ))}

        </div>
        <FaChevronLeft className={`absolute top-1/2 translate-y-1/2 left-0 translate-x-[350%] cursor-pointer ${current === 0 && "hidden"}`} onClick={() => setCurrent(current - 1)} />
        <FaChevronRight className={`absolute top-1/2 translate-y-1/2 right-0 -translate-x-[350%] cursor-pointer ${current === 4 && "hidden"}`} onClick={() => setCurrent(current + 1)} />
      </div>

      <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />
    </main>
  )
}

export default ProductPage