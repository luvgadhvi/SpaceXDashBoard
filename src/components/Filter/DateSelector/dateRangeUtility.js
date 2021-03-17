import moment from 'moment';
const Ranges = {
    'Last Week': [moment().subtract(6, 'days'), moment()],
    'Last month': [moment().subtract(1, 'month').startOf('month'), moment()],
    'Past 3 months': [moment().subtract(3, 'month').startOf('month'), moment()],
    'Past 6 months': [moment().subtract(6, 'month').startOf('month'), moment()],
    'Past year': [moment().subtract(1, 'years'), moment()],
    'Past 2 year': [moment().subtract(2, 'years'), moment()],
}
const datePickerOptions = {
    'parentEl': 'datePicker',
    "alwaysShowCalendars": true,
    "showDropdowns": true,
    "autoApply": true,
    "ranges":{
        ...Ranges
    },
}


export default datePickerOptions