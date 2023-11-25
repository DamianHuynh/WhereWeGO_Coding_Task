import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackIcon() {
  return (
    <Svg width={11} height={18} viewBox="0 0 11 18" fill="none">
      <Path
        d="M.747 9.604l7.605 7.602a.857.857 0 001.209 0 .852.852 0 000-1.207L2.559 9l7-6.998A.853.853 0 108.352.794L.746 8.396a.862.862 0 00.001 1.208z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default BackIcon;
