import { useState } from "react";
import imagem from "../../assets/contato.jpg";
import "./contato.css";

import emailjs from '@emailjs/browser';

export default function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [message, setMessage] = useState('')
  
    function sendEmail(e: { preventDefault: () => void; }) {
      e.preventDefault();
  
      if (name === '' || email === '' || assunto === '' || message === '') {
        alert("Preencha todos os campos");
        return;
      }
  
      const templateParams = {
        from_name: name,
        message: message,
        assunto: assunto,
        email: email
      }
  
      emailjs.send("service_y5gogh9", "template_tqz1yvc", templateParams, "aIkikFekUbol46g9p")
        .then((response) => {
          alert("EMAIL ENVIADO FOI SUCESSO!!!")
          console.log("EMAIL ENVIADO", response.status, response.text)
          setName('')
          setEmail('')
          setAssunto('')
          setMessage('')
        }, (err) => {
          console.log("ERRO: ", err)
        })
    }

    return (
        <div className="conteinar-contato">
            <div className="contato-img">
                <img
                    src={imagem}
                    alt="Imagem relacionada à área de TI"
                />
            </div>

            <div className="contato-form">
                <div className='contato-titulo'>CONTATO</div>
                <div className='contato-linha'></div>
                <form className='contato-formulario' onSubmit={sendEmail}>
                    <p>Nome do Completo</p>
                    <input
                        className='input'
                        type='text'
                        placeholder='Digite seu nome completo'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <p>Email</p>
                    <input
                        className='input'
                        type='text'
                        placeholder='Digite seu email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <p>Assunto</p>
                    <input
                        className='input'
                        type='text'
                        placeholder='Assunto da mensagem...'
                        onChange={(e) => setAssunto(e.target.value)}
                        value={assunto}
                    />
                    <p>Mensagem</p>
                    <textarea
                        className='textarea'
                        placeholder='Digite sua mensagem...'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />
                    <input className='button' type='submit' />
                </form>

            </div>

        </div>
    )
}
