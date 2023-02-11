import React from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

const Header = () => {
    //quick header to display all the links for the other site whenever we render a page.
    const Links = ["Players, Teams, Stats"]

    return (
        <div>
            <div className="flex justify-evenly">
                <div className=""> 
                    Everything Hoops
                </div>

                <ul className="flex items-center space-x-8">
                    <li> 
                        <a href="/players"> test</a>
                    </li>

                    <li> 
                        <a href="#"> Test 2</a>
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