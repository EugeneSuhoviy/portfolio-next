"use client";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema } from "../lib/schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/actions";

type Input = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Input>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    const processForm: SubmitHandler<Input> = async data => {
        const result = await sendEmail(data);

        if (result?.error) {
            toast.error("Failed to send message");
            return;
        }

        toast.success("Message sent successfully");
        reset();
    }

    return (


        <section className="container">
            <form
                onSubmit={handleSubmit(processForm)}
                noValidate
            >


                <div className="mb-10">
                    <Input id="name" {...register("name")} placeholder="Name" />
                    {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                </div>

                <div className="mb-10">
                    <Input id="email" {...register("email")} placeholder="Email" />
                    {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                </div>

                <div className="mb-10">
                    <Textarea id="message" {...register("message")} placeholder="Message" />
                    {errors.message && <span className="text-red-600">{errors.message.message}</span>}
                </div>

                <Button type="submit" disabled={isSubmitting}>Submit</Button>
            </form>
        </section>
    );
}