import ContactForm from "@/components/contact-form";

export default function Contact() {

  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="container">
        <h1>Contact</h1>

        <ContactForm />
      </div>
    </div>  
  );
}
