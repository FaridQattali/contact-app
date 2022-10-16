import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';

interface Props extends TextStyle {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  lineHight?: number;
  textAlign?: 'center' | 'left' | 'right';
  color?: string;
  children: React.ReactNode;
}

const Text = ({
  fontFamily = 'IRANSans',
  fontSize = 17,
  fontWeight = '500',
  lineHeight = 26,
  textAlign = 'left',
  color = '#1C1C1C',
  children,
}: Props) => {
  return (
    <RNText
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        textAlign: textAlign,
        color: color,
      }}>
      {children}
    </RNText>
  );
};

export default Text;
