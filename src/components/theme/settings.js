import mixins from './mixins';
import animations from './animations';

export default {
  mixins,
  animations,

  // Use http://chir.ag/projects/name-that-color for new names
  colors: {
    primary: '#E60000',
    secondary: '#3A3A3A',
    green: '#428600',
    red: '#BD0000',
    maroon: '#990000',
    redViolet: '#9C2AA0',
    redVioletLight: '#CD94CF',
    redVioletLighter: '#E6CAE7',
    aubergine: '#5E2750',
    aubergineLight: '#AE93A7',
    aubergineLighter: '#D7C9D3',
    aquaBlue: '#00B0CA',
    aquaBlueLight: '#7FD7E4',
    aquaBlueLighter: '#BFEBF2',
    turquoise: '#007C92',
    turquoiseLight: '#7FBDC8',
    turquoiseLighter: '#BFDEE4',
    springGreen: '#A8B400',
    springGreenLight: '#D3D97F',
    springGreenLighter: '#E9ECBF',
    lemonYellow: '#FECB00',
    lemonYellowLight: '#FEE57F',
    lemonYellowLighter: '#FFF2BF',
    freshOrange: '#E89700',
    freshOrangeLight: '#F3CB7F',
    freshOrangeLighter: '#F9E5BF',
    white: 'white',
    wildSand: '#F4F4F4',
    mercury: '#E5E5E5',
    alto: '#DBDBDB',
    worryingSatin: '#CCCCCC',
    silver: '#BFBFBF',
    porcelain: '#AFAFAF',
    silverChalice: '#9E9E9E',
    gray: '#7F7F7F',
    abbey: '#4A4D4E',
    mineShaft: '#333333',
    black: '#000'
  },

  typography: {
    footNote: {
      fontSize: '14px',
      lineHeight: '18px'
    }
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
