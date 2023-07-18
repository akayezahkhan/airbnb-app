import React, { useState } from 'react';
import CustomCalendar from '../components/CALENDAR';


// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';

const SearchBar = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleSearchBarClick = () => {
    setCalendarVisible(true);
  };

  return (
    <div className="flex items-center rounded-full bg-white hover:drop-shadow-lg 
    border-2 border-gray-200 
    my-1 p-2">
        <input  className="flex-grow bg-white text-gray-500 focus:outline-none"
        type = "text" 
        placeholder = "    Start your search"
        onClick={handleSearchBarClick}
        />
        {isCalendarVisible && <CustomCalendar />}
        <div className="rounded-full bg-contain bg-no-repeat h-6 w-6"
        style={{ backgroundImage: `url('/images/search.png')`}}>
        </div>
    </div>
  );
};

export default SearchBar;
