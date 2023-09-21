import { TextFieldProps, TextField, InputAdornment } from '@mui/material';
import React from 'react';
import ErrorIcon from '@/components/Icon/ErrorIcon';

const AdminInput: React.FC<TextFieldProps & { label: string }> = ({
  ...props
}: TextFieldProps & { label: string }) => (
  <>
    <TextField
      size="medium"
      {...props}
      FormHelperTextProps={{ sx: { marginX: 0, fontSize: '14px', height: "14px", color: 'white' } }}
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
