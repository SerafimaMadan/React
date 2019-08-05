import React, {Component} from 'react';

import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

export default class Store extends Component {


    constructor(props) {
        super(props);

        this.state = {
            view: "view_list",
        }
    };

    handleViewSwitch = () => {
        this.setState((state) => ({
            view: 'view_list' === state.view ? 'view_module' : 'view_list',
        }));
    };

    render() {

const {products}=this.props;
        const {view} = this.state;
        return (
            <div>
                <IconSwitch icon={view} onSwitch={this.handleViewSwitch}/>
                {view === 'view_list' && <ListView items={products}/>}
                {view === 'view_module' && <CardsView cards={products}/>}

            </div>
        );
    }


}