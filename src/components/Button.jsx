/* eslint-disable react/prop-types */
function Button ({children, bgColor, type}) {
    return(
        <button type={type} className={`${bgColor} mt-2 text-white py-2 px-4 rounded-lg font-semibold text-sm w-full`}>{children}</button>
    )
}

export default Button;