/* eslint-disable no-control-regex */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Yup from 'yup'

const REGEX = {
  EMAIL:
    /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  // eslint-disable-next-line no-useless-escape
  EMAIL_LOGIN: /^[a-zA-Z0-9]+(\.)?([\w\'\!\#\$\%\&\*\+\-\/\=\?\^\`\{\|\}\(\)\~])*[a-zA-Z0-9\@]*([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]{1,30}$/,
}

export const LoginFormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Nhập số điện thoại hợp lệ')
    .required('Số điện thoại là bắt buộc')
    .min(8, 'Số điện thoại phải bao gồm 8 - 10 chuỗi số'),
  password: Yup.string()
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải có chữ cái viết hoa')
    .matches(/\d/, 'Mật khẩu phải có một số')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Mật khẩu phải có một ký tự đặc biệt')
    .min(6, ({ min }) => 'Mật khẩu phải có ít nhất 6 ký tự')
    .required('Mật khẩu là bắt buộc'),
})

export const RegisterFormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Nhập số điện thoại hợp lệ')
    .required('Số điện thoại là bắt buộc')
    .min(8, 'Số điện thoại phải bao gồm 8 - 10 chuỗi số'),
  // name: Yup.string()
  //   .matches(/(\w.).+/, 'Enter at least 1 names')
  //   .required('Name is required'),

  // // phone_Number: Yup.string()
  // //   .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Nhập số điện thoại hợp lệ')
  // //   .required('Số điện thoại là bắt buộc'),

  // email: Yup.string()
  //   .email('Please enter valid email')
  //   .matches(REGEX.EMAIL, {
  //     message: 'Email must be at least 6 characters and include @ and period, no flowers!',
  //   })
  //   .min(6, 'Email Too Short! Email must be at least 6 characters.')
  //   .max(100, 'Email Too Long!')
  //   .required('Enter Email'),

  password: Yup.string()
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải có chữ cái viết hoa')
    .matches(/\d/, 'Mật khẩu phải có một số')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Mật khẩu phải có một ký tự đặc biệt')
    .min(8, ({ min }) => 'Mật khẩu phải có ít nhất 8 ký tự')
    .required('Mật khẩu là bắt buộc'),
})

export const ForgotPassFormSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Nhập số điện thoại hợp lệ')
    .required('Số điện thoại là bắt buộc'),
  // password: Yup.string()
  //   .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải có chữ cái viết hoa')
  //   .matches(/\d/, 'Mật khẩu phải có một số')
  //   .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Mật khẩu phải có một ký tự đặc biệt')
  //   .min(6, ({ min }) => 'Mật khẩu phải có ít nhất 8 ký tự')
  //   .required('Mật khẩu là bắt buộc'),
})

export const ResetPassFormSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải có chữ cái viết hoa')
    .matches(/\d/, 'Mật khẩu phải có một số')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Mật khẩu phải có một ký tự đặc biệt')
    .min(6, ({ min }) => 'Mật khẩu phải có ít nhất 8 ký tự')
    .required('Mật khẩu là bắt buộc'),
  confirmPassword: Yup.string()
    .matches(/\w*[A-Z]\w*/, 'Mật khẩu phải có chữ cái viết hoa')
    .matches(/\d/, 'Mật khẩu phải có một số')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Mật khẩu phải có một ký tự đặc biệt')
    .min(6, ({ min }) => 'Mật khẩu phải có ít nhất 8 ký tự')
    .required('Mật khẩu là bắt buộc'),
})

export const CreationJobsFromSchema = Yup.object().shape({})