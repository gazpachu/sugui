import { keyframes } from 'styled-components';

const animations = {
  fadeIn: keyframes`
    0% { opacity: 0; visibility: hidden; }
    1% { opacity: 0; visibility: visible; }
    100% { opacity: 1; visibility: visible; }
  `,
  fadeOut: keyframes`
    0% { opacity: 1; visibility: visible; }
    99% { opacity: 0; visibility: visible; }
    100% { opacity: 0; visibility: hidden; }
  `,
  bounceInLeft: keyframes`
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
      opacity: 0;
      visibility: visible;
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }

    75% { transform: translate3d(-10px, 0, 0); }

    90% { transform: translate3d(5px, 0, 0); }

    to { transform: translate3d(0, 0, 0); }
  `
};

export default animations;
