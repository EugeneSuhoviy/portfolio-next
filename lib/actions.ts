"use server";

import { z } from "zod";
import { ContactFormSchema } from "./schema";
import { Resend } from 'resend';
import ContactFormEmail from "@/emails/contact-form-email";

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
    const result = ContactFormSchema.safeParse(data);
    const apiKey = process.env.RESEND_API_KEY;

    console.log('apiKey', apiKey);


    if (result.error) {
        return { error: result.error.format() };
    }

    try {
        const { name, email, message } = result.data;
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['suhoviy.eugene@gmail.com'],
            subject: 'Hello world',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            react: ContactFormEmail({ name, email, message })
        });

        if (!data || error) {
            throw new Error('Failed to send message');
        }

        return { success: true };
    } catch (error) {
        console.log(error);
        return { error }
    }
} 