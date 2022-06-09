import React from 'react';
import Link from '../UI/Link/Link'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <div className={styles.header_top}>
                <Link
                    className={styles.header_link}
                    href="https://www.google.com/maps/place/6+Avenue+Jean+Mermoz,+06230+Saint-Jean-Cap-Ferrat,+Frankrike/@43.6886612,7.3341514,15z/data=!4m5!3m4!1s0x12cddb6a6cb7771b:0xfa75dbaa2f1d4a65!8m2!3d43.6886359!4d7.3340714?shorturl=1">
                    6 Avenue Jean Mermoz, 06230 Saint-Jean-Cap-Ferrat, France
                </Link>
                <Link
                    className={styles.header_link}
                    href="tel:+330493768754">
                    +330493768754
                </Link>
            </div>
        </header>
    );
};

export default Header;