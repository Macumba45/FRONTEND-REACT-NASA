import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({

    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),

    password: Yup.string()
        .min(4, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Password is required'),
});


export const initialValues = {
    email: '',
    password: '',
};