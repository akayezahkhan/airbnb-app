import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

    const CustomCalendar = () => {
        const [state, setState] = useState({
          selection1: {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection1'
        },
    });

  return (

        <div className="flex flex-col max-h-8"> 
            <DateRangePicker className = "sm:w-full  w-28" 
            color="red"  
            onChange={item => setState({ ...state, item })} 
            moveRangeOnFirstSelection={true}  
            ranges={[state.selection1]} 
            value = {state} 
            rangeColors={['#f33e5b', '#3ecf8e', '#fed14c']} 
            minDate={new Date()}/>
                  
        </div>

  );
};

export default CustomCalendar;

