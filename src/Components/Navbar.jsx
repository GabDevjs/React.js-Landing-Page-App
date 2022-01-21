import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { menuDate } from '../Data/MenuDate';
import LogoImg from "../images/logo.png";

const Navbar = () => {
    const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: transparent;
    transition: 0.6s ease-in-out;
  `;

    const Logo = styled.div`
    img{
        width: 90px;
    }
  `;

    const Menu = styled.div`
    display: flex;
  `;

    const NavMenuLinks = styled(Link)`
    font-family: calibri;
	height:40px;
	line-height: 43px;
	margin: 3px;
	padding: 0px 22px;
	display: flex;
	font-size: 0.9rem;
	text-transform: uppercase;
	font-weight: 500;
	color:#000000;
    letter-spacing: 1px;
    border-radius: 3px;
    transition: 0.2s ease-in-out;

    &:hover{
    background-color: #00b7ff;
    color:#ffffff;
	box-shadow: 5px 10px 30px rgba(2, 238, 255, 0.336);
	transition: all ease 0.2s;
    }
  `;

    //Back
    const [nav, setnav] = useState(false);
    const changeBack = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    };
    window.addEventListener("scroll", changeBack);

    return (
        <Nav>
            <Logo >
                <img src={LogoImg} alt="" />
            </Logo>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <Menu>
                {menuDate.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </Menu>
        </Nav>
    );
};

export default Navbar;
