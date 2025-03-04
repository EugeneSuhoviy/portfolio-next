import ContactForm from "@/components/contact-form";

export default function Contact() {

  return (
    <section className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-xl mx-auto">
      <div className="container">
        <h1 className="text-3xl font-bold text-center">Contact</h1>
        <ContactForm />
      </div>
    </section>
  );
}
