import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';
function CustomInput({value, onClick}){
    return(
        <div className='input-group'>
            <input type="text" className='form-control' value={value} onClick={onClick} readOnly/>
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <FaCalendarAlt/>
                </span>
            </div>
        </div>
    )
}

function CalendarInput() {
    const [selectedDate, setSelectedDate] = useState(null);


    return (
        <>
        <label>
      <DatePicker selected={selectedDate} onChange={date=>setSelectedDate(date)} customInput={<CustomInput/>} />
      </label>
    </>
    );
}

export default CalendarInput;
