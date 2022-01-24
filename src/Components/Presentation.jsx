import React from 'react';
import styled from 'styled-components';
import ImagPresentation from '../images/presentation.png';

const PrensentCon = styled.div`
  padding-top: 30px;
  width:100%;
  height:768px;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${ImagPresentation});
  text-align: center;

  h1{
  font-size: 2rem;
  }
`;

const Presentation = () => {
  return (
      <PrensentCon>
        <h1>UI Presentation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </PrensentCon>
  );
};

export default Presentation;
