import { MainFormContainer, LoginTitle, Form, EmailContainer, PasswordContainer, LabelContainer, Label, Input, LinkSignupContainer, LinkSignupText, ButtonLoginContainer, ButtonLogin, LoginBackImg, Error } from './styles'
import { FC, memo, useCallback } from "react";
import { Props } from "./type"
import NavBar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { Field, FieldProps, Formik } from 'formik';
import { validationSchema, initialValues } from './constants';
import { setAuthenticatedToken } from '../../services/storage';
import {login} from "../../services/api/auth";



const Login: FC = () => {
    const navigate = useNavigate();
    const handleSubmit = useCallback(async (values: Props) => {

        try {
            const token = await login(values)

            if (token) {
                setAuthenticatedToken(token)
                navigate('/welcome')
            } else {
                alert('Wrong data');
            }

        } catch (error: any) {
            console.log(error)

        }

    }, [navigate]);

    return (
        <>
            <NavBar />
            <LoginBackImg>
                <MainFormContainer>
                    <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                    >
                        <Form  >
                            <LoginTitle>SignIn</LoginTitle>
                            <Field name="email">
                                {({ field, meta }: FieldProps) => (
                                    <EmailContainer>
                                        <LabelContainer>
                                            <Label>Email* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            type="email"
                                            placeholder="Insert your email"
                                            autoComplete="email"
                                            {...field}
                                        />
                                        {!!meta?.error && <Error>{meta.error}</Error>}
                                    </EmailContainer>
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, meta }: FieldProps) => (
                                    <PasswordContainer>
                                        <LabelContainer>
                                            <Label>Password* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="Insert password"
                                            {...field}
                                        />
                                        {meta?.error && <Error>{meta.error}</Error>}
                                    </PasswordContainer>
                                )}
                            </Field>
                            <LinkSignupContainer>
                                <LinkSignupText to="/signUp">If you are not SignUp, click here!</LinkSignupText>
                            </LinkSignupContainer>
                            <ButtonLoginContainer>
                                <ButtonLogin type="submit" >Log in</ButtonLogin>
                            </ButtonLoginContainer>
                        </Form>
                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    )
}

export default memo(Login);





