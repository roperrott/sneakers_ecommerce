import AddButton from "./AddButton";
import { DiscountTag } from "./DiscountTag";
import CartManager from "./CartManager";
import { getValueFixed } from './../utils/getValueFixed';
import classNames from "classnames";

function ProductDetail({detail}){
    const discountClass = classNames(
        'text-gray-400 line-through font-bold opacity-70',
    );
    const priceWthDiscount = detail.price - (detail.price * detail.discount);
    
    return(
        <div className="w-1/2 h-96 flex flex-col justify-around mt-16 mb-10">
            <h4 className="text-amber-500 font-bold text-xs">SNEAKER COMPANY</h4>
            <h1 className="font-bold text-4xl w-2/3">{detail.title}</h1>
            <p className="text-gray-500 text-justify">{detail.description}</p>
            <div className="flex justify-between w-36">
                <span className="font-bold text-2xl">${detail.discount > 0 ? getValueFixed(priceWthDiscount) : getValueFixed(detail.price)}</span>
                <DiscountTag percentage={detail.discount * 100}/>
            </div>
            {detail.discount > 0 ? <span className={discountClass}>${getValueFixed(detail.price)}</span> : null }
            <div className="flex">
                <CartManager className="mr-5"/>
                <AddButton/>  
            </div>
            
            
        </div>
    );

}

export default ProductDetail;