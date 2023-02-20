import { FC, memo, useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import { getAuthenticatedToken } from "../../services/storage";
import { Container, CreateApodButton, FormApod, InputApod, LabelApod } from "./styles";
import { Props } from "./type";


const CreateApod: FC = () => {

    const [formValues, setFormValues] = useState<Props>({
        title: "",
        url: "",
        date: "",
    });

    const createApod = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        // Verifica si los campos de entrada están vacíos
        if (!formValues.title || !formValues.url || !formValues.date) {
            alert("Please fulfill all the fields");
            return;
        }

        try {
            const token = getAuthenticatedToken(); // Obtener el token de localStorage
            const response = await fetch('http://localhost:8000/apods/', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
                },
                body: JSON.stringify({
                    title: formValues.title,
                    url: formValues.url,
                    date: formValues.date
                })
            })

            if (response.ok) {
                const data = await response.json();
                setFormValues({ title: "", url: "", date: "" });
                alert("APOD created " + JSON.stringify(data));

            } else {
                alert(response.statusText);
            }

        } catch (error: any) {
            console.log(error)

        }

    }, [formValues])

    const handleInputChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value, }));
        }, []);


    return (

        <>
            <NavBar />

            <Container>

                <FormApod onSubmit={createApod}>

                    <LabelApod>Title:</LabelApod>
                    <InputApod
                        type="text"
                        value={formValues.title}
                        name="title"
                        onChange={handleInputChange}
                        placeholder="Insert Title"
                    />
                    <LabelApod>Url picture:</LabelApod>
                    <InputApod
                        type="text"
                        value={formValues.url}
                        name="url"
                        onChange={handleInputChange}
                        placeholder="Insert picture url"

                    />
                    <LabelApod>Date:</LabelApod>
                    <InputApod
                        type="text"
                        value={formValues.date}
                        name="date"
                        onChange={handleInputChange}
                        placeholder="Insert Date"

                    />

                </FormApod>

                <CreateApodButton type="submit">Create APOD</CreateApodButton>

            </Container>


        </>




    )
}

export default memo(CreateApod)
