import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function AddIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.541 10.892h-9.433V1.458a1.108 1.108 0 10-2.216 0v9.434H1.458s0 0 0 0a1.108 1.108 0 100 2.216h9.434v9.434a1.108 1.108 0 102.216 0v-9.434h9.434a1.108 1.108 0 100-2.216z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.3}
      />
    </Svg>
  );
}

export default AddIcon;
