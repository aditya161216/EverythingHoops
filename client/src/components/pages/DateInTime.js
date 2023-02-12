import React from "react";
import { useState, useRef } from "react";
import { Form, Stack, Card } from "react-bootstrap"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


// TODO: updates option values using setOption

const Datepage = () => {
    const [selectedOption, setOption] = useState();
    const selection1 = useRef()   // stores selection in this variable
    const selection2 = useRef()

    // handles when the submit button is clicked
    function handleSubmit(e) {
        // placeholder for now
        console.log(selection1.current.value)
    }

    //this should be a drop down, and then on submission I render the next component in the div
    // TODO: make dropdowns appear side by side
    return (
        <div className="flex flex-row h-screen w-screen">
            <div class="flex flex-col justify-center items-center w-full h-full font-sans text-2xl font-bold">
                <div className="flex flex-row justify-center font-sans text-2xl font-bold">
                    Stat Generator! Choose from the required fields to look up a player with these specific statistics!
                </div>
                <div class="flex flex-row gap-x-16 justify-center font-serif font-normal text-1xl">
                    <Form>
                        <Form.Group className="mb-3" controlId="highlow">
                            <Form.Select ref={selection1}>
                                <option>Highest</option>
                                <option>Lowest</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group className="mb-3" controlId="others">
                            <Form.Select ref={selection2}>
                                <option>Points</option>
                                <option>Assists</option>
                                <option>Rebounds</option>
                                <option>Steals</option>
                                <option>Blocks</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
                <div>
                    <button variant="outline-primary" onClick={handleSubmit}>SEARCH</button>
                </div>


            </div>
        </div>




        // <Dropdown options={options} 
        // onChange={this._onSelect} 
        // value={defaultOption} 
        // placeholder="Select an option"></Dropdown>

    );


    //either against a team
    //date based ranges

    //month /day /year /range -> 

    //against a certain team

}

export default Datepage;