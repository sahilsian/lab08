import { useContext, useEffect, useState } from "react";
import { Context } from "../lib/context_provider";
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./agnostic/home/home";
import Navigation from "../components/navigation";
import { tabs } from "../constants/constants";
import Spacer from "../components/spacer";

const AppRoutes = () => {
    const { user } = useContext(Context);
    return (
        <div style={{ backgroundColor: "#333333" }}>
            <div className="mx-auto max-w-[1280px] p-4 min-h-[100vh]" >
                <Navigation tabs={tabs}>
                </Navigation>
                <Spacer height="20px"></Spacer>
                <Routes>
                            {tabs.map((tab) => {
                                return (
                                    <Route path={`/${tab.route}`} element={tab.component}>
                                    </Route>
                                )
                            })}
                        </Routes>
            </div>
        </div>
    )
}

export default AppRoutes;