"use client"
import { Form, FormControl, FormField } from "../ui/form";
import { useForm } from 'react-hook-form';
import Tiptap from "../Tiptap";
import { Button } from "../ui/button";

export default function ResearchForm() {

    const form = useForm({
        defaultValues: {
            description: "",
        }
    })
    const onSubmit = (values: any, e: any) => {
        console.log(values);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormControl>
                            <Tiptap description={field.name} onclick={field.onChange} />
                        </FormControl>
                    )}
                />
            </form>
        </Form>
    )
}
