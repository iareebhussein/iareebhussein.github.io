import "../contact/Contact.css";
import Phone from "../../img/Phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs 
        .sendForm(
            "service_xepx9h5",
            "template_8al4n3i",
            formRef.current,
            "3RhYO9VhTuUnrysv7"
        )
        .then(
            (result) => {
                console.log(result.text);
                setDone(true)
            },
            (error) => {
                console.log(error.text);
            },
        )
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +92 345 3196981
                            </div>
                            <div className="c-info-item">
                            <img src={Email} alt="" className="c-icon" />
                            <a href="mailto:iareebhussein@gmail.com">iareebhussein@gmail.com</a>
                            </div>
                            <div className="c-info-item">
                            <img src={Address} alt="" className="c-icon" />
                            House No P-308 Block N Batha Town North Nazimabad Karachi
                            </div>                                                       
                        </div>
                    </div>
                <div className="c-right">
                    <p className="c-desc">
                            <b>What's your story?</b> Get in touch. Always available for freelancing if the right project comes along me.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name..." name="user_name"/>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject..." name="user_subject"/>
                            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email..." name="user_email"/>
                            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message..." name="message"></textarea>
                            <button>Submit</button>
                            {done && "Your message has been sent successfully...."}
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact