import {Platform} from 'react-native';

const iOSDevices = Platform.OS === 'ios';

const appConstants = {
  iOSDevices,
};

export default appConstants;
