import React from 'react';

type StyleMap = Record<string, React.CSSProperties>;

type PropsExtension<Styles extends StyleMap> = Partial<
  Record<Exclude<keyof Styles, 'root'>, boolean>
>;

function variance<ComponentProps extends Record<string, any>>(
  Component: React.ComponentType<ComponentProps>
) {
  return function <Styles extends StyleMap>(getStyles: () => Styles) {
    const styles = getStyles();

    return function (props: ComponentProps & PropsExtension<Styles>) {
      const baseStyle = styles.root || {};

      const additionalStyles = Object.keys(styles)
        .filter((key) => key !== 'root')
        .filter((key) => props[key as keyof PropsExtension<Styles>])
        .map((key) => styles[key as keyof Styles]);

      const combinedStyle = Object.assign({}, baseStyle, ...additionalStyles);

      return <Component {...props} style={{...combinedStyle, ...props.style}} />;
    };
  };
}

export default variance;
