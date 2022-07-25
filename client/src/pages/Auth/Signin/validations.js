import * as yup from "yup";

const validations = yup.object().shape({
    email: yup
        .string()
        .email('please enter a valid e-mail!')
        .required(''),
    password: yup
        .string()
        .min(5,'Your password must be at least 5 characters!')
        .required(''),
});

export default validations;