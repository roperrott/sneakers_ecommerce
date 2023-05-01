
function DiscountTag ({ percentage }){
    return <div className="bg-orange-100 w-11 rounded-md flex flex-col content-center h-6 m-1">
        <span className="text-sm font-bold text-orange-500 self-center">{percentage}%</span>
    </div>
}

export { DiscountTag };