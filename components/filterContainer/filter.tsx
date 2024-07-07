"use client"
import { Form, FormControl, FormField } from "../ui/form";
import { useForm } from 'react-hook-form';
import { Input } from "../ui/input";
import { SearchContext } from "@/context/searchContext";
import { useContext } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function FilterContainer({ staticClassName }: { staticClassName: string }) {
    const form = useForm({
        defaultValues: {
            description: "",
        }
    })
    const context = useContext(SearchContext);
    if (!context) {
        return;
    }
    const { setSearchField, setView, view } = context;

    const onSubmit = (values: any, e: any) => {
        e.preventDefault();
        setSearchField(values.description)
    }

    return (
        <section className={staticClassName}>
            <Select onValueChange={(e) => setView(e)} value={view}>
                <SelectTrigger className="w-fit shadow-sm focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="View" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                </SelectContent>
            </Select>

            <div className="grow">
                <Form {...form}>
                    <form onChange={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormControl>
                                    <Input
                                        placeholder="Search coins" {...field}
                                        className="px-4 max-w-sm float-right shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0" />
                                </FormControl>
                            )}
                        />
                    </form>
                </Form>
            </div>
        </section>
    )
}
