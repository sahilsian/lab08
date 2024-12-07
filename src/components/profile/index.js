import { useContext } from "react";
import Text from "../text"
import { Context } from "../../lib/context_provider";
import Button from "../button";
import { useNavigate } from "react-router-dom";
import Spacer from "../spacer";


const ProfileComp = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    return (
        <div>
            <Text level={3} text={"First Name: " + user.firstname}></Text>
            <Text level={3} text={"Last Name: " + user.lastname}></Text>
            <Text level={3} text={"Email: " + user.email}></Text>
            <Text level={3} text={"Favourite Season: " + user.season}></Text>
            <Spacer></Spacer>
            <Button label="Dashboard" onClick={() => {
                navigate("/dashboard")
            }}></Button>
        </div>
    )
}
export default ProfileComp