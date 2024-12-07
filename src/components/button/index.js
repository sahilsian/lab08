const Button = ({status = "primary", disabled=false, label = "button", onClick=()=>{}, widthFull = false }) => {
    const statusMap = {
        "primary": "bg-[#000000] text-white hover:bg-[#1664AC90] ",
        "secondary": "bg-[#B1CBE3] hover:bg-[#B1CBE390]",
        "success": "bg-[#58BF8E] hover:bg-[#58BF8E90]",
        "warning": "bg-[#CCB32F] hover:bg-[#CCB32F90]",
        "danger": "bg-[#CC382F] hover:bg-[#CC382F90] text-white",
        "disabled": "bg-[#C5C5C5] "
    }
    return (
        <div onClick={disabled === false ? onClick : null} className={`${statusMap[status]} text-center transition-all ${disabled === true ? "cursor-auto" : "cursor-pointer"} font-semibold p-4 rounded-sm w-full ${widthFull ? "w-full" : "max-w-[300px]"} `}>
            {label}
        </div>
    )
}

export default Button