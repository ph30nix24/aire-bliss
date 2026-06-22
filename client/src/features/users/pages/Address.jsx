import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useWindowScroll } from 'react-use';
import Footer from '../../../components/Footer';
import { GrSecure } from "react-icons/gr";
import { GoPlus, GoShieldLock } from 'react-icons/go';

const Address = () => {

    const { y: currentY } = useWindowScroll();

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsScrolled(currentY > 100)
    }, [currentY])


    const addresses = [
        {
            "_id": "addr_001",
            "title": "The Penthouse",
            "addressType": "Home",
            "isDefault": true,
            "fullName": "Arjun Sharma",
            "phoneNumber": "+91 98765 43210",
            "addressLine1": "123, Green Villa Apartments",
            "addressLine2": "MG Road, Sector 15",
            "landmark": "Near City Mall",
            "city": "Mumbai",
            "state": "Maharashtra",
            "postalCode": "400001",
            "country": "India"
        },
        {
            "_id": "addr_002",
            "title": "The Studio",
            "addressType": "Work",
            "isDefault": false,
            "fullName": "Arjun Sharma",
            "phoneNumber": "+91 98765 43210",
            "addressLine1": "Infinity Corporate Park",
            "addressLine2": "Tower B, 5th Floor, Link Road",
            "landmark": "Andheri West",
            "city": "Mumbai",
            "state": "Maharashtra",
            "postalCode": "400053",
            "country": "India"
        },
        {
            "_id": "addr_003",
            "title": "The Summer Estate",
            "addressType": "Other",
            "isDefault": false,
            "fullName": "Arjun Sharma",
            "phoneNumber": "+91 98765 43210",
            "addressLine1": "Flat 8, Shanti Residency",
            "addressLine2": "12th Cross",
            "landmark": "Jayanagar 4th Block",
            "city": "Bengaluru",
            "state": "Karnataka",
            "postalCode": "560041",
            "country": "India"
        }
    ]


    return (
        <main className='bg-[#131313] bg-[radial-gradient(circle_at_50%_0%,#2a2a2a_0%,transparent_70%)]'>
            <Navbar additional={`bg-transparent! border-none! ${isScrolled && 'backdrop-blur-md!'}`} />


            <button className='fixed bottom-0 right-0 z-30 flex items-center px-8 py-5 bg-linear-to-b -translate-y-8/10 -translate-x-2/10 from-[#F2CA50] to-[#f7cc4b] gap-5 rounded-full text-[#222] group cursor-pointer hover:shadow-[0_0_40px_rgba(242,202,80,0.4)]'>
                <GoPlus className='size-5 group-hover:rotate-90 transition-smooth'/>
                <span className='font-light uppercase font-body text-xs tracking-[0.175em]'>add new residence</span>
            </button>

            <section className='w-full pt-44 h-fit! pb-30'>
                <p className='uppercase text-center text-primary text-xs font-body  tracking-[0.375em] font-bold'>for future arrivals</p>

                <h1 className='text-center text-white/90 text-8xl font-subheading italic capitalize mt-5 '>where luxury  <br /> finds you</h1>

                <p className='w-180 text-center mx-auto text-lg font-body font-light mt-10 text-white/50 tracking-wider'>A collection of destinations chosen for effortless deliveries, ensuring every Aire Bliss creation arrives exactly where it belongs</p>


                {/* address */}
                <div className='mt-25 w-full py-10 px-30'>
                    <div className='w-full flex flex-wrap gap-10 justify-end'>
                        { addresses.map((address, index) => (
                            <div className={`w-[48%] flex flex-col ${index % 2 === 0 ? 'border-l-2 items-start' : 'border-r-2 items-end'}  border-white/10 py-10 px-10 text-white bg-[#131313]/50 backdrop-blur-sm group hover:border-yellow-400/70 transition-smooth`}>
                                <h1 className='text-[40px] font-subheading italic group-hover:text-yellow-400/90 transition-smooth'>{address.title}</h1>

                                <div className='w-15 h-px my-3 bg-white/20'></div>

                                <p className='text-sm uppercase font-body tracking-[0.175em] font-medium text-white/90 mt-3 pb-5'>{address.fullName}</p>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.addressLine1} {address.addressLine2} {address.landmark}   
                                </address>


                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.city},  {address.state} - {address.postalCode}   
                                </address>

                                <address className={`py-0.5 leading-relaxed font-body font-light text-[#d6c9ac] not-italic text-[15px] tracking-wider w-80 ${index % 2 === 0 ? 'text-start' : 'text-end'}`}>{address.country} 
                                </address>
                            
                                <p className='py-5 font-body font-light tracking-wide text-yellow-400/50'>{address.phoneNumber}</p>

                                <div className='w-fit flex gap-5 items-center mt-15'>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth  group-hover:opacity-100 opacity-0'>Revise</button>
                                    <button className='uppercase text-xs font-body tracking-[0.255em] font-light py-1 cursor-pointer hover:border-b hover:text-yellow-400/90 border-yellow-400/90 transition-smooth text-white/60 group-hover:opacity-100 opacity-0'>erase</button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                

                <div className='w-full px-30 pt-20'>
                    <div className='w-200 mx-auto py-8 px-25 font-light border-b-2 flex gap-10 items-center bg-[#0E0E0E]/80 border-yellow-400/80'>
                        <GoShieldLock className='size-18 text-yellow-400/90'/>
                        <div className=''>
                            <h1 className='text-2xl font-body text-yellow-400/90 font-medium tracking-wider'>Your addresses are secure</h1>

                            <p className='text-white/80 pt-2 font-body tracking-widest'>We utilize advanced encryption protocols to ensure your personal information remains entirely confidetial.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <UserFooter /> */}
            <Footer background={`bg-[#111]!`} paddingY={`pt-30!`} overlay={`to-[#111]!`} toOver={`to-75%!`} translateY={`translate-y-2/10!`} />

        </main>
    )
}

export default Address