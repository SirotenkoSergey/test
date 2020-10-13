export const required = (value) => {
  if (value) return undefined;
  return 'Required';
}

export const maxLengthControl = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
}

export const email = value => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
}

export const passwordsMustMatch = (value, allValues) => {
  debugger;
  if (value !== allValues.newPassword) {
    return 'Passwords do not match'
  } else {
    return undefined
  }
}

// export const newPassword = (value) => {
//   // 'The password must contain at least three character categories among the following: Uppercase characters (A-Z) Lowercase characters (a-z) Digits (0-9)'
//   if (value.length < 6){
//     return 'errorNewPassword'
//   }
//   return undefined

// }

