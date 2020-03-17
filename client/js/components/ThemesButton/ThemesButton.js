import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Text from '../../components/CustomText/CustomText';

const ThemesButton = ({theme, style, source}) => {
  console.log(source);
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Image
        style={{height: 40, width: 40, transform: [{translateY: 10}]}}
        resizeMode={'contain'}
        source={source}
      />
      <Text style={styles.label}>{theme}</Text>
    </TouchableOpacity>
  );
};

export default ThemesButton;
