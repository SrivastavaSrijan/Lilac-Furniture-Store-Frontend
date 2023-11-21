import { TextField, TextFieldProps } from '@mui/material';
import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';

interface ITextProps<T extends FieldValues> extends TextFieldProps<'filled'> {
  control: Control<T>;
  name: Path<T>;
  errors: FieldErrors<T>;
}
export const Text = <T extends FieldValues>({
  control,
  name,
  errors,
  ...props
}: ITextProps<T>) => {
  const {
    field: { ref, ...field },
  } = useController({ control, name });

  return (
    <TextField
      error={!!errors?.[name]?.message}
      helperText={errors?.[name] && errors[name]?.message?.toString()}
      inputRef={ref}
      {...field}
      {...props}
    />
  );
};
