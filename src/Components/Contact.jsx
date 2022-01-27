import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
    background-color: #00b7ff;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    padding: 30px 0px;

    h3{
	font-size:2.5rem;
    margin:20px;
    color: #fff;
    }
`;

const ContactInput = styled.div`
    width:400px;
	height:50px;
	background-color:#FFFFFF;
	display:flex;
	justify-content: center;
	border-radius: 50px;
	box-shadow: 2px 2px 30px rgba(0,0,0,0.15);

    input{
	width:100%;
	background-color: transparent;
	border:none;
	outline: none;
	text-align: center;
	color:#242425;
    }

    a{
	width:200px;
	height:35px;
	background-color:#00b7ff;
	color:#FFFFFF;
	display: flex;
	font-size: 0.9rem;
	justify-content: center;
	align-items: center;
	margin: auto 10px;
	border-radius: 20px;
    font-weight: 500;
    transition: 0.4s ease-out;

    &:hover {
        background-color:#0099ff;
    }
    }

`;

const Contact = () => {
  return (
      <ContactContainer>
        <h3>Send Me Mail</h3>
        <ContactInput>
            <input type='email' placeholder='example@gmail.com'/>
            <a href='#'>Contact me</a>
        </ContactInput>
      </ContactContainer>
  );
};

export default Contact;
