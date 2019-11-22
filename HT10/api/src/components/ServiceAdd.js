import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';
import { Route, Link } from 'react-router-dom';
import { Form,  Label, Input, Button } from 'reactstrap';
import ButtonGroup from "reactstrap/es/ButtonGroup";

function ServiceAdd() {
    const {item, loading, error, currentId } = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(addService());
    };

    return (
        <Route  exact path={`/services/${currentId}`}>
            <Form className='form' onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input name='name' onChange={handleChange} value={item.name} />
                <Label>Cost</Label>
                <Input name='price' onChange={handleChange} value={item.price} />
                <Label>Description</Label>
                <Input name='content' onChange={handleChange} value={item.content} />
                <ButtonGroup className="buttonBox">
                    <Link className="link" exact to={`/services`}>Cancel</Link>
                    <Button type='submit' disabled={loading}>Save</Button>
                </ButtonGroup>
                {error && <p>Something went wrong try again</p>}
            </Form>

        </Route>

    );
}

export default ServiceAdd;