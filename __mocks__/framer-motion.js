import React from 'react';

const createMotion = (Component) => {
  const Forwarded = React.forwardRef((props, ref) => {
    const {
      initial,
      animate,
      exit,
      whileHover,
      whileTap,
      whileInView,
      variants,
      viewport,
      transition,
      ...rest
    } = props;
    return <Component ref={ref} {...rest} />;
  });
  Forwarded.displayName = `Motion${typeof Component === 'string' ? Component : (Component.displayName || Component.name || 'Component')}`;
  return Forwarded;
};

const motionProxy = new Proxy(
  {},
  {
    get(_, prop) {
      return createMotion(prop);
    },
  }
);

export const AnimatePresence = ({ children }) => children;
export const motion = motionProxy;
export default motionProxy;
