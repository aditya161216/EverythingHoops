import React, { useEffect , useState} from "react";
import Performance from "../performance";

const Landing = () => {
    const [day, setDay] = useState(1);
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2000);

    const [visible, setVisible] = useState(false);




    
    const date = () => {
        let today = new Date();
        const day = String(today.getDate()).padStart(2, '0')
        const month = String(today.getMonth() + 1).padStart(2, '0');

        today = month + "/" + day;
        return today
    }

    //maybe just set background to a color, and then upload an image ontop of it?
    //on submit we convert it to a specific type of date, and then pass it into as a prop?

    //when we get a prop we take the attributes and then fetch the query, and then with the result, we then display the values for each

    return (
        <div className="flex">
            <div className="flex flex-col">
                <span> Welcome! Todays Date is: {date()}</span>

                <span>On this Date, The Best NBA Performance Was:</span>

                <Performance/>

                <div>
                    Input your values below to find the next best players 
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <span>Month</span>
                            <input className="w-24" vaule={day} type="number" placeholder="1" onChange={(e) => setDay(e.target.value)}></input>
                        </div>

                        <div className="flex flex-row">
                            <span>Day</span>
                            <input className="w-24" vaule={month} type="number" placeholder="1" onChange={(e) => setMonth(e.target.value)}></input>
                        </div>


                        <div className="flex flex-row">
                            <span>Year</span>
                            <input className="w-24" vaule={year} type="number" placeholder="1" onChange={(e) => setYear(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <div>
                    <button onClick={e => setVisible(true)}> Press ME!</button>
                    {visible ? <Performance/> : null}
                </div>

            </div>
        </div>
    )

}

export default Landing