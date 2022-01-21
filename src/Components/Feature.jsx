import React from 'react';
import FeatureBox from './FeatureBox';
import FeatureImage from   '../images/feature_1.png';
import FeatureImage2 from   '../images/feature_2.png';
import FeatureImage3 from   '../images/feature_3.png';

const Feature = () => {
  return (
      <div id='features'>
        <div className='a-container'>
            <FeatureBox image={FeatureImage} title='Dovelopment Couser'/>
            <FeatureBox image={FeatureImage2} title='Mount Swing Services'/>
            <FeatureBox image={FeatureImage3} title='Usblity Interface'/>
        </div>
      </div>
  );
};

export default Feature;
