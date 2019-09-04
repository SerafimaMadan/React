import React, {Component} from 'react';

import moment from 'moment';

export default class Clocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            zone: '',
            time: moment()
        };
    }

//функция для посекундного отсчёта
    componentDidMount() {
         this.interval = setInterval(function () {
            state.time = moment();
            self.setState({time: self.state.time})
        }, 1000);
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    };
    handleZoneChange = (event) => {
        this.setState({
            zone: event.target.value,
        })
    };


    render() {
        const {name, zone, time} = this.state;
        return (
            <div className="w3-container">
                <h3>Мировые часы</h3>

                <div>
                    <h5>Текущие дата и время:{time.format('DD.MM.YY HH:mm:ss')}</h5>
                    <span>Название</span>
                    <input
                        type="text"
                        placeholder="Город"
                        onChange={this.handleNameChange}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder="Зона"
                        onChange={this.handleZoneChange}
                        value={zone}
                    />
                    <button>Добавить</button>
                </div>
                
            </div>
        )
    }
}