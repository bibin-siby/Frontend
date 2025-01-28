import * as React from 'react';
import Styles from './navbar.module.scss';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Login from '../../pages/login/Login';
import NavMenu from '../navMenu/NavMenu';





const Navbar = () => {
    

    return (
        <div className={Styles.Container}>
            <div className={Styles.logo}>
                <DeliveryDiningIcon className={Styles.icon} />
                <span>QuickBites</span>
            </div>
            <div className={Styles.searchbar}>
                <SearchIcon className={Styles.icon} />
                <input type="text" placeholder="Search.." />
            </div>
            <div className={Styles.links}>
                <div className={Styles.link}>
                    <NavMenu />
                </div>
                <div className={Styles.link}>
                    <Link to="/offers">
                        <div className={Styles.details}>
                            <LocalOfferIcon className={Styles.icon} />
                            <span className={Styles.title}>Offers</span>
                        </div>
                    </Link>
                </div>
                <div className={Styles.link}>
                    <Link to="/help">
                        <div className={Styles.details}>
                            <HelpIcon className={Styles.icon} />
                            <span className={Styles.title}>Help</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
