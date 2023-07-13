import React from 'react';
import './animation.css';
import dog from '../header/dog.png'
const Animation = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="yap-dog-box">
      <img
        src={dog}
        className="yap-dog"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default Animation;
