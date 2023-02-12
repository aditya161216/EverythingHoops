import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RadarChartPanel from '../graphs/RadarChart/RadarChartPanel';
import HistoryChartPanel from '../graphs/HistoryChartPanel';
import 'react-tabs/style/react-tabs.css';


const PlayerTabs = () => {



    return (
        <Tabs className="flex flex-col content-center w-full border-solid">
            <TabList>
                <Tab>Stats</Tab>
                <Tab>Graphs</Tab>
            </TabList>

            <TabPanel>
               Basic Stats
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