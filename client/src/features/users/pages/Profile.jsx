import React, { useState } from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import Navbar from '../../../components/Navbar'
import ProfileNav from '../component/ProfileNav'
import { IoHeartSharp, IoLocationSharp, IoMail } from "react-icons/io5";
import { HiMiniUser } from "react-icons/hi2";
import { CiCirclePlus, CiClock2, CiLock, CiMail } from 'react-icons/ci';
import { MdModeEdit, MdOutlineLocalPhone } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { FaBagShopping, FaBox, FaCalendar, FaCheck, FaChevronRight, FaPhone, FaUser } from 'react-icons/fa6';
import { PiGenderIntersex } from 'react-icons/pi';
import { VscWorkspaceTrusted, VscWorkspaceUntrusted } from "react-icons/vsc";
import { bestproducts } from '../../../utils';
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import Footer from '../../../components/Footer'



const Profile = () => {
  const { user, loading } = useAuth();

  const [current, setCurrent] = useState(0)
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const addresses = [
    {
      type: 'home',
      addressline1: "A-501, Lotus Apartments",
      addressline2: "Andheri West, Mumbai Maharastra",
      postalCode: '400058',
      phoneNo: '+91 9857612034'
    },
    {
      type: 'office',
      addressline1: "A-501, Lotus Apartments",
      addressline2: "Andheri West, Mumbai Maharastra",
      postalCode: '400058',
      phoneNo: '+91 9857612034'
    },
  ]

  const orders = [
    {
      orderID: '#AB00001',
      date: "20 May 2026",
      items: 3,
      amount: 1200,
      status: 'delivered'
    },
    {
      orderID: '#AB00002',
      date: "26 May 2026",
      items: 1,
      amount: 450,
      status: 'delivered'
    },
    {
      orderID: '#AB00003',
      date: "29 May 2026",
      items: 2,
      amount: 800,
      status: 'delivered'
    },
    {
      orderID: '#AB00004',
      date: "5 June 2026",
      items: 3,
      amount: 1200,
      status: 'delivered'
    },
  ]

  console.log(user)

  if (isMobile) {
    return (
      <main className='relative bg-black'>
        <Navbar />
        <div className='w-full px-3 h-fit pt-3'>

          {/* name-section */}
          <div className='border border-[#777]/20 w-full h-45 bg-[#0B0C0C] rounded flex mt-14 relative'>
            <div className='w-full relative z-5 h-full flex gap-4 px-4 items-center'>
              <div className='w-fit h-full flex items-center'>
                {user?.avatar ? (
                  <img src={user.avatar} className='size-28 object-cover ' alt="" />
                ) : (
                  <div className='size-18 rounded-full border-2 border-[#777]/50 center'>
                    <HiMiniUser className='size-14 text-[#777]/50' />
                  </div>
                )}
              </div>
              <div className='w-fit h-full py-4 text-white flex flex-col justify-center'>
                <p className='text-xs font-body font-extralight'>Welcome back...</p>
                <div className='font-heading text-[7vw] capitalize flex items-center gap-4'><p>{user?.name || "akash gupta"}</p></div>
                <div className='pb-6'>
                  <p className='flex gap-2 items-center'>
                    <CiMail />
                    <p className='font-body text-xs font-extralight'>{user?.email || "arjun.mehta@gmail.com"}</p>
                  </p>
                  <p className='flex gap-2 items-center pt-1'>
                    <MdOutlineLocalPhone />
                    <p className='font-body text-xs font-extralight'>{user?.phoneNo || "+91 92102XXXXX"}</p>
                  </p>
                </div>
                <p className='text-xs font-body font-extralight'>member since May 2023</p>
              </div>

            </div>
            <div className='size-full absolute z-3 bg-linear-to-r from-transparent to-black/60'>

            </div>
            <div className=' w-full ab h-full absolute z-2'>
              <img src="./../../../../profile/profile_bg.webp" className='size-full relative z-1 object-cover object-left' alt="" />
            </div>
          </div>

          <div className='w-full h-fit py-4 border border-[#777]/20 mt-3 bg-[#0B0C0C] rounded flex gap-2 justify-center'>
            <div className='flex w-fit h-full items-center flex-col border-r-2 border-[#777]/10 gap-1 px-2'>
              <IoHeartSharp className='size-8 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white'>
                <h1 className='font-body font-extralight text-[3vw] capitalize text-center py-1 leading-[90%]'>wishlist items</h1>
                <p className='font-body font-extralight text-xl text-center'>12</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center flex-col border-r-2 border-[#777]/10 gap-1 px-2'>
              <IoLocationSharp className='size-8 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white'>
                <h1 className='font-body font-extralight text-[3vw] capitalize text-center py-1 leading-[90%]'>Saved Address</h1>
                <p className='font-body font-extralight text-xl text-center'>3</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center flex-col border-r-2 border-[#777]/10 gap-1 px-2'>
              <FaBagShopping className='size-8 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white'>
                <h1 className='font-body font-extralight text-[3vw] capitalize text-center py-1 leading-[90%]'>cart items</h1>
                <p className='font-body font-extralight text-xl text-center'>2</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center flex-col gap-1 px-2'>
              <FaBox className='size-8 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white'>
                <h1 className='font-body font-extralight text-[3vw] capitalize text-center py-1 leading-[90%]'>Order placed</h1>
                <p className='font-body font-extralight text-xl text-center'>5</p>
              </div>
            </div>



          </div>

          <ProfileNav isMobile={isMobile} />

          <div className="w-full h-fit border rounded border-[#777]/20 px-4 py-3 bg-[#0B0C0C] my-3">
            <div className='w-full flex justify-between pb-2'>
              <h1 className='text-yellow-400/80 font-body text-lg'>Personal Information</h1>
              <div className='border px-2 py-1 border-yellow-400/50 flex gap-1 rounded items-center'>
                <MdModeEdit className='text-yellow-400/80 size-3' />
                <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>Edit</p>
              </div>
            </div>
            <div className='w-full py-1.5 flex border-b border-[#777]/10'>
              <div className='w-2/5 flex gap-2 items-center'>
                <div className='p-1.5 border border-yellow-400/40 rounded'>
                  <FaUser className='text-yellow-400/80 size-3' />
                </div>
                <p className='text-white text-sm font-body font-extralight'>Full Name</p>
              </div>
              <div className='w-3/5 text-white text-sm font-body font-extralight'>Arjun Mehta</div>
            </div>
            <div className='w-full py-1.5 flex border-b border-[#777]/10'>
              <div className='w-2/5 flex gap-2 items-center'>
                <div className='p-1.5 border border-yellow-400/40 rounded'>
                  <IoMail className='text-yellow-400/80 size-3' />
                </div>
                <p className='text-white text-sm font-body font-extralight'>Email Address</p>
              </div>
              <div className='w-3/5 text-white text-sm font-body font-extralight'>arjun.mehta@gmail.com</div>
            </div>
            <div className='w-full py-1.5 flex border-b border-[#777]/10'>
              <div className='w-2/5 flex gap-2 items-center'>
                <div className='p-1.5 border border-yellow-400/40 rounded'>
                  <FaPhone className='text-yellow-400/80 size-3' />
                </div>
                <p className='text-white text-sm font-body font-extralight'>Phone Number</p>
              </div>
              <div className='w-3/5 text-white text-sm font-body font-extralight'> - </div>
            </div>
            <div className='w-full py-1.5 flex border-b border-[#777]/10'>
              <div className='w-2/5 flex gap-2 items-center'>
                <div className='p-1.5 border border-yellow-400/40 rounded'>
                  <FaCalendar className='text-yellow-400/80 size-3' />
                </div>
                <p className='text-white text-sm font-body font-extralight'>Date of Birth</p>
              </div>
              <div className='w-3/5 text-white text-sm font-body font-extralight'>{user?.dateOfBirth || ' - '}</div>
            </div>
            <div className='w-full py-1.5 flex '>
              <div className='w-2/5 flex gap-2 items-center'>
                <div className='p-1.5 border border-yellow-400/40 rounded'>
                  <PiGenderIntersex className='text-yellow-400/80 size-3' />
                </div>
                <p className='text-white text-sm font-body font-extralight'>Gender</p>
              </div>
              <div className='w-3/5 text-white text-sm font-body font-extralight'>{user?.gender || ' - '}</div>
            </div>
          </div>

          <div className="w-full h-fit border rounded border-[#777]/20 bg-[#0B0C0C] px-4 py-3 mb-3">
            <div className='w-full flex justify-between pb-2'>
              <h1 className='text-yellow-400/80 font-body text-lg'>Security</h1>
            </div>

            {user?.isVerified === true ? (
              <div className='w-full flex justify-between items-center border-b border-[#777]/20 pb-2.5'>
                <div className='w-fit flex items-center gap-3'>
                  <VscWorkspaceTrusted className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Email Verification</h3>
                    <p className='text-xs font-body font-extralight'>Your email is verified</p>
                  </div>
                </div>
                <div className='p-0.5 border border-green-500/70 rounded-full'>
                  <FaCheck className='size-3 text-green-500/70' />
                </div>
              </div>
            ) : (
              <div className='w-full flex justify-between items-center border-b border-[#777]/20 pb-2.5'>
                <div className='w-fit flex items-center gap-3'>
                  <VscWorkspaceUntrusted className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Email Verification</h3>
                    <p className='text-xs font-body font-extralight'>Your email is not verified</p>
                  </div>
                </div>
                <div className='p-0.5 border border-red-500/70 rounded-full'>
                  <RxCross2 className='size-3 text-red-500/70' />
                </div>
              </div>
            )}

            <div className='w-full flex justify-between items-center border-b border-[#777]/20 py-2'>
              <div className='w-fit flex items-center gap-3'>
                <CiLock className='text-yellow-400/80 size-5' />
                <div className='text-white'>
                  <h3 className='text-sm font-body font-medium'>Change Password</h3>
                  <p className='text-xs font-body font-extralight'>Update your account password</p>
                </div>
              </div>
              <div className='p-0.5  rounded-full'>
                <FaChevronRight className='size-3 text-yellow-400/80' />
              </div>
            </div>

            <div className='w-full flex justify-between items-center border-b border-[#777]/20 py-2.5'>
              <div className='w-fit flex items-center gap-3'>
                <CiClock2 className='text-yellow-400/80 size-5' />
                <div className='text-white'>
                  <h3 className='text-sm font-body font-medium'>Last Login</h3>
                  <p className='text-xs font-body font-extralight'>{user?.login || 'today'}</p>
                </div>
              </div>
            </div>

            {user?.isVerified === true ? (
              <div className='w-full flex justify-between items-center py-2.5'>
                <div className='w-fit flex items-center gap-3'>
                  <VscWorkspaceTrusted className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Account Status</h3>
                  </div>
                </div>
                <div className=''>
                  <p className='text-xs font-body font-extralight text-green-500/70'>Active</p>
                </div>
              </div>
            ) : (
              <div className='w-full flex justify-between items-center  pt-2.5'>
                <div className='w-fit flex items-center gap-3'>
                  <VscWorkspaceUntrusted className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Account Status</h3>
                  </div>
                </div>
                <div className=''>
                  <p className='text-xs font-body font-extralight text-red-500/70'>In Active</p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-fit mb-3 rounded bg-[#0B0C0C] border border-[#777]/20 px-4 py-2">
            <div className='w-full flex justify-between pb-2 items-center'>
              <h1 className='text-yellow-400/80 font-body text-base'>Saved Addresses</h1>
              <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>View All</p>
            </div>
            <div className='w-full h-[calc(100%-32px)] flex gap-2'>
              {addresses.slice(0, 2).map(
                (address, index) => (
                  <div key={index} className='w-[37%] h-full border border-[#777]/20 py-2 px-3 rounded'>
                    <div className='w-full flex justify-between items-center'>
                      <h1 className='text-sm font-body text-white capitalize'>{address.type}</h1>
                      <BsThreeDotsVertical className='text-white size-3 cursor-pointer' />
                    </div>
                    <div className='w-full text-xs font-extralight font-body text-white capitalize py-2'>
                      {address.addressline1 + " " + address.addressline2 + " - " + address.postalCode}
                    </div>
                    <p className='w-full text-xs font-extralight font-body text-white capitalize py-1'>{address.phoneNo}</p>
                  </div>
                )
              )}
              <div className='w-[26%]  border-dashed border rounded border-yellow-400/20  center flex-col'>
                <CiCirclePlus className='text-yellow-400/80 size-8' />
                <p className='text-yellow-400/80 font-body text-xs mt-2 text-center'>Add New Address</p>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </main>
    )
  }
  return (
    <main className='bg-black h-screen!'>
      <Navbar additional={`py-2! px-5! border-[#777]/20! bg-[#0C0E0F]!`} />
      <div className='size-full pt-20 pb-4 px-4 flex gap-3'>
        <div className='w-75 h-full '>
          <ProfileNav />


          <div className='w-full h-81 bg-[#0C0E0F] relative border border-[#777]/30 mt-3 rounded overflow-hidden'>
            <img src="./../../../../profile/new_arrival.webp" className='size-full absolute object-cover object-right z-2' alt="" />

            <div className='size-full p-4 relative z-5 text-white flex flex-col justify-between'>
              <div className=''>
                <p className='text-lg font-body'>Indulge in</p>
                <h2 className='font-heading text-3xl pt-2 text-yellow-400/80'>Luxury</h2>
                <p className='text-sm font-body font-extralight mt-2'>Discover our new <br /> exclusive collection.</p>
              </div>
              <button className='py-2 uppercase text-xs font-body text-yellow-400/80 hover:text-white  px-4 border-2 border-yellow-400/80 hover:bg-yellow-400/80 rounded mt-25 cursor-pointer transition-all duration-400 w-fit'>
                shop now
              </button>
            </div>
          </div>
        </div>


        <div className='w-[calc(100%-300px)] h-full overflow-y-auto'>
          <div className='border border-[#777]/20 w-full h-45 bg-[#0B0C0C] rounded flex'>
            <div className='w-[calc(100%-536px)] h-full flex gap-8 px-4 items-center'>
              <div className='w-fit h-full flex items-center'>
                {user?.avatar ? (
                  <img src={user.avatar} className='size-28 object-cover ' alt="" />
                ) : (
                  <div className='size-32 rounded-full border-2 border-[#777]/30 center'>
                    <HiMiniUser className='size-28 text-[#777]/30' />
                  </div>
                )}
              </div>
              <div className='w-fit h-full py-4 text-white flex flex-col justify-center'>
                <p className='text-xs font-body font-extralight'>Welcome back...</p>
                <div className='font-heading text-3xl mt-2 capitalize flex items-center gap-4'><p>{user?.name || "akash gupta"}</p> <div >{user?.isVerified === true ? (
                  <div className='flex text-xs!'>
                    <IoIosCheckmarkCircle />
                    <p>Verified</p>
                  </div>
                ) : (
                  <div className='flex text-xs gap-1 items-center font-body font-extralight px-3 py-1 bg-red-500/10 rounded-full border border-red-500 text-red-500'>
                    <RxCross2 />
                    <p className=''>Not Verified</p>
                  </div>
                )}</div></div>
                <div className='py-2'>
                  <p className='flex gap-2 items-center'>
                    <CiMail />
                    <p className='font-body text-sm font-extralight'>{user?.email || "arjun.mehta@gmail.com"}</p>
                  </p>
                  <p className='flex gap-2 items-center pt-1'>
                    <MdOutlineLocalPhone />
                    <p className='font-body text-sm font-extralight'>{user?.phoneNo || "+91 92102XXXXX"}</p>
                  </p>
                </div>
                <p className='text-xs font-body font-extralight'>member since May 2023</p>
              </div>

            </div>

            <div className='relative w-134 h-full'>
              <img src="./../../../../profile/profile_bg.webp" className='size-full relative z-1 object-cover' alt="" />
              <div className='w-134 h-full bg-radial from-transparent to-[#0B0C0C] absolute z-5 top-0 from-50%'>

              </div>
            </div>
          </div>
          <div className='w-full h-fit py-4 px-5 border border-[#777]/20 mt-3 bg-[#0B0C0C] rounded flex gap-5 justify-center'>
            <div className='flex w-fit h-full items-center border-r-2 border-[#777]/10 px-5 gap-4'>
              <IoHeartSharp className='size-10 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white pr-3'>
                <h1 className='font-body font-extralight text-sm capitalize'>wishlist items</h1>
                <p className='font-body font-extralight text-2xl'>12</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center border-r-2 border-[#777]/10 px-5 gap-4'>
              <IoLocationSharp className='size-10 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white pr-3'>
                <h1 className='font-body font-extralight text-sm capitalize'>Saved Address</h1>
                <p className='font-body font-extralight text-2xl'>3</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center border-r-2 border-[#777]/10 px-5 gap-4'>
              <FaBagShopping className='size-10 text-yellow-400/80 p-2 border border-yellow-400/80 rounded-full' />
              <div className='text-white pr-3'>
                <h1 className='font-body font-extralight text-sm capitalize'>cart items</h1>
                <p className='font-body font-extralight text-2xl'>12</p>
              </div>
            </div>
            <div className='flex w-fit h-full items-center px-5 gap-4'>
              <div className="size-fit p-3 border border-yellow-400/80 rounded-full">
                <FaBox className='size-5 text-yellow-400/80 ' />
              </div>
              <div className='text-white pr-3'>
                <h1 className='font-body font-extralight text-sm capitalize'>Order placed</h1>
                <p className='font-body font-extralight text-2xl'>12</p>
              </div>
            </div>

          </div>
          <div className='w-full flex gap-3 h-65 rounded mt-3'>

            <div className="w-[35%] h-full border rounded border-[#777]/20 px-4 py-3 bg-[#0B0C0C]">
              <div className='w-full flex justify-between pb-2'>
                <h1 className='text-yellow-400/80 font-body text-lg'>Personal Information</h1>
                <div className='border px-2 py-1 border-yellow-400/50 flex gap-1 rounded items-center'>
                  <MdModeEdit className='text-yellow-400/80 size-3' />
                  <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>Edit</p>
                </div>
              </div>
              <div className='w-full py-1.5 flex border-b border-[#777]/10'>
                <div className='w-2/5 flex gap-2 items-center'>
                  <div className='p-1.5 border border-yellow-400/40 rounded'>
                    <FaUser className='text-yellow-400/80 size-3' />
                  </div>
                  <p className='text-white text-sm font-body font-extralight'>Full Name</p>
                </div>
                <div className='w-3/5 text-white text-sm font-body font-extralight'>Arjun Mehta</div>
              </div>
              <div className='w-full py-1.5 flex border-b border-[#777]/10'>
                <div className='w-2/5 flex gap-2 items-center'>
                  <div className='p-1.5 border border-yellow-400/40 rounded'>
                    <IoMail className='text-yellow-400/80 size-3' />
                  </div>
                  <p className='text-white text-sm font-body font-extralight'>Email Address</p>
                </div>
                <div className='w-3/5 text-white text-sm font-body font-extralight'>arjun.mehta@gmail.com</div>
              </div>
              <div className='w-full py-1.5 flex border-b border-[#777]/10'>
                <div className='w-2/5 flex gap-2 items-center'>
                  <div className='p-1.5 border border-yellow-400/40 rounded'>
                    <FaPhone className='text-yellow-400/80 size-3' />
                  </div>
                  <p className='text-white text-sm font-body font-extralight'>Phone Number</p>
                </div>
                <div className='w-3/5 text-white text-sm font-body font-extralight'> - </div>
              </div>
              <div className='w-full py-1.5 flex border-b border-[#777]/10'>
                <div className='w-2/5 flex gap-2 items-center'>
                  <div className='p-1.5 border border-yellow-400/40 rounded'>
                    <FaCalendar className='text-yellow-400/80 size-3' />
                  </div>
                  <p className='text-white text-sm font-body font-extralight'>Date of Birth</p>
                </div>
                <div className='w-3/5 text-white text-sm font-body font-extralight'>{user?.dateOfBirth || ' - '}</div>
              </div>
              <div className='w-full py-1.5 flex '>
                <div className='w-2/5 flex gap-2 items-center'>
                  <div className='p-1.5 border border-yellow-400/40 rounded'>
                    <PiGenderIntersex className='text-yellow-400/80 size-3' />
                  </div>
                  <p className='text-white text-sm font-body font-extralight'>Gender</p>
                </div>
                <div className='w-3/5 text-white text-sm font-body font-extralight'>{user?.gender || ' - '}</div>
              </div>
            </div>

            <div className="w-1/4 h-full border rounded border-[#777]/20 bg-[#0B0C0C] px-4 py-3">
              <div className='w-full flex justify-between pb-2'>
                <h1 className='text-yellow-400/80 font-body text-lg'>Security</h1>
              </div>

              {user?.isVerified === true ? (
                <div className='w-full flex justify-between items-center border-b border-[#777]/20 pb-2.5'>
                  <div className='w-fit flex items-center gap-3'>
                    <VscWorkspaceTrusted className='text-yellow-400/80 size-5' />
                    <div className='text-white'>
                      <h3 className='text-sm font-body font-medium'>Email Verification</h3>
                      <p className='text-xs font-body font-extralight'>Your email is verified</p>
                    </div>
                  </div>
                  <div className='p-0.5 border border-green-500/70 rounded-full'>
                    <FaCheck className='size-3 text-green-500/70' />
                  </div>
                </div>
              ) : (
                <div className='w-full flex justify-between items-center border-b border-[#777]/20 pb-2.5'>
                  <div className='w-fit flex items-center gap-3'>
                    <VscWorkspaceUntrusted className='text-yellow-400/80 size-5' />
                    <div className='text-white'>
                      <h3 className='text-sm font-body font-medium'>Email Verification</h3>
                      <p className='text-xs font-body font-extralight'>Your email is not verified</p>
                    </div>
                  </div>
                  <div className='p-0.5 border border-red-500/70 rounded-full'>
                    <RxCross2 className='size-3 text-red-500/70' />
                  </div>
                </div>
              )}

              <div className='w-full flex justify-between items-center border-b border-[#777]/20 py-2'>
                <div className='w-fit flex items-center gap-3'>
                  <CiLock className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Change Password</h3>
                    <p className='text-xs font-body font-extralight'>Update your account password</p>
                  </div>
                </div>
                <div className='p-0.5  rounded-full'>
                  <FaChevronRight className='size-3 text-yellow-400/80' />
                </div>
              </div>

              <div className='w-full flex justify-between items-center border-b border-[#777]/20 py-2.5'>
                <div className='w-fit flex items-center gap-3'>
                  <CiClock2 className='text-yellow-400/80 size-5' />
                  <div className='text-white'>
                    <h3 className='text-sm font-body font-medium'>Last Login</h3>
                    <p className='text-xs font-body font-extralight'>{user?.login || 'today'}</p>
                  </div>
                </div>
              </div>

              {user?.isVerified === true ? (
                <div className='w-full flex justify-between items-center py-2.5'>
                  <div className='w-fit flex items-center gap-3'>
                    <VscWorkspaceTrusted className='text-yellow-400/80 size-5' />
                    <div className='text-white'>
                      <h3 className='text-sm font-body font-medium'>Account Status</h3>
                    </div>
                  </div>
                  <div className=''>
                    <p className='text-xs font-body font-extralight text-green-500/70'>Active</p>
                  </div>
                </div>
              ) : (
                <div className='w-full flex justify-between items-center  pt-2.5'>
                  <div className='w-fit flex items-center gap-3'>
                    <VscWorkspaceUntrusted className='text-yellow-400/80 size-5' />
                    <div className='text-white'>
                      <h3 className='text-sm font-body font-medium'>Account Status</h3>
                    </div>
                  </div>
                  <div className=''>
                    <p className='text-xs font-body font-extralight text-red-500/70'>In Active</p>
                  </div>
                </div>
              )}
            </div>

            {/* wishlist */}
            <div className="w-2/5 h-full border rounded border-[#777]/20 bg-[#0B0C0C] px-4 py-3">
              <div className='w-full flex justify-between pb-2 items-center'>
                <h1 className='text-yellow-400/80 font-body text-lg'>Wishlist ({12})</h1>
                <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>View All</p>
              </div>
              <div className='w-full flex gap-2 h-40 mt-2 overflow-hidden'>
                {
                  bestproducts.slice(0, 5).map((product, index) => (
                    <div className='w-35.75 h-full rounded overflow-hidden relative shrink-0 transition-all duration-500 ease-in-out'
                      style={{ transform: `translateX(calc(-${current} * (143px + 8px)))` }}>
                      <img src={`./../../../.${product.img}`} className='size-full object-cover relative z-2 ' alt="" />
                      <div className='absolute z-5 bottom-0 left-0 w-full '>
                        <h3 className='text-base capitalize font-body text-center text-white'>{product.name}</h3>
                        <p className='text-sm capitalize font-body text-center text-white pb-1'>&#8377; {product.price}</p>
                      </div>
                      <div className='absolute size-fit top-0 right-0 z-5 translate-y-2/10 -translate-x-2/10'>
                        <IoHeartSharp className='text-yellow-300/80 size-6 shadow-md' />
                      </div>
                      <div className='absolute z-4 size-full top-0 left-0 bg-linear-to-b from-transparent to-black/40'></div>
                    </div>
                  ))
                }

              </div>
              <div className='w-full flex gap-2 mt-4 justify-center'>
                {Array.from({ length: 3 }).map((_, index) => (
                  <div className={`size-2 ${current === index ? 'bg-yellow-400/70' : 'bg-white/10'} rounded-full cursor-pointer -translate-x-${current * 147}}`} onClick={() => setCurrent(index)}></div>
                ))}
              </div>
            </div>

          </div>

          <div className='w-full h-45 mt-3 flex gap-3'>
            {/* Addresses */}
            <div className="w-1/2 h-full rounded bg-[#0B0C0C] border border-[#777]/20 px-4 py-2">
              <div className='w-full flex justify-between pb-2 items-center'>
                <h1 className='text-yellow-400/80 font-body text-base'>Saved Addresses</h1>
                <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>View All</p>
              </div>
              <div className='w-full h-[calc(100%-32px)] flex gap-2'>
                {addresses.slice(0, 2).map(
                  (address, index) => (
                    <div key={index} className='w-[37%] h-full border border-[#777]/20 py-2 px-3 rounded'>
                      <div className='w-full flex justify-between items-center'>
                        <h1 className='text-sm font-body text-white capitalize'>{address.type}</h1>
                        <BsThreeDotsVertical className='text-white size-3 cursor-pointer' />
                      </div>
                      <div className='w-full text-xs font-extralight font-body text-white capitalize py-2'>
                        {address.addressline1 + " " + address.addressline2 + " - " + address.postalCode}
                      </div>
                      <p className='w-full text-xs font-extralight font-body text-white capitalize py-1'>{address.phoneNo}</p>
                    </div>
                  )
                )}
                <div className='w-[26%] border-dashed border rounded border-yellow-400/20 h-full center flex-col'>
                  <CiCirclePlus className='text-yellow-400/80 size-8' />
                  <p className='text-yellow-400/80 font-body text-xs mt-2'>Add New Address</p>
                </div>
              </div>
            </div>
            {/* orders */}
            <div className="w-1/2 h-full rounded bg-[#0B0C0C] border border-[#777]/20 px-4 py-2">
              <div className='w-full flex justify-between pb-2 items-center'>
                <h1 className='text-yellow-400/80 font-body text-base'>Recent Orders</h1>
                <p className='text-yellow-400/80 text-xs font-body  tracking-wider'>View All</p>
              </div>
              <div className='w-full flex gap-2 items-center pb-2 border-b border-[#777]/20'>
                <div className="w-1/5 text-sm font-body font-medium text-white/60 ">
                  Order ID
                </div>
                <div className="w-1/5 text-sm font-body font-medium text-white/60 ">
                  Date
                </div>
                <div className="w-1/5 text-sm font-body font-medium text-white/60 ">
                  Items
                </div>
                <div className="w-1/5 text-sm font-body font-medium text-white/60 ">
                  Amount
                </div>
                <div className="w-1/5 text-sm font-body font-medium text-white/60 ">
                  Status
                </div>
              </div>
              {orders.slice(0, 3).map((order, index) => (
                <div className={`w-full flex gap-2 items-center py-1.5 ${index === 2 ? '' : 'border-b border-[#777]/20'}`}>
                  <div className="w-1/5 text-xs font-body font-extralight text-white ">
                    {order.orderID}
                  </div>
                  <div className="w-1/5 text-xs font-body font-extralight text-white/60 ">
                    {order.date}
                  </div>
                  <div className="w-1/5 text-xs font-body font-extralight text-white/60 ">
                    {order.items}
                  </div>
                  <div className="w-1/5 text-xs font-body font-extralight text-white/60 ">
                    &#8377; {order.amount}
                  </div>
                  <div className={`w-1/5 text-[10px] font-body font-extralight text-white/60 capitalize flex items-center justify-between pr-2`}>
                    <div className={`border w-fit rounded-full ${order.status === 'delivered' ? 'text-green-400 border-green-400' : ''} py-px px-2`}>
                      {order.status}
                    </div>
                    <FaChevronRight className='text-white size-3 cursor-pointer hover:text-yellow-400' />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Profile