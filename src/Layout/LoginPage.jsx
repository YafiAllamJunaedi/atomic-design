/* eslint-disable react/jsx-no-undef */
import LabelInput from "./LabelInput"
import Button from "../components/Button"
function LoginPage() {
    return(
        <div className="flex items-center mt-48">
            <div className="w-96 bg-slate-300 p-10 rounded-lg">
                <LabelInput htmlFor="email" type="email" id="email" placeholder="Enter Your Email">Email Address</LabelInput>
                <LabelInput htmlFor="email" type="email" id="email" placeholder="Enter Your Password">Password</LabelInput>
                <h3 className="flex justify-end text-blue-500 font-semibold mb-5">Forgot Password?</h3>
                <Button bgColor="bg-blue-500" type="submit">Login</Button>
            </div>
        </div>
    )
}

export default LoginPage