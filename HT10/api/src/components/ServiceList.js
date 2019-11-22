import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService, fetchServices, currentId, editService} from '../actions/actionCreators';
import {Route, Link} from 'react-router-dom';
import SpinnerFor from "./SpinerFor";

function ServiceList(props) {
    const {items, loading, error} = useSelector(state => state.serviceList);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchServices())
    }, [dispatch]);

    const handleRemove = id => {
        dispatch(removeService(id));
    };

    const editRemove = (id) => {
        dispatch(currentId(id));
        dispatch(editService());
    };

    if (loading) {
        return <p><SpinnerFor/></p>;
    }

    if (error) {
        return <p>Something went wrong try again</p>;
    }

    return (
        <Route exact path='/services'>
            <ul>
                {items.map(o => (
                    <li key={o.id}>
                        {o.name} {o.price}
                        <Link className="link"  to={`/services/${o.id}`}
                              onClick={() => editRemove(o.id)}>&#9998;
                        </Link>
                        <button onClick={() => handleRemove(o.id)}>✕</button>
                    </li>
                ))}
            </ul>
        </Route>

    );
}

export default ServiceList