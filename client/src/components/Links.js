import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="flex justify-evenly bg-black text-white font-sans">
                <div className="font-sans text-xl font-bold"> 
                    Everything Hoops
                </div>

                <ul className="flex items-center space-x-8">
                    <li> 
                        <a href="/">HomePage</a>
                    </li>

                    <li> 
                        <a href="/players/1"> Player_Stats</a>
                    </li>

                    <li> 
                        <a href="/landing"> Date_in_Time</a>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Header