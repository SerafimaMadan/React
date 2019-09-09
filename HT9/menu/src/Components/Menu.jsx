import React from 'react';

import { NavLink} from 'react-router-dom';


function Menu() {
return (
           <nav className={"menu"}>
            <NavLink to="/"
                     activeClassName={"menu__item-active"}
                     exact
                     className={"menu__item"}>
                Главная
            </NavLink>
            <NavLink to="/drift"
                     activeClassName={"menu__item-active"}
                     className={"menu__item"}>
                Дрифт-такси
            </NavLink>
            <NavLink to={"/timeattack"}
                     activeClassName={"menu__item-active"}
                     className={"menu__item"}>
                Time attack
            </NavLink>
            <NavLink to={"/forza"}
                     activeClassName={"menu__item-active"}
                     className={"menu__item"}>
                Forza Karting
            </NavLink>
        </nav>

)}
export default Menu;