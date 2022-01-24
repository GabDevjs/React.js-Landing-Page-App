import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { menuDate } from "../Data/MenuDate";

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
    background: transparent;
    backdrop-filter: blur(15px);
    transition: 0.6s ease-in-out;
    border-bottom: .1rem solid rgba(0, 0, 0, 0.02);

    @media (max-width: 1100px) {
      justify-content: space-between;
      height: 65px;
      background-color: #fff;
      padding: 0px 30px;
    }
  `;

    const Logo = styled.div`
    h1 {
      font-size: 1.3rem;
      font-weight: 500;
      color: #00b7ff;

      span {
        color: #000;
      }
    }
  `;

    const Menu = styled.div`
    display: flex;
    @media (max-width: 1100px) {
      display: none;
      position: absolute;
      top: 65px;
      left: 0px;
      background-color: #ffffff;
      border-bottom: 4px solid #1db096;
      width: 100%;
      padding: 0px;
      margin: 0px;
    }
  `;

    const MenuBar = styled.div`
    display: none;
    @media (max-width: 1100px) {
      display: flex;
      .menu-icon{
            cursor:pointer;
            float:right;
            padding:28px 20px;
            position:relative;
            user-select: none;
        }
        .menu-icon .nav-icon{
            background-color:#333333;
            display:block;
            height:2px;
            position:relative;
            transition: background 0.2s ease-out;
            width:18px;
        }
        .menu-icon .nav-icon:before,
        .menu-icon .nav-icon:after{
            background:#333;
            content:'';
            display:block;
            height:100%;
            position:absolute;
            transition:all ease-out 0.2s;
            width:100%;
        }
        .menu-icon .nav-icon:before{
            top:5px;
        }
        .menu-icon .nav-icon:after{
            top:-5px;
        }
        .menu-btn:checked ~ .menu-icon .nav-icon{
            background:transparent;
        }
        .menu-btn:checked ~ .menu-icon .nav-icon:before{
            transform: rotate(-45deg);
            top:0;
        }
        .menu-btn:checked ~ .menu-icon .nav-icon:after{
            transform: rotate(45deg);
            top:0;
        }
         .menu-btn{
            display:none;
        }
         .menu-btn:checked ~ .menu{
            display:block;
        }
    }
  `;

    const NavMenuLinks = styled(Link)`
    font-family: calibri;
    height: 40px;
    line-height: 43px;
    margin: 15px;
    padding: 0px 22px;
    display: flex;
    font-size: 0.9rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #000000;
    letter-spacing: 1px;
    border-radius: 3px;
    transition: 0.2s ease-in-out;

    &:hover {
      background-color: #00b7ff;
      color: #ffffff;
      box-shadow: 5px 10px 30px rgba(2, 238, 255, 0.336);
      transition: all ease 0.2s;
    }
    @media (max-width: 1100px) {
      width: 100%;
      height: 40px;
      justify-content: center;
      align-items: center;
      margin: 0px;
      padding: 25px;
      border: 1px solid rgba(38, 38, 38, 0.03);
    }
  `;

    const MenuResponsive = styled.div`
    display: flex;
    @media (max-width: 1100px) {
      display: block;
      width: 100%;
    }
  `;

    return (
        <Nav to='/'>
            <Logo>
                <h1 to='/'>
                    <span>Logo</span>.App
                </h1>
            </Logo>
            <MenuBar>
                <input type="checkbox" className="menu-btn" id="menu-btn" />
                <label className="menu-icon" for="menu-btn">
                    <span className="nav-icon"></span>
                </label>
            </MenuBar>
            <Menu>
                <MenuResponsive>
                    {menuDate.map((item, index) => (
                        <NavMenuLinks to={item.link} key={index}>
                            {item.title}
                        </NavMenuLinks>
                    ))}
                </MenuResponsive>
            </Menu>
        </Nav>
    );
};

export default Navbar;
