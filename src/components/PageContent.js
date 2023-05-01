import Header from "./Header";
import Carousel from "./Carousel";
import ProductDetail from "./ProductDetail";

function PageContent(){
    const detail = [
        {
            "title": "Nike Air Max 270 React",
            "description": "The Nike Air Max 270 React combines Nike's first lifestyle Air unit with soft, springy foam for an experience that's as comfortable as it is bold.",
            "price": 150.00,
            "discount": 0.20,
            "images": [

            ]
        },
        {
            "title": "Adidas Ultraboost 21",
            "description": "The Adidas Ultraboost 21 is designed to give you maximum comfort and energy return with every stride.",
            "price": 180.00,
            "discount": 0.10,
            "images": [
                
            ]
        },
        {
            "title": "Puma Future Rider",
            "description": "The Puma Future Rider is a modern take on a classic Puma style, with vibrant colors and retro vibes.",
            "price": 90.00,
            "discount": 0.20,
            "images": [
                
            ]
        }
    ]
   return(
    <div>
        <Header/>
        <div className=" flex justify-between w-2/3 ml-auto mr-auto">
            <Carousel className="w-1/2"/>
            <ProductDetail detail={detail[0]}/>
        </div>
    </div>
   );
}

export default PageContent;