import React, { Component } from "react";

import FormItem from './FormItem';

export default class FormList extends Component{


    render(){
        const { training, onRemove } = this.props;
        console.dir("FormList render ", training);

        return(
            <React.Fragment>
                {training.map( (product, i) =>
                    <FormItem product={product} key={i} onRemove={onRemove} />)}
            </React.Fragment>
        )
    }
}