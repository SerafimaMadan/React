import React  from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {

    const {filters, selected, onSelectFilter} = props;


    return filters.map((filter) => {

        return (

            <div className="toolbar" key={filter}>
                <button
                    className={filter === selected ? "filter-selected" : "filter"}
                    onClick={() => onSelectFilter(filter)}>
                    {filter}
                </button>
            </div>
        );
    });


};
Toolbar.propTypes = {
    onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;