import React from 'react';



const Toolbar = (props) => {

    const [ filters, selected, onSelectFilter ] = props;

    const renderFilters = filters;
    {

        return (
            <div className="toolbar">
                {
                    props.filters.map((filter, i) => {
                        const className = filter === selected ? "filter-selected" : "filter";
                        return (<button className={className} key={`filter-${i}`}
                                onClick={() => onSelectFilter(filter)}>
                                {filter}
                            </button>
                        );
                    })
                }
            </div>
        );
    };
    return (
        <div className="toolbar">
            {renderFilters(filter)}
        </div>
    );
};


export default Toolbar;