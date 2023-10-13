import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style.css';

import moment from 'moment';
import time from '../../../common/images/time.png';

function CalendarTypeA(props) {
    return (
        <div id="area-calendar">
            <img src={time} alt="" style={{ width: '100%' }} />
            <div className="calendar-time">
                <span>{props.time}</span>
            </div>
            <Calendar
                locale="ko"
                value={props.dateValue}
                next2Label={null}
                prev2Label={null}
                formatDay={(locale, date) => moment(date).format('DD')}
            />
        </div>
    );
}

export default CalendarTypeA;
