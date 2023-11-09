import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

interface ITextProps<T extends FieldValues> extends TextFieldProps<'filled'> {
  control: Control<T>;
  name: Path<T>;
}
export const Text = <T extends FieldValues>({
  control,
  name,
  ...props
}: ITextProps<T>) => {
  const {
    field: { ref, ...field },
  } = useController({ control, name });

  return <TextField inputRef={ref} {...field} {...props} />;
};
