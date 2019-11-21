import React, { useCallback } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, cancelService} from '../actions/actionCreators';

function ServiceAdd() {
    const item = useSelector(state => state.serviceAdd);
    const dispatch = useDispatch();

    const handleChange = useCallback(evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceField(name, value));
    }, []);

    const handleSubmit = useCallback(evt => {
        evt.preventDefault();
        dispatch(addService(item.id, item.name, item.price));
    }, [item.id, item.name, item.price]);

    const handleCancel = useCallback(evt => {
        evt.preventDefault();
        dispatch(cancelService());
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' type="text" onChange={handleChange} value={item.name}/>
            <input name='price' type="text" onChange={handleChange} value={item.price}/>
            <button type='submit'>Save</button>
            {item.id && <button type='submit' onClick={handleCancel}>Cancel</button>}
        </form>
    );
}

export default ServiceAdd;