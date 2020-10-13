import React from 'react';
import c from './FormControl.module.scss';

export const Input = ({input, meta, ...props}) => {
  const hasError =  meta.error && meta.touched;
  return (
    <div className={c.formInput}>
      <input  {...input} {...props} autoComplete="off" className={c.input + ' ' + (hasError ? c.inputError : '')} maxLength='50'/>
      {hasError && <span className={c.errorMessage}>{meta.error}</span>}
    </div>
  )
}

export const Password = ({input, meta, ...props}) => {
  const hasError =  meta.error && meta.touched;

  return (
    <div className={c.formInput}>
      <input  {...input} {...props} autoComplete="off" type={props.types} className={c.input + ' ' + (hasError ? c.inputError : '')} maxLength='50'/>
      {hasError && <span className={c.errorMessage}>{meta.error}</span>}
    </div>
  )
}
