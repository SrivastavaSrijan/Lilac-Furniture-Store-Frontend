import { motion, TargetAndTransition } from 'framer-motion';
import { CldImageProps } from 'next-cloudinary';

import { CloudImage } from '.';

interface IImageHoverProps extends CldImageProps {
  overlay: JSX.Element;
}

export const ImageHover = (props: IImageHoverProps) => {
  const hoverStyle: TargetAndTransition = {
    scale: 1.5,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)', // Adjust the values as needed
    zIndex: 1, // Ensure it's above the other elements
    transition: { type: 'spring' },
  };

  const overlayVariants = {
    hover: { opacity: 1, transition: { duration: 0.5 } },
    initial: { opacity: 0 },
  };

  return (
    <motion.div
      whileHover={hoverStyle}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        // Add perspective to allow for 3D transform
        perspective: 1000,
        // Set the transform-style property to preserve the 3D position of children
        transformStyle: 'preserve-3d',
      }}
    >
      <CloudImage {...props} />
      <motion.div
        initial="initial"
        whileHover="hover"
        variants={overlayVariants}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          // Ensure that the overlay is also transformed in 3D space
          transform: 'translateZ(0px)',
        }}
      >
        {props.overlay}
      </motion.div>
    </motion.div>
  );
};
