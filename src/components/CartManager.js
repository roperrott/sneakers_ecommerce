import { useState } from "react";
import classNames from "classnames";

function CartManager({className}){
    const [counter, setCounter] = useState(0);

    const btnClass = classNames(
        'text-orange-400',
        'font-bold',
        'text-3xl'
    );

    const disabledSubtractionClass = classNames(
        counter === 0 ? btnClass + ' opacity-50 cursor-not-allowed' : btnClass
    );

    const containerClass = classNames(
        className,
        'flex w-32 bg-slate-100 opacity-90 h-11 rounded-md opacity-'
    );

    const handleAdition = () => {
        setCounter(counter + 1);
    };
    const handleSubtraction = () => {
        setCounter(prevState => prevState > 0 ? prevState - 1 : prevState );
    };

    return (
        <div className={containerClass}>
            <button onClick={handleSubtraction} className="w-1/3">
                <span className={disabledSubtractionClass}>-</span>
            </button>
            <span className="font-bold self-center w-1/3 text-center" >{counter}</span>
            <button onClick={handleAdition} className="w-1/3">
                <span className={btnClass}>+</span>
            </button>
        </div>
    );
}

export default CartManager;