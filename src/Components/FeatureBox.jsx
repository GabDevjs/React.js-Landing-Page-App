import React from 'react';
import styled from 'styled-components';
import Props from 'prop-types';

const Box = styled.div`
  background-color: #ffffff;
  width:300px;
  height: 450px;
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 12px rgba(0,0,0,0.1);
  transition: 0.3s ease-in-out;
  position: relative;

  &:hover{
    box-shadow: 2px 2px 12px rgba(0,0,0,0.3);
  }
`;

const Img = styled.div`
  width: 100%;
  height: 60%;

  img{
    padding: 15px;
    width:100%;
    height: 100%;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 40%;
  background-color:#ffffff;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  p{
    margin: 0px;
    color:#000266a6;
    font-size: 1.1rem;
    font-family: calibri;
    display: block;
    display: -webkit-box;
    max-width: 80%;
    margin-top: 25px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &:hover{
      color:#000266;
    }
  }
`;

const FeatureBox = (Props) => {
  return (
    <Box>
      <Img>
        <img src={Props.image} />
      </Img>
      <Text>
        <h2>{Props.title}</h2>
        <p>lorem ipsum do it</p>
      </Text>
    </Box>
  );
};

export default FeatureBox;
