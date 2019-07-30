import React from 'react';


export default function Calendar({date}) {
    //зададим данные для дней недели и месяцев
    const weekDay = getLocalWeekDays[date.getDay()];
    const month = getLocalMonth[date.getMonth()];


    return (
        <div className="ui-datepicker">
            <div className="ui-datepicker-material-header">
                <div className="ui-datepicker-material-day">{weekDay.full}</div>
                <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{month.special}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                </div>
            </div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month.default}</span>&nbsp;<span
                    className="ui-datepicker-year">{date.getFullYear()}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col></col>
                    <col className="ui-datepicker-week-end"></col>
                    <col className="ui-datepicker-week-end"></col>
                </colgroup>
                <thead>
                <tr>
                    <th scope="col" title="Понедельник">Пн</th>
                    <th scope="col" title="Вторник">Вт</th>
                    <th scope="col" title="Среда">Ср</th>
                    <th scope="col" title="Четверг">Чт</th>
                    <th scope="col" title="Пятница">Пт</th>
                    <th scope="col" title="Суббота">Сб</th>
                    <th scope="col" title="Воскресенье">Вс</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="ui-datepicker-other-month"></td>
                    <td className="ui-datepicker-other-month"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td className="ui-datepicker-today"></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                </tbody>
            </table>
        </div>
    );
}

const getLocalWeekDays = [
    {
        short: 'Вс',
        full: 'Воскресенье'
    },
    {
        short: 'Пн',
        full: 'Понедельник',
    },
    {
        short: 'Вт',
        full: 'Вторник',
    },
    {
        short: 'Ср',
        full: 'Среда',
    },
    {
        short: 'Чт',
        full: 'Четверг',
    },
    {
        short: 'Пт',
        full: 'Пятница',
    },
    {
        short: 'Сб',
        full: 'Суббота',
    }
];

const getLocalMonth = [
    {
        default: 'Январь',
        special: 'Января'
    },
    {
        default: 'Февраль',
        special: 'Февраля'
    },
    {
        default: 'Март',
        special: 'Марта'
    },
    {
        default: 'Апрель',
        special: 'Апреля'
    },
    {
        default: 'Май',
        special: 'Мая'
    },
    {
        default: 'Июнь',
        special: 'Июня'
    },
    {
        default: 'Июль',
        special: 'Июля'
    },
    {
        default: 'Август',
        special: 'Августа'
    },
    {
        default: 'Сентябрь',
        special: 'Сентября'
    },
    {
        default: 'Октябрь',
        special: 'Октября'
    },
    {
        default: 'Ноябрь',
        special: 'Ноября'
    },
    {
        default: 'Декабрь',
        special: 'Декабря'
    },
];