import React, {Fragment} from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';
import ServiceAddClassBased from './Components/ServiceAddClassBased';
import ServiceListClassBased from './Components/ServiceListClassBased';

function App() {
    return (
        <Fragment>
            <ServiceAdd />
            <ServiceList />
            <hr />
            <ServiceAddClassBased />
            <ServiceListClassBased />
        </Fragment>
    );
}

export default App;
