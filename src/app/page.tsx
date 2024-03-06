'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import {Button, Container, Stack, TextField} from "@mui/material";

type Inputs = {
    url: string
    firstName: string
    age: number
}

export default function App() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    console.log(watch("url")) // watch input value by passing the name of it

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <Stack spacing={2}>
                    <TextField
                        defaultValue="https://localhost:3000"
                        {...register("url")}
                        placeholder="Enter url"
                    />
                    <TextField
                        {...register("firstName", {required: true})}
                        placeholder="Enter First Name"
                    />
                    {errors.firstName && <span>This field is required</span>}
                    {/* include validation with required or other standard HTML validation rules */}
                    <TextField
                        type="number"
                        {...register("age", {required: true})}
                        placeholder="Enter age"
                    />
                    <input type="checkbox" />
                    {/* errors will return when field validation fails  */}
                    {errors.age && <span>This field is required</span>}
                    <Button type="submit" variant="contained">Submit</Button>
                </Stack>
            </form>
        </Container>
    )
}