import { inputBaseClasses, TextField, TextFieldProps } from '@mui/material';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';

interface IQuantityTextFieldProps {
  id: string;
  quantity: number;
  handleEdit: (
    id: string,
    value: number,
  ) => (ev: MouseEvent | KeyboardEvent) => Promise<any>;
  rest?: TextFieldProps;
}
export const QuantityTextField = ({
  id,
  quantity,
  handleEdit,
  rest = {},
}: IQuantityTextFieldProps) => {
  const [value, setValue] = useState<number>(quantity);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(quantity);
  }, [quantity]);

  return (
    <TextField
      inputRef={inputRef}
      type="number"
      autoComplete="off"
      value={value}
      onChange={(ev) => setValue(+ev.target.value)}
      onKeyDown={(ev) => {
        if (ev.code === 'Enter' && value && !Number.isNaN(value)) {
          ev.preventDefault();
          handleEdit(id, value)(ev);
        }
      }}
      sx={{
        width: '2ch',
        [`& .${inputBaseClasses.input}`]: {
          textAlign: 'center',
          py: 0.25,
          fontSize: 14,
        },
      }}
      variant="standard"
      {...rest}
    />
  );
};
