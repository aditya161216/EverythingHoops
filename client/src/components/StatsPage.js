import React from "react";
import { useState, useRef } from "react";
import { Form, Stack, Card } from "react-bootstrap"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const StatsPage = () => {
    //Points Rebounds, and Assists are set to 0/1, but if updated it w
    const [teams, setTeams] = useState(1);
    const [dates, setDates] = useState(1);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] = useState(0);


    const highlow1 = useRef()   // stores selection in this variable
    const highlow2 = useRef()
    const highlow3 = useRef()
    const filter2 = useRef()
    

    const nbateams = [];
    const beginQuery = async () => {

    }

    //PRA, also options to select in certain date ranges, against a certain team, if these stats have occured, these are optional,
    //certain team -> placeHolder -> all
    //certain date -> placeHolder -> range


    return (
        <>
            <div className="flex flex-col h-screen w-screen">
                <div className="grid grid-cols-2 bg-blue-100 w-full place-content-stretch">
                    <img className="object-scale-down h-60 w-96 " src="https://icons-for-free.com/download-icon-chart+statistics+stats+icon-1320184001457246832_512.png"></img>
                    <div className="font-mono font-bold text-6xl self-center">Stats Generator!</div>
                </div>
                <div className="flex flex-col items-center w-full h-full">
                    <div className="flex flex-row font-serif font-bold">
                        <div className="flex flex-row">Has a player ever made </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="others">
                                <Form.Select ref={highlow1}>
                                    <option>exactly</option>
                                    <option>higher than</option>
                                    <option>lower than</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <input className="pl-4 w-14 mb-3" min="0" vaule={points} type="number" placeholder="0" onChange={(e) => setPoints(e.target.value)}></input>
                        <div className="flex flex-row"> points, </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="others">
                                <Form.Select ref={highlow2}>
                                    <option>exactly</option>
                                    <option>higher than</option>
                                    <option>lower than</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <input className="pl-4 mb-3 w-14" min="0" vaule={rebounds} type="number" placeholder="0" onChange={(e) => setRebounds(e.target.value)}></input>
                        <div className="flex flex-row">rebounds, and </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="others">
                                <Form.Select ref={highlow3}>
                                    <option>exactly</option>
                                    <option>higher than</option>
                                    <option>lower than</option>
                                </Form.Select>
                            </Form.Group>
                        </Form>
                        <input className="pl-4 mb-3 w-14" min="0" vaule={assists} type="number" placeholder="0" onChange={(e) => setAssists(e.target.value)}></input>
                        <div className="flex flex-row">assists at any point in history?</div>
                    </div>


                    <div className="flex flex-row justify-center font-sans font-bold">Filter By:</div>
            
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center font-serif font-normal text-1xl">
                            <div>
                                Upper bound of the range of years to match this player's performance:
                            </div>
                            <input className="pl-4 mb-3 w-11" min="1" vaule={dates} type="number" placeholder="1" onChange={(e) => setDates(e.target.value)}></input>
                            {console.log(dates)}
                        </div>

                        <div className="flex flex-row font-serif font-normal text-1xl">
                            <div>
                                Searching for these statistics against a particular team:
                            </div>
                            <Form>
                                <Form.Group className="mb-3" controlId="others">
                                    <Form.Select ref={filter2}>
                                        <option>Team1</option>
                                        <option>Team2</option>
                                        <option>Team3</option>
                                    </Form.Select>
                                </Form.Group>
                            </Form>
                        </div>

                        <div className="flex flex-col font-bold border-black">
                            <button onClick={beginQuery}>Submit!</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsPage