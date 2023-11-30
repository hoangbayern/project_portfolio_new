import { InputLabel as MuiInputLabel, TextFieldProps, TextField, InputAdornment } from '@mui/material';
import React from 'react';
import ErrorIcon from '@/components/Icon/ErrorIcon';

const AdminInput: React.FC<TextFieldProps & { label: string }> = ({
  label,
  ...props
}: TextFieldProps & { label: string }) => (
  <>
    <TextField
      size="small"
      {...props}
      FormHelperTextProps={{ sx: { marginX: 0, fontSize: '14px' } }}
      InputProps={{
        endAdornment: props.error ? (
          <InputAdornment position="end" style={{ marginRight: '10px' }}>
            <ErrorIcon />
          </InputAdornment>
        ) : (
          props?.inputProps?.endAdornment
        ),
      }}
    />
  </>
);

export default AdminInput;
