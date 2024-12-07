const Input = (props) => {
    return (
        <div className="p-3 border-[1px] text-white border-[#808080] w-full bg-none">
            <input className="bg-transparent w-full outline-none" {...props}></input>
        </div>
    )
}
export default Input