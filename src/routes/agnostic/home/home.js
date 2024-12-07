import { useContext } from "react";
import { Context } from "../../../lib/context_provider";
import ProfileComp from "../../../components/profile";
import Login from "../../../components/login";
import Button from "../../../components/button";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div>
            {user ?
                <div>
                    <Button label="Go to Profile" onClick={() => {
                        navigate("/profile")
                    }}></Button>
                </div>
            :
                <Login></Login>

            }
        </div>
    )
}

export default Home;