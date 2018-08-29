import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const SelectDate = ({
    setDate, dob
}) => {
    
    if( dob !== null || dob != undefined){
        return <DatePicker
            placeholderText="ex. 01/01/1990"
            selected={moment(dob, 'DD/MM/YYYY')}
            onChange={e => setDate(e)}
            dateFormatCalendar={"MMM YYYY"}
            minDate={moment().subtract(145, "year")}
            maxDate={moment().add(0, "year")}
            showYearDropdown
            showMonthDropdown
        />
    }
    return <DatePicker
        placeholderText="ex. 01/01/1990"
        selected={dob}
        onChange={e => setDate(e)}
        dateFormatCalendar={"MMM YYYY"}
        minDate={moment().subtract(145, "year")}
        maxDate={moment().add(0, "year")}
        showYearDropdown
        showMonthDropdown
    />
}
    


export default SelectDate
