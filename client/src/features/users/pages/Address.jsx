import React, { useEffect, useState } from 'react'
import Footer from '../../../components/Footer';
import { GrSecure } from "react-icons/gr";
import { GoPlus, GoShieldLock } from 'react-icons/go';
import { useUserData } from '../hooks/useUserData';
import Loader from '../../../components/Loader'
import AddressForm from '../component/AddressForm';
import toast from 'react-hot-toast';

const Address = () => {

    const { addresses, addressLoading, defaultAddress, handleGetAddress, handleAddAddress, handleUpdateAddress, handleDeleteAddress, handleGetDefaultAddress, handleSetDefaultAddress } = useUserData()

    useEffect(() => {
        handleGetAddress();
    }, [])

    const [edit, setEdit] = useState(false);

    const [editId, setEditId] = useState('');

    const handleEdit = (id) => {
        setEditId(id)
        setEdit(true)
    }

    const [isFormClick, setIsFormClick] = useState(false)

    const handleRemovebtn = async (addressId) => {
        try {
            const data = await handleDeleteAddress(addressId);
            if (!data.success) {
                toast.error(data.message);
                throw new Error(data.message);
            }
            toast.success(data.message);
        } catch (error) {
            toast.error('Failed to remove an Address. Please try again later.');
            console.error('Error removing an Address:', error);
        }
    }

    if(addressLoading) {
        return (
            <div className='w-full h-screen center bg-[#131313]'>
                <Loader />
            </div>
        )
    }

    if(addresses.length === 0) {
        return (
            <main className='bg-[#030303] max-lg:overflow-x-hidden'>
                { isFormClick && <AddressForm setIsFormClick={setIsFormClick} />}
                <div className='w-full h-screen center flex-col pb-30'>
                    <div className='size-125 relative'>
                        <img src="../../../../address/NAFG.webp" className='size-full' alt="" />
                        <div className="absolute size-full top-0 left-0 bg-radial from-transparent to-[#030303]"></div>
                    </div>
                    <h1 className='text-white/80 font-subheading italic text-3xl text-center'>Where Should We Send <br/> Your Orders?</h1>

                    <button className='w-fit bg-yellow-400 text-[#080808] text-[10px] md:text-xs uppercase tracking-[0.255em] font-body mt-10 lg:mt-10 px-10 py-3 hover:bg-yellow-400/90 cursor-pointer flex gap-3 items-center' onClick={() => setIsFormClick(true)}><GoPlus /><span className='text-[10px] '>Add Address</span></button>
                </div>
            </main>
        )
    }



    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#2a2a2a_0%,transparent_70%)]'>
            { isFormClick && <AddressForm setIsFormClick={setIsFormClick} />}
            { edit && <AddressForm address={addresses.find(addr => addr._id.toString() === editId)} edit={edit} setIsFormClick={setEdit} />}

            <button className='fixed bottom-0 right-0 z-30 flex items-center p-3 lg:px-8 lg:py-5 bg-linear-to-b -translate-y-full lg:-translate-y-8/10 -translate-x-8/10 lg:-translate-x-2/10 from-[#F2CA50] to-[#f7cc4b] gap-5 rounded-full text-[#222] group cursor-pointer hover:shadow-[0_0_40px_rgba(242,202,80,0.4)]' onClick={() => setIsFormClick(true)}>
                <GoPlus className='size-5 group-hover:rotate-90 transition-smooth'/>
                <span className='font-light uppercase font-body text-xs tracking-[0.175em] max-lg:hidden'>add new residence</span>
            </button>

            <section className='w-full pt-24 lg:pt-44 h-fit! pb-30 px-5'>
                <p className='uppercase text-center text-primary text-xs font-body  tracking-[0.375em] font-bold'>for future arrivals</p>

                <h1 className='text-center text-white/90 text-7xl max-lg:px-10 lg:text-8xl font-subheading italic capitalize mt-5 '>where luxury  <br /> finds you</h1>

                <p className='w-full lg:w-180 text-center mx-auto text-base px-5 lg:text-lg font-body font-light mt-10 text-white/50 tracking-wider'>A collection of destinations chosen for effortless deliveries, ensuring every Aire Bliss creation arrives exactly where it belongs</p>


                {/* address */}
                <div className='mt-25 w-full py-10 lg:px-30'>
                    <div className='w-full flex flex-wrap gap-10 justify-end'>
                        { addresses.map((address, index) => (
                            <div className={`w-9/10 lg:w-[48%] flex flex-col ${index % 2 === 0 ? 'border-l-2 items-start' : 'border-r-2 items-end'}  border-white/10 p-5 lg:p-10 text-white bg-[#131313]/50 backdrop-blur-sm group hover:border-yellow-400/70 transition-smooth max-lg:grow relative`} key={address._id}>
                                <p className={`absolute top-0 translate-y-1/2 -translate-x-1/10 right-0 ${!address.isDefault && 'hidden'} px-5 py-2 text-[8px] font-body font-extralight uppercase tracking-widest text-yellow-300 border-2 bg-yellow-300/10 border-yellow-300/30`}>default address</p>
                                <h1 className='text-[40px] font-subheading italic group-hover:text-yellow-400/90 transition-smooth'>{address.addressType}</h1>

                                <div className='w-15 h-px my-3 bg-white/20'></div>

                                <p className='text-sm uppercase font-body tracking-[0.175em] font-medium text-white/90 mt-3 pb-5'>{address.name}</p>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.addressLine1} {address.addressLine2}, {address.landmark}   
                                </address>


                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.city},  {address.state} - {address.pincode}   
                                </address>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.country} 
                                </address>
                            
                                <p className='py-5 font-body font-light tracking-wide text-yellow-400/50'>{address.phoneNumber}</p>

                                <div className='w-fit flex gap-5 items-center mt-15'>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth  group-hover:opacity-100 lg:opacity-0' onClick={() => handleEdit(address._id)}>Revise</button>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth text-white/60 group-hover:opacity-100 lg:opacity-0' onClick={() => handleRemovebtn(address._id)}>erase</button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className='w-full px-5 lg:px-30 pt-20'>
                    <div className='w-full lg:w-200 mx-auto py-8 px-5 lg:px-25 font-light border-b-2 flex gap-3 lg:gap-10 items-center bg-[#0E0E0E]/40 border-yellow-400/80 max-lg:flex-col'>
                        <GoShieldLock className='size-18 text-yellow-400/90'/>
                        <div className=''>
                            <h1 className='text-2xl font-body text-yellow-400/90 font-medium tracking-wider  max-lg:text-center'>Your addresses are secure</h1>

                            <p className='text-white/80 pt-2 font-body max-lg:text-sm max-lg:font-extralight tracking-widest max-lg:text-center'>We utilize advanced encryption protocols to ensure your personal information remains entirely confidetial.</p>
                        </div>
                    </div>
                </div>
            </section>



        </main>
    )
}

export default Address