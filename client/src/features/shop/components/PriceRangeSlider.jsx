import { useState, useRef, useCallback } from "react";

const MIN = 80;
const MAX = 1500;

function formatPrice(value) {
    if (value >= MAX) return "₹1500";

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
        <>
            <div className="pt-4 px-2 w-full max-w-sm">
                {/* Track */}
                <div className="relative h-1 mx-2.5 px-2" ref={rangeRef}>

                    {/* Background track */}
                    <div className="absolute inset-0 bg-gray-200 rounded-full" />

                    {/* Filled range */}
                    <div
                        className="absolute top-0 h-full bg-yellow-500/70 rounded-full"
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
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-yellow-500
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
                    [&::-webkit-slider-thumb]:w-3
                    [&::-webkit-slider-thumb]:h-3
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-yellow-500
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer"
                    />
                </div>
            </div>
            <p className="text-xs font-medium text-white/80 w-full flex justify-between items-center mt-2">
                <span>{formatPrice(minVal)}</span>  <span>{formatPrice(maxVal)}</span>
            </p>
        </>
    );
};

export default PriceRangeSlider;