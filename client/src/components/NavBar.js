import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom"
import './style_components.css';


const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

  return (
    <Navbar className="navbar navbar-light" style={{ backgroundColor: '#F5F5DC' }}>
        <Container>
        <NavLink style={{ color: '#8B4513', fontWeight: 'lighter', fontSize: '30px' }} to={SHOP_ROUTE}>Магазин музыки</NavLink>
        {user.isAuth ?
            <Nav className="ms-auto" style={{color: '#8B4513'}}>
            <Button
                variant={"outline-secondary"}
                className="m-lg-2 custom-button2"
                onClick={() => navigate(ADMIN_ROUTE)}
            >
                <span className="custom-button-text">Админ панель</span>
            </Button>
            <Button
                variant={"outline-secondary"}              
                className="m-lg-2 custom-button2"
                onClick={() => logOut()}
            >
                <span className="custom-button-text">Выйти</span>
            </Button>
        </Nav>
        :
            <Nav className="ms-auto" style={{color: '#8B4513'}}>
                <Button variant={"outline-secondary"} className="custom-button2" onClick={() => navigate(LOGIN_ROUTE)}><span className="custom-button-text">Авторизация</span></Button>
            </Nav>
        }
        </Container>
    </Navbar>
  );
});

export default NavBar;