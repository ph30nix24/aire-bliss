import React, { useRef, useState } from 'react'
import { IoCloudUploadOutline, IoSaveOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbBulbFilled } from "react-icons/tb";
import Dropdown from './DropDown';
import { toast } from 'react-hot-toast';
import { addProductApi } from '../services/admin.api';


const ProductForm = ({ setIsAddProductClk }) => {
    const [formData, setFormData] = useState({
        productName: '',
        image: null,
        previewImages: [null, null, null, null, null],
        brand: '',
        category: '',
        gender: '',
        price: '',
        discountPrice: '',
        stock: '',
        sku: '',
        size: "",
        fragranceNotes: "",
        shortDescription: "",
        longDescription: "",
        featured: false,
        bestSeller: false,
    })

    const inputRef = useRef(null);
    const previewRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

    const [mainImage, setMainImage] = useState(null);
    const [previewImages, setPreviewImages] = useState([null, null, null, null, null]);

    const handleMainClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.click();
    };

    const handleMainFileChange = (e) => {
        const file = e.target.files[0];
        if (file) setMainImage(file);
    };

    const handlePreviewClick = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        previewRefs[index].current?.click();
    };

    const handlePreviewFileChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            setPreviewImages(prev => {
                const updated = [...prev];
                updated[index] = file;
                return updated;
            });
        }
    };

    const removeMainImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setMainImage(null);
    };

    const removePreviewImage = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setPreviewImages(prev => {
            const updated = [...prev];
            updated[index] = null;
            return updated;
        });
        previewRefs[index].current.value = '';
    };

    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Unisex', value: 'unisex' },
    ];

    const categoryOptions = [
        { label: 'Perfume', value: 'perfume' },
        { label: 'Room Fragrance', value: 'room-fragrance' },
    ];

    const [sizeOptions, setSizeOptions] = useState(null);
    const sizes = ['30ml', '50ml', '100ml', '150ml', '200ml'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    const handleDropdownChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleToggle = (name) => {
        setFormData(prev => ({ ...prev, [name]: !prev[name] }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!mainImage) {
            toast.error("Please upload a main product image.");
            return;
        }
        const finalData = {
            ...formData,
            size: sizeOptions,
            image: mainImage,
            previewImages: previewImages.filter(img => img !== null)
        };
        setFormData(finalData);
        console.log(finalData);
        try {
            const formDataToSend = new FormData();

            // Main image
            formDataToSend.append("image", mainImage);

            // Preview images
            previewImages
                .filter(img => img)
                .forEach(img => {
                    formDataToSend.append("previewImages", img);
                });

            // Other fields
            Object.keys(formData).forEach(key => {
                if (key !== "image" && key !== "previewImages") {
                    formDataToSend.append(key, formData[key]);
                }
            });

            await addProductApi(formDataToSend);
            toast.success("Product added successfully!");
            setIsAddProductClk(false);
        }
        catch (error) {
            console.error('Error during product submission:', error);
            toast.error("An error occurred while saving the product. Please try again.");
        }
    }
    return (
        <form onSubmit={handleSubmit} className='size-full pt-3 px-5 pb-8'>
            <div className='w-full h-[calc(100%-60px)] flex gap-3'>
                <div className='w-1/3 h-full bg-[#111]/70 border border-white/10 rounded-md py-3 px-5'>
                    <h1 className='text-white font-semibold text-base font-heading'>Product Image</h1>
                    <p className='text-white/70 text-xs tracking-wide font-body'>Upload a high-quality image of your product</p>

                    {/* Main image hidden input */}
                    <input
                        ref={inputRef}
                        onChange={handleMainFileChange}
                        type="file"
                        accept="image/png, image/jpeg, image/webp"
                        className="hidden"
                    />

                    {/* Main image upload area */}
                    <div
                        className="w-full h-fit rounded-2xl border-2 py-8 flex flex-col items-center border-dashed border-yellow-500/60 cursor-pointer mt-5 relative bg-[#111]/70"
                        onClick={handleMainClick}
                    >
                        {mainImage ? (
                            <div className='relative'>
                                <img
                                    src={URL.createObjectURL(mainImage)}
                                    alt="Main Product"
                                    className="size-43 object-cover rounded-md"
                                />
                                <div
                                    className='size-5 flex items-center justify-center border border-white/10 rounded-full text-white/80 bg-[#111]/70 absolute -top-2 -right-2 cursor-pointer'
                                    onClick={removeMainImage}
                                >
                                    <RxCross2 className='text-xs' />
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col items-center pointer-events-none'>
                                <IoCloudUploadOutline className="size-15 text-yellow-500/80" />
                                <p className="text-sm text-white/70 font-body">Drag & drop images here</p>
                                <p className="text-white/70 text-sm font-body">or</p>
                                <div className='text-xs font-body tracking-wide text-white capitalize bg-yellow-400/80 border border-white/20 rounded-md px-8 py-2 mt-2'>
                                    Browse Files
                                </div>
                                <p className='text-white/60 text-xs font-body mt-3'>JPG, PNG, WEBP, Max file size of 5MB. (Up to 5 images)</p>
                            </div>
                        )}
                    </div>

                    {/* Preview section */}
                    <p className='text-white font-body text-sm my-4'>Image Preview</p>
                    <div className='w-full flex gap-2 flex-wrap justify-center'>
                        {previewImages.map((image, index) => (
                            <div key={index} className='relative'>

                                {/* Hidden input per preview slot */}
                                <input
                                    ref={previewRefs[index]}
                                    type="file"
                                    accept="image/png, image/jpeg, image/webp"
                                    className="hidden"
                                    onChange={(e) => handlePreviewFileChange(e, index)}
                                />

                                {/* Preview slot */}
                                <div
                                    className='size-24 bg-[#111]/70 border border-white/10 rounded-md cursor-pointer flex items-center justify-center overflow-hidden'
                                    onClick={(e) => handlePreviewClick(e, index)}
                                >
                                    {image ? (
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <IoCloudUploadOutline className="size-5 text-yellow-500/50" />
                                    )}
                                </div>

                                {/* Remove button */}
                                {image && (
                                    <div
                                        className='size-4 flex items-center justify-center border border-white/10 rounded-full text-white/80 bg-[#111] absolute -top-1.5 -right-1.5 cursor-pointer z-10'
                                        onClick={(e) => removePreviewImage(e, index)}
                                    >
                                        <RxCross2 className='text-[9px]' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-full mt-5 py-3 px-5 bg-[#111]/70 border border-white/10 rounded-md">
                        <div className='flex items-center gap-2 text-white font-body text-sm'>
                            <TbBulbFilled className='text-yellow-400/80 text-lg' />
                            <p>Tips</p>
                        </div>
                        <p className='text-white/70 text-xs font-body mt-1 tracking-wide'>Use high-quality images with good lighting to showcase your product effectively.</p>
                    </div>
                </div>

                {/* Details section */}
                <div className='w-2/3 h-full bg-[#111]/70 border border-white/10 rounded-md py-3 px-5'>
                    <h1 className='text-white font-semibold text-base font-heading'>Product Information</h1>
                    <p className='text-white/70 text-xs tracking-wide font-body'>Fill in the details of your perfume</p>
                    <div className='w-full h-fit mt-5 flex  gap-4'>
                        <div className="w-1/2">
                            {/* product name field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body mb-1">Product Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter product name"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80"
                                />
                            </fieldset>

                            {/* category dropdown field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body mb-1">Category</label>
                                <Dropdown
                                    label="Select Category"
                                    options={categoryOptions}
                                    value={formData.category}
                                    onChange={(value) => handleDropdownChange('category', value)}

                                />
                            </fieldset>

                            {/* price field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body mb-1">Price</label>
                                <div className='w-full flex items-center '>
                                    <span className="text-white/70 text-sm px-3 border border-white/10 py-1.5">₹</span>
                                    <input
                                        type="text"
                                        placeholder="Enter price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        required
                                        className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-r-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80"
                                    />
                                </div>
                            </fieldset>

                            {/* stock field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body ">Stock</label>
                                <input
                                    type="number"
                                    placeholder="Enter stock quantity"
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                                />
                            </fieldset>

                            {/* size options field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body ">Size Options</label>
                                <div className="flex w-full gap-5 mt-2 justify-center">
                                    {
                                        sizes.map((size, index) => (
                                            <div className='text-white/70 text-xs font-body mb-1 flex items-center gap-2' key={index} onClick={() => setSizeOptions(size)}>
                                                <div className={'w-4 h-4 border border-white/10 rounded-sm flex items-center justify-center cursor-pointer' + (sizeOptions === size ? ' bg-yellow-400/80' : ' bg-transparent')}>

                                                </div>
                                                <span>{size}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </fieldset>

                            {/* description field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body ">Short Description</label>
                                <textarea
                                    placeholder="Enter a brief description of the product"
                                    name="shortDescription"
                                    value={formData.shortDescription}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 font-body px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80 resize-none h-25 mt-2"
                                />

                            </fieldset>

                            <fieldset className="text-white text-sm font-body flex items-center justify-between gap-3 border border-white/10 rounded-md py-3 px-4 mt-2 w-full">
                                <div className=''>
                                    <label>
                                        Featured Product
                                    </label>
                                    <p className="text-white/50 mt-1.5 text-xs font-body">
                                        Add this product in Featured Products section
                                    </p>
                                </div>
                                <div className={`w-11 h-6  shadow rounded-full flex items-center justify-center cursor-pointer relative ${formData.featured ? 'bg-yellow-300/90' : 'bg-transparent border border-white/50'}`} onClick={() => handleToggle('featured')}>
                                    <div className={`size-5  absolute rounded-full left-0 shadow-xl transform duration-300 ${formData.featured ? 'translate-x-[105%] bg-white' : 'translate-x-0.5 bg-yellow-300/90'}`}></div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="w-1/2">
                            {/* brand name */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body mb-1">Brand</label>
                                <input
                                    type="text"
                                    placeholder="Enter Brand name"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80"
                                />
                            </fieldset>
                            {/* gender dropdown field */}
                            <fieldset className={`w-full flex flex-col gap-1 mb-4 ${formData.category === 'room-fragrance' ? 'pointer-events-none' : ''}`}>
                                <label className="text-white text-sm font-body mb-1">Gender</label>
                                <Dropdown
                                    label="Select Gender"
                                    options={genderOptions}
                                    value={formData.gender}
                                    onChange={(value) => handleDropdownChange('gender', value)}
                                />
                            </fieldset>
                            {/* discount field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body mb-1">Discount Price</label>
                                <div className='w-full flex items-center '>
                                    <span className="text-white/70 text-sm px-3 border border-white/10 py-1.5">₹</span>
                                    <input
                                        type="text"
                                        placeholder="Enter discount price (optional)"
                                        name="discountPrice"
                                        value={formData.discountPrice}
                                        onChange={handleInputChange}
                                        className="bg-[#111]/70 border w-full font-body tracking-wide text-xs border-white/10 rounded-r-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80"
                                    />
                                </div>
                            </fieldset>

                            {/* stock keeping unit field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-3'>
                                <label className="text-white text-sm font-body ">SKU (Stock Keeping Unit)</label>
                                <input
                                    type="number"
                                    placeholder="Enter SKU (optional)"
                                    name='sku'
                                    value={formData.sku}
                                    onChange={handleInputChange}
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                                />
                            </fieldset>

                            {/* fragrance notes field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-[14px]'>
                                <label className="text-white text-sm font-body">Fragrance Notes</label>
                                <input
                                    type="text"
                                    placeholder="Add notes (e.g. Floral, Woody, Fresh)"
                                    name='fragranceNotes'
                                    value={formData.fragranceNotes}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
                                />
                            </fieldset>

                            {/* description field */}
                            <fieldset className='w-full flex flex-col gap-1 mb-4'>
                                <label className="text-white text-sm font-body ">Long Description</label>
                                <textarea
                                    placeholder="Enter a detailed description of the product"
                                    name="longDescription"
                                    value={formData.longDescription}
                                    onChange={handleInputChange}
                                    required
                                    className="bg-[#111]/70 border w-full text-xs border-white/10 rounded-md py-2 font-body px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring focus:ring-yellow-400/80 resize-none h-25 mt-2"
                                />

                            </fieldset>
                            <fieldset className="text-white text-sm font-body flex items-center justify-between gap-3 border border-white/10 rounded-md py-3 px-4 mt-2 w-full">
                                <div className=''>
                                    <label>
                                        Best Seller
                                    </label>
                                    <p className="text-white/50 mt-1.5 text-xs font-body">
                                        Add this product in Best Seller section
                                    </p>
                                </div>
                                <div className={`w-11 h-6  shadow rounded-full flex items-center justify-center cursor-pointer relative ${formData.bestSeller ? 'bg-yellow-300/90' : 'bg-transparent border border-white/50'}`} onClick={() => handleToggle('bestSeller')}>
                                    <div className={`size-5  absolute rounded-full left-0 shadow-xl transform duration-300 ${formData.bestSeller ? 'translate-x-[105%] bg-white' : 'translate-x-0.5 bg-yellow-300/90'}`}></div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer actions */}
            <div className='w-full h-fit px-5 py-3 mt-3 flex items-center justify-between bg-[#111]/70 border border-white/10 rounded-md'>
                <button
                    className='text-xs font-body tracking-wide text-white capitalize bg-[#111]/70 border border-white/20 rounded-md px-8 py-2 cursor-pointer'
                    type='button'
                    onClick={() => setIsAddProductClk(false)}
                >
                    cancel
                </button>
                <button
                    className='text-xs font-body tracking-wide text-white capitalize bg-yellow-400/80 border border-white/20 rounded-md px-8 py-2 flex gap-2 items-center cursor-pointer'
                    type='submit'
                >
                    <IoSaveOutline className='text-sm' />
                    <span>save product</span>
                </button>
            </div>
        </form>
    )
}

export default ProductForm