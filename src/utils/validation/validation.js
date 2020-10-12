export const required = (value) => {
  if(value) return undefined;
  return 'Required';
}

export const maxLengthControl = (maxLength) => (value) => {
  if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}

export const email = value => {
  if(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
    return 'Invalid email address';
  }
  return undefined;
}
