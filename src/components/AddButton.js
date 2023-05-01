import {ReactComponent as Cart} from '../assets/icon-cart.svg';

function AddButton(){
    return <button className='flex justify-center bg-orange-400 w-56 h-11 rounded-md shadow-2xl'>
        <Cart className='fill-white self-center mr-3'/>
        <span className=' text-white text-lg self-center'>Add to cart</span>
    </button>
}
export default AddButton;