import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Box,
  Container,
  IconButton,
  MobileStepper,
  mobileStepperClasses,
  Stack,
  SxProps,
} from '@mui/material';
import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay, bindKeyboard } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(bindKeyboard(SwipeableViews));

interface ICarouselProps {
  children: JSX.Element[];
  slideSx?: SxProps;
}

export const Carousel = ({ children, slideSx = {} }: ICarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shouldAutoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  const handleTouchStart = () => {
    setAutoplay(false);
  };

  const handleTouchEnd = () => {
    setAutoplay(true);
  };

  return (
    <Stack
      flexGrow={1}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Stack
        sx={{
          '[aria-colindex]': {
            px: { xs: 2, md: 5 },
          },
          '[aria-colindex="0"]': {
            pl: 0,
          },
        }}
      >
        <AutoPlaySwipeableViews
          interval={shouldAutoplay ? 5000 : 10e10}
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          aria-colindex={activeStep}
          aria-colcount={children.length}
          slideStyle={{ padding: 8 }}
        >
          {children.map((child) => (
            <Box height="100%" width="100%" key={child.key} sx={{ ...slideSx }}>
              {child}
            </Box>
          ))}
        </AutoPlaySwipeableViews>
      </Stack>
      {children.length && (
        <Container maxWidth="md">
          <MobileStepper
            steps={children.length}
            position="static"
            activeStep={activeStep}
            nextButton={
              <IconButton
                size="small"
                color="primary"
                onClick={handleNext}
                disabled={activeStep === children.length - 1}
              >
                <KeyboardArrowRight />
              </IconButton>
            }
            backButton={
              <IconButton
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                color="primary"
              >
                <KeyboardArrowLeft />
              </IconButton>
            }
            sx={{
              bgcolor: 'transparent',
              [` .${mobileStepperClasses.dotActive}`]: {
                bgcolor: 'primary.main',
              },
            }}
          />
        </Container>
      )}
    </Stack>
  );
};
