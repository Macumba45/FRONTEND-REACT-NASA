import { FC, memo, useCallback } from "react";
import { MainFormContainer, Form, SignUpTitle, EmailContainer, PasswordContainer, LabelContainer, Label, Input, ButtonSignUpContainer, LinkLoginContainer, LinkLoginText, ButtonSignUp, LoginBackImg, Error } from "./styles"
import { Props } from "./type"
import NavBar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import { initialValues } from "../Login/constants";
import { Field, FieldProps, Formik } from "formik";
import { validationSchema } from "./constants";
import { setAuthenticatedToken } from "../../services/storage";


const SignUp: FC<Props> = () => {


    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values: Props) => {
            try {
                const response = await fetch('http://localhost:8000/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: values.email,
                        password: values.password
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    setAuthenticatedToken(data)
                    navigate('/welcome')
                } else {
                    alert(response.statusText);
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


