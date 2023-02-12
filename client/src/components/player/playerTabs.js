import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RadarChartPanel from '../graphs/RadarChart/RadarChartPanel';
import HistoryChartPanel from '../graphs/HistoryChartPanel';
import 'react-tabs/style/react-tabs.css';




const PlayerTabs = (params) => {
    const games = params.games
    console.log(games)

function JsonDataDisplay () {
    const DisplayData=games.map(
        (info)=>{
            return(
                <tr className = "gap-x-8">
                  <td>{info.GAME_DATE_EST}</td>
                    <td>{info.PTS}</td>
                    <td>{info.AST}</td>
                    <td>{info.REB}</td>
                    <td>{info.STL}</td>
                    <td>{info.BLK}</td>
                    <td>{info.OREB}</td>
                    <td>{info.DREB}</td>
                    <td>{info.TO}</td>
                    <td>{Math.round(info.GAME_SCORE)}</td>
                    <td>{info.FG_PCT}</td>
                    <td>{info.FT_PCT}</td>
                    <td>{info.FG3_PCT}</td>
                    <td>{info.PLUS_MINUS}</td>
                    <td>{info.MIN}</td>
                    <td>{info.AWAY_TEAM}</td>
                    <td>{info.HOME_TEAM}</td>
                </tr>
            )
        }
    )
  
    return(
        <div>
            <table class="table table-striped gap-x-6">
                <thead className="gap-x-8">
                    <tr>
                    <th>Date</th>
                    <th>PTS</th>
                    <th>AST</th>
                    <th>REB</th>
                    <th>STL</th>
                    <th>BLK</th>
                    <th>OREB</th>
                    <th>DREB</th>
                    <th>TO</th>
                    <th>Game Score</th>
                    <th>FG%</th>
                    <th>FT%</th>
                    <th>3P%</th>
                    <th>+/-</th>
                    <th>MIN</th>
                    <th>Away</th>
                    <th>Home</th>
  
  
                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
  }
    return (
        <Tabs className="flex flex-col content-center w-full border-solid">
            <TabList>
                <Tab>Stats</Tab>
                <Tab>Graphs</Tab>
            </TabList>

            <TabPanel>
               Last 10 Games
               {games.length ? JsonDataDisplay() : "" }
            </TabPanel>

            <TabPanel>
                <div>

                    <div className="flex flex-col w-full ">
                        <p className="text-left pt-6"> Performance Comparison </p>
                        <div className='pt-6'>
                        <RadarChartPanel/>
                        </div>
                        

                        <p className="text-left pt-6"> Historical Performance </p>
                        <div className='pt-6'>
                        <HistoryChartPanel/>
                        </div>
                    </div>

                </div>


            </TabPanel>

        </Tabs>
    )
}
export default PlayerTabs