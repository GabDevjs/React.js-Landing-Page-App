import React from 'react';
import styled from 'styled-components';
import Props from 'prop-types';

const AboutC = styled.div`
  margin-top:100px ;
  width:100%;
  height: 120vh;
  background-color:#f3fdff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 5% 0px 5%;
  position: relative;
`;

const AboutImg = styled.div`
  width: 50%;

  img{
  width: 600px;
  }
`;

const AboutText = styled.div`
  width: 45%;
  color: #fff;
  list-style: circle;

  h2{
	  font-size: 2rem;
	  color:#00b7ff;
    font-weight: 500;
    margin: 0px;
	  padding: 0px;
  }

  p{
    width: 80%;
	  font-size: 1.2rem;
	  color:#272727;
  }

  button{
    margin-top: 20px;
	  width: 140px;
	  height: 45px;
	  border-radius: 10px;
	  border: none;
    outline: none;
    color: #ffffff;
	  background-color:#00b7ff;

    &:hover{
      background-color: rgb(0, 132, 255);
      transition: all ease 0.3s;
      box-shadow: 10px 10px 30px rgba(2, 238, 255, 0.336);
      color: #ffffff;
    }
  }
`;

const About = (Props) => {
  return (
      <AboutC>
        <AboutImg>
            <img src={Props.image} alt=''/>
        </AboutImg>
        <AboutText>
            <h2>{Props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur efficitur varius. Praesent venenatis laoreet nibh a laoreet. Praesent maximus at arcu a placerat. Quisque sit amet dolor suscipit, tempus leo in, elementum lectus. Vivamus dictum lacus imperdiet tellus interdum finibus sed quis arcu. Donec cursus vehicula tellus nec sollicitudin. Quisque in dolor condimentum, tincidunt dolor sed, tincidunt purus.
            </p>
            <button>{Props.button}</button>
        </AboutText>
      </AboutC>
  );
};

export default About;
