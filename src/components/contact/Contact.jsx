import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';;

const Contact = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tpi89oa', 'template_7u7g3tf', form.current, '98G2dG_6q6iwJwScH')
        .then((result) => {
            form.current.reset();
            alert('Message Send Successfully.')
        }, (error) => {
            alert('Something Went Wrong.')
        });
    };

    const sendWhatsApp = (event) => {
        event.preventDefault();
        let msg = "Hello there.";
        let phoneWithCountryCode = "+8107043082687";
          if (msg) {
            let url = "whatsapp://send?text=" + msg + "&phone=" + phoneWithCountryCode;
            window.open(url,'_blank');
          } else {
            alert("Please insert message to send");
          }
      };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>ite000527@athuman.com</h5>
                        <a href="mailto:ite000527@athuman.com"  target="_blank" rel= "noopener noreferrer">Send A Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Jameul Haque Jilan</h5>
                        <a href="https://m.me/jameulhaque.jilan"  target="_blank" rel= "noopener noreferrer">Send A Message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+8107043082687</h5>                        
                        <a href="#" onClick={(event)=>{sendWhatsApp(event);}}>Send A Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail} action="">
                    <input type="text" name="name" placeholder="Your Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>                    
                </form>
            </div>
        </section>
    );
}

export default Contact;