"use client"
import { Form, FormControl, FormField } from "../ui/form";
import { useForm } from 'react-hook-form';
import { Input } from "../ui/input";
import { SearchContext } from "@/context/searchContext";
import { useContext } from "react";

export default function FilterContainer() {
    const context = useContext(SearchContext);
    if (!context) {
        return;
    }
    const { setSearchField } = context;

    const form = useForm({
        defaultValues: {
            description: "",
        }
    })
    const onSubmit = (values: any, e: any) => {
        e.preventDefault();
        setSearchField(values.description)
    }
    return (
        <section className="flex items-center gap-6 md:mb-4 mb-2 md:mt-0 mt-1 p-1 border-b">
            <div>View</div>
            <div className="grow">
                <Form {...form}>
                    <form onChange={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormControl>
                                    <Input placeholder="Search...." {...field} className="max-w-xs float-right" />
                                </FormControl>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </section>
    )
}
