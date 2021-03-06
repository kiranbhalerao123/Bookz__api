import * as yup from 'yup'

export const LoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(3).max(30).required()
})

export const SignupSchema = LoginSchema.shape({
  name: yup.string().min(3).max(30).required()
})
