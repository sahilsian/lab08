const Image = ({src, rounded = false, width="100px", height="100px"}) => {
    return (
        <div>
            <img className={`${rounded && "rounded-full"} object-contain`} src={src} width={width} height={height}></img>
        </div>
    )
}

export default Image