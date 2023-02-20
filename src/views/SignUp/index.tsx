import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Field, FieldProps, Formik } from "formik";
import NavBar from '../../components/NavBar';
import { setAuthenticatedToken } from "../../services/storage";
import {signup} from "../../services/api/auth";
import { validationSchema, initialValues } from "./constants";
import { MainFormContainer, Form, SignUpTitle, EmailContainer, PasswordContainer, LabelContainer, Label, Input, ButtonSignUpContainer, LinkLoginContainer, LinkLoginText, ButtonSignUp, LoginBackImg, Error } from "./styles"
import type { Props } from "./type"

const SignUp: FC = () => {
    const navigate = useNavigate();
    const handleSubmit = useCallback(
        async (values: Props) => {
        try {
            const token = await signup(values)

            if (token) {
                setAuthenticatedToken(token)
                navigate('/welcome')
            } else {
                alert('Wrong data');
            }

        } catch (error: any) {
            console.log(error)
        }
    },
        [navigate]
    );


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
                            <SignUpTitle>SignUp</SignUpTitle>
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
                            <LinkLoginContainer>
                                <LinkLoginText to="/login">If you are already SignUp, click here to login!</LinkLoginText>
                            </LinkLoginContainer>
                            <ButtonSignUpContainer>
                                <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
                            </ButtonSignUpContainer>
                        </Form>
                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    )


}

export default memo(SignUp);


