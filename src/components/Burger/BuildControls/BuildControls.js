import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const burgerControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current Price: <span className={styles.Bold}>{props.price.toFixed(2)}</span></p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.addIngredient(ctrl.type)}
                removed={() => props.removeIngredient(ctrl.type)}
                disabled={props.disabledButtons[ctrl.type]}
            />
        ))}
        <button
            className={styles.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default burgerControls;