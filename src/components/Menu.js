
function Menu(){
    const menuItems = [
        {
            name: 'Collections',
        },
        {
            name: 'Men',
        },
        {
            name: 'Women',
        },
        {
            name: 'About',
        },
        {
            name: 'Contact',
        }
    ]
    const renderedMenu = menuItems.map((menu) => {
        return (<li className="align-middle p-5 hidden xs:table-cell" key={menu.name}>{menu.name}</li>)
    })
    return(
        <ul className="table">
            {renderedMenu}
        </ul>
    )
}

export default Menu;