import React from 'react';
import { Alert, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Page404() {
    return (
    <div>
        <Alert color="danger" fade={false}>
            <h4 className="alert-heading">Ошибка 404</h4>
            <p className="mb-0">
                error 404
                Unknown page!!!
            </p>
        </Alert>
        <Button tag={Link} to="/" outline color="danger">Come back</Button>
        <Button outline color="success"><Spinner size="sm" color="success"/></Button>
    </div>
    )
}