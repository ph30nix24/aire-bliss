import { useState, useRef, useCallback } from "react";

const MIN = 80;
const MAX = 124900;

function formatPrice(value) {
    if (value >= MAX) return "₹1,24,900+";

    if (value >= 1000) {
        const thousands = Math.floor(value / 1000);
        const remainder = String(value).slice(-3);

        return `₹${thousands},${remainder}`;
    }

    return `₹${value}`;
}

const PriceRangeSlider = () => {

    const [minVal, setMinVal] = useState(MIN);
    const [maxVal, setMaxVal] = useState(MAX);

    const rangeRef = useRef(null);

    const pct = (v) =>
        ((v - MIN) / (MAX - MIN)) * 100;

    const handleMin = useCallback(
        (e) => {
            const val = Math.min(Number(e.target.value), maxVal - 100);
            setMinVal(val);
        },
        [maxVal]
    );

    const handleMax = useCallback(
        (e) => {
            const val = Math.max(Number(e.target.value), minVal + 100);
            setMaxVal(val);
        },
        [minVal]
    );

    return (
        <div className="p-6 w-full max-w-sm">

            {/* Label */}
            <p className="text-sm font-medium text-gray-800 mb-5">
                {formatPrice(minVal)} – {formatPrice(maxVal)}
            </p>

            {/* Track */}
            <div className="relative h-1 mx-2.5" ref={rangeRef}>

                {/* Background track */}
                <div className="absolute inset-0 bg-gray-200 rounded-full" />

                {/* Filled range */}
                <div
                    className="absolute top-0 h-full bg-blue-700 rounded-full"
                    style={{
                        left: `${pct(minVal)}%`,
                        width: `${pct(maxVal) - pct(minVal)}%`,
                    }}
                />

                {/* Min thumb */}
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    step={10}
                    value={minVal}
                    onChange={handleMin}
                    className="absolute w-[calc(100%+20px)] -left-2.5 -top-2
                    h-5 appearance-none bg-transparent pointer-events-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:pointer-events-auto
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-blue-700
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
                />

                {/* Max thumb */}
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    step={10}
                    value={maxVal}
                    onChange={handleMax}
                    className="absolute w-[calc(100%+20px)] -left-2.5 -top-2
                    h-5 appearance-none bg-transparent pointer-events-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:pointer-events-auto
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-blue-700
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
                />
            </div>
        </div>
    );
};

export default PriceRangeSlider;