import React from 'react';
// import Button from '../Button/Button';
import classes from './Header.module.css';
import { FaFacebook, FaDove, FaYoutube } from 'react-icons/fa';
import {MdPets} from 'react-icons/md';
import {BsPerson, BsHeart,BsFillCartFill} from 'react-icons/bs';

function Header(props: any) {
    return (
        <>
            <div className={classes.Welcome}>
                <div className={classes.WelcomeGreet}>
                    <p className={classes.Paragraph}>Welcome to our online store!</p>
                </div>
                <div className={classes.WelcomeElement}>
                    <p className={classes.Paragraph}>Track Your Order</p>
                    <p className={classes.Paragraph}>Customer Care</p>
                    <p className={classes.Paragraph}>FAQ</p>
                </div>
                <div className={classes.WelcomeIcon}>
                    <FaFacebook className={classes.IconBlack} />
                    <FaDove className={classes.IconBlack} />
                    <FaYoutube className={classes.IconBlack} />
                </div>
            </div>
            <div className={classes.Search}>
                <div className={classes.Logo}>
                    <MdPets className={classes.IconWhite} fontSize={35}/>
                    <p>PetPuzzy</p>
                </div>
                <div className={classes.IconWhite}>
                    <input type="text" placeholder='Search products...' />
                </div>
                <div className={classes.SearchIcon}>
                    <BsPerson className={classes.IconWhite} />
                    <BsHeart className={classes.IconWhite} />
                    <BsFillCartFill className={classes.IconWhite} />
                </div>
            </div>
        </>
    );
}

export default Header;