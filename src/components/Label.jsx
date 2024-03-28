/* eslint-disable react/prop-types */
function Label ({ children, htmlFor }) {
    return(
        <label htmlFor={htmlFor} className="text-slate-400 text-base mt-2">{children}</label>
    )
}

export default Label;