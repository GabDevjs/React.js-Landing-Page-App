import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import Back from '../images/background.png';

const Main = styled.div`
  width:100%;
  height:768px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${Back});

  @media (max-width:1190px){
    background-size: 1150px !important;
  }

  @media (max-width:970px){
    background-image: none !important;
  }
`;

const Name = styled.div`
  width: 500px;
	position: absolute;
  left: 22%;
	top: 50%;
	transform: translate(-22%,-50%);
  
  span{
    color: #00b7ff;
  }

  .details{
    color: #969696;
  }

  h1{
	font-size: 40px;
	margin:0px;
	letter-spacing: 2px;
	color:#000000;
  }

  @media (max-width:1190px){
    left: 50%;
		top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
  }

  @media (max-width:970px){
    margin: auto;
	}

  @media (max-width:600px){
    width: 60%;
  }
`;

const HomeButton = styled.div`
  width:110px;
	height: 40px;
	display: flex;
	justify-content: center;
  align-items: center;
  background-color: #00b7ff;
  border-radius: 10px;
	color:#ffffff;

  &:hover{
    background-color: #0099ff;
    transition: all ease 0.5s;
    box-shadow: 15px 10px 30px rgba(2, 238, 255, 0.336);
    color: #ffffff;
  }

  @media (max-width:1190px){
    margin: auto;
  }
`;

const Header = () => {
  return (
    <Main>
      <Navbar />
      <Name>
        <h1><span>Launch Tou App</span>Width Confidence and Creativety</h1>
        <p className='details'></p>
        <HomeButton>Download</HomeButton>
      </Name>
    </Main>
  )
};

export default Header;
