import { InputLabel, styled } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React from 'react';

const LabelCustom = styled(InputLabel)({
  fontWeight: 400,
  fontSize: '14px',
  fontStyle: 'normal',
  lineHeight: 'normal',
  paddingBottom: '8px',
});

type TypeProp = {
  label?: string;
  placeholder?: string;
  onChange?: (event: any) => void;
  onPaste?: (event: any) => void;
  value?: string | undefined;
  sx?: object;
};

const CustomTextArea = styled(TextareaAutosize)({
  width: '38rem',
  borderRadius: '8px',
  borderColor: 'solid 1px teal',
  padding: '12px',
  background: 'none',
});

export default function AdminTextArea(props: TypeProp) {
  const { placeholder, label, onChange, onPaste, value, ...other } = props;
  return (
    <>
      <LabelCustom htmlFor="input-live" className="block">
        {label}
      </LabelCustom>
      <CustomTextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        minRows={13}
        onPaste={onPaste}
        {...other}
      />
    </>
  );
}
