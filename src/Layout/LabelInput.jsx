/* eslint-disable react/prop-types */
import Label from "../components/Label";
import Input from "../components/Input";


function LabelInput ({children, htmlFor, type, id, name, placeholder}) {
    return(
        <div className="flex flex-col">
            <Label htmlFor={htmlFor}>{children}</Label>
            <Input type={type} id={id} name={name} placeholder={placeholder} />
        </div>
    )
}

export default LabelInput;