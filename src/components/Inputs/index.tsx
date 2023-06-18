import { TextareaHTMLAttributes } from 'react';
import { Input as IInput, Label as ILabel } from '../../types';

export function Label({ disabled, error, labelTitle, ...props }: ILabel) {
  return (
    <label
      {...props}
      htmlFor={labelTitle}
      className={`text-sm mb-2 ${(() => {
        if (disabled) {
          return 'text-disabled-gray';
        } else if (error) {
          return 'text-error';
        }
        return 'text-current';
      })()}`}
    >
      {labelTitle}
    </label>
  );
}

export function Input({
  labelTitle,
  name,
  error,
  disabled,
  labelAttributes,
  inputAttributes,
}: IInput) {
  return (
    <div className='flex flex-col'>
      {labelTitle ? (
        <Label labelTitle={labelTitle} disabled={disabled} error={error} {...labelAttributes} />
      ) : null}
      <input
        {...inputAttributes}
        name={name}
        id={labelTitle}
        disabled={disabled}
        className={`input-basic border border-solid transition-colors ${(() => {
          if (disabled) {
            return 'border-disabled-input';
          } else if (error) {
            return 'border-error';
          }
          return 'border-transparent focus:border-current';
        })()}`}
      />
      {error && !disabled ? (
        <span className='text-error mt-1 text-xs font-semibold'>{error}</span>
      ) : null}
    </div>
  );
}

interface ITextArea extends Omit<IInput, 'inputAttributes'> {
  textAreaAttributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export function TextArea({
  labelTitle,
  name,
  error,
  disabled,
  labelAttributes,
  textAreaAttributes,
}: ITextArea) {
  return (
    <div className='flex flex-col'>
      {labelTitle ? (
        <Label labelTitle={labelTitle} disabled={disabled} error={error} {...labelAttributes} />
      ) : null}
      <textarea
        {...textAreaAttributes}
        name={name}
        id={labelTitle}
        disabled={disabled}
        className={`input-basic border border-solid transition-colors resize-none ${(() => {
          if (disabled) {
            return 'border-disabled-input';
          } else if (error) {
            return 'border-error';
          }
          return 'border-transparent focus:border-current';
        })()}`}
      />
      {error && !disabled ? (
        <span className='text-error mt-1 text-xs font-semibold'>{error}</span>
      ) : null}
    </div>
  );
}
