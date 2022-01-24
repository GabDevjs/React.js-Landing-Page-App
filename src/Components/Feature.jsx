import React from 'react';
import styled from 'styled-components';
import FeatureBox from './FeatureBox';
import FeatureImage from '../images/feature_1.png';
import FeatureImage2 from '../images/feature_2.png';
import FeatureImage3 from '../images/feature_3.png';

const FeaturesC = styled.div`
  width:100%;
  height:100vh;
  box-sizing: border-box;
  font-family: calibri;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px ;
  background-color: #ffffff;

`;

const ContainerA = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Feature = () => {
  return (
    <FeaturesC>
      <ContainerA>
        <FeatureBox image={FeatureImage} title='Dovelopment Couser' />
        <FeatureBox image={FeatureImage2} title='Mount Swing Services' />
        <FeatureBox image={FeatureImage3} title='Usblity Interface' />
      </ContainerA>
    </FeaturesC>
  );
};

export default Feature;
