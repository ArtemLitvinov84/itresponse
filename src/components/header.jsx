import './../index.css'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="block_header header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <h2>IT Response</h2>
                    </div>
                    <div className="header__menu menu">
                        <div className="menu__list">
                            <div className="menu__item">
                            <NavLink to="about">About us</NavLink>
                            </div>
                            <div className="menu__item">
                            <NavLink to="news">News</NavLink>
                            </div>
                            <div className="menu__item">
                                <NavLink to="/">Social</NavLink>
                            </div>
                            <div className="menu__item">
                            <NavLink to="gallery">Gallery</NavLink>
                            </div>
                            <div className="menu__item">
                            <NavLink to="contacts">Contacts</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}