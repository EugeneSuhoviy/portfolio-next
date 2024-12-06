interface ContactFormEmailsProps {  
    name: string;
    email: string;
    message: string;
}   

const ContactFormEmail: React.FC<ContactFormEmailsProps> = ({ name, email, message }) => (
    <div>
        <h1>Contact Form Email Composition</h1>
        <p>
            From <strong>{name}</strong> at <strong>{email}</strong>
        </p>
        <h2>Message:</h2>
        <p>{message}</p>
    </div>
)

export default ContactFormEmail;
