import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CopyIcon = () => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        opacity="0.35"
        d="M7 19.8333V5.83334C7 3.90018 8.56683 2.33334 10.5 2.33334H16.3333L23.3333 9.33334V19.8333C23.3333 21.7665 21.7665 23.3333 19.8333 23.3333H10.5C8.56683 23.3333 7 21.7665 7 19.8333Z"
        fill="#0195B5"
      />
      <Path
        d="M16.3334 7.00001V2.33334L23.3334 9.33334H18.6667C17.3775 9.33334 16.3334 8.28918 16.3334 7.00001Z"
        fill="#0195B5"
      />
      <Path
        d="M10.5 23.3333C8.56679 23.3333 6.99996 21.7665 6.99996 19.8333V5.83334C5.71079 5.83334 4.66663 6.87751 4.66663 8.16668V22.1667C4.66663 24.0998 6.23346 25.6667 8.16663 25.6667H17.5C18.7891 25.6667 19.8333 24.6225 19.8333 23.3333H10.5Z"
        fill="#0195B5"
      />
    </Svg>
  );
};

export default CopyIcon;
