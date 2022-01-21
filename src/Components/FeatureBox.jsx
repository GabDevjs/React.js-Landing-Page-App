import React from 'react';
import Props from 'prop-types';

const FeatureBox = () => {
  return (
      <div className='a-box'>
        <div className='a-b-img'>
            <img src={Props.image}/>
        </div>
        <div className='s-b-text'>
            <h2>{Props.title}</h2>
            <p>lorem ipsum do it</p>
        </div>
      </div>
  );
};

export default FeatureBox;
