import React, {Component} from 'react';

import FormList from './FormList';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            training: [],
            date: '',
            way: '',
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const training = [...this.state.training];

        training.push({
            date: this.state.date,
            way: this.state.way
        });

        this.setState({
            training,
            date: '',
            way: '',
        });
    };

    handleInputChange = (e) => {
        const input = e.target;
        const item = e.target.item;
        const value = input.value;

        this.setState({
            [item]: value
        })
    };

    addItem() {
        const product = {
            date: ` ${this.state.date}`,
            way: `${this.state.way}`,
        };
        const newProducts = [...this.state.training, product];
        this.setState({
            training: newProducts
        });
    }

    removeItem = date => {
        console.dir("removeItem ", date);
        let newProducts = this.state.training.filter(product => product.date !== date);
        this.setState({
            training: newProducts
        });
    };

    render() {

        console.dir("Form render");
        return (
            <React.Fragment>
                <h1>Учёт ваших тренировок</h1>
                <form className="contact-form-flex" onSubmit={this.props.handleFormSubmit}>
                    <div className="contact-form_input">
                        <label htmlFor="date">Date (DD.MM.YY)</label>
                        <input id="date" name="date" type="text"
                               defaultValue={this.state.date} onChange={this.props.handleInputChange}/>
                    </div>
                    <div className="contact-form_input">
                        <label htmlFor="number">Way km</label>
                        <input id="number" name="number"
                               type="text" defaultValue={this.state.way} onChange={this.props.handleInputChange}/>
                    </div>

                </form>
                <button onClick={() => this.addItem()}>ok!</button>
                <div>
                    <table id="cartList">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Way</th>
                            <th>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        <FormList training={this.state.training} onRemove={this.removeItem}/>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}


import './App.css';
import Form2 from "./Components/Form2";

function App() {
    return (
        <div className="App">
            <Form2/>
        </div>
    );
}

export default App;

class CartApp extends React.Component {
    render(){
        return(
            <Cart />
        )
    }
}

class Cart extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            products: [{
                id: Math.ceil(Math.random() * 1000000),
                name: `Product ${Math.ceil(Math.random() * 1000000)}`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }]
        }
    }

    addItem(){
        let id = Math.ceil(Math.random() * 1000000);
        let product = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        let newProducts = [...this.state.products, product];
        this.setState({
            products: newProducts
        });
    }

    removeItem = id =>{
        console.log("removeItem ", id);
        let newProducts = this.state.products.filter( product => product.id != id);
        this.setState({
            products: newProducts
        });
    }

    empty() {
        this.setState({
            products: []
        });
    }

    refresh() {
        this.setState({
            flag: this.state.flag
        });
    }

    render(){
        console.log("Cart render");
        return(
            <React.Fragment>
                <h1>Product Table</h1>
                <button onClick={() => this.addItem()}>Add new product</button> <button onClick={() => this.empty()}>Empty Cart</button> <button onClick={() => this.refresh()}>Refresh</button>
                <table id="cartList">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    <CartList products={this.state.products} onRemove={this.removeItem} />
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}

class CartList extends React.PureComponent{
    render(){
        let { products, onRemove } = this.props;
        console.log("CartList render ", products);
        return(
            <React.Fragment>
                {products.map( (product, i) => <CartItem product={product} key={i} onRemove={onRemove} />)}
            </React.Fragment>
        )
    }
}

class CartItem extends React.PureComponent{
    render(){
        let {product} = this.props;
        console.log("CartItem render", product)
        return(
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.qty}</td>
                <td><button onClick={() => this.props.onRemove(product.id)}>&#10008;</button></td>
            </tr>
        )
    }
}

ReactDOM.render(<CartApp />, document.getElementById('app'));
