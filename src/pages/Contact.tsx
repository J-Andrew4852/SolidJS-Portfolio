import { Component, createSignal, createEffect } from "solid-js";
import styles from "../Contact.module.css"


// Define the type for emailjs
interface EmailJS {
    send: (
      serviceID: string,
      templateID: string,
      templateParams: any
    ) => Promise<any>;
    init: (userID: string) => void;
}
  
declare global {
    interface Window {
      emailjs: EmailJS;
    }
}

const Contact: Component = () => {

    createEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://cdn.emailjs.com/dist/email.min.js";
        document.body.appendChild(script);
    
        script.onload = () => {
            // Initialize EmailJS once the script is loaded
            window.emailjs.init("63oLOTu9T6-59X0ls"); // Public ID
        };
    
        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    });
    
    const handleSubmit = (event: Event) => {
        event.preventDefault();
        // Perform form submission and other actions here
    
        // Example: Sending an email using EmailJS
        window.emailjs.send("service_k8qfzqa", "template_k4kptj8", {
            name: name(),
            email: email(),
            subject: subject(),
            message: message(),
        }).then(
            (response) => {
                // console.log("Email sent successfully:", response);
                alert("Email Sent Successfully!")
                // You can handle success here, e.g., show a success message to the user
            },
            (error) => {
                console.error("Failed to send email:", error);
                // You can handle errors here, e.g., show an error message to the user
            }
        );
    };

    const [name, setName] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [subject, setSubject] = createSignal("");
    const [message, setMessage] = createSignal("");

    return (
        <div class={styles.contactPage}>
            <h2>Contact Me</h2>
            <div class={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        placeholder="Full Name"
                        type="text"
                        required // HTML5 attribute for required field
                        value={name()}
                        oninput={((e) => setName((e.target as HTMLInputElement).value))}
                        />
                    </div>

                    <div>
                        <input
                        placeholder="Your Email Address"
                        type="email"
                        required // HTML5 attribute for required field
                        value={email()}
                        oninput={((e) => setEmail((e.target as HTMLInputElement).value))}
                        />
                    </div>

                    <div>
                        <input
                        placeholder="What's The Topic?"
                        type="text"
                        required // HTML5 attribute for required field
                        value={subject()}
                        oninput={(e) => setSubject((e.target as HTMLInputElement).value)}
                        />
                    </div>

                    <div>
                        <textarea
                        placeholder="Your Message..."
                        rows={4}
                        required // HTML5 attribute for required field
                        value={message()}
                        oninput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
                        />
                    </div>
                    <div class={styles.submitBtnContainer}>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;