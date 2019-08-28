import './App.css';

import React, {useState} from 'react';

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

function Video(props, i) {
  return (
      <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" key={i}> </iframe>
        <DateTime date={props.date} />
      </div>
  )
}
const prettyDate = (Component) => {
  return class prettifyDate extends React.Component {

    getDateDiff(dateFromData, DateTo = new Date()) {
      const DateFrom = dateFromData instanceof Date ? dateFromData : new Date(dateFromData);
      const DATEDIFF = (DateTo.getTime() - DateFrom.getTime());

      return {
        days: Math.floor(DATEDIFF / (24 * 60 * 60 * 1000)),
        hours: Math.floor(DATEDIFF / (60 * 60 * 1000)),
        minutes: Math.floor(DATEDIFF / (60 * 1000))
      };
    }

    prettyDateFunc(diffTime) {
      if (diffTime.days) {
        return `${diffTime.days} дней назад`;
      } else if (diffTime.hours) {
        return `${diffTime.hours} часов назад`;
      } else if (diffTime.minutes) {
        return `${diffTime.minutes} минут назад`;
      } else return null;
    }

    render () {
      const TIMEDIFF = this.getDateDiff(this.props.date);
      const PRETTYDATE = this.prettyDateFunc(TIMEDIFF);
      return <Component {...this.props} date={PRETTYDATE} />
    }
  }
};
const PrettyDateTime = prettyDate(DateTime);



function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
    },
  ]);

  return (
      <VideoList list={list} />
  );
}