import React from 'react';
import styles from './OrderSummary.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map(inKeys => {
            return (
                <li key={inKeys}>
                    <span style={{ textTransform: 'capitalize' }}>{inKeys}</span>: {props.ingredients[inKeys]}
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
            <p className={styles.Bold}>Total Price: {props.price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.canlelPurchase}>CANCEL</Button>
            <Button btnType='Success' clicked={props.continuePurchase}>CONTINUE</Button>
        </Aux>
    );
};

export default orderSummary;

