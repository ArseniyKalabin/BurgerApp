import React, { Component } from 'react';
import styles from './OrderSummary.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    //This could be a functional component
    componentWillUpdate() {
        console.log('[orderSummary componentWillUpdate]');
    }
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(inKeys => {
                return (
                    <li key={inKeys}>
                        <span style={{ textTransform: 'capitalize' }}>{inKeys}</span>: {this.props.ingredients[inKeys]}
                    </li>
                );
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p className={styles.Bold}>Total Price: {this.props.price.toFixed(2)}</p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.canlelPurchase}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continuePurchase}>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;

