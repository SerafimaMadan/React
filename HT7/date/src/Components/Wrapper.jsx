import React, {Component} from 'react';
import Popular from "./Popular";
import New from "./New";


export default function Wrapped(Component) {
    return class extends Component {


        render() {
            if (this.props.views >= 1000)
                return (
                    <Popular><Component {...this.props}/></Popular>
                );
            if (this.props.views < 100)
                return (
                    <New><Component {...this.props}/></New>
                );
            return <Component {...this.props} />
        }
    }
}