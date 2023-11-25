import {Dimensions, PixelRatio} from 'react-native';

const {width: W, height: H} = Dimensions.get('screen');
const pixelDensity = PixelRatio.get();

const metricsNumber = () => {
  const density = pixelDensity * 160;
  const x = Math.pow((W * pixelDensity) / density, 2);
  const y = Math.pow((H * pixelDensity) / density, 2);
  const screenInches = Math.sqrt(x + y) + 1.6;

  return screenInches;
};

export const scale = (number: number) => {
  const ratio = (metricsNumber() + pixelDensity) / 10;
  const value = number * Number(ratio.toFixed(1));

  return Number(value.toFixed(1));
};
