import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {
    //quick header to display all the links for the other site whenever we render a page.
    const Links = ["Players, Teams, Stats"]

    return (
        <div>
            <div className="flex mx-64 ">
                

                <ul className="flex items-center space-x-8">
                    <div className="font-thicker text-xl"> 
                    <a href="/"> Everything Hoops</a>
                    </div>
                    <li> 
                        <a href="/players/:playerId"> Players_temp</a>
                    </li>

                    <li> 
                        <a href="#"> Test 3</a>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Header