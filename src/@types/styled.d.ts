import 'styled-components';

type ColorsProps = {
  BLUE: string;
  WHITE: string;
  FONT_INPUT: string;
  ERROR: string;
  MEDIUM_GRAY: string;
  TEXT: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorsProps;
  }
}
