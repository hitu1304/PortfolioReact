import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'




const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jlpx6wq', 'template_i5h93hl', form.current, '2_23uDfjaq-5sLpC8')
    // setMsg("Mensagem Enviada! Obrigado.")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>Get in touch</h5>
      <h2 className='text-light'>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>hiteshgendre2000@gmail.com</h5>
            <a href="mailto:hiteshgendre2000@gmail.com" >Send a message</a>
          </article>
          {/* <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Massenger</h4>
            <h5>Hitesh Gendre</h5>
            <a href="https://www.facebook.com/messages" target="_blank" rel="noopener noreferrer">Send a Message</a>
          </article> */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 7879566779</h5>
            <a href="https://wa.me/+917879566779" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your full name" required />
            <input type="email" name="email" placeholder="Your E-mail" required />
            <textarea name="message" rows="7" required placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact