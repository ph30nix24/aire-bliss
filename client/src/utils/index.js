import { AiOutlineHome } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { TbPerfume } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";

export const mobileNavLinks = [
    {
        id: 1,
        link: "/",
        name: "home",
        icon: AiOutlineHome,
    },
    {
        id: 3,
        link: "/shop",
        name: "collection",
        icon: TbPerfume,
    },
    {
        id: 4,
        link: "/about-us",
        name: "about us",
        icon: FaRegUser,
    },
    {
        id: 5,
        link: "/contact-us",
        name: "contact us",
        icon: MdOutlineCall,
    },
]


export const bestproducts = [
    {
        id: 1,
        name: 'gucci flora',
        tagline: 'Elegant blossoms in golden sunlight',
        price: 399,
        reviews: 90,
        rating: 4,
        img: './best-sellers/gucci_flora.webp'
    },
    {
        id: 2,
        name: 'pink chiffon',
        tagline: 'Delicate beauty, modern artistic strength',
        price: 459,
        reviews: 180,
        rating: 4.7,
        img: './best-sellers/pink_cheffron.webp'
    },
    {
        id: 3,
        name: 'white oud',
        tagline: 'Timeless luxury, pure bottled elegance',
        price: 429,
        reviews: 90,
        rating: 4,
        img: './best-sellers/white_oud.webp'
    },
    {
        id: 4,
        name: 'tamdao',
        tagline: 'Sacred woody notes, serene soul',
        price: 459,
        reviews: 90,
        rating: 4.7,
        img: './best-sellers/tamdao.webp'
    },
    {
        id: 5,
        name: 'oud malaki',
        tagline: 'Unleash your dark, majestic power',
        price: 399,
        reviews: 140,
        rating: 4.8,
        img: './best-sellers/oud_malaki.webp'
    },
    {
        id: 6,
        name: 'vip men',
        tagline: 'Command respect, define your legacy',
        price: 499,
        reviews: 120,
        rating: 4.5,
        img: './best-sellers/vip_men.webp'
    },
]

import { PiCrownThin } from "react-icons/pi";
import { PiFlowerLotusThin } from "react-icons/pi";
import { PiHouseLine } from "react-icons/pi";

export const categories = [
    {
        id: 1,
        type: "men",
        discription: "Bold. Mysterious. Powerful.",
        img: './collection/mens_collection.webp',
        mobimg: './collection/men_mobile.webp',
        icon: PiCrownThin,
        btn: "Shop Men"
    },
    {
        id: 2,
        type: "women",
        discription: "Elegant. Feminine. Unforgettable.",
        img: './collection/womens_collection.webp',
        mobimg: './collection/women_mobile.webp',
        icon: PiFlowerLotusThin,
        btn: "Shop Women"
    },
    {
        id: 3,
        type: "room fragrance",
        discription: "Elevate your space. Every day.",
        img: './collection/room_fragrance.webp',
        mobimg: './collection/room_mobile.webp',
        icon: PiHouseLine,
        btn: "Shop Room Fragrances"
    },
]

export const testimonials = [
    {
        id: 1,
        name: "Aisha Khan",
        feedback: "Pink Chiffon Aire Bliss is pure elegance in a bottle. The delicate floral notes are sophisticated and airy, making it my absolute favorite for daily wear.",
        img: './review/pink_chiffon.webp',
        stars: 5,
        place: "Mumbai, India"
    },
    {
        id: 2,
        name: "Rohan Mehta",
        feedback: "Smoke Whisky Aire Bliss is incredibly bold and charismatic. The rich, woody depth creates a powerful presence that feels timeless, mysterious, and undeniably high-end. Pure confidence.",
        img: './review/whisky_smoke.webp',
        stars: 5,
        place: "Delhi, India"
    },
    {
        id: 3,
        name: "Akash Verma",
        feedback: "White Oud Aire Bliss is the definition of timeless luxury. Its smooth, woody notes provide a regal elegance that lingers beautifully, making every spray feel extraordinary.",
        img: './review/white_oud.webp',
        stars: 4,
        place: "Bangalore, India"
    },
    {
        id: 4,
        name: "Vidya Sharma",
        feedback: "Bliss Flora Aire Bliss is a stunning, romantic escape. The vibrant floral essence feels incredibly feminine and enchanting, leaving a graceful, captivating trail wherever I go.",
        img: './review/bliss_flora.webp',
        stars: 5,
        place: "Delhi, India"
    },
    {
        id: 5,
        name: "Sneha Patel",
        feedback: "This Aire Bliss collection is spectacular. From the soothing Lavender Luxe to the gourmand Sweet Vanilla and exotic Dream Flower, these mists offer the perfect aromatic escape.",
        img: './review/fragrances.webp',
        stars: 4,
        place: "Kolkata, India"
    },
    {
        id: 6,
        name: "Arjun Singh",
        feedback: "Oud Malaki Aire Bliss is a masterpiece of bold sophistication. The rich, smoky oud notes create an aura of power and mystery. A must-have for anyone who wants to make a statement.",
        img: './review/oud_malaki.webp',
        stars: 5,
        place: "Mumbai, India"
    }

]

