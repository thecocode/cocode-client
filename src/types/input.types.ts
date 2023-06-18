import { InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export interface Input {
  name: string;
  disabled?: boolean;
  error?: string;
  labelTitle?: string;
  labelAttributes?: LabelHTMLAttributes<HTMLLabelElement>;
  inputAttributes?: InputHTMLAttributes<HTMLInputElement>;
}

export interface Label extends LabelHTMLAttributes<HTMLLabelElement> {
  labelTitle: string;
  disabled?: boolean;
  error?: string;
}
