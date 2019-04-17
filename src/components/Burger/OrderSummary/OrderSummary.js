import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

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
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;

