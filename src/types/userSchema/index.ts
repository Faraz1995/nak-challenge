import * as yup from 'yup'
export const userSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  userName: yup
    .string()
    .required('Username is required')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/,
      'Username must be at least 6 characters long and contain both letters and numbers'
    ),
  email: yup.string().required('Email is required').email('Invalid email address'),
  phone: yup
    .string()
    .required('Phone is required')
    .matches(
      /^[0-9]{10,}$/,
      'Phone number must be at least 10 digits long and contain only numbers'
    ),
  status: yup.string().oneOf(['Active', 'Not Active']).nullable()
})
