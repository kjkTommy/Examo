import type {ComponentType, FC} from 'react';
import React, {useMemo} from 'react';
import type {DimensionValue} from 'react-native';
import {StyleSheet} from 'react-native';
import type {SvgProps} from 'react-native-svg';

// noinspection JSSuspiciousNameCombination
export default function sized(
  Icon: ComponentType<SvgProps>,
  width: number,
  height = width
): FC<SvgProps> {
  return (props) => {
    const {style: _style, ...rest} = props;
    const style = useMemo(() => StyleSheet.flatten([{width, height}, _style]) ?? {}, [_style]);
    return (
      <Icon
        style={style}
        width={filter(style.width, width)}
        height={filter(style.height, height)}
        {...rest}
      />
    );
  };
}

function filter(_: DimensionValue | undefined, fallback: number): number | string {
  if (typeof _ === 'number' || typeof _ === 'string') {
    return _;
  }
  return fallback;
}
