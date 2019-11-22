import React from 'react';
import { Spinner } from 'reactstrap';

export default function SpinnerFor() {

    return (
    <div className="d-flex justify-content-center">
        <Spinner color="danger" size="lg"/>
    </div>
    )
};