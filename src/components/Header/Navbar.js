import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import img from '/Users/karanchauhan/Development/Personal Projects/Amazon-Clone/emporium/src/components/Header/Emporium.png';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div className='header'>
            <Link to='/'>
                <img src={img} className='header_logo' alt=""/>
            </Link>

            <div className='header_search'>
                <input
                className='header_searchInput'
                type='text' />
                <SearchIcon 
                className='header_searchIcon'/>
            </div>


            <div className='header_nav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Hello Guest
                    </span>
                    <span className='header_optionLineTwo'>
                        Sign In
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Returns
                    </span>
                    <span className='header_optionLineTwo'>
                        Orders
                    </span>
                </div>

                <div className='header_option'>
                    <span className='header_optionLineOne'>
                        Your
                    </span>
                    <span className='header_optionLineTwo'>
                        Prime
                    </span>
                </div>
            <Link to='/checkout'>
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon />
                    <span className= 'header_optionLineTwo header_basketCount'>0</span>
                </div>
            </Link>


            </div>
        </div>
    )
}