export const bestproducts = [
    {
        id: 1,
        name: 'gucci flora',
        tagline: 'Elegant blossoms in golden sunlight',
        price: 399,
        reviews: 90,
        rating: 4,
        img: './best-sellers/gucci_flora.png'
    },
    {
        id: 2,
        name: 'pink chiffon',
        tagline: 'Delicate beauty, modern artistic strength',
        price: 459,
        reviews: 180,
        rating: 4.7,
        img: './best-sellers/pink_cheffron.png'
    },
    {
        id: 3,
        name: 'white oud',
        tagline: 'Timeless luxury, pure bottled elegance',
        price: 429,
        reviews: 90,
        rating: 4,
        img: './best-sellers/white_oud.png'
    },
    {
        id: 4,
        name: 'tamdao',
        tagline: 'Sacred woody notes, serene soul',
        price: 459,
        reviews: 90,
        rating: 4.7,
        img: './best-sellers/tamdao.png'
    },
    {
        id: 5,
        name: 'oud malaki',
        tagline: 'Unleash your dark, majestic power',
        price: 399,
        reviews: 140,
        rating: 4.8,
        img: './best-sellers/oud_malaki.png'
    },
    {
        id: 6,
        name: 'vip men',
        tagline: 'Command respect, define your legacy',
        price: 499,
        reviews: 120,
        rating: 4.5,
        img: './best-sellers/vip_men.png'
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
        img: './collection/mens_collection.png',
        icon: PiCrownThin,
        btn: "Shop Men"
    },
    {
        id: 2,
        type: "women",
        discription: "Elegant. Feminine. Unforgettable.",
        img: './collection/womens_collection.png',
        icon: PiFlowerLotusThin,
        btn: "Shop Women"
    },
    {
        id: 3,
        type: "room fragrance",
        discription: "Elevate your space. Every day.",
        img: './collection/room_fragrance.png',
        icon: PiHouseLine,
        btn: "Shop Room Fragrances"
    },
]