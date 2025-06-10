import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import variance from '../../../../../tools/hoc/variance';

type TextWithDividerProps = {
  description: string;
};

export default observer(function DividerWithText(props: TextWithDividerProps) {
  const {description} = props;
  return (
    <Container>
      <Divider />
      <Description>{description}</Description>
      <Divider />
    </Container>
  );
});

const Container = variance(View)(() => ({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const Divider = variance(View)(() => ({
  root: {
    backgroundColor: '#000000',
    flex: 1,
    height: 1,
  },
}));
const Description = variance(Text)(() => ({
  root: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    // color: theme.palette.textAdditional2,
    textAlign: 'center',
    paddingHorizontal: 8,
  },
}));
