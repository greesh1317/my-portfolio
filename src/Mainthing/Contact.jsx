import {motion} from "framer-motion";
import { Style } from "./Styles";

const contacts = [
    {
        label: "Email",
        href: "mailto:solasagreeshmadivyasree@gmail.com"
    },
    {
        label: "GitHub",
        href: "https://github.com/greesh1317"
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/solasa-greeshma-divya-sree-a88033344/"
    }
];

function Contact(){
    return(
        <motion.section
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                ...Style,
                alignItems: "center",
                textAlign: "center",
                //gap:"80px",
            }}
        >
            <motion.h2>Contact</motion.h2>
            <motion.p>
                Let's connect! Feel free to reach out through any of the platforms below.
            </motion.p>
            {contacts.map((contact)=>(
                <motion.a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contact.href}
                    style={{
                        textDecoration: "none",
                        color: "#111",
                        padding: "8px 18px",
                        //...Style,
                        border: "2px solid #111",
                        borderRadius: "8px",
                        marginTop: "16px",
                        width: "fit-content",//"140px",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        textAlign: "center",
                    }}
                    whileHover={{
                        scale: 1.05,
                        background: "#111",
                        color: "#fff",
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    {contact.label}
                </motion.a>
            ))}
        </motion.section>
    );
}
export default Contact;