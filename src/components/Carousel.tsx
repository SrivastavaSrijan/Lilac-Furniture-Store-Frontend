import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from '@mui/icons-material';
import {
  Box,
  ButtonProps,
  Container,
  IconButton,
  MobileStepper,
  mobileStepperClasses,
  paperClasses,
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
  disablePeek?: boolean;
  theme?: ButtonProps['color'];
}

export const Carousel = ({
  children,
  theme = 'primary',
  disablePeek = false,
  slideSx = {},
}: ICarouselProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [shouldAutoplay, setAutoplay] = useState(true);
  const disablePadding = children.length === 1 || disablePeek;
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
      mb={-2}
    >
      <Stack
        pb={2}
        sx={
          disablePadding
            ? {}
            : {
                '[aria-colindex]': {
                  px: { xs: 5, md: 5 },
                  ml: { xs: -5, md: -5 },
                },
              }
        }
      >
        <AutoPlaySwipeableViews
          interval={
            shouldAutoplay && process.env.NODE_ENV !== 'development'
              ? 5000
              : 10e10
          }
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          aria-colindex={activeStep}
          aria-colcount={children.length}
          slideStyle={disablePadding ? {} : { paddingRight: '16px' }}
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
                color={theme}
                onClick={handleNext}
                disabled={activeStep === children.length - 1}
                sx={{ display: { xs: 'none', md: 'initial' } }}
              >
                <KeyboardArrowRightOutlined fontSize="inherit" />
              </IconButton>
            }
            backButton={
              <IconButton
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                color={theme}
                sx={{ display: { xs: 'none', md: 'initial' } }}
              >
                <KeyboardArrowLeftOutlined fontSize="inherit" />
              </IconButton>
            }
            sx={{
              bgcolor: 'transparent',
              [` .${mobileStepperClasses.dot}`]: {
                width: { xs: 16, md: 32 },
                height: { xs: 4, md: 4 },
                borderRadius: 0,
              },
              [` .${mobileStepperClasses.dotActive}`]: {
                bgcolor: `${theme}.main`,
              },
              [`&.${paperClasses.root}`]: {
                justifyContent: 'center',
              },
            }}
          />
        </Container>
      )}
    </Stack>
  );
};
