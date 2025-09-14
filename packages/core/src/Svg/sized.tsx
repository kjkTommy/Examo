import {SvgProps} from 'react-native-svg';
import {ComponentType, FC, useMemo} from 'react';
import {DimensionValue, StyleSheet} from 'react-native';

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
