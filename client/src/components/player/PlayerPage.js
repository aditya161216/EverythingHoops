import React from "react";
import 'react-tabs/style/react-tabs.css';
import PlayerTabs from "./PlayerTabs.js";


// options with default values
const options = {
  defaultTabId: 'settings',
  activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
  inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
  onShow: () => {
    console.log('tab is shown');
  }
};


const PlayerPage = () => {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex p-t-10 bg-orange-400 h-56">
        <div className="flex flex-row p-t-10 pl-64 whitespace-normal">
          <img className="place-self-end" width="235" height="235" src="https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png" />
          <p className="text-white"> _Player_Name_/_Player_Info_ </p>
        </div>
      </div>

      <div className="flex content-center px-64">
        <PlayerTabs/>
      </div>

    </div>
  )
}

export default PlayerPage;