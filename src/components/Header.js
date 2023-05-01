import Menu from "./Menu";
import Profile from "./Profile";
import CartButton from "./CartButton";
import classNames from "classnames";
import HamburgerIcon from "./HamburguerIcon";

function Header(){
    const classes = classNames("px-1 py-1");

    return (
        <div className="flex justify-between xs:border-b-2 4D4C4C py-4 xs: w-4/5  m-auto">
            <div className="flex space-x-7 justify-start">
                <HamburgerIcon />
                <span className={"font-bold text-4xl inline-flex items-center m-0"}>sneakers</span>
                <Menu className={classes}/>
            </div>
            <div className={"flex xs:space-x-9 space-x-5"}>
                <CartButton/>
                <Profile/>
            </div>
        </div>
    );
}

export default Header;