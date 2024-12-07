import { useContext, useEffect, useState } from "react"
import Input from "../input"
import Text from "../text"
import Spacer from "../spacer";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import { Context } from "../../lib/context_provider";


const Login = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(Context);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dropdown, setDropdown] = useState('');
    const [validationMessage, setValidationMessage] = useState([]);
    const [onSubmit, setOnSubmit] = useState(false);

    const validator = (condition, message) => {
        setValidationMessage((prev) => {
            if(!condition) {
                if(prev.indexOf(message) === -1) {
                    return [...prev, message];
                }
            } else {
                return prev.filter((msg) => msg !== message);
            }
        })
    }

    const handleSubmit = () => {
        setOnSubmit(true);
        if(validationMessage.length < 1) {
            setUser({
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                season: dropdown
            })
            navigate("profile")
        }
    }

    useEffect(()=> {
        setValidationMessage([]);

        validator(/^[a-zA-Z]+$/.test(firstName), "First name must only contain alphabetical letters.")
        validator(/^[a-zA-Z]+$/.test(lastName), "Last name must only contain alphabetical letters.")

        validator(/[A-Za-z]/.test(password), "Password must contain at least one letter.");
        validator(/[A-Z]/.test(password), "Password must contain at least one uppercase letter.");
        validator(/\d/.test(password), "Password must contain at least one number.");
        validator(/[@$!%*?&]/.test(password), "Password must contain at least one special character.");
        validator(password.length >= 8, "Password must be at least 8 characters long.");

        validator(/^[^@]+@[^@]+\.[^@]+$/.test(email), "Email must be a valid email.")

        validator(dropdown != null, "You must select a season")

    }, [firstName, lastName, email, password, dropdown])
    return (
        <div className="w-full max-w-[800px] mx-auto p-4 border-[#808080] border-[1px]">
            <Text level={1} text={"Login"}></Text> 
            <Text level={5} text={"First Name *"}></Text> 
            <Spacer height="5px"></Spacer>
            <Input onInput={(e)=> {
                setFirstName(e.target.value)
            }} placeholder={"First Name"}></Input>
            <Spacer height="5px"></Spacer>
            <Text level={6} text={"First name must only contain alphabetical letters."}></Text> 
            <Spacer height="15px"></Spacer>
            <Text level={5} text={"Last Name *"}></Text> 
            <Spacer height="5px"></Spacer>
            <Input onInput={(e)=> {
                setLastName(e.target.value)
            }} placeholder={"Last Name"}></Input>
            <Spacer height="5px"></Spacer>
            <Text level={6} text={"Last name must only contain alphabetical letters."}></Text> 
            <Spacer height="15px"></Spacer>
            <Text level={5} text={"Email *"}></Text> 
            <Spacer height="5px"></Spacer>
            <Input onInput={(e)=> {
                setEmail(e.target.value)
            }} placeholder={"Email"}></Input>
            <Spacer height="5px"></Spacer>
            <Text level={6} text={"Email must be a valid email."}></Text> 
            <Spacer height="15px"></Spacer>
            <Text level={5} text={"Password *"}></Text> 
            <Spacer height="5px"></Spacer>
            <Input type="password" onInput={(e)=> {
                setPassword(e.target.value)
            }} placeholder={"Password"}></Input>
            <Spacer height="5px"></Spacer>
            <Text level={6} text={"Password must contain at least 1 lowercase character, 1 number, 1 special character and 1 uppercase letter."}></Text> 
            <Spacer height="15px"></Spacer>
            <Text level={5} text={"Favourite Season *"}></Text> 
            <Spacer height="5px"></Spacer>
            <select onChange={(e)=> {
                setDropdown(e.target.value)
            }} value={dropdown} aria-placeholder="Select your Favourite Season" className="bg-transparent outline-none p-3 border-[1px] text-white border-[#808080] w-full bg-none">
                <option value="" disabled selected>Select</option>
                <option>Spring</option>
                <option>Fall</option>
                <option>Winter</option>
            </select>
            <Spacer height="30px"></Spacer>
            <Button onClick={()=> {
                handleSubmit();
            }} label="Submit"></Button>
            <Spacer height="30px"></Spacer>
            {onSubmit && validationMessage.map((msg) => {
                return (
                    <Text level={6} text={msg}></Text>
                )
            })}
        </div>
    )
}

export default Login