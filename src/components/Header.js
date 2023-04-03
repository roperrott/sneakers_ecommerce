import Menu from "./Menu";
import Profile from "./Profile";
import CartButton from "./CartButton";
import classNames from "classnames";
import HamburgerIcon from "./HamburguerIcon";
import GreyLine from "./GreyLine";

function Header(){
    const classes = classNames("px-1 py-1");

    return (
        <div className="flex justify-around py-4">
            <div className="flex space-x-6">
                <HamburgerIcon/>
                <span className={`font-bold text-3xl inline-flex items-center ${classes}`}>sneakers</span>
                <Menu className={classes}/>
            </div>
            <div className={`flex space-x-7 ${classes}`}>
                <CartButton/>
                <Profile/>
            </div>
            <GreyLine/>
            
        </div>
    );
}

export default Header;