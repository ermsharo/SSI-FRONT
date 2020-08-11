import React from 'react';
import HamburguerMenuAnimation from "react-hamburger-menu";
import styled from 'styled-components'





function CloseButton({CloseButton}) {
  return (
    <div>
   <HamburguerMenuAnimation
              isOpen={CloseButton}
              width={30}
              height={25}
              strokeWidth={4}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
     </div>   

  );
}

export default CloseButton;
