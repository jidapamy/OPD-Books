import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const SelectDate = ({
    setDateOfBirth, dob
}) => {
    if( dob !== null || dob != undefined){
        return <DatePicker
            placeholderText="ex. 01/01/1990"
            selected={moment(dob, 'DD/MM/YYYY')}
            onChange={e => setDateOfBirth(e)}
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
        onChange={e => setDateOfBirth(e)}
        dateFormatCalendar={"MMM YYYY"}
        minDate={moment().subtract(145, "year")}
        maxDate={moment().add(0, "year")}
        showYearDropdown
        showMonthDropdown
    />
}
    


export default SelectDate
