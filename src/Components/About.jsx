import React from 'react';
import Props from 'prop-types';

const About = () => {
  return (
      <div id='about'>
        <div className='about-image'>
            <img src={Props.image} alt=''/>
        </div>
        <div className='about-text'>
            <h2>{Props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur efficitur varius. Praesent venenatis laoreet nibh a laoreet. Praesent maximus at arcu a placerat. Quisque sit amet dolor suscipit, tempus leo in, elementum lectus. Vivamus dictum lacus imperdiet tellus interdum finibus sed quis arcu. Donec cursus vehicula tellus nec sollicitudin. Quisque in dolor condimentum, tincidunt dolor sed, tincidunt purus. Praesent finibus sapien vitae purus congue tristique. Sed at iaculis mauris. Cras interdum libero et erat laoreet, vel suscipit ante vestibulum. Sed magna nunc, mattis a pellentesque quis, pharetra nec est. Nullam finibus ipsum a tortor scelerisque aliquet. Nullam sagittis porttitor ipsum.
            </p>
            <button>{Props.button}</button>
        </div>
      </div>
  );
};

export default About;
