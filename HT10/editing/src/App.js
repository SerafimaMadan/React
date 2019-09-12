import React from 'react';
import ServiceAdd from './Components/ServiceAdd';
import ServiceList from './Components/ServiceList';
import ServiceListClassBased from './Components/ServiceListClassBased';
import ServiceAddClassBased from "./Components/ServiceAddClassBased";

function App() {
  return (
      <>
        <ServiceAdd />
        <ServiceList />
        <hr />
        <ServiceAddClassBased />
        <ServiceListClassBased />
      </>
  );
}

export default App;
