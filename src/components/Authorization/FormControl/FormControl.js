import React from 'react';
import c from './FormControl.module.scss';
import eye from "../../../assets/images/eye.png";

export const Input = ({input, meta, ...props}) => {
  const hasError =  meta.error && meta.touched;
  return (
    <div className={c.formInput}>
      <input  {...input} {...props} autoComplete="off" className={c.input + ' ' + (hasError ? c.inputError : '')}/>
      {hasError && <span className={c.errorMessage}>{meta.error}</span>}
    </div>
  )
}

export const Password = ({input, meta, ...props}) => {
  const hasError =  meta.error && meta.touched;




  const showPassword = () => {
    // if(props.type === 'password'){
    //   props.type = 'text';
    // } else {
    //   props.type = 'password';
    // }
    // console.log(props.type)
  }


  return (
    <div className={c.formInput}>
      <input  {...input} {...props} autoComplete="off" className={c.input + ' ' + (hasError ? c.inputError : '')} />
      <span className='passwordEye' onClick={() => showPassword()}>
        <img src={eye} alt=""/>
      </span>
      {hasError && <span className={c.errorMessage}>{meta.error}</span>}
    </div>
  )
}