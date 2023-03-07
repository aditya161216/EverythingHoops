import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="flex justify-between bg-black text-white font-sans px-4 py-2">
                <div className="text-5xl font"> 
                    Everything Hoops
                </div>

                <ul className="flex items-center space-x-8 font-poppins">
                    <li> 
                        <a href="/">HomePage</a>
                    </li>

                    <li> 
                        <a href="/players/1"> Player Stats</a>
                    </li>

                    <li> 
                        <a href="/landing"> Date in Time</a>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Header