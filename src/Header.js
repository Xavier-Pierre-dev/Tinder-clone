import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {

    const history = useHistory();
    

    return (
        <div className="header">
            {backButton ? (
                // <Link to="/">
                // cette implémentation permet de revenir sur la page précédente au niveu de l'application mais il est aussi possible de le faire en dur avec link 
                // en revanche il y aura plus de modification a faire si on change les liens du sites.
                    <IconButton onClick={()=>history.replace(backButton)}>
                        <ArrowBackIosIcon className="header__icon" fontSize="large"></ArrowBackIosIcon>
                    </IconButton>
                // </Link>
            ):(
                <IconButton>
                <PersonIcon className="header__icon" fontSize="large"></PersonIcon>
                </IconButton>
            )}

            <Link to="/">
                <IconButton>
                <img className="header__logo" src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg" alt="tinder logo"></img>
                </IconButton>
            </Link>
            <Link to="/chat">
                <IconButton>
                <ForumIcon className="header__icon" fontSize="large"></ForumIcon>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
