import React from 'react';
import DateTime from './DateTime';


export default function DateTimePretty(props) {
    const {date} = props;
    const time = Math.round(new Date().getTime() - new Date(date).getTime());
    const minutes = time / (1000 * 60);
    const formatHour = `${Math.ceil(minutes / 60)} часов назад`;
    const formatDay = `${Math.ceil(minutes / 60 / 24)} дней назад`;
    const formatDate = minutes < 60 ? `${Math.ceil(minutes)} минут назад` : minutes / 60 < 24 ?
        formatHour : formatDay;

    return <DateTime date={formatDate}/>;
}

