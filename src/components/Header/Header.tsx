import React from 'react';
// import Button from '../Button/Button';
import classes from './Header.module.css';
import { FaFacebook, FaDove, FaYoutube } from 'react-icons/fa';

function Header(props: any) {
    return (
        <div className={classes.Welcome}>
            <div className={classes.WelcomeGreet}>
                <p>Welcome to our online store!</p>
            </div>
            <div className={classes.WelcomeElement}>
                <p>Track Your Order</p>
                <p>Customer Care</p>
                <p>FAQ</p>
            </div>
            <div className={classes.IconBlack}>
                <FaFacebook />
                <FaDove />
                <FaYoutube />
            </div>
        </div>
    );
}

export default Header;