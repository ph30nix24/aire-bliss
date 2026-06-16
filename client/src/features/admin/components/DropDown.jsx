import { useState, useRef, useEffect } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const Dropdown = ({ label = "Select Gender", options, value, onChange, additionalCls }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div ref={ref} className="relative w-full font-body text-xs!">

            {/* Trigger button */}
            <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className={`w-full flex items-center justify-between bg-[#111] border border-white/10 text-xs rounded-md px-3 py-2 cursor-pointer focus:outline-none focus:border-yellow-500/60 ${ additionalCls }`}
            >
                <span className={value ? 'text-white' : 'text-white/40'}>
                    {value || label}
                </span>
                <IoChevronDownOutline
                    className={`text-white/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown list */}
            {isOpen && (
                <ul className="absolute z-50 w-full mt-1 bg-[#1a1a1a] border border-white/10 rounded-md overflow-hidden shadow-lg">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`px-3 py-2 text-xs cursor-pointer transition-colors
                                ${value === option.value
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;