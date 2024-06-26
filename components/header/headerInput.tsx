"use client"
import { Form, FormControl, FormField } from "../ui/form";
import { useForm } from 'react-hook-form';
import { Input } from "../ui/input";
import { useContext } from "react";
import { SearchContext } from "@/context/searchContext";
import { usePathname } from "next/navigation";
import clsx from "clsx";


export default function HeaderInput() {
    const pathname = usePathname();
    const form = useForm({
        defaultValues: {
            text: "",
        }
    })
    const context = useContext(SearchContext);
    if (!context) {
        return;
    }
    const { setSearchField } = context;

    const onSubmit = (values: any) => {
        setSearchField(values.text);
    }
    return (
        <div className={clsx(pathname !== "/" && "hidden")}>
            <Form {...form}>
                <form onChange={form.handleSubmit(onSubmit)} onSubmit={(e) => e.preventDefault()}>
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormControl>
                                <Input placeholder="Search..." required {...field} className="md:h-10 h-9 md:w-80 w-60" />
                            </FormControl>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}
