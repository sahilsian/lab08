const Container = ({ children }) => {
    return (
        <div>
            <div className="w-full max-w-[1300px] mx-auto p-6">
                {children}
            </div>
        </div>

    )
}

export default Container