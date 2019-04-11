import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import styles from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <div>Header, sideDrawer, Backdrop</div>
        <main className={styles.Container}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
