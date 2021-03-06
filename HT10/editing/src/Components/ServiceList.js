import React, { useCallback } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService} from '../actions/actionCreators';

function ServiceList() {
    const items = useSelector(state => state.serviceList);
    const dispatch = useDispatch();

    const handleRemove = useCallback( id => {
        dispatch(removeService(id));
    }, [dispatch]);
    const handleEdit = useCallback( (item) => {
        dispatch(editService(item));
    }, [dispatch]);
    return (
        <ul>
            {items.map(o => (
                <li key={o.id}>
                    {o.name} {o.price}
                    <button onClick={() => handleEdit(o)}>&#9998;</button>
                    <button onClick={() => handleRemove(o.id)}>✕</button>
                </li>
            ))}
        </ul>
    )
}

export default ServiceList