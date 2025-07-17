"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader } from 'lucide-react';

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { subjects } from "@/constants";
import { Textarea } from "./ui/textarea";
import { createCompanion } from "@/lib/actions/companion.actions";
// import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

import { useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: 'Companion is required.' }),
    subject: z.string().min(1, { message: 'Subject is required.' }),
    topic: z.string().min(1, { message: 'Topic is required.' }),
    voice: z.string().min(1, { message: 'Voice is required.' }),
    style: z.string().min(1, { message: 'Style is required.' }),
    duration: z.number().min(1, { message: 'Duration is required.' })
})


const CompanionForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            subject: '',
            topic: '',
            voice: '',
            style: '',
            duration: 3,
        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true); // Start loading

        try {
            const companion = await createCompanion(values);

            if (companion) {
                router.push(`/companions/${companion.id}`); // ✅ use backticks
            } else {
                console.log("Failed to create companion");
                router.push("/");
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Companion name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input capitalize">
                                        <SelectValue placeholder="Select the subject" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject) => (
                                            <SelectItem
                                                value={subject}
                                                key={subject} >
                                                {subject}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should the companion help with?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Ex. Derivates & Integrals"
                                    {...field}
                                    className="input"
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select the voice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem
                                            value='male'>
                                            male
                                        </SelectItem>
                                        <SelectItem
                                            value='female'>
                                            female
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="input ">
                                        <SelectValue placeholder="Select the style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem
                                            value='formal'>
                                            formal
                                        </SelectItem>
                                        <SelectItem
                                            value='casual'>
                                            casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated session duration (in minutes)</FormLabel>
                            {/* <p className="mt-2 text-base">3 minutes</p> */}
                            <p className="text-sm text-muted-foreground">Fixed for current billing plan.</p>
                            <FormControl>
                                <Input
                                    type="number"
                                    {...field}
                                    value={3}
                                    disabled
                                    className="input opacity-50 cursor-not-allowed"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? (
                        <>
                            <Loader className="mr-2 h-4 w-4 animate-spin" /> Building...
                        </>
                    ) : (
                        "Build Your Companion"
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default CompanionForm;