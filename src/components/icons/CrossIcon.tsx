import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CrossIcon = () => {
  return (
    <Svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 2L2 11"
        stroke="#3F3E3E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 2L11 11"
        stroke="#3F3E3E"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default CrossIcon;
