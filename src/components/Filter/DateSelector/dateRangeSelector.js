import React, { useEffect } from 'react';
import $ from 'jquery';
import '../filterStyle.css';
import daterangepicker from 'daterangepicker';
import datePickerOptions from "./dateRangeUtility";
import { FiCalendar } from "react-icons/fi";
import { connect } from 'react-redux';
import Actions from "../../../redux/actions";

function DateRangeComponent({ setDateRange, dateRange }) {

    const dateRangeCallBack = (start, end) => {
        setDateRange(start, end)

    }
    useEffect(() => {
        $('#datePicker').daterangepicker({
            ...datePickerOptions,
            "startDate": dateRange.startDate,
            "endDate": dateRange.endDate
        },
            dateRangeCallBack
        );

    })
    return (
        <div className='dataRange'>
            <FiCalendar className='icon' />
            <input type="text" id='datePicker' className='calendarInput' name="daterange" onChange={() => { }} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        dateRange: state.range
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setDateRange: (start, end) => {
            dispatch(Actions.setDateRange(start, end))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeComponent);
