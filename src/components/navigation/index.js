import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from 'react'
import Text from "../text";
import { Context } from "../../lib/context_provider";
const Navigation = ({tabs}) => {
    return (
        <div style={{ borderColor: "#808080"}} className={``}>
            <div className="md:flex gap-4 items-center">
                <div>
                    <Text level={3} text={"Lab08"}></Text>
                </div>
            {tabs.map((tab) => {
                return (
                    <div>
                        <NavigationTab name={tab.name} route={tab.route}></NavigationTab>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

const NavigationTab = ({name, route}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const isActive = route === "" ? path === "/" : path === `/${route}`;
    return (
        <div className="mb-2">
            <span
            onClick={() => {
                navigate(`/${route}`)
            }}
            style={{textDecorationColor: "#d1d1d1"}}
            className={` cursor-pointer ${isActive ? "font-semibold underline"  : ""}`}
            ><Text level={"p"} text={name}></Text></span>
        </div>
    )
}


export default Navigation