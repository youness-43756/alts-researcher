"use client"
import { Form, FormControl, FormField } from "../ui/form";
import { useForm } from 'react-hook-form';
import Tiptap from "../Tiptap";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResearchForm() {
    // const route = useRouter();
    // useEffect(() => {
    //     if (window.innerWidth < 1000) {
    //         route.push("/");
    //         return;
    //     }
    // }, []);

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
