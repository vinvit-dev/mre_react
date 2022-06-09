import React from 'react';
import styles from './BlackButton.module.scss';
const BlackButton = ({children, ...props}) => {
    return (
        <button className={styles.btn} { ...props }>{ children }</button>
    );
};

export default BlackButton;