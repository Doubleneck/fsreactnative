import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary:  '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    appbarBackgroundColor: 'rgba(0, 0, 0, 0.85)',
    mainBackgroundColor: '#e1e4e8',
    componentBackgroundColor: 'white',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System', 
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};
  
export default theme;