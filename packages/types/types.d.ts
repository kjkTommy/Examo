declare module '*.png' {
  const IMAGE_ID: number;
  export default IMAGE_ID;
}

declare module '*.jpg' {
  const IMAGE_ID: number;
  export default IMAGE_ID;
}

declare module '*.svg' {
  import type React from 'react';
  import type {SvgProps} from 'react-native-svg';

  interface Props extends SvgProps {
    secondColor?: string;
  }
  const content: React.FC<Props>;
  export default content;
}
