import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="flex justify-evenly">
                <div className=""> 
                    Everything Hoops
                </div>

                <ul className="flex items-center space-x-8">
                    <li> 
                        <a href="/"> Date_in_Time</a>
                    </li>

                    <li> 
                        <a href="/players/:playerId/Stats"> Stats</a>
                    </li>

                    <li> 
                        <a href="#"> Player_Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    )

};

export default Header