export const footerDivs = [
    {
        id: 1,
        title: "Shop",
        links: ["All Products", "Mens", "Womens", "Room fragrances"]
    },
    {
        id: 2,
        title: "Collection",
        links: ["Floral", "Woody", "Fresh", "Sweet"]
    },
    {
        id: 3,
        title: "About Us",
        links: ["Our Story", "Ingredients", "Reviews", "FAQs"]
    },
    {
        id: 4,
        title: "Help & Info",
        links: ["Contact Us", "Shipping Policy", "Returns & Refunds", "Terms & Conditions"]
    }
]


import { RiDashboardLine } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import { BsClipboard2Check } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

export const adminSidebarLinks = [
    {
        route: "/admin/dashboard",
        name: "Dashboard",
        icon: RiDashboardLine
    },
    {
        route: "/admin/product",
        name: "Product",
        icon: TbShoppingBag
    },
    {
        route: "/admin/orders",
        name: "Orders",
        icon: BsClipboard2Check
    },
    {
        route: "/admin/customers",
        name: "Customers",
        icon: FaRegUser
    },
    {
        route: "/admin/reviews",
        name: "Reviews",
        icon: CiStar
    },
    {
        route: "/admin/settings",
        name: "Settings",
        icon: IoSettingsOutline
    }
]


import { LiaRupeeSignSolid } from "react-icons/lia";
import { LuUsersRound } from "react-icons/lu";


export const adminHeaderSection = [
    {
        name: "Total Sales",
        value: "₹ 1,25,000",
        icon: LiaRupeeSignSolid
    },
    {
        name: "Orders",
        value: "350",
        icon: BsHandbag
    },
    {
        name: "Customers",
        value: "350",
        icon: LuUsersRound
    },
    {
        name: "Products",
        value: "98",
        icon: TbPerfume
    },
]

import { FaUser } from "react-icons/fa";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GoBellFill } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";


export const profileLinks = [
    {
        name: 'My Profile',
        icon: FaUser,
        route: '/user/profile',
        desc: ''
    },
    {
        name: 'Orders',
        icon: BsFillBoxSeamFill,
        route: '/user/profile/orders',
        desc: 'Track and manage your orders'
    },
    {
        name: 'Wishlist',
        icon: GoHeartFill,
        route: '/user/profile/wishlist',
        desc: 'Your favourite fragrances'
    },
    {
        name: 'Addresses',
        icon: IoLocationSharp,
        route: '/user/profile/addresses',
        desc: 'Manage your saved addresses'
    },
    {
        name: 'Payment Methods',
        icon: FaCreditCard,
        route: '/user/profile/payment-methods',
        desc: 'Manage cards and UPI options'
    },
    {
        name: 'My Reviews',
        icon: MdOutlineStarPurple500,
        route: '/user/profile/my-reviews',
        desc: "Reviews that you've shared" 
    },
    {
        name: 'Notification',
        icon: GoBellFill,
        route: '/user/profile/notification',
        desc: "Stay updated with latests alerts"
    },
    {
        name: 'Settings',
        icon: IoIosSettings,
        route: '/user/profile/setting',
        desc: ''
    },
]