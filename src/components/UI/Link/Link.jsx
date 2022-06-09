import React from 'react';
import styles from './Link.module.scss';
const Link = ({children, ...props}) => {
    return (
        <a className={styles.link} { ...props }>{ children }</a>
    );
};

export default Link;