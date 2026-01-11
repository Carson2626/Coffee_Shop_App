import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'app_icons',     
  'app_icons.ttf'  
);

export default CustomIcon;