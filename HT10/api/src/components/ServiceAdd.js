import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService } from '../actions/actionCreators';
import { Route, Link } from 'react-router-dom';

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
        <Route  path={`/services/${currentId}`}>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' onChange={handleChange} value={item.name} />
                <label>Cost</label>
                <input name='price' onChange={handleChange} value={item.price} />
                <label>Description</label>
                <input name='content' onChange={handleChange} value={item.content} />
                <div className="buttonBox">
                    <Link className="link" exact to={`/services`}>Cancel</Link>
                    <button type='submit' disabled={loading}>Save</button>
                </div>
                {error && <p>Something went wrong try again</p>}
            </form>

        </Route>

    );
}

export default ServiceAdd;