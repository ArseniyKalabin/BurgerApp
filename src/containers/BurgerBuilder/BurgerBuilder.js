import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES = {
    salad: 0.4,
    cheese: 0.5,
    bacon: 0.7,
    meat: 1.2
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    addIngredientHandler = (type) => {
        const currentPrice = this.state.totalPrice;
        const newPrice = currentPrice + INGREDIENTS_PRICES[type];

        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedIngredients[type] + 1;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasableHandler(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const currentPrice = this.state.totalPrice;
        let updatedIngredients = {
            ...this.state.ingredients
        };

        if (updatedIngredients[type] <= 0) {
            return;
        }
        const newPrice = currentPrice - INGREDIENTS_PRICES[type];
        updatedIngredients[type] = updatedIngredients[type] - 1;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchasableHandler(updatedIngredients);
    }

    updatePurchasableHandler = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(inKey => {
                return ingredients[inKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('Your order purchased!');
    }

    render() {
        const disabledButtons = {
            ...this.state.ingredients
        };

        for (let key in disabledButtons) {
            disabledButtons[key] = disabledButtons[key] <= 0;
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} closeModal={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        canlelPurchase={this.purchaseCancelHandler}
                        continuePurchase={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabledButtons={disabledButtons}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasingHandler}
                />
            </Aux>
        );
    };
};

export default BurgerBuilder;
