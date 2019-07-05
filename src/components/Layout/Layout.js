import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { TLSSocket } from 'tls';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    toggleSideDrawerHandler = () => {
        this.setState(
            (prevState) => {
                return { showSideDrawer: !prevState.showSideDrawer };
            });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.showSideDrawerHandler} />
                <main className={styles.Container}>
                    {this.props.children}
                </main>
            </Aux >
        );
    }
}

export default Layout;
