import React, {Fragment} from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';

function App() {
    return (
        <Fragment>
            <ServiceAdd/>
            <ServiceList/>
        </Fragment>
    );
}

export default App;
