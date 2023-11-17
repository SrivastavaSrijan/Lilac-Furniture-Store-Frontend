import { Typography } from '@mui/material';
import React from 'react';
import { useTimer } from 'react-timer-hook';

interface ICountdownProps {
  expiryTimestamp: Date;
  onExpire: () => void;
  text: string;
}
export const Countdown = ({
  expiryTimestamp,
  onExpire,
  text,
}: ICountdownProps) => {
  const { seconds } = useTimer({ expiryTimestamp, onExpire });
  return seconds === 0 ? (
    <></>
  ) : (
    <>
      <Typography variant="caption" color="gray" my={-1.5}>
        {text.replace('$SECONDS', seconds.toString())}
      </Typography>
    </>
  );
};